import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import philosophyBackground from "../assets/imgs/philosophy-bg.jpg";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const maxScroll = Math.max(container.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(
        Math.max(-container.getBoundingClientRect().top / maxScroll, 0),
        1,
      );
      setProgress(nextProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldReduceMotion]);

  const animationProgress = shouldReduceMotion ? 1 : progress;
  const imageScale = 0.42 + animationProgress * 0.58;
  const imageBlur = (1 - animationProgress) * 14;
  const imageRadius = `${Math.max(0, 28 - animationProgress * 28)}px`;
  const titleOpacity = Math.max(0, 1 - animationProgress * 3);
  const philosophyOpacity = Math.min(1, Math.max(0, (animationProgress - 0.45) * 2));

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-black" id="about">
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <img
          src={philosophyBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-3xl"
        />
        <div className="absolute inset-0 bg-black/60" />

        <img
          src={philosophyBackground}
          alt=""
          aria-hidden="true"
          className="absolute h-screen w-screen object-cover shadow-2xl will-change-transform"
          style={{
            borderRadius: imageRadius,
            filter: `blur(${imageBlur}px)`,
            opacity: 0.72 + animationProgress * 0.28,
            transform: `scale(${imageScale})`,
          }}
        />

        <div
          className="absolute z-10 px-6 text-center text-white transition-opacity duration-300"
          style={{ opacity: titleOpacity }}
        >
          <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-none tracking-[0.04em]">
            THE PHILOSOPHY
          </h2>
        </div>

        <div
          className="relative z-10 max-w-4xl px-6 text-center text-white transition-opacity duration-300 md:px-10"
          style={{ opacity: philosophyOpacity }}
        >
          <p className="mb-6 font-mono text-[0.65rem] uppercase tracking-[0.45em] text-red-500 md:text-xs">
            THE PHILOSOPHY
          </p>
          <p className="text-xl font-medium leading-relaxed md:text-3xl lg:text-4xl">
            I believe great software is born at the intersection of engineering
            precision and design intuition. Every pixel, every interaction,
            every line of code is an opportunity to create something that moves
            people.
          </p>
        </div>
      </div>
    </section>
  );
}
