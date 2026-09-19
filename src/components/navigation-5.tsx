"use client";

import { useState, useRef, type MouseEvent } from "react";
import { WIDTHS } from "@/components/ui/tokens";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown } from "lucide-react";

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
    image: string;
    href: string;
    tags?: string[];
  }> = [
    { title: "Homepage", image: "/globe.svg", href: "/" },
    { title: "About", image: "/globe.svg", href: "/about" },
    { title: "Portfolio", image: "/globe.svg", href: "/portfolio" },
    {
      title: "Contact",
      image: "/globe.svg",
      href: "/contact",
    },
  ];

  const activeItem =
    navItems.find((item) => item.href === pathname)?.title ?? "Homepage";

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Trok on X", href: "#" },
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
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-50 cursor-pointer"
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
            className="rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden"
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
                      className="w-10 h-10 bg-neutral-900 dark:bg-white rounded-sm flex items-center justify-center"
                    >
                      <svg
                        className="w-6 h-6 text-white dark:text-neutral-900"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8z" />
                      </svg>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex items-center justify-between"
                    >
                      <div className="text-2xl font-medium text-neutral-900 dark:text-white leading-tight">
                        This is Trok
                      </div>
                      <a
                        href="#"
                        className="px-4 py-2 rounded-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors no-underline"
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
                          className={`flex items-center justify-between px-4 py-3 border-t hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors no-underline group cursor-pointer ${
                            index === navItems.length - 1
                              ? "border-neutral-200 dark:border-neutral-800 border-b"
                              : "border-neutral-200 dark:border-neutral-800"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden shrink-0 group-hover:w-[84px] transition-all duration-200">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-base font-light text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                              {item.title}
                            </span>
                          </div>

                          {item.tags && (
                            <div className="flex items-center gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-neutral-500 dark:text-neutral-400"
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
                          className="block text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors no-underline"
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
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
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

              <div className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
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
