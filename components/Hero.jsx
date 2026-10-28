"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1];

/** Nuria-style per-letter blur-in headline. */
function BlurWord({ text, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block whitespace-nowrap" aria-hidden="true">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(14px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.9, delay: delay + i * 0.04, ease }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

/** Pops in, then bobs gently. Can be dragged and springs back, like the Framer original. */
function Floater({ className, delay, bob = 10, duration = 5, rotate = 0, children }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute z-10 cursor-grab active:cursor-grabbing ${className}`}
      initial={{ opacity: 0, scale: 0.3, rotate: rotate - 12 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 160, damping: 14, delay }}
      drag
      dragSnapToOrigin
      dragElastic={0.4}
      whileDrag={{ scale: 1.08 }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -bob, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ReactTile() {
  return (
    <div className="grid size-full place-items-center rounded-[22%] bg-gradient-to-b from-[#3fb8ff] to-[#0a6cff] shadow-[0_20px_40px_-12px_rgba(10,108,255,0.55),inset_0_2px_0_rgba(255,255,255,0.35)]">
      <svg viewBox="-12 -11 24 22" className="w-[62%]" fill="none" stroke="white" strokeWidth="1.1">
        <circle r="2.05" fill="white" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </svg>
    </div>
  );
}

function NodeTile() {
  return (
    <div className="grid size-full place-items-center rounded-[22%] bg-gradient-to-b from-[#2b2b2f] to-[#111113] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.12)]">
      <svg viewBox="0 0 24 24" className="w-[56%]">
        <path d="M12 1.8 21 7v10l-9 5.2L3 17V7z" fill="#5fa04e" />
        <text x="12" y="15.6" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">JS</text>
      </svg>
    </div>
  );
}

// Classic pixel arrow cursor: B = outline, W = fill.
const cursorRows = [
  "B", "BB", "BWB", "BWWB", "BWWWB", "BWWWWB", "BWWWWWB", "BWWWWWWB", "BWWWWWWWB",
  "BWWWWWWWWB", "BWWWWWWWWWB", "BWWWWWWBBBBB", "BWWWBWWB", "BWWBBWWB", "BWB  BWWB",
  "BB   BWWB", "B     BWWB", "      BWWB", "       BB",
];
function PixelCursor() {
  return (
    <svg viewBox="0 0 12 19" className="size-full drop-shadow-[4px_6px_0_rgba(0,0,0,0.5)]" shapeRendering="crispEdges">
      {cursorRows.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === " " ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={c === "B" ? "#1d1d1d" : "#fff"} />
        )
      )}
    </svg>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 16, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: reduce ? { duration: 0 } : { duration: 0.8, delay, ease },
  });

  return (
    <section className="relative flex bg-[#0b0b0b] text-[#f0e9f0] min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-36 md:pt-40">
      {/* Nuria glow, lightened */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 16%, rgba(255,111,165,0.22) 0%, rgba(166,108,255,0.14) 45%, rgba(11,11,11,0) 80%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center text-center">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0b0b0b] px-3.5 py-1.5 text-xs text-[#a09f9c] backdrop-blur"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          {site.available ? "Available for work" : "Currently booked"}
        </motion.span>

        <div className="relative mt-6 w-fit">
          <h1 className="font-display text-[clamp(44px,14.5vw,180px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-[#f0e9f0]">
            <span className="sr-only">{site.name}, Full-Stack Engineer</span>
            <BlurWord text="Full-Stack" delay={0.15} />
            <br />
            <BlurWord text="Engineer" delay={0.45} />
          </h1>

          <Floater className="left-[16%] top-[-24%] w-[16%] max-w-[140px]" delay={1.0} bob={8} duration={5.5}>
            <div className="relative aspect-square overflow-hidden rounded-full border-[5px] border-[#f3c6e2] bg-blush shadow-[0_20px_40px_-14px_rgba(218,122,188,0.6)]">
              <Image src="/images/yusuf.jpg" alt="" fill sizes="140px" className="pointer-events-none object-cover" priority />
            </div>
          </Floater>
          <Floater className="right-[3%] top-[-14%] w-[15%] max-w-[140px] aspect-square" delay={1.15} bob={12} duration={4.6} rotate={6}>
            <div className="aspect-square"><ReactTile /></div>
          </Floater>
          <Floater className="left-[1%] top-[56%] w-[8%] max-w-[84px]" delay={1.3} bob={9} duration={5}>
            <div className="aspect-[12/19]"><PixelCursor /></div>
          </Floater>
          <Floater className="right-[-4%] top-[62%] w-[15%] max-w-[140px]" delay={1.45} bob={11} duration={6} rotate={-6}>
            <div className="aspect-square"><NodeTile /></div>
          </Floater>
        </div>

        <motion.p
          {...fadeUp(0.9)}
          className="mt-3 font-serif text-[9vw] italic leading-none tracking-[-0.015em] text-[#f0e9f0] sm:text-5xl md:text-6xl"
        >
          with intention
        </motion.p>

        <motion.p {...fadeUp(1.05)} className="mt-8 max-w-[560px] text-base leading-relaxed text-[#a09f9c]">
          I&apos;m Yusuf, a full-stack and mobile engineer based in {site.location.split(",")[0]}. I build
          apps, platforms and dashboards that feel as good as they look.
        </motion.p>

        <motion.div {...fadeUp(1.2)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/#work" className="btn-gradient min-w-[160px]">
            View my work
          </Link>
          <Link href="/#about" className="btn group min-w-[160px] border border-white/10 bg-gradient-to-b from-[#1c191e] to-[#141216] text-[#f0e9f0] hover:-translate-y-0.5 hover:border-white/20">
            About me <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
