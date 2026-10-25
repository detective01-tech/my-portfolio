"use client";

import { useEffect } from "react";

/** Slow anchor navigation, with native manual scrolling and interruptible motion. */
export default function SmoothScrollController() {
  useEffect(() => {
    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cancelScroll = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const focusSection = (section: HTMLElement) => {
      if (!section.hasAttribute("tabindex")) {
        section.setAttribute("tabindex", "-1");
        section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
      }
      section.focus({ preventScroll: true });
    };
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href?.startsWith("#") || href === "#" || anchor?.target === "_blank" || anchor?.hasAttribute("download")) return;
      let id: string;
      try { id = decodeURIComponent(href.slice(1)); } catch { return; }
      const section = document.getElementById(id);
      if (!section) return;
      event.preventDefault();
      cancelScroll();

      const start = window.scrollY;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 80;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const destination = Math.max(0, Math.min(maxScroll, section.getBoundingClientRect().top + start - offset));
      const distance = destination - start;
      if (window.location.hash !== href) history.pushState(null, "", href);
      if (reducedMotion.matches || anchor?.classList.contains("skip-link") || Math.abs(distance) < 2) {
        window.scrollTo({ top: destination, behavior: "instant" });
        focusSection(section);
        return;
      }

      const duration = Math.min(2400, 1400 + Math.abs(distance) * 0.16);
      let started: number | undefined;
      const step = (time: number) => {
        started ??= time;
        const progress = Math.min((time - started) / duration, 1);
        const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
        // Explicit instant positioning avoids fighting the CSS smooth-scroll fallback.
        window.scrollTo({ top: start + distance * eased, behavior: "instant" });
        if (progress < 1) frame = requestAnimationFrame(step);
        else {
          frame = 0;
          focusSection(section);
        }
      };
      frame = requestAnimationFrame(step);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Escape", "Tab"].includes(event.key)) cancelScroll();
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("wheel", cancelScroll, { passive: true });
    window.addEventListener("touchstart", cancelScroll, { passive: true });
    window.addEventListener("pointerdown", cancelScroll, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("popstate", cancelScroll);
    window.addEventListener("hashchange", cancelScroll);
    window.addEventListener("resize", cancelScroll);
    reducedMotion.addEventListener("change", cancelScroll);
    return () => {
      cancelScroll();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("wheel", cancelScroll);
      window.removeEventListener("touchstart", cancelScroll);
      window.removeEventListener("pointerdown", cancelScroll);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("popstate", cancelScroll);
      window.removeEventListener("hashchange", cancelScroll);
      window.removeEventListener("resize", cancelScroll);
      reducedMotion.removeEventListener("change", cancelScroll);
    };
  }, []);

  return null;
}
