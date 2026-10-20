import type { ReactNode } from "react";
import { Reveal } from "../fx/Reveal";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="section-label">
          {index} · {label}
        </span>
        <span className="h-px w-12 bg-gradient-to-r from-python-yellow/70 to-transparent" />
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-snow sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-mist sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
