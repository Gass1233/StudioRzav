"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type CallToActionProps = {
  onOpenContact: () => void;
};

export function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="relative overflow-hidden bg-rzav-black px-4 py-16 text-rzav-pearl md:px-7 md:py-20 xl:px-10 xl:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(168,143,88,0.12),transparent_30%),radial-gradient(circle_at_20%_85%,rgba(247,245,239,0.055),transparent_26%),linear-gradient(180deg,#080806_0%,#11110d_56%,#080806_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto flex max-w-[1840px] items-center justify-center">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="architectural-label mb-6 text-xs text-rzav-brass">
            RZAV / Currently Accepting Projects
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[0.98] md:text-5xl xl:text-6xl">
            Let the first image carry the value of the development.
            <span className="accent-serif block text-rzav-brass">
              quietly, clearly, beautifully.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base font-light leading-7 text-rzav-pearl/72 md:text-lg md:leading-8">
            From first concept launch to final sales campaign, RZAV builds the
            imagery that lets premium developments move with confidence.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="architectural-label mt-8 inline-flex items-center justify-center gap-2 border border-rzav-pearl/70 px-6 py-4 text-xs text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass hover:bg-rzav-brass hover:text-rzav-black"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
