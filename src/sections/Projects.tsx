import { motion } from "motion/react";
import { content } from "../content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-4 py-16 text-white sm:px-6 lg:px-12 lg:py-20">
      <header className="mx-auto max-w-5xl pb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-[-0.06em] text-[#f2efec] sm:text-6xl"
        >
          SELECTED PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-5 max-w-2xl font-mono text-[0.68rem] font-bold uppercase leading-6 tracking-[0.18em] text-white/70"
        >
          FROM HIGH-CONVERSION LANDING PAGES TO AI-POWERED DASHBOARDS —
          EVERY BUILD HERE IS MADE WITH STYLE AND PURPOSE.
        </motion.p>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {content.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
