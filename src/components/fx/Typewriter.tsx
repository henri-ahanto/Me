import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type TypewriterProps = {
  words: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

export function Typewriter({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 32,
  pause = 1700,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }

    const word = words[wordIndex % words.length];
    const complete = text === word;
    const empty = text.length === 0;

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (complete && !deleting) delay = pause;
    if (empty && deleting) delay = 260;

    const timer = window.setTimeout(() => {
      if (!deleting && complete) {
        setDeleting(true);
      } else if (deleting && empty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, reduce]);

  return (
    <span className={className}>
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.95em] w-[3px] translate-y-[0.08em] animate-blink rounded-full bg-python-yellow align-middle"
      />
    </span>
  );
}
