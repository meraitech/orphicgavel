"use client";

import { useState, useRef, type MouseEvent } from "react";
import { WIDTHS } from "@/components/ui/tokens";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Info,
  Mail,
  type LucideIcon,
} from "lucide-react";

export function Navigation5() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const navigate = (e: MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    setIsExpanded(false);
    if (href !== pathname) router.push(href);
  };

  const navItems: Array<{
    title: string;
    href: string;
    Icon: LucideIcon;
    tags?: string[];
  }> = [
      { title: "Homepage", href: "/", Icon: Home },
      { title: "About", href: "/about", Icon: Info },
      {
        title: "Portfolio",
        href: "/portfolio",
        Icon: Briefcase,
      },
      {
        title: "Contact",
        href: "/contact",
        Icon: Mail,
      },
    ];

  const activeItem =
    navItems.find((item) => item.href === pathname)?.title ?? "Homepage";

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-blue-charcoal/60 backdrop-blur-md z-50 cursor-pointer"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed bottom-6 left-0 right-0 z-50 px-6 pointer-events-none"
      >
        <div className={`${WIDTHS.compact} mx-auto pointer-events-auto`}>
          <div
            ref={navContainerRef}
            className="rounded-2xl bg-background border border-border shadow-xl overflow-hidden"
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src="/orphic/logo/logo-mark-light.svg"
                        alt="Orphic Gavel"
                        className="w-6 h-6"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex items-center justify-between"
                    >
                      <div className="text-2xl font-medium text-foreground leading-tight">
                        Orphic Gavel
                      </div>
                      <a
                        href="/contact"
                        onClick={(e) => navigate(e, "/contact")}
                        className="px-4 py-2 rounded-sm bg-accent text-accent-foreground text-xs font-medium hover:bg-accent-strong transition-colors no-underline"
                      >
                        Let&apos;s talk
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="-mx-4"
                    >
                      {navItems.map((item, index) => (
                        <motion.a
                          key={item.title}
                          href={item.href}
                          onClick={(e) => navigate(e, item.href)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.25 + index * 0.05,
                          }}
                          className={`flex items-center justify-between px-4 py-3 border-t hover:bg-muted transition-colors no-underline group cursor-pointer ${index === navItems.length - 1
                            ? "border-border border-b"
                            : "border-border"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                              <item.Icon className="h-5 w-5" />
                            </div>
                            <span className="text-base font-light text-foreground transition-colors">
                              {item.title}
                            </span>
                          </div>

                          {item.tags && (
                            <div className="flex items-center gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className="space-y-1 pt-2"
                    >
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block text-xs text-muted-foreground hover:text-foreground transition-colors no-underline"
                        >
                          {link.name}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2 text-foreground">
                {isExpanded ? (
                  <>
                    <ChevronDown className="w-5 h-5" />
                    <span className="text-sm font-medium">Close Menu</span>
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Open Menu</span>
                  </>
                )}
              </div>

              <div className="text-sm font-medium text-muted-foreground">
                {activeItem}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navigation5;
