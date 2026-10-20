import { motion, useReducedMotion } from "motion/react";

const ORBS = [
  {
    className: "left-[-12%] top-[-14%] h-[34rem] w-[34rem]",
    color: "rgba(119, 123, 180, 0.32)",
    duration: 24,
    x: [0, 50, -20, 0],
    y: [0, -30, 40, 0],
  },
  {
    className: "right-[-14%] top-[6%] h-[30rem] w-[30rem]",
    color: "rgba(55, 118, 171, 0.34)",
    duration: 30,
    x: [0, -40, 30, 0],
    y: [0, 50, -20, 0],
  },
  {
    className: "bottom-[-18%] left-[28%] h-[32rem] w-[32rem]",
    color: "rgba(255, 45, 32, 0.18)",
    duration: 27,
    x: [0, 35, -45, 0],
    y: [0, -45, 25, 0],
  },
  {
    className: "bottom-[8%] right-[18%] h-[18rem] w-[18rem]",
    color: "rgba(255, 212, 59, 0.13)",
    duration: 20,
    x: [0, -30, 20, 0],
    y: [0, 25, -35, 0],
  },
];

export function GradientOrbs() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {ORBS.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[110px] ${orb.className}`}
          style={{
            background: `radial-gradient(circle at center, ${orb.color}, transparent 70%)`,
          }}
          animate={
            reduce
              ? undefined
              : { x: orb.x, y: orb.y, scale: [1, 1.08, 0.96, 1] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: orb.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}
