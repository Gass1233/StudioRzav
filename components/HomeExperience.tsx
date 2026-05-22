"use client";

import type { Project } from "@/lib/content";
import { projects } from "@/lib/content";
import { useCallback, useState } from "react";
import { CallToAction } from "./CallToAction";
import { ContactModal } from "./ContactModal";
import { FeaturedProjects } from "./FeaturedProjects";
import { Hero } from "./Hero";
import { MovingImageStrip } from "./MovingImageStrip";
import { Navigation } from "./Navigation";
import { Preloader } from "./Preloader";
import { Process } from "./Process";
import { ProjectGallery } from "./ProjectGallery";
import { SmoothScroll } from "./SmoothScroll";
import { StudioPhilosophy } from "./StudioPhilosophy";

export function HomeExperience() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const closeProject = useCallback(() => {
    setActiveProject(null);
  }, []);

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setContactOpen(false);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Preloader />
      <div className="noise" />
      <Navigation onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <FeaturedProjects projects={projects} onOpenProject={setActiveProject} />
        <StudioPhilosophy />
        <Process onOpenContact={openContact} />
        <MovingImageStrip />
        <CallToAction onOpenContact={openContact} />
      </main>
      <footer className="border-t border-white/10 bg-rzav-black px-4 py-6 text-rzav-pearl/48 md:px-7 xl:px-10">
        <div className="mx-auto flex max-w-[1840px] flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between">
          <span className="architectural-label">RZAV / 2026</span>
          <a
            href="mailto:studio@rzav.com"
            className="transition-colors duration-300 hover:text-rzav-pearl"
          >
            studio@rzav.com
          </a>
        </div>
      </footer>
      <ProjectGallery project={activeProject} onClose={closeProject} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
