import { ArrowUpRight, CircleDot, FolderCode } from "lucide-react";
import { projects } from "../../data/profile";
import type { Accent } from "../../data/profile";
import { Reveal } from "../fx/Reveal";
import { TiltCard } from "../fx/TiltCard";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";
import { GithubIcon } from "../ui/BrandIcons";

const PREVIEWS: Record<Accent, string> = {
  laravel: "from-laravel/25 via-laravel/[0.06] to-transparent",
  python: "from-python/30 via-python/[0.08] to-transparent",
  php: "from-php/30 via-php/[0.08] to-transparent",
  yellow: "from-python-yellow/20 via-python-yellow/[0.05] to-transparent",
};

export function Projects() {
  return (
    <section id="projets" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="03"
            label="Projets"
            title={
              <>
                Des idées transformées en <span className="gradient-text">produits</span>.
              </>
            }
            description="Une sélection de projets personnels, professionnels et de contenu — chacun avec son lot de problèmes à résoudre."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href="https://github.com/henri-ahanto"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              <GithubIcon className="h-4 w-4" />
              Tous mes dépôts
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07} y={26} className="h-full">
              <TiltCard className="h-full">
                <article className="gradient-border relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-850/75 transition-colors duration-300 hover:bg-ink-800/85">
                  <div
                    className={`relative h-36 overflow-hidden border-b border-white/8 bg-gradient-to-br sm:h-40 ${PREVIEWS[project.accent]}`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "26px 26px",
                        maskImage:
                          "radial-gradient(ellipse at 30% 50%, black 20%, transparent 80%)",
                      }}
                    />
                    <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-ink-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-mist backdrop-blur">
                      {project.kind}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-7 right-3 select-none font-mono text-[6rem] font-bold leading-none text-white/[0.045]"
                    >
                      0{index + 1}
                    </span>
                    <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 font-mono">
                      <p className="text-[10px] text-mist/60">~/projects/{project.slug}</p>
                      <p className="mt-1.5 flex items-center gap-2 text-[13px] text-snow">
                        <span className="text-python-yellow">❯</span>
                        {project.snippet}
                        <span className="inline-block h-3.5 w-[6px] animate-blink bg-python-yellow/80" />
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-snow">{project.title}</h3>
                      <FolderCode className="mt-0.5 h-4 w-4 shrink-0 text-mist/40" />
                    </div>

                    <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-mist">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <TechBadge key={tag} name={tag} />
                      ))}
                    </div>

                    <div className="mt-5 border-t border-white/8 pt-4">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] text-python-light transition-colors hover:text-python-yellow"
                        >
                          {project.kind === "Formation" ? "Voir la chaîne" : "Voir sur GitHub"}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-mist/60">
                          <CircleDot className="h-3.5 w-3.5 text-python-yellow/70" />
                          Projet privé · détails sur demande
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
