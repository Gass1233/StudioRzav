"use client";

import { useEffect } from "react";

export function useOverlayScrollLock(active: boolean, onEscape?: () => void) {
  useEffect(() => {
    if (!active) {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscape?.();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.dispatchEvent(
      new CustomEvent("rzav:scroll-lock", { detail: { locked: true } })
    );
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.dispatchEvent(
        new CustomEvent("rzav:scroll-lock", { detail: { locked: false } })
      );
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, onEscape]);
}
