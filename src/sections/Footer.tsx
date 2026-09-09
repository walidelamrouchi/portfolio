import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 pb-8 pt-6 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold uppercase tracking-[0.12em] text-[#f1efe9]">
            W
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#f1efe9]">
              Walid
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-[0.68rem] uppercase tracking-[0.2em] text-white/60">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-[#E1E0CC] px-3 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-black transition hover:gap-2.5"
        >
          <span className="text-black"> Top </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black ">
            <ArrowUpRight className="h-3.5 w-3.5 text-[#E1E0CC]"  />
          </span>
        </a>
      </div>

      <div className="mx-auto mt-5 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-5 text-[0.62rem] uppercase tracking-[0.15em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Walid. All rights reserved.</p>
        <p>Made with React + Tailwind</p>
      </div>
    </footer>
  );
}
