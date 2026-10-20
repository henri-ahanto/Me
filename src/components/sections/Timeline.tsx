import { GraduationCap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { usePortfolio } from "../../data/PortfolioProvider";
import { Reveal } from "../fx/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { data } = usePortfolio();
  const { timeline, diplomas } = data;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.78", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <section id="parcours" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Parcours"
          title={
            <>
              Un chemin fait de <span className="gradient-text">code</span> et d&apos;apprentissage.
            </>
          }
          description="Formation universitaire, stages en entreprise et projets personnels : chaque étape a nourri ma façon de concevoir le logiciel."
        />

        <div ref={ref} className="relative mt-12 pl-7">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10"
          />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-python-yellow via-php to-laravel"
            style={reduce ? undefined : { scaleY }}
          />

          <div className="space-y-4">
            {timeline.map((item, index) => {
              const isWork = item.type === "work";
              const dotColor = isWork ? "bg-laravel" : "bg-python-light";
              const labelColor = isWork ? "text-laravel" : "text-python-light";
              const ringColor = isWork ? "ring-laravel/20" : "ring-python/20";

              return (
                <Reveal key={`${item.date}-${item.title}`} delay={index * 0.05} y={20}>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-7 top-[22px] z-10 grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-ink-900 ${dotColor}`}
                    >
                      {item.current && (
                        <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-laravel/60" />
                      )}
                    </span>

                    <article
                      className={`glass card-hover rounded-2xl p-5 ring-1 ring-transparent sm:p-6 ${ringColor}`}
                    >
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.15em]">
                        <span className={labelColor}>{isWork ? "Expérience" : "Formation"}</span>
                        <span aria-hidden="true" className="text-mist/40">
                          ·
                        </span>
                        <span className="normal-case tracking-normal text-mist">{item.date}</span>
                        {item.current && (
                          <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/[0.07] px-2 py-0.5 text-[9px] tracking-[0.12em] text-mint">
                            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-mint" />
                            En cours
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-base font-semibold text-snow">{item.title}</h3>
                      <p className={`mt-0.5 font-mono text-xs ${labelColor}`}>{item.place}</p>

                      {item.description && (
                        <p className="mt-2.5 text-[13px] leading-relaxed text-mist">
                          {item.description}
                        </p>
                      )}
                    </article>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.08} className="mt-8">
          <div className="glass rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-php" />
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                Diplômes antérieurs
              </h3>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {diplomas.map((diploma) => (
                <div
                  key={`${diploma.year}-${diploma.title}`}
                  className="rounded-xl border border-white/8 bg-white/[0.025] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <p className="font-mono text-[10px] text-python-yellow/80">{diploma.year}</p>
                  <p className="mt-1 text-xs font-semibold text-snow">{diploma.title}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-mist">{diploma.place}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
