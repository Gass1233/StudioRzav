"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.18,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      prevent: (node) =>
        Boolean((node as HTMLElement).closest("[data-native-scroll]")),
      smoothWheel: true,
      wheelMultiplier: 0.88
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const onScrollLock = (event: Event) => {
      const locked = (event as CustomEvent<{ locked: boolean }>).detail?.locked;

      if (locked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    window.addEventListener("rzav:scroll-lock", onScrollLock);

    return () => {
      window.removeEventListener("rzav:scroll-lock", onScrollLock);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
