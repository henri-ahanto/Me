import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { navLinks } from "../../data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const cursor = window.scrollY + 150;
      let current = "accueil";

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= cursor) current = link.id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const scrollToSection = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }, 90);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/8 bg-ink-900/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a
            href="#accueil"
            aria-label="Retour en haut"
            className="group flex items-center gap-2.5 font-mono text-sm text-snow"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-ink-800 text-[11px] font-bold text-python-yellow shadow-[0_0_26px_-8px_rgba(255,212,59,0.55)] transition-colors duration-300 group-hover:border-python-yellow/40">
              HS
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-laravel shadow-[0_0_8px_#ff2d20]" />
            </span>
            <span className="hidden sm:inline">
              henri<span className="text-laravel">.</span>dev
            </span>
          </a>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-medium transition-colors duration-200 lg:px-3 ${
                  active === link.id ? "text-snow" : "text-mist hover:text-snow"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn btn-primary hidden whitespace-nowrap !px-4 !py-2.5 text-xs lg:inline-flex"
            >
              Me contacter
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-snow transition-colors hover:border-white/20 hover:bg-white/[0.08] md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="mobile-backdrop"
              type="button"
              aria-label="Fermer le menu en cliquant à l'extérieur"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-ink-950/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-[4.5rem] z-40 overflow-hidden rounded-2xl border border-white/10 bg-ink-850/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <nav aria-label="Navigation mobile" className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={scrollToSection(link.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                      active === link.id
                        ? "bg-white/[0.06] text-snow"
                        : "text-mist hover:bg-white/[0.04] hover:text-snow"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-python-yellow/70">
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40" />
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={scrollToSection("contact")}
                className="btn btn-primary mt-2 w-full"
              >
                Démarrer une conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
