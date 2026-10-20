import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Tone = "cmd" | "out" | "json" | "ok" | "blank";

type Line = { text: string; tone: Tone };

const LINES: Line[] = [
  { text: "$ whoami", tone: "cmd" },
  { text: "henri_sylvain · développeur fullstack", tone: "out" },
  { text: "", tone: "blank" },
  { text: "$ cat stack.json", tone: "cmd" },
  { text: '{ "front": "React · Next.js",', tone: "json" },
  { text: '  "back": "Laravel · PHP",', tone: "json" },
  { text: '  "ia": "PyTorch · Pandas" }', tone: "json" },
  { text: "", tone: "blank" },
  { text: "$ status --availability", tone: "cmd" },
  { text: "✔ open_to: CDI · CDD · Freelance", tone: "ok" },
];

const TONE_CLASS: Record<Tone, string> = {
  cmd: "text-python-yellow",
  out: "text-snow",
  json: "text-php",
  ok: "text-mint",
  blank: "text-transparent",
};

const TOTAL = LINES.reduce((sum, line) => sum + line.text.length, 0);

export function Terminal() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce || count >= TOTAL) return;

    const timer = window.setTimeout(() => {
      setCount((value) => Math.min(TOTAL, value + 1));
    }, 14);

    return () => window.clearTimeout(timer);
  }, [count, reduce]);

  const visible = reduce ? TOTAL : count;
  let remaining = visible;

  const rendered = LINES.map((line) => {
    const take = Math.max(0, Math.min(line.text.length, remaining));
    remaining -= line.text.length;
    return { ...line, shown: line.text.slice(0, take), done: take >= line.text.length };
  });

  const activeIndex = rendered.findIndex((line) => !line.done);
  const cursorIndex = activeIndex === -1 ? rendered.length - 1 : activeIndex;

  return (
    <div className="code-card terminal-shadow relative overflow-hidden rounded-2xl">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-[11px] text-mist">
          henri@portfolio: ~/dev
        </span>
        <span className="ml-auto hidden rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-mist sm:block">
          zsh
        </span>
      </div>

      <div
        className="relative min-h-[15.5rem] space-y-1 px-4 py-5 font-mono text-[11.5px] leading-relaxed sm:min-h-[16.5rem] sm:px-5 sm:text-xs"
        aria-hidden="true"
      >
        {rendered.map((line, index) => (
          <div
            key={`${index}-${line.tone}`}
            className={`whitespace-pre-wrap break-words ${TONE_CLASS[line.tone]}`}
          >
            {line.shown}
            {index === cursorIndex && (
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-python-yellow/90" />
            )}
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-between border-t border-white/8 px-4 py-2 font-mono text-[10px] text-mist/70">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-mint" />
          status: available
        </span>
        <span>utf-8 · 80×24</span>
      </div>
    </div>
  );
}
