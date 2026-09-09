import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { content, type SocialLink } from "../content";
import { useMotionConfig } from "../lib/useMotionConfig";

type SideNavPanelProps = {
  open: boolean;
  onClose: () => void;
};

function SocialIcon({ id }: { id: SocialLink["id"] }) {
  if (id === "github") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1 .07 1.54 1.05 1.54 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.37.21 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }
  if (id === "linkedin") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H4v11h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7 1.5 1.5 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.56-.56-2.62-1.95-2.62-1.06 0-1.7.72-1.97 1.41-.1.25-.13.6-.13.95V20H11s.03-9.7 0-10.7h2.5v1.52c.33-.51 1.17-1.24 2.86-1.24 2.09 0 3.64 1.37 3.64 4.3V20Z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7.5 12 13l8-5.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function SideNavPanel({ open, onClose }: SideNavPanelProps) {
  const panelRef = useRef<HTMLElement>(null);
  const { reduce, duration, stagger } = useMotionConfig();

  const iconSocials = content.contact.socials.filter((item) => item.id !== "email");

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.1 : 0.28 }}
        >
          <button
            type="button"
            className="drawer-backdrop absolute inset-0"
            aria-label="Fermer le menu"
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            id="site-nav"
            aria-label="Navigation"
            className="absolute inset-y-0 right-0 grid w-full grid-rows-[auto_1fr_auto] overflow-hidden bg-[var(--bg-base)] px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(1.25rem,3vw,2.5rem)] md:w-[min(52vw,38rem)]"
            initial={{ x: reduce ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: reduce ? 0 : "100%" }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            <div aria-hidden="true" className="sidebar-glow pointer-events-none absolute inset-0" />
            <div className="relative z-10 flex justify-end gap-2">
              {iconSocials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                  className="grid size-10 place-items-center rounded-full border border-[var(--border)] text-[var(--text)]"
                >
                  <SocialIcon id={social.id} />
                </motion.a>
              ))}
            </div>
            <nav className="relative z-10 grid content-center gap-[clamp(0.2rem,1vw,0.6rem)]">
              {content.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: reduce ? 0 : 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.12 + i * stagger, duration, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduce ? undefined : { x: 8 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="flex items-start gap-3 font-sans text-[length:var(--text-nav)] font-bold uppercase leading-[1.05] tracking-normal text-[var(--text)]"
                >
                  <span className="mt-[0.35em] font-mono text-[length:var(--text-label)] font-medium text-[var(--accent-2)]">
                    {link.index}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="relative z-10 grid gap-3">
              <p className="font-mono text-[length:var(--text-label)] uppercase tracking-[0.14em] text-[var(--accent-2)]">
                Socials
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {iconSocials.map((social) => (
                  <li key={social.id}>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={reduce ? undefined : { y: -2 }}
                      whileTap={reduce ? undefined : { scale: 0.97 }}
                      className="text-[length:var(--text-small)] text-[var(--text)]"
                    >
                      {social.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { SocialIcon };
