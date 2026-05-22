"use client";

import { processSteps } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type ProcessProps = {
  onOpenContact: () => void;
};

export function Process({ onOpenContact }: ProcessProps) {
  return (
    <section
      id="process"
      className="bg-rzav-ink px-4 py-20 text-rzav-pearl md:px-7 md:py-28 xl:px-10"
    >
      <div className="mx-auto max-w-[1840px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="architectural-label mb-4 text-xs text-rzav-brass">
              How It Works
            </p>
            <h2 className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[0.98] md:text-5xl xl:text-6xl">
              A process built for
              <span className="accent-serif block sm:whitespace-nowrap text-rzav-brass">
                fast-moving projects.
              </span>
            </h2>
          </Reveal>
          <Reveal
            className="flex lg:col-span-5 lg:col-start-8 lg:justify-end"
            delay={0.1}
          >
            <button
              type="button"
              onClick={onOpenContact}
              className="architectural-label inline-flex items-center gap-2 border border-white/18 px-5 py-3.5 text-xs text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass hover:bg-rzav-brass hover:text-rzav-black"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid border border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              className={`group min-h-[17rem] border-b border-white/10 p-6 md:p-7 xl:border-b-0 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < processSteps.length - 1 ? "xl:border-r" : ""}`}
              delay={index * 0.05}
            >
              <span className="font-display text-5xl font-semibold text-rzav-pearl/[0.055] transition-colors duration-300 group-hover:text-rzav-brass/20">
                {step.number}
              </span>
              <h3 className="mt-10 font-display text-3xl font-semibold uppercase leading-none md:text-4xl">
                {step.title}
              </h3>
              <p className="mt-5 text-sm font-light leading-6 text-rzav-pearl/62">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
