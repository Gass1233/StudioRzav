"use client";

import { Reveal } from "./Reveal";

export function StudioPhilosophy() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-rzav-black px-4 py-20 text-rzav-pearl md:px-7 md:py-28 xl:px-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="mx-auto grid max-w-[1840px] gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-3">
          <p className="architectural-label mb-5 text-xs text-rzav-stone">
            Studio Philosophy
          </p>
          <p className="max-w-sm text-base font-light leading-7 text-rzav-pearl/66 md:text-lg md:leading-8">
            RZAV works where residential architecture, cinematic image-making,
            and real estate sales strategy meet.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8 lg:col-start-5" delay={0.1}>
          <div className="border-l border-rzav-brass/45 pl-6 md:pl-10">
            <p className="architectural-label mb-5 text-xs text-rzav-brass">
              Brand Manifesto
            </p>
            <h2 className="max-w-6xl font-display text-4xl font-semibold uppercase leading-[0.98] text-rzav-pearl md:text-5xl xl:text-6xl">
              Before the address exists, buyers must{" "}
              <span className="accent-serif text-rzav-brass">
                feel the light
              </span>
              , the view, and the life waiting inside.
            </h2>
          </div>
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
            <div>
              <span className="font-display text-3xl text-rzav-brass/80">
                01
              </span>
              <h3 className="architectural-label mt-4 text-sm text-rzav-pearl">
                Emotion First
              </h3>
              <p className="mt-3 text-base font-light leading-7 text-rzav-pearl/62">
                The first frame must make a future home feel believable,
                desirable, and calm.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-rzav-brass/80">
                02
              </span>
              <h3 className="architectural-label mt-4 text-sm text-rzav-pearl">
                Sales Clarity
              </h3>
              <p className="mt-3 text-base font-light leading-7 text-rzav-pearl/62">
                Each scene is composed around buyer confidence, spatial
                legibility, and memorable campaign value.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-rzav-brass/80">
                03
              </span>
              <h3 className="architectural-label mt-4 text-sm text-rzav-pearl">
                Quiet Precision
              </h3>
              <p className="mt-3 text-base font-light leading-7 text-rzav-pearl/62">
                Facade rhythm, daylight, people, planting, and camera height do
                the heavy lifting.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
