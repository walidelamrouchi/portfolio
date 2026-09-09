import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ContainerScrollProps {
  titleComponent: ReactNode;
  children: ReactNode;
}

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <div ref={containerRef} className="relative min-h-[145vh]">
      <div className="sticky top-0 flex min-h-screen flex-col items-center overflow-visible px-4 pt-20 sm:px-8 sm:pt-28 lg:px-16">
        <motion.div style={{ y: translate }} className="relative z-20 w-full text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{ rotateX: rotate, scale, y: translate }}
          className="relative z-10 mt-8 w-full max-w-7xl [transform-style:preserve-3d]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
