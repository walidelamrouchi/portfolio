import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { useMotionConfig } from "../lib/useMotionConfig";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-scale" | "clip" | "clip-x";
  amount?: number;
};

export function Reveal({
  children,
  className,
  variant = "fade-up",
  amount = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount, margin: "0px 0px -8% 0px" });
  const { reduce, duration, ease, y, scale } = useMotionConfig();

  if (variant === "clip-x") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ clipPath: reduce ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
        animate={inView || reduce ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
        transition={{ duration, ease }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "clip") {
    return (
      <div ref={ref} className={`reveal-mask ${className ?? ""}`}>
        <motion.div
          initial={{ y: reduce ? 0 : "108%" }}
          animate={inView || reduce ? { y: 0 } : { y: "108%" }}
          transition={{ duration, ease }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  const hidden = variant === "fade-scale" ? { opacity: 0, scale } : { opacity: 0, y };
  const visible = variant === "fade-scale" ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration, ease }}
    >
      {children}
    </motion.div>
  );
}
