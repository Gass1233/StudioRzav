"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" }
];

type NavigationProps = {
  onOpenContact: () => void;
};

export function Navigation({ onOpenContact }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.9 }}
      >
        <div
          className={`mx-auto flex h-[4.5rem] w-full max-w-[1840px] items-center justify-between px-4 transition-colors duration-500 md:h-20 md:px-7 xl:px-10 ${
            scrolled
              ? "border-b border-white/10 bg-rzav-black/72 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-display text-2xl font-semibold uppercase text-rzav-pearl md:text-3xl"
            aria-label="RZAV home"
          >
            RZAV
          </a>

          <nav className="architectural-label hidden items-center gap-8 text-xs text-rzav-pearl/72 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-rzav-pearl"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="architectural-label hidden items-center gap-2 border border-white/18 px-4 py-2.5 text-xs text-rzav-pearl transition-all duration-300 hover:border-rzav-brass hover:bg-rzav-brass hover:text-rzav-black md:flex"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center border border-white/18 text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-rzav-black/96 px-4 pt-28 lg:hidden"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="border-b border-white/10 py-5 font-display text-4xl font-semibold uppercase leading-none text-rzav-pearl sm:text-5xl"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.52,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenContact();
              }}
              className="architectural-label mt-9 inline-flex items-center gap-2 border border-rzav-brass bg-rzav-brass px-5 py-3.5 text-xs text-rzav-black"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
