"use client";

import { Globe } from "@/components/globe";
import { WIDTHS } from "@/components/ui/tokens";
import {
  EYEBROW_TEXT,
  HERO_LEAD_CENTER,
  HERO_TITLE_CENTER,
} from "@/components/ui/tokens";
import { useReducedMotion } from "@/lib/motion";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.4, 0, 0.2, 1] as const;

export function Creators(): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const item: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0 } } }
    : {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
    };

  return (
    <section className="flex min-h-dvh w-full flex-1 flex-col">
      <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={`relative z-10 mx-auto w-full ${WIDTHS.compact} shrink-0 px-6 pt-[max(3rem,env(safe-area-inset-top))] pb-6 text-center sm:px-10 sm:pt-12 lg:pt-16`}
        >
          <motion.p
            variants={item}
            className={`${EYEBROW_TEXT} justify-center text-ring`}
          >
            <span aria-hidden="true" className="bg-ring h-1.5 w-1.5" />
            Holding company — Indonesia
          </motion.p>

          <motion.h1 variants={item} className={HERO_TITLE_CENTER}>
            Orphic builds products
          </motion.h1>

          <motion.p variants={item} className={HERO_LEAD_CENTER}>
            PT Orphic Gavel Corp is a holding company from Indonesia —
            operating official products and investing in early-stage founders.
          </motion.p>
        </motion.div>

        <div className="relative min-h-[300px] w-full flex-1 overflow-hidden sm:min-h-[380px]">
          <div className="absolute top-0 left-1/2 aspect-square w-[min(1100px,170%)] -translate-x-1/2 sm:w-[min(1100px,120%)] lg:w-[min(1100px,112%)]">
            <Globe className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
