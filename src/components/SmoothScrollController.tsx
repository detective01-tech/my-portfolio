"use client";

import { useEffect } from "react";

/**
 * Custom smooth scroll hook that provides a gentle, weighted easing for anchor navigation
 * and handles anchor clicks gracefully across modern browsers.
 */
export default function SmoothScrollController() {
  useEffect(() => {
    // Custom smooth anchor scroll with controlled slow deceleration
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      e.preventDefault();

      const startPosition = window.pageYOffset;
      const navOffset = 80;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - navOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Slow, luxurious scroll (1.2 seconds)
      let start: number | null = null;

      // EaseInOutCubic for soft start and slow gentle stop
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          // Update URL hash without instant jump
          history.pushState(null, "", href);
        }
      };

      window.requestAnimationFrame(step);
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
