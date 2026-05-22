"use client";

import type { Project } from "@/lib/content";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useOverlayScrollLock } from "@/hooks/useOverlayScrollLock";

type ProjectGalleryProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectGallery({ project, onClose }: ProjectGalleryProps) {
  useOverlayScrollLock(Boolean(project), onClose);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          data-project-gallery
          data-native-scroll
          className="native-scroll fixed inset-0 z-[90] h-[100dvh] overflow-y-auto bg-rzav-black text-rzav-pearl"
          initial={{ y: "100%", opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0.9 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sticky top-0 z-20 border-b border-white/10 bg-rzav-black/82 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-[1840px] items-center justify-between px-4 md:h-[4.5rem] md:px-7 xl:px-10">
              <button
                type="button"
                className="grid h-10 w-10 place-items-center border border-white/18 text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass"
                onClick={onClose}
                aria-label="Close project"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
              <div className="hidden text-xs text-rzav-pearl/62 md:block">
                {project.location} / {project.year}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="architectural-label inline-flex items-center gap-2 text-xs text-rzav-pearl transition-colors duration-300 hover:text-rzav-brass"
              >
                Close Gallery
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-[1840px] px-4 pb-20 pt-10 md:px-7 md:pt-14 xl:px-10">
            <motion.div
              className="grid gap-8 lg:grid-cols-12 lg:items-end"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="lg:col-span-7">
                <p className="architectural-label mb-4 text-xs text-rzav-stone">
                  Selected Project
                </p>
                <h2 className="font-display text-4xl font-semibold uppercase leading-[0.9] md:text-6xl xl:text-7xl">
                  {project.title}
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="max-w-xl text-base font-light leading-7 text-rzav-pearl/76 md:text-lg md:leading-8">
                  {project.description}
                </p>
                <div className="architectural-label mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-xs text-rzav-pearl/66 sm:grid-cols-3">
                  <span>{project.scope}</span>
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative mt-12 aspect-[16/9] w-full overflow-hidden bg-white/[0.035]"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="gallery-columns mt-6 md:mt-8">
              {project.images.map((image, index) => (
                <motion.figure
                  key={image.src}
                  className="mb-4 break-inside-avoid overflow-hidden bg-white/[0.035] md:mb-5 xl:mb-6"
                  initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.78,
                    delay: Math.min(index * 0.05, 0.2),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full object-contain transition-transform duration-700 ease-cinematic hover:scale-[1.025]"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
