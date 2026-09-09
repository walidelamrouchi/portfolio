import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import findItImage from "../assets/imgs/findit img.png";
import bankingImage from "../assets/imgs/app-banking img.png";
import todoImage from "../assets/imgs/todo img.png";
import { content, type Project } from "../content";
import { GradualSpacing } from "./ui/gradual-spacing";
import { useMotionConfig } from "../lib/useMotionConfig";

const projectImages: Record<string, string> = {
  findit: findItImage,
  "eco-defense": bankingImage,
  talim: todoImage,
};

const revealItem = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0 },
};



function ToolMap({ project }: { project: Project }) {
  const { reduce, duration, stagger } = useMotionConfig();
  const tools = [project.stack[0], project.stack[1] ?? "REST API", project.stack[2] ?? "Git / GitHub"];
  const linePaths = [
    "M172 180 C235 180 236 64 310 64",
    "M172 180 C250 180 260 180 340 180",
    "M172 180 C235 180 236 296 310 296",
  ];

  return (
    <div className="relative min-h-[16rem] w-full lg:min-h-[22rem]">
      <svg viewBox="0 0 520 360" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {linePaths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="rgba(255,255,255,.42)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration, delay: reduce ? 0 : 0.72 + index * stagger * 2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <motion.circle
          cx="172"
          cy="180"
          r="5"
          fill="white"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: reduce ? 0 : 0.58, duration: reduce ? 0.12 : 0.35 }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ delay: reduce ? 0 : 0.5, duration: reduce ? 0.12 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[8%] top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-black/70 px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-sm sm:left-[18%] sm:px-4 sm:text-xs sm:tracking-[0.18em] lg:left-[25%]"
      >
        Tools
      </motion.div>
      {tools.map((tool, index) => (
        <motion.div
          key={`${tool}-${index}`}
          initial={{ opacity: 0, x: -18, scale: 0.85 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: reduce ? 0 : 1.05 + index * stagger * 2, duration: reduce ? 0.12 : duration * 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[48%] max-w-[48%] truncate rounded-full border border-white/35 bg-black/65 px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-white/90 shadow-lg backdrop-blur-sm sm:left-[54%] sm:max-w-none sm:px-4 sm:text-[0.65rem] sm:tracking-[0.12em] lg:left-[59%]"
          style={{ top: index === 0 ? "13%" : index === 1 ? "46%" : "79%" }}
        >
          {tool}
        </motion.div>
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const image = projectImages[project.id] ?? todoImage;
  const { reduce, duration, y } = useMotionConfig();
  const contentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate flex min-h-screen snap-start items-center overflow-hidden border-t border-white/10 px-4 py-20 text-white sm:px-8 sm:py-24 lg:px-20"
    >
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover blur-2xl" />
      <img src={image} alt={project.imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.96)_0%,rgba(0,0,0,.78)_44%,rgba(0,0,0,.42)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-5 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="min-w-0"
        >
          <motion.div  className="mb-8 flex items-center gap-4">
            <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
              {project.statusLabel}
              {project.liveUrl && <ExternalLink className="ml-2 inline" size={12} aria-hidden="true" />}
            </span>
            <span className="font-mono text-xs tracking-[0.25em] text-white/55">
              {String(index + 1).padStart(2, "0")} / {String(content.projects.length).padStart(2, "0")}
            </span>
          </motion.div>
          <motion.div variants={revealItem}>
            <GradualSpacing
              text={project.title}
              className="text-3xl font-bold tracking-tight text-[#f2efec] sm:text-5xl lg:text-6xl"
              containerClassName="justify-start"
            />
          </motion.div>
          <motion.p variants={revealItem} className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:mt-7 sm:text-lg sm:leading-8">
            {project.summary}
          </motion.p>
          <motion.a variants={revealItem} href={project.liveUrl ?? "#projects"} className="mt-7 inline-flex items-center gap-2 border border-white/50 px-4 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors hover:bg-white hover:text-black sm:mt-9 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.16em]">
            Live site <ArrowUpRight size={15} aria-hidden="true" />
          </motion.a>
        </motion.div>

        <ToolMap project={project} />
      </div>
    </motion.article>
  );
}
