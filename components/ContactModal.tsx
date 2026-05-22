"use client";

import { useOverlayScrollLock } from "@/hooks/useOverlayScrollLock";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, X } from "lucide-react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  useOverlayScrollLock(open, onClose);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          data-native-scroll
          data-testid="contact-modal"
          className="native-scroll fixed inset-0 z-[100] h-[100dvh] overflow-y-auto bg-rzav-black/94 px-4 py-5 text-rzav-pearl backdrop-blur-xl md:px-7 md:py-8 xl:px-10"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto flex min-h-[calc(100dvh-2.5rem)] max-w-[1400px] flex-col border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(168,143,88,0.15),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] shadow-soft md:min-h-[calc(100dvh-4rem)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
              <span className="font-display text-2xl font-semibold uppercase">
                RZAV
              </span>
              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 place-items-center border border-white/18 text-rzav-pearl transition-colors duration-300 hover:border-rzav-brass"
                aria-label="Close inquiry"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <div className="relative grid flex-1 gap-10 overflow-hidden px-5 py-9 md:px-8 md:py-12 lg:grid-cols-12 lg:items-end">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[28vw] font-semibold leading-none text-rzav-pearl/[0.025]">
                  RZAV
                </span>
              </div>

              <motion.div
                className="relative z-10 lg:col-span-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="architectural-label mb-5 text-xs text-rzav-brass">
                  Private Inquiry
                </p>
                <h2 className="font-display text-4xl font-semibold uppercase leading-[0.94] md:text-6xl xl:text-7xl">
                  Start with the frame that sells the vision.
                </h2>
                <p className="mt-7 max-w-lg text-base font-light leading-7 text-rzav-pearl/68 md:text-lg md:leading-8">
                  Share the development, sales goal, timeline, and kind of
                  imagery you need. RZAV will shape the first visual direction
                  around the buyers you want to move.
                </p>

                <div className="mt-10 grid gap-4 text-sm text-rzav-pearl/76">
                  <a
                    href="mailto:studio@rzav.com"
                    className="flex items-center gap-3 transition-colors duration-300 hover:text-rzav-brass"
                  >
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                    studio@rzav.com
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                    Global architectural visualization studio
                  </div>
                </div>
              </motion.div>

              <motion.form
                action="mailto:studio@rzav.com"
                method="post"
                encType="text/plain"
                className="relative z-10 space-y-5 lg:col-span-6 lg:col-start-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-sm text-rzav-pearl/58">
                      Name
                    </span>
                    <input
                      name="name"
                      type="text"
                      className="w-full border border-white/14 bg-rzav-black/18 px-4 py-3.5 text-sm text-rzav-pearl outline-none transition-colors duration-300 placeholder:text-rzav-pearl/28 focus:border-rzav-brass"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-3 block text-sm text-rzav-pearl/58">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="w-full border border-white/14 bg-rzav-black/18 px-4 py-3.5 text-sm text-rzav-pearl outline-none transition-colors duration-300 placeholder:text-rzav-pearl/28 focus:border-rzav-brass"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-3 block text-sm text-rzav-pearl/58">
                    Project
                  </span>
                  <input
                    name="project"
                    type="text"
                    className="w-full border border-white/14 bg-rzav-black/18 px-4 py-3.5 text-sm text-rzav-pearl outline-none transition-colors duration-300 placeholder:text-rzav-pearl/28 focus:border-rzav-brass"
                    placeholder="Residential launch, investor campaign, sales gallery..."
                  />
                </label>
                <label className="block">
                  <span className="mb-3 block text-sm text-rzav-pearl/58">
                    Brief
                  </span>
                  <textarea
                    name="brief"
                    rows={6}
                    className="w-full resize-none border border-white/14 bg-rzav-black/18 px-4 py-3.5 text-sm text-rzav-pearl outline-none transition-colors duration-300 placeholder:text-rzav-pearl/28 focus:border-rzav-brass"
                    placeholder="Tell us the location, timeline, deliverables, mood, and sales objective."
                  />
                </label>
                <button
                  type="submit"
                  className="architectural-label inline-flex w-full items-center justify-center gap-2 bg-rzav-pearl px-5 py-4 text-xs text-rzav-black transition-colors duration-300 hover:bg-rzav-brass md:w-auto"
                >
                  Send Inquiry
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
