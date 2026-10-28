"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

/** Meeko accordion: outlined pills that open into a short answer. */
export default function Faq({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <ul className="mx-auto flex max-w-[720px] flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="rounded-[22px] border-[0.8px] border-line bg-paper">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-4 text-left text-[17px]"
            >
              {item.q}
              <Plus size={18} strokeWidth={1.4} className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 font-light leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
