import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { content } from "../content";
import { SideNavPanel, SocialIcon } from "../components/MobileDrawer";
import { useMotionConfig } from "../lib/useMotionConfig";
import { useFocusTrap } from "../lib/useFocusTrap";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { reduce } = useMotionConfig();
  const shellRef = useRef<HTMLDivElement>(null);
  const onClose = useCallback(() => setOpen(false), []);
  useFocusTrap(open, shellRef, onClose);
  const iconSocials = content.contact.socials.filter((item) => item.id !== "email");

  return (
    <div ref={shellRef}>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[70]">
        <div className="flex items-start justify-between gap-4 px-[clamp(1rem,3vw,2rem)] py-[clamp(0.9rem,2vw,1.4rem)]">
          <div className="pointer-events-auto inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-base)_78%,transparent)] backdrop-blur-md">
            <motion.a
              href="#top"
              whileHover={reduce ? undefined : { opacity: 0.8 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="px-[clamp(0.9rem,1.6vw,1.2rem)] py-2 text-[length:var(--text-small)] font-bold uppercase tracking-normal"
            >
              {content.shortName}
            </motion.a>
            <span aria-hidden="true" className="h-4 w-px bg-[var(--border)]" />
            <motion.button
              type="button"
              className="grid size-10 place-items-center"
              aria-expanded={open}
              aria-controls="site-nav"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((value) => !value)}
              whileHover={reduce ? undefined : { scale: 1.06 }}
              whileTap={reduce ? undefined : { scale: 0.94 }}
            >
              {open ? (
                <span aria-hidden="true" className="text-lg leading-none">
                  ×
                </span>
              ) : (
                <span className="flex w-4 flex-col gap-1" aria-hidden="true">
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-full bg-current" />
                  <span className="h-px w-3/4 bg-current" />
                </span>
              )}
            </motion.button>
          </div>

          {!open && (
            <div className="pointer-events-auto flex items-center gap-2">
              {iconSocials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                  className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-base)_78%,transparent)] text-[var(--text)] backdrop-blur-md"
                >
                  <SocialIcon id={social.id} />
                </motion.a>
              ))}
            </div>
          ) }
        </div>
      </header>
      <SideNavPanel open={open} onClose={onClose} />
    </div>
  );
}

