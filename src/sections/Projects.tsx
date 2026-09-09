import { motion } from "motion/react";
import { content } from "../content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white">
      <header className="relative z-20 px-6 pb-20 pt-28 text-center sm:px-10 lg:px-24 lg:pt-40">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-[#f2efec] sm:text-6xl"
        >
          SELECTED PROJECTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-7 max-w-xl font-mono text-[0.68rem] font-bold uppercase leading-6 tracking-[0.2em] text-white/75"
        >
          FROM REAL-WORLD PROBLEMS TO RELIABLE DIGITAL PRODUCTS, EVERY BUILD
          HERE IS MADE WITH INTENTION.
        </motion.p>
      </header>

      <div className="relative">
        {content.projects.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-0 h-screen overflow-hidden"
            style={{ zIndex: index + 1 }}
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
