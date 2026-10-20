import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect } from "react";

export function Spotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const smoothX = useSpring(x, { stiffness: 110, damping: 24, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 110, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 300);
      y.set(event.clientY - 300);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-[0.13] blur-[80px] md:block"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle at center, rgba(90,160,216,0.9), rgba(119,123,180,0.4) 45%, transparent 70%)",
      }}
    />
  );
}
