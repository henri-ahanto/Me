import { BrainCircuit, Boxes, Code2, Database, Layers, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePortfolio } from "../../data/PortfolioProvider";
import type { Accent, SkillCategory } from "../../data/profile";
import { Reveal } from "../fx/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";

const ICONS: Record<SkillCategory["icon"], LucideIcon> = {
  palette: Palette,
  code: Code2,
  layers: Layers,
  brain: BrainCircuit,
  database: Database,
  boxes: Boxes,
};

const ACCENTS: Record<
  Accent,
  { icon: string; border: string; shadow: string; line: string; count: string }
> = {
  python: {
    icon: "bg-python/10 text-python-light ring-python/20",
    border: "hover:border-python/35",
    shadow: "hover:shadow-[0_0_60px_-24px_rgba(55,118,171,0.8)]",
    line: "from-python/70",
    count: "text-python-light/70",
  },
  laravel: {
    icon: "bg-laravel/10 text-laravel ring-laravel/20",
    border: "hover:border-laravel/35",
    shadow: "hover:shadow-[0_0_60px_-24px_rgba(255,45,32,0.65)]",
    line: "from-laravel/70",
    count: "text-laravel/70",
  },
  php: {
    icon: "bg-php/10 text-php ring-php/20",
    border: "hover:border-php/40",
    shadow: "hover:shadow-[0_0_60px_-24px_rgba(119,123,180,0.8)]",
    line: "from-php/70",
    count: "text-php/80",
  },
  yellow: {
    icon: "bg-python-yellow/10 text-python-yellow ring-python-yellow/20",
    border: "hover:border-python-yellow/35",
    shadow: "hover:shadow-[0_0_60px_-24px_rgba(255,212,59,0.55)]",
    line: "from-python-yellow/70",
    count: "text-python-yellow/70",
  },
};

export function Skills() {
  const { data } = usePortfolio();
  const { skillCategories } = data;

  return (
    <section id="competences" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Compétences"
          title={
            <>
              Une stack <span className="gradient-text">complète</span>, pensée pour livrer.
            </>
          }
          description="Du design à la mise en production : les outils que j'utilise au quotidien pour construire des applications web, mobiles et des projets d'IA."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = ICONS[category.icon];
            const accent = ACCENTS[category.accent];

            return (
              <Reveal key={category.title} delay={index * 0.06} y={22} className="h-full">
                <article
                  className={`glass group relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${accent.border} ${accent.shadow}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent opacity-60 ${accent.line}`}
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ${accent.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`font-mono text-[10px] ${accent.count}`}>
                      {String(category.skills.length).padStart(2, "0")} skills
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-snow">{category.title}</h3>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <TechBadge key={skill} name={skill} />
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="text-center font-mono text-[11px] text-mist/60">
            <span className="text-python-yellow">//</span> et toujours en veille sur ce qui vient
            ensuite.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
