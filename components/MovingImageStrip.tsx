"use client";

import type { StripImage } from "@/lib/content";
import { movingStripImages } from "@/lib/content";
import { useOverlayScrollLock } from "@/hooks/useOverlayScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Reveal } from "./Reveal";

export function MovingImageStrip() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex === null ? null : movingStripImages[selectedIndex];

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((value) =>
      value === null ? 0 : (value + 1) % movingStripImages.length
    );
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((value) =>
      value === null
        ? 0
        : (value - 1 + movingStripImages.length) % movingStripImages.length
    );
  }, []);

  useOverlayScrollLock(Boolean(selectedImage), closeLightbox);

  return (
    <section
      id="atmosphere"
      className="relative overflow-hidden bg-rzav-black py-20 text-rzav-pearl md:py-28"
    >
      <div className="mx-auto grid max-w-[1840px] gap-8 px-4 md:px-7 lg:grid-cols-12 lg:items-end xl:px-10">
        <Reveal className="lg:col-span-6">
          <p className="architectural-label mb-4 text-xs text-rzav-stone">
            04 / Atmosphere
          </p>
          <h2 className="max-w-3xl font-display text-4xl font-semibold uppercase leading-[0.94] md:text-5xl xl:text-6xl">
            A moving index of future homes.
          </h2>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <p className="max-w-xl text-base font-light leading-7 text-rzav-pearl/66 md:text-lg md:leading-8">
            A continuous ribbon of stills, details, context, and atmosphere.
            Click any frame to slow the sequence down.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-white/10 py-5 md:mt-16 md:py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-rzav-black to-transparent md:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-rzav-black to-transparent md:w-36" />

        <div className="moving-strip-track flex w-max gap-5 pr-5 md:gap-7 md:pr-7">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-5 pr-5 md:gap-7 md:pr-7"
              aria-hidden={group === 1}
            >
              {movingStripImages.map((image, index) => (
                <StripButton
                  key={`${image.src}-${group}-${index}`}
                  image={image}
                  tabIndex={group === 1 ? -1 : 0}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            data-native-scroll
            data-testid="strip-lightbox"
            className="native-scroll fixed inset-0 z-[100] flex h-[100dvh] flex-col overflow-y-auto bg-rzav-black/96 px-4 py-5 text-rzav-pearl backdrop-blur-xl md:px-7 md:py-7 xl:px-10"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex w-full max-w-[1840px] items-center justify-between gap-5">
              <div>
                <p className="architectural-label text-xs text-rzav-brass">
                  RZAV / Image View
                </p>
                <p className="mt-2 text-sm text-rzav-pearl/62">
                  {selectedImage.label}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="grid h-11 w-11 place-items-center border border-white/18 text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass"
                aria-label="Close image viewer"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <div className="relative mx-auto mt-6 grid w-full max-w-[1840px] flex-1 place-items-center">
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/16 bg-rzav-black/42 text-rzav-pearl backdrop-blur-md transition-colors duration-300 hover:border-rzav-brass md:grid"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-5 w-5" strokeWidth={1.4} />
              </button>
              <motion.figure
                key={selectedImage.src}
                className="relative h-[68svh] w-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.figure>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/16 bg-rzav-black/42 text-rzav-pearl backdrop-blur-md transition-colors duration-300 hover:border-rzav-brass md:grid"
                aria-label="Next image"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <div className="mx-auto mt-5 flex w-full max-w-[1840px] items-center justify-between gap-3 md:hidden">
              <button
                type="button"
                onClick={showPrevious}
                className="architectural-label border border-white/16 px-4 py-3 text-xs text-rzav-pearl"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={showNext}
                className="architectural-label border border-white/16 px-4 py-3 text-xs text-rzav-pearl"
              >
                Next
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function StripButton({
  image,
  tabIndex,
  onClick
}: {
  image: StripImage;
  tabIndex?: number;
  onClick: () => void;
}) {
  const isVertical = image.orientation === "vertical";

  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={tabIndex}
      className={`group relative shrink-0 overflow-hidden bg-white/[0.035] text-left ${
        isVertical
          ? "h-[18rem] w-[13rem] md:h-[30rem] md:w-[24rem] xl:h-[34rem] xl:w-[27rem]"
          : "h-[18rem] w-[28rem] md:h-[30rem] md:w-[48rem] xl:h-[34rem] xl:w-[54rem]"
      }`}
      aria-label={`Open ${image.label}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          isVertical
            ? "(min-width: 1280px) 27rem, (min-width: 768px) 24rem, 13rem"
            : "(min-width: 1280px) 54rem, (min-width: 768px) 48rem, 28rem"
        }
        className="object-cover transition-transform duration-1000 ease-cinematic group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-rzav-black/0 transition-colors duration-500 group-hover:bg-rzav-black/16" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-3 bg-gradient-to-t from-rzav-black/72 to-transparent px-5 pb-5 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="architectural-label text-[0.62rem] text-rzav-pearl/82">
          {image.label}
        </p>
      </div>
    </button>
  );
}
