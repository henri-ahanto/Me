import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "../../data/profile";
import { Reveal } from "../fx/Reveal";
import { Terminal } from "../fx/Terminal";
import { Typewriter } from "../fx/Typewriter";
import { GithubIcon, YoutubeIcon } from "../ui/BrandIcons";

const FLOAT_BADGES = [
  {
    label: "Python",
    color: "#5aa0d8",
    className: "-top-5 right-4 animate-float sm:right-8",
  },
  {
    label: "Laravel",
    color: "#ff2d20",
    className: "bottom-14 -left-4 animate-float-slow sm:-left-7",
  },
  {
    label: "PHP 8",
    color: "#777bb4",
    className: "top-[42%] -right-5 animate-float [animation-delay:2s]",
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="accueil" className="relative overflow-hidden pb-10 pt-28 sm:pt-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mint">
              <span className="relative flex h-2 w-2">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              Disponible · CDI &amp; Freelance
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 font-mono text-[11px] text-mist sm:text-xs">
              <span className="text-python-yellow">const</span> developer ={" "}
              <span className="text-php">"AHANTO"</span>;
            </p>
            <h1 className="mt-3 text-balance text-[2.9rem] font-extrabold leading-[0.98] tracking-tight text-snow sm:text-6xl xl:text-[4.6rem]">
              Henri
              <br />
              <span className="gradient-text">Sylvain</span>
              <span className="text-laravel">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-6 flex min-h-7 items-center gap-2.5 font-mono text-sm sm:text-base">
              <span className="text-python-yellow">$</span>
              <Typewriter words={profile.roles} className="font-medium text-snow" />
            </div>
            <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-mist sm:text-base">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projets" className="btn btn-primary">
                Voir mes projets
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href={profile.links.cv} download className="btn btn-ghost">
                <Download className="h-4 w-4 text-python-yellow" />
                Télécharger le CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-mist">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-laravel" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Profil GitHub"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-snow"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.links.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chaîne YouTube"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-laravel/40 hover:text-laravel"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Envoyer un email"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mist transition-all hover:-translate-y-0.5 hover:border-python-yellow/40 hover:text-python-yellow"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22} y={34} className="relative mx-auto w-full max-w-md lg:max-w-none">
          {FLOAT_BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              className={`absolute z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-850/90 px-3 py-2 font-mono text-[11px] text-snow shadow-xl backdrop-blur sm:flex ${badge.className}`}
              whileHover={reduce ? undefined : { scale: 1.06 }}
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badge.color, boxShadow: `0 0 10px ${badge.color}` }}
              />
              {badge.label}
            </motion.div>
          ))}

          <Terminal />

          <div className="mt-4 flex items-center justify-between px-1 font-mono text-[10px] text-mist/60">
            <span>// portfolio.ts — toujours en construction</span>
            <span className="hidden items-center gap-1 text-python-yellow/70 sm:flex">
              100% passion <span aria-hidden="true">⚡</span>
            </span>
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-14 sm:mt-20">
        <StackMarquee />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

const STACK = [
  "Python",
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "FastAPI",
  "Django",
  "Flask",
  "PyTorch",
  "TensorFlow",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Figma",
  "Framer",
  "Java",
  "C++",
];

const DOT_COLORS: Record<string, string> = {
  Python: "#4B8BBE",
  Laravel: "#FF2D20",
  PHP: "#777BB4",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  FastAPI: "#009688",
  Django: "#44B78B",
  Flask: "#E6EDF7",
  PyTorch: "#EE4C2C",
  TensorFlow: "#FF6F00",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Figma: "#F24E1E",
  Framer: "#0055FF",
  Java: "#F89820",
  "C++": "#00599C",
};

function StackMarquee() {
  return (
    <div className="marquee marquee-mask relative overflow-hidden rounded-xl border border-white/8 bg-ink-950/50 py-3">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-7 pr-7 sm:gap-9 sm:pr-9"
          >
            {STACK.map((name) => (
              <span
                key={`${copy}-${name}`}
                className="flex items-center gap-2 font-mono text-[11px] text-mist"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: DOT_COLORS[name] ?? "#94a3b8" }}
                />
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
