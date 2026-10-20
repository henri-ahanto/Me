import { techColors } from "../../data/profile";

type TechBadgeProps = {
  name: string;
  color?: string;
};

export function TechBadge({ name, color }: TechBadgeProps) {
  const dot = color ?? techColors[name] ?? "#94a3b8";

  return (
    <span className="chip transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-snow">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: dot, boxShadow: `0 0 8px ${dot}66` }}
      />
      {name}
    </span>
  );
}
