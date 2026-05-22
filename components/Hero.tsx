"use client";

import { heroImages } from "@/lib/content";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroProps = {
  onOpenContact: () => void;
};

export function Hero({ onOpenContact }: HeroProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.22]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % heroImages.length);
    }, 6400);

    return () => window.clearInterval(interval);
  }, []);

  const currentImage = heroImages[active];

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] overflow-hidden bg-rzav-black"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
        aria-hidden="true"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.035, filter: "blur(10px)" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={currentImage.src}
              alt=""
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover brightness-[1.16] contrast-[1.04] saturate-[1.06]"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,6,0.62),rgba(8,8,6,0.24)_44%,rgba(8,8,6,0.02)),linear-gradient(0deg,rgba(8,8,6,0.74),rgba(8,8,6,0.08)_58%,rgba(8,8,6,0.28))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rzav-black to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1840px] flex-col justify-end px-4 pb-9 pt-28 md:px-7 md:pb-14 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 2.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="architectural-label mb-4 max-w-md text-xs text-rzav-stone md:text-sm">
              Residential Visualization / Sales Imagery
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-semibold uppercase leading-[0.9] text-rzav-pearl md:text-6xl xl:text-[5.2rem]">
              Designed to sell{" "}
              <span className="accent-serif block text-[0.78em] leading-[0.95] text-rzav-brass">
                before it exists
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="lg:col-span-4 lg:pb-3"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.05, delay: 2.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-md font-sans text-base font-light leading-7 text-rzav-pearl/80 md:text-lg md:leading-8">
              Cinematic architectural imagery for residential launches, property
              sales campaigns, and development marketing.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-rzav-pearl px-5 py-3.5 text-sm font-medium text-rzav-black transition-colors duration-300 hover:bg-rzav-brass"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <button
                type="button"
                onClick={onOpenContact}
                className="architectural-label inline-flex items-center justify-center gap-2 border border-white/18 px-5 py-3.5 text-xs text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-9 flex items-end justify-between gap-6">
          <motion.a
            href="#projects"
            aria-label="Scroll to projects"
            className="inline-grid h-11 w-11 place-items-center border border-white/18 text-rzav-pearl/80 transition-colors duration-300 hover:border-rzav-brass hover:text-rzav-pearl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.7 }}
          >
            <ArrowDown className="h-5 w-5" strokeWidth={1.4} />
          </motion.a>
          <motion.div
            className="hidden items-center gap-3 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.7 }}
          >
            {heroImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`h-px w-12 transition-colors duration-500 ${
                  index === active ? "bg-rzav-pearl" : "bg-white/28"
                }`}
                onClick={() => setActive(index)}
                aria-label={`Show hero image ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
