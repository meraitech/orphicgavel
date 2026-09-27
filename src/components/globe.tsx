"use client";

import { useReducedMotion } from "@/lib/motion";
import { observeVisibility } from "@/lib/visibility";
import { globeColors } from "@/lib/color";
import { INVESTMENTS, PRODUCTS } from "@/data/portfolio";
import createGlobe from "cobe";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Member = {
  handle: string;
  location: [number, number];
  initials: string;
  /** Square logo path; empty string means "not ready" → monogram. */
  logo: string;
};

// Single source: portfolio data. Locations in the data file are temporary
// spread placeholders so all labels stay visible.
const MEMBERS: Member[] = [...PRODUCTS, ...INVESTMENTS].map(
  ({ handle, location, initials, logo }) => ({
    handle,
    location,
    initials,
    logo,
  })
);

const GLOBE_R = 0.8;
const MARKER_ELEVATION = 0.0;
const SPIN = 0.0035;
const THETA = 0.25;
const MIN_LABEL_GAP = 0.13;

type Projected = { x: number; y: number; front: number; visible: boolean };

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function latLonTo3D([lat, lon]: [number, number]): [number, number, number] {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latRad);
  return [-cosLat * Math.cos(lonRad), Math.sin(latRad), cosLat * Math.sin(lonRad)];
}

function project(
  location: [number, number],
  phi: number,
  theta: number
): Projected {
  const dir = latLonTo3D(location);
  const r = GLOBE_R + MARKER_ELEVATION;
  const p: [number, number, number] = [dir[0] * r, dir[1] * r, dir[2] * r];
  const cx = Math.cos(theta);
  const cy = Math.cos(phi);
  const sx = Math.sin(theta);
  const sy = Math.sin(phi);
  const rx = cy * p[0] + sy * p[2];
  const ry = sy * sx * p[0] + cx * p[1] - cy * sx * p[2];
  const rz = -sy * cx * p[0] + sx * p[1] + cy * cx * p[2];
  return {
    x: (rx + 1) / 2,
    y: (-ry + 1) / 2,
    front: rz / r,
    visible: rz > -0.05 * r,
  };
}

export function Globe({ className }: { className?: string }): ReactNode {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mounted = useIsMounted();
  const [labels, setLabels] = useState<Projected[]>(() =>
    MEMBERS.map(() => ({ x: 0.5, y: 0.5, front: -1, visible: false }))
  );
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const rTarget = useRef(0);
  const rCurrent = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || !mounted) return;

    let width = wrap.offsetWidth;
    let phi = 0;
    let frame = 0;
    let running = false;

    const onResize = (): void => {
      width = wrap.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 1,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: THETA,
      dark: 1,
      diffuse: 2.0,
      mapSamples: 20000,
      mapBrightness: 1,
      baseColor: globeColors().baseColor,
      markerColor: globeColors().markerColor,
      glowColor: globeColors().glowColor,
      markers: [],
    });

    const tick = (): void => {
      if (pointerInteracting.current === null && !prefersReducedMotion) {
        phi += SPIN;
      }
      rCurrent.current += (rTarget.current - rCurrent.current) * 0.1;
      const renderPhi = phi + rCurrent.current;
      globe.update({ phi: renderPhi, width: width * 2, height: width * 2 });

      const projected = MEMBERS.map((c) =>
        project(c.location, renderPhi, THETA)
      );
      const shown: Projected[] = [];
      const next = projected.map((p) => {
        if (!p.visible) return p;
        const tooClose = shown.some(
          (s) => Math.hypot(s.x - p.x, s.y - p.y) < MIN_LABEL_GAP
        );
        if (tooClose) return { ...p, visible: false };
        shown.push(p);
        return p;
      });
      setLabels(next);
      if (running) frame = requestAnimationFrame(tick);
    };

    const startLoop = (): void => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const stopLoop = (): void => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const unobserve = observeVisibility(canvas, (active) => {
      if (active) startLoop();
      else stopLoop();
    });

    return () => {
      stopLoop();
      window.removeEventListener("resize", onResize);
      unobserve();
      globe.destroy();
    };
  }, [prefersReducedMotion, mounted]);

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>): void => {
    pointerInteracting.current = e.clientX - pointerMovement.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>): void => {
    if (pointerInteracting.current === null) return;
    const delta = e.clientX - pointerInteracting.current;
    pointerMovement.current = delta;
    rTarget.current = delta / 200;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLCanvasElement>): void => {
    pointerInteracting.current = null;
    e.currentTarget.style.cursor = "grab";
  };

  return (
    <div ref={wrapRef} className={`relative ${className ?? ""}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="h-full w-full cursor-grab touch-none"
        style={{ aspectRatio: "1 / 1" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />
      {MEMBERS.map((member, i) => {
        const pos = labels[i] ?? {
          x: 0.5,
          y: 0.5,
          front: -1,
          visible: false,
        };
        const facing = smoothstep(-0.05, 0.25, pos.front);
        const opacity = pos.visible ? facing : 0;
        const blur = (1 - facing) * 6;
        return (
          <div
            key={member.handle}
            className="pointer-events-none absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center"
            style={{
              left: `${pos.x * 100}%`,
              top: `${pos.y * 100}%`,
              opacity,
              filter: `blur(${blur}px)`,
            }}
          >
            <span className="bg-muted border-border text-foreground relative z-2 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-sm border-2 font-mono text-xs font-semibold shadow-sm sm:h-11 sm:w-11">
              {member.logo ? (
                <Image
                  src={member.logo}
                  alt={`${member.handle} logo`}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              ) : (
                member.initials
              )}
            </span>
            <span className="border-border bg-background/90 text-foreground relative -left-2 hidden rounded-sm border-2 px-2.5 py-1 font-mono text-xs font-medium tracking-tight shadow-sm backdrop-blur-sm sm:inline-block">
              {member.handle}
            </span>
          </div>
        );
      })}
    </div>
  );
}
