"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 60,
  duration = 1000,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !("IntersectionObserver" in window) || reducedMotion.matches) return;

    const marked = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const elements = marked.length ? marked : [root];
    const animations = new Set<Animation>();
    const offsets = { up: "0 28px", down: "0 -28px", left: "28px 0", right: "-28px 0", none: "0 0" };
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        // Keep keyboard destinations immediately readable.
        if (entry.target.contains(document.activeElement) || reducedMotion.matches) continue;
        const animation = entry.target.animate([
          { opacity: 0, translate: offsets[direction] },
          { opacity: 1, translate: "0 0" },
        ], {
          duration,
          delay: delay + Math.min(stagger++, 3) * 100,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

    // Animate individual blocks once they enter view; SSR content is always visible.
    elements.forEach((element) => observer.observe(element));
    const stopAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        stopAnimations();
      }
    };
    const handleFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      const target = event.target;
      elements.filter((element) => element.contains(target)).forEach((element) => {
        observer.unobserve(element);
        element.getAnimations().forEach((animation) => animation.cancel());
      });
    };
    root.addEventListener("focusin", handleFocus);
    reducedMotion.addEventListener("change", handleMotionChange);
    return () => {
      observer.disconnect();
      stopAnimations();
      root.removeEventListener("focusin", handleFocus);
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [delay, direction, duration]);

  return <div ref={ref} className={className}>{children}</div>;
}
