import { GradientOrbs } from "./GradientOrbs";
import { ParticleField } from "./ParticleField";

export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(17,26,46,0.9),_transparent_65%)]" />
      <div className="grid-bg absolute inset-0" />
      <GradientOrbs />
      <ParticleField />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
    </div>
  );
}
