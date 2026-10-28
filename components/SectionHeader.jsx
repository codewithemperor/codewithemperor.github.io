import Reveal from "./Reveal";

/** Meeko section opener: large tight sans title (with a serif italic accent) and a short intro. */
export default function SectionHeader({ title, intro, align = "center", className = "" }) {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 md:mb-20 ${center ? "mx-auto max-w-[680px] text-center" : "max-w-[620px]"} ${className}`}>
      <h2 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[56px] [&_em]:font-serif [&_em]:font-normal [&_em]:tracking-[-0.01em]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted [&_b]:font-semibold [&_b]:text-ink">{intro}</p>}
    </Reveal>
  );
}
