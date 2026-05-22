"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(labelRef.current, { opacity: 0, y: 8, filter: "blur(6px)" });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => setVisible(false)
      });

      timeline
        .to(labelRef.current, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.72
        })
        .to(
          barRef.current,
          {
            scaleX: 1,
            duration: 1.28
          },
          "-=0.32"
        )
        .to(labelRef.current, {
          opacity: 0.4,
          duration: 0.28
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-rzav-black"
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          <div className="w-44 text-center">
            <div
              ref={labelRef}
              className="font-display text-4xl font-semibold uppercase text-rzav-pearl"
            >
              RZAV
            </div>
            <div className="mt-5 h-px overflow-hidden bg-white/15">
              <div ref={barRef} className="h-full w-full bg-rzav-brass" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
