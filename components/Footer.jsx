import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { site, socials } from "@/lib/site";

/** Meeko's closing "Let's talk about your project." block, kept light. Shown on every page. */
function TalkCTA() {
  return (
    <section className="px-4 pb-20 pt-24 md:pt-32">
      <Reveal className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <span className="grid size-14 place-items-center rounded-2xl rounded-bl-sm border-[0.8px] border-line bg-paper shadow-[inset_0_-4px_0_0_rgba(29,29,29,0.12)]">
          <MessageCircle size={22} strokeWidth={1.4} />
        </span>
        <h2 className="mt-8 text-[13vw] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl md:text-[90px]">
          Let&apos;s talk about
          <br />
          your <em className="font-serif font-normal tracking-[-0.02em]">project.</em>
        </h2>
        <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-muted md:text-[22px] md:leading-snug">
          Got a project in mind? Let&apos;s build something great. I can turn that idea into a real
          product.
        </p>
        <div className="relative mt-10">
          <Link href="/contact" className="btn-outline">
            Get in touch
          </Link>
          {/* Handwritten note + arrow */}
          <div aria-hidden="true" className="absolute left-full top-1/2 ml-4 hidden w-[170px] -translate-y-2 sm:block">
            <svg viewBox="0 0 60 40" className="absolute -left-2 -top-9 w-12 -scale-x-100 text-ink" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M52 34C40 30 20 22 10 6" />
              <path d="M8 16 9.5 5.5 19 9" />
            </svg>
            <p className="-rotate-[8deg] font-hand text-[26px] leading-[0.9]">
              and make it
              <br />
              real together
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-lavender">
      <TalkCTA />
      <div className="mx-4 border-t-[0.8px] border-line md:mx-6">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[15px]">
            © {new Date().getFullYear()} {site.name}. All rights reserved · Nigeria 🇳🇬
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[15px] underline-offset-4 hover:underline">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
