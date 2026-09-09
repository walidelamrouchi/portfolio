import { useReducedMotion } from "motion/react";
import { useMediaQuery } from "../lib/useMediaQuery";

export function useMotionConfig() {
  const reduce = Boolean(useReducedMotion());
  const compact = useMediaQuery("(max-width: 767px)");

  return {
    reduce,
    duration: reduce ? 0.12 : 0.62,
    ease: [0.22, 1, 0.36, 1] as const,
    y: reduce ? 0 : compact ? 24 : 40,
    x: reduce ? 0 : compact ? 36 : 60,
    stagger: reduce ? 0 : compact ? 0.04 : 0.08,
    scale: reduce ? 1 : 0.96,
  };
}
