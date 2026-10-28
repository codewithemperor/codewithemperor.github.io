"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Meeko progress bar: hairline pill, pastel fill that grows when scrolled into view. */
export default function SkillBar({ name, value, color, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="flex items-baseline justify-between text-lg">
        <span className="font-light">{name}</span>
        <span className="font-light tabular-nums">{value}%</span>
      </div>
      <div
        className="mt-2.5 h-2.5 overflow-hidden rounded-full border-[0.8px] border-line"
        role="meter"
        aria-label={name}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className={`h-full border-r-[0.8px] border-line ${color}`}
          initial={{ width: reduce ? `${value}%` : "0%" }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
