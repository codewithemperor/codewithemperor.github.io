"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { site, socials } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/design", label: "Design" },
  { href: "/contact", label: "Contact" },
];

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.4l4.4 5.9zm-1.1 18.1h1.7L7.3 3.8H5.5z" />
  </svg>
);
const socialIcon = { GitHub: Github, LinkedIn: Linkedin, "X / Twitter": XIcon, Instagram };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  // Meeko hides the bar on scroll down and brings it back on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 200 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5"
      animate={{ y: hidden && !open ? "-130%" : "0%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1100px] items-center justify-between rounded-[20px] border-[0.8px] border-line bg-paper px-5 py-3.5 shadow-[inset_0_-4px_0_0_rgba(29,29,29,0.08)] md:px-7"
      >
        <Link href="/" className="font-serif text-[26px] italic leading-none tracking-tight">
          Yusuf<span className="not-italic text-violet">.</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group relative block h-[22px] overflow-hidden text-[15px]">
                {/* Meeko rolling text hover */}
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">{l.label}</span>
                <span className="absolute inset-x-0 top-full block text-violet transition-transform duration-300 group-hover:-translate-y-full">
                  {l.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="hidden items-center gap-2 md:flex">
          {socials.slice(0, 3).map((s) => {
            const Icon = socialIcon[s.name];
            return (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-9 place-items-center rounded-[10px] border-[0.8px] border-line bg-paper shadow-[inset_0_-3px_0_0_rgba(29,29,29,0.15)] transition hover:-translate-y-0.5 hover:bg-lavender"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-[10px] border-[0.8px] border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="card mx-auto mt-2 max-w-[1100px] p-6 md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-2xl font-medium tracking-tight">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={`mailto:${site.email}`} className="btn-dark mt-6 w-full">
              {site.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
