import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "raw" | "compiling" | "revealing" | "done";

const EASE = [0.76, 0, 0.24, 1] as const;

const BUILD_LOGS = [
  { text: "> npm run build", tone: "cmd" },
  { text: "✓ styles.css compiled", tone: "ok" },
  { text: "✓ components hydrated", tone: "ok" },
  { text: "✓ animations ready", tone: "ok" },
  { text: "> deploying portfolio…", tone: "cmd" },
] as const;

const LOG_COLORS: Record<(typeof BUILD_LOGS)[number]["tone"], string> = {
  cmd: "text-slate-200",
  ok: "text-mint",
};

type IntroExperienceProps = {
  onRevealStart: () => void;
};

export function IntroExperience({ onRevealStart }: IntroExperienceProps) {
  const reduce = useReducedMotion() ?? false;
  const [phase, setPhase] = useState<Phase>("raw");
  const [logs, setLogs] = useState(0);
  const titleRef = useRef("");
  const reduceRef = useRef(reduce);
  const phaseRef = useRef(phase);
  const siteStarted = useRef(false);

  phaseRef.current = phase;

  useEffect(() => {
    reduceRef.current = reduce;
  }, [reduce]);

  const startSite = useCallback(() => {
    if (siteStarted.current) return;
    siteStarted.current = true;
    onRevealStart();
  }, [onRevealStart]);

  const beginReveal = useCallback(() => {
    startSite();
    setPhase("revealing");
  }, [startSite]);

  // 2 secondes de page brute, puis compilation.
  useEffect(() => {
    titleRef.current = document.title;
    document.title = "Henri Sylvain AHANTO";
    window.scrollTo(0, 0);

    const timer = window.setTimeout(() => {
      if (phaseRef.current !== "raw") return;

      if (reduceRef.current) {
        beginReveal();
        return;
      }

      startSite();
      setPhase("compiling");
    }, 2000);

    return () => {
      window.clearTimeout(timer);
      document.title = titleRef.current;
    };
  }, [beginReveal, startSite]);

  // Logs de compilation + lancement du rideau.
  useEffect(() => {
    if (phase !== "compiling") return;

    const timers = BUILD_LOGS.map((_, index) =>
      window.setTimeout(() => setLogs(index + 1), 80 + index * 110),
    );
    const revealTimer = window.setTimeout(beginReveal, 900);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(revealTimer);
    };
  }, [phase, beginReveal]);

  // Fin de l'intro.
  useEffect(() => {
    if (phase !== "revealing") return;

    const timer = window.setTimeout(
      () => setPhase("done"),
      reduceRef.current ? 40 : 720,
    );

    return () => window.clearTimeout(timer);
  }, [phase]);

  // Échap pour passer l'intro.
  useEffect(() => {
    if (phase === "revealing" || phase === "done") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") beginReveal();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, beginReveal]);

  // Verrouille le scroll pendant l'intro.
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Restaure le titre à la fin.
  useEffect(() => {
    if (phase === "done") document.title = titleRef.current;
  }, [phase]);

  if (phase === "done") return null;

  const revealing = phase === "revealing";

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white"
      data-phase={phase}
      style={{ fontFamily: '"Times New Roman", Times, serif', willChange: "transform" }}
      initial={false}
      animate={{ y: revealing ? "100%" : "0%" }}
      transition={revealing ? { duration: reduce ? 0 : 0.68, ease: EASE } : { duration: 0 }}
    >
      {/* Rendu brut, styles navigateur par défaut */}
      <div style={{ padding: 8 }}>
        <p
          className="text-black"
          style={{ margin: "1em 0", fontSize: 16, lineHeight: "normal", fontWeight: 400 }}
        >
          Hi i'm Henri Sylvain AHANTO
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-4 w-[2px] translate-y-[0.15em] animate-blink bg-black align-middle"
          />
        </p>
      </div>

      {/* Flash chromatique pendant la compilation */}
      {phase === "compiling" && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.16, 0.03, 0.1, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(100deg, rgba(55,118,171,0.22), rgba(119,123,180,0.2) 50%, rgba(255,45,32,0.22))",
          }}
        />
      )}

      {/* Barre de progression de build */}
      {phase === "compiling" && (
        <div className="absolute inset-x-0 top-0 h-[3px] bg-black/[0.06]">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-python-yellow via-php to-laravel"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.82, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Console de build */}
      {phase === "compiling" && (
        <div className="absolute inset-x-4 bottom-5 sm:bottom-8 sm:left-8 sm:right-auto sm:w-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#070b14] shadow-[0_24px_70px_-25px_rgba(0,0,0,0.8)]"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[9px] text-slate-400">build.log</span>
            </div>

            <div className="space-y-0.5 px-3 py-2.5 font-mono text-[11px] leading-relaxed">
              {BUILD_LOGS.slice(0, logs).map((line, index) => (
                <motion.div
                  key={line.text}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.14 }}
                  className={LOG_COLORS[line.tone]}
                >
                  {line.text}
                  {index === logs - 1 && (
                    <span className="ml-1 inline-block h-3 w-1.5 animate-blink bg-python-yellow align-middle" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Bouton pour passer l'intro */}
      {!revealing && (
        <button
          type="button"
          onClick={beginReveal}
          className="absolute bottom-4 right-4 font-sans text-[10px] uppercase tracking-[0.16em] text-black/40 underline underline-offset-4 transition-colors hover:text-black/70"
        >
          Passer l&apos;intro
        </button>
      )}

      {/* Bandes colorées qui précèdent le rideau */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-full mb-2 h-2 bg-gradient-to-r from-python-yellow via-php to-laravel"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-full mb-4 h-1 bg-gradient-to-r from-python via-php to-laravel opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-full mb-6 h-px bg-gradient-to-r from-python-yellow/70 via-php/70 to-laravel/70"
      />
    </motion.div>
  );
}
