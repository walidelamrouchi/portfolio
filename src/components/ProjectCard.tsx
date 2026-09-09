import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import findItImage from "../assets/imgs/findit img.png";
import bankingImage from "../assets/imgs/app-banking img.png";
import todoImage from "../assets/imgs/todo img.png";
import { content, type Project } from "../content";
import { useMotionConfig } from "../lib/useMotionConfig";

const projectImages: Record<string, string> = {
  findit: findItImage,
  "Banking Management System": bankingImage,
  "Todo App": todoImage,
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const image = projectImages[project.id] ?? todoImage;
  const { reduce, duration, y } = useMotionConfig();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(13,18,20,0.96),rgba(19,23,29,0.9))] px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:px-6 sm:py-6 lg:px-7 lg:py-7"
    >
      <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="flex min-h-full flex-col justify-between">
          <div className="mb-6 flex items-center justify-between gap-3">
            <motion.a
        href={project.liveUrl ?? "#projects"}
        className="group mt-5 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-[#E1E0CC] py-1 pl-4 pr-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-black transition-all hover:gap-2.5"
      >
        <span className="text-black">Live site</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
          <ArrowUpRight className="h-3.5 w-3.5" style={{ color: '#E1E0CC' }} aria-hidden="true" />
        </span>
      </motion.a>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/55">
              {String(index + 1).padStart(2, "0")} / {String(content.projects.length).padStart(2, "0")}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-bold tracking-[-0.06em] text-[#f3f0ee] sm:text-4xl lg:text-[3rem]">
              {project.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70 sm:text-[0.95rem]">
              {project.summary}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/75"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0f1317] p-3 shadow-inner shadow-black/30">
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="overflow-hidden rounded-[12px] border border-white/8 bg-[#171d21]">
            <img
              src={image}
              alt={project.imageAlt}
              className="h-[250px] w-full object-cover object-center sm:h-[280px] lg:h-[310px]"
            />
          </div>
        </div>
      </div>

      
    </motion.article>
  );
}
