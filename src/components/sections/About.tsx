import { GraduationCap, Languages, MapPin, Sparkles } from "lucide-react";
import { usePortfolio } from "../../data/PortfolioProvider";
import { Counter } from "../fx/Counter";
import { Reveal } from "../fx/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const CODE_LINES = [
  {
    number: 1,
    content: (
      <>
        <span className="text-python-yellow">const</span>{" "}
        <span className="text-python-light">developer</span>{" "}
        <span className="text-mist">=</span> {"{"}
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        {"  "}name: <span className="text-php">"Henri Sylvain"</span>,
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        {"  "}role: <span className="text-php">"Fullstack Developer"</span>,
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        {"  "}location: <span className="text-php">"Lokossa, Bénin"</span>,
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        {"  "}stack: [<span className="text-php">"React"</span>,{" "}
        <span className="text-php">"Laravel"</span>,{" "}
        <span className="text-php">"Python"</span>],
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        {"  "}focus: [<span className="text-php">"Web"</span>,{" "}
        <span className="text-php">"Mobile"</span>,{" "}
        <span className="text-php">"IA"</span>],
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        {"  "}availability: <span className="text-php">"CDI · CDD · Freelance"</span>,
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        {"  "}openToWork: <span className="text-mint">true</span>,
      </>
    ),
  },
  {
    number: 9,
    content: <>{"}"} as const;</>,
  },
];

export function About() {
  const { data } = usePortfolio();
  const { profile, stats } = data;

  const info = [
    {
      icon: MapPin,
      label: "Localisation",
      value: profile.location,
      color: "text-laravel",
      bg: "bg-laravel/10",
    },
    {
      icon: GraduationCap,
      label: "Formation",
      value: "Licence 3 Informatique & Télécom — INSTI",
      color: "text-python-light",
      bg: "bg-python/10",
    },
    {
      icon: Sparkles,
      label: "Disponibilité",
      value: profile.availability,
      color: "text-python-yellow",
      bg: "bg-python-yellow/10",
    },
  ];

  return (
    <section id="a-propos" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="À propos"
          title={
            <>
              Un développeur <span className="gradient-text">polyvalent</span>, du frontend à
              l&apos;IA.
            </>
          }
          description="Je conçois des produits complets : interfaces soignées, APIs solides, bases de données pensées pour durer et une touche d'intelligence artificielle quand elle apporte de la valeur."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div className="flex flex-col">
            <Reveal>
              <div className="space-y-4 text-sm leading-relaxed text-mist sm:text-[15px]">
                {profile.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="glass card-hover h-full rounded-xl px-4 py-4 sm:px-5">
                    <p className="font-mono text-2xl font-bold text-snow sm:text-3xl">
                      <span className="gradient-text">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-mist sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-6">
              <div className="glass rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  <Languages className="h-3.5 w-3.5 text-php" />
                  Langues
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.languages.map((language) => (
                    <span key={language} className="chip">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={30}>
            <div className="code-card overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-mist">profile.ts</span>
                <span className="ml-auto rounded border border-php/25 bg-php/10 px-1.5 py-0.5 font-mono text-[9px] text-php">
                  TS
                </span>
              </div>

              <div className="overflow-x-auto px-4 py-5 sm:px-5">
                <div className="flex min-w-max gap-4 font-mono text-[11px] leading-7 sm:text-[12px]">
                  <div aria-hidden="true" className="select-none text-right text-mist/25">
                    {CODE_LINES.map((line) => (
                      <div key={line.number}>{line.number}</div>
                    ))}
                  </div>
                  <div className="text-snow/90">
                    {CODE_LINES.map((line) => (
                      <div key={line.number} className="whitespace-pre">
                        {line.content}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/8 px-4 py-2 font-mono text-[10px] text-mist/60">
                <span>TypeScript · UTF-8</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                  valid
                </span>
              </div>
            </div>

            <div className="mt-4 grid gap-3">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="glass card-hover flex items-start gap-3 rounded-xl p-3.5"
                >
                  <span
                    className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg ${item.bg} ${item.color}`}
                  >
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-mist/70">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-snow/90">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
