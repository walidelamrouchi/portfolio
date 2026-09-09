import { AnimatePresence, motion, type Variants } from "motion/react";
import { cn } from "../../lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  containerClassName?: string;
}

export function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  containerClassName,
}: GradualSpacingProps) {
  return (
    <div className={cn("flex justify-center space-x-1", containerClassName)} aria-label={text}>
      <AnimatePresence>
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={framerProps}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration, delay: index * delayMultiple }}
            className={cn("inline-block drop-shadow-sm", className)}
            aria-hidden="true"
          >
            {char === " " ? "\u00a0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
