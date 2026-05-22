"use client";

import type { Project } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

type FeaturedProjectsProps = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

export function FeaturedProjects({
  projects,
  onOpenProject
}: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="relative bg-rzav-black px-4 py-20 text-rzav-pearl md:px-7 md:py-28 xl:px-10"
    >
      <div className="mx-auto max-w-[1840px]">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="architectural-label mb-4 text-xs text-rzav-stone">
              Featured Projects
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-semibold uppercase leading-[0.94] md:text-5xl xl:text-6xl">
              Image-led residential campaigns.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="max-w-xl text-base font-light leading-7 text-rzav-pearl/68 md:text-lg md:leading-8">
              NDA-safe studies shaped around context, approach, balcony life,
              and developer confidence.
            </p>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.button
                key={project.slug}
                type="button"
                className="group grid w-full gap-8 py-10 text-left md:py-14 lg:grid-cols-12 lg:items-center"
                onClick={() => onOpenProject(project)}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.86,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.min(index * 0.08, 0.24)
                }}
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-white/[0.035] lg:col-span-7 ${
                    reversed ? "lg:order-2 lg:col-start-6" : ""
                  }`}
                >
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-cinematic group-hover:scale-[1.055]"
                  />
                  <div className="absolute inset-0 bg-rzav-black/0 transition-colors duration-500 group-hover:bg-rzav-black/12" />
                </div>

                <div
                  className={`lg:col-span-4 ${
                    reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"
                  }`}
                >
                  <div className="architectural-label mb-4 flex items-center justify-between gap-6 text-xs text-rzav-stone">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-4xl font-semibold uppercase leading-[0.92] text-rzav-pearl md:text-5xl xl:text-6xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base font-light leading-7 text-rzav-pearl/68">
                    {project.description}
                  </p>
                  <span className="architectural-label mt-7 inline-flex items-center gap-2 text-xs text-rzav-pearl transition-colors duration-300 group-hover:text-rzav-brass">
                    Open Gallery
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
