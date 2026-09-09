import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { content } from "../content";
import { useMotionConfig } from "../lib/useMotionConfig";

export function MindMap() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.35 });
  const { reduce } = useMotionConfig();
  const groups = content.skillGroups;

  const drawn = inView || reduce ? 1 : 0;

  return (
    <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--bg-mantle)] p-[var(--space-card)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 80%, var(--glow), transparent 55%)",
        }}
      />
      <svg
        ref={ref}
        viewBox="0 0 520 360"
        className="relative z-[1] h-auto w-full"
        aria-hidden="true"
      >
        <motion.path
          d="M260 180 C 180 180, 140 90, 110 78"
          fill="none"
          stroke="rgba(241,245,249,0.45)"
          strokeWidth="1.2"
          initial={false}
          animate={{ pathLength: drawn }}
          transition={{ duration: reduce ? 0.12 : 0.9 }}
        />
        <motion.path
          d="M260 180 C 340 180, 380 90, 410 78"
          fill="none"
          stroke="rgba(241,245,249,0.45)"
          strokeWidth="1.2"
          initial={false}
          animate={{ pathLength: drawn }}
          transition={{ duration: reduce ? 0.12 : 0.9, delay: reduce ? 0 : 0.08 }}
        />
        <motion.path
          d="M260 180 C 260 240, 260 290, 260 318"
          fill="none"
          stroke="rgba(241,245,249,0.45)"
          strokeWidth="1.2"
          initial={false}
          animate={{ pathLength: drawn }}
          transition={{ duration: reduce ? 0.12 : 0.9, delay: reduce ? 0 : 0.16 }}
        />
      </svg>
      <div className="absolute left-1/2 top-[42%] z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-2 font-mono text-[length:var(--text-label)] uppercase tracking-[0.12em] text-[var(--accent)]">
        Tools
      </div>
      <div className="absolute left-[4%] top-[8%] z-[2] w-[min(42%,11rem)] rounded-xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-base)_82%,transparent)] p-3 backdrop-blur-sm">
        <p className="mb-2 font-mono text-[length:var(--text-label)] uppercase tracking-[0.08em] text-[var(--accent-2)]">
          {groups[1]?.title}
        </p>
        <ul className="grid gap-1 font-mono text-[length:var(--text-small)]">
          {groups[1]?.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute right-[4%] top-[8%] z-[2] w-[min(42%,11rem)] rounded-xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-base)_82%,transparent)] p-3 backdrop-blur-sm">
        <p className="mb-2 font-mono text-[length:var(--text-label)] uppercase tracking-[0.08em] text-[var(--accent-2)]">
          {groups[0]?.title}
        </p>
        <ul className="grid gap-1 font-mono text-[length:var(--text-small)]">
          {groups[0]?.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-[6%] left-1/2 z-[2] w-[min(70%,16rem)] -translate-x-1/2 rounded-xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-base)_82%,transparent)] p-3 backdrop-blur-sm">
        <p className="mb-2 font-mono text-[length:var(--text-label)] uppercase tracking-[0.08em] text-[var(--accent-2)]">
          {groups[2]?.title}
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[length:var(--text-small)]">
          {groups[2]?.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
