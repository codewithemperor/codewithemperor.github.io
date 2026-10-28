import Link from "next/link";
import { Users, ShieldCheck, Code2, PenTool, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SkillBar from "./SkillBar";
import AvailableBadge from "./AvailableBadge";
import { principles, journey, skills, site } from "@/lib/site";
import { projects } from "@/lib/projects";

// Scalloped portrait frame from Meeko: four shallow bumps down each side, flat top and bottom.
const W = 560;
const H = 580;
const BUMPS = 4;
const SEG = H / BUMPS; // chord of each bump
const R = SEG * 0.56; // radius > half the chord keeps the bulge shallow
const D = R - Math.sqrt(R * R - (SEG / 2) ** 2); // how far each bump sticks out
const side = (x, dir) =>
  Array.from({ length: BUMPS }, (_, i) => {
    const y = dir > 0 ? (i + 1) * SEG : H - (i + 1) * SEG;
    return `A${R},${R} 0 0 1 ${x},${y}`;
  }).join(" ");
const scallop = `M${D},0 H${W - D} ${side(W - D, 1)} H${D} ${side(D, -1)} Z`;

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-[1100px] items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-[540px]">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Portrait of ${site.name}`}>
            <defs>
              <clipPath id="scallop">
                <path d={scallop} />
              </clipPath>
            </defs>
            <path d={scallop} fill="#ffe7a9" />
            <image href="/images/yusuf.jpg" width={W} height={H} preserveAspectRatio="xMidYMid slice" clipPath="url(#scallop)" />
            <path d={scallop} fill="none" stroke="#1d1d1d" strokeWidth="1.4" />
          </svg>
          <AvailableBadge className="absolute bottom-[5%] left-[7%] z-10 origin-bottom-left scale-[0.7] sm:scale-90" />
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[56px]">
              Hello, I&apos;m <em className="font-serif font-normal tracking-[-0.01em]">Yusuf.</em>
            </h2>
            <div className="mt-6 space-y-5 text-lg font-light leading-[1.75]">
              <p>
                I&apos;m {site.name}, a full-stack and mobile engineer based in {site.location}. I started as a
                graphic designer in 2010 and began writing code in 2016, so I care as much about how a
                product feels as how it&apos;s built.
              </p>
              <p>
                Today I build production mobile and web products with React, React Native and Node.js: rider and
                driver apps, rewards platforms, delivery services and the dashboards that run them.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Numbers() {
  const year = new Date().getFullYear();
  const numbers = [
    { value: `${year - 2010}+`, label: "Years designing", color: "#fbebea" },
    { value: `${year - 2016}+`, label: "Years writing code", color: "#e3e3ff" },
    { value: projects.length, label: "Products & sites shipped", color: "#e3f2ff" },
    { value: 3, label: "Platforms: iOS, Android, Web", color: "#dbf5f0" },
  ];
  return (
    <section className="bg-lavender px-4 py-24 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          className="!mb-12"
          title={<>My numbers say <em>it all</em></>}
          intro={<>A quick look at the <b>experience</b> and <b>range</b> behind the work.</>}
        />
        <ul className="flex flex-wrap justify-center gap-4">
          {numbers.map((n, i) => (
            <Reveal as="li" key={n.label} delay={i * 0.07}>
              <div
                className={`flex cursor-default items-center gap-4 rounded-full border-[0.8px] border-line bg-paper py-3 pl-6 pr-8 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] ${
                  i % 2 ? "hover:rotate-[4deg]" : "hover:-rotate-[4deg]"
                }`}
              >
              <span
                className="font-display text-[54px] font-extrabold leading-none tracking-tight"
                style={{ color: n.color, WebkitTextStroke: "1.2px #1d1d1d" }}
              >
                {n.value}
              </span>
              <span className="max-w-[130px] text-[15px] leading-snug">{n.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const principleStyle = [
  { bg: "bg-mint", Icon: Users },
  { bg: "bg-blush", Icon: ShieldCheck },
  { bg: "bg-sky", Icon: Code2 },
  { bg: "bg-butter", Icon: PenTool },
];

export function Principles() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal className="h-fit lg:sticky lg:top-32">
          <h2 className="text-[42px] font-semibold leading-[1.1] tracking-[-0.04em] md:text-[56px]">
            High-quality work with real <em className="font-serif font-normal tracking-[-0.01em]">value</em> considered.
          </h2>
          <p className="mt-6 max-w-[460px] text-lg font-light leading-[1.75]">
            How I approach every product: start with the people using it, sweat the unhappy paths, and leave
            code the next engineer can move fast in.
          </p>
          <Link href="/contact" className="btn-outline mt-8">
            Work with me
          </Link>
        </Reveal>

        <div className="flex flex-col gap-6">
          {principles.map((p, i) => {
            const { bg, Icon } = principleStyle[i % principleStyle.length];
            return (
              <div key={p.title} className="sticky" style={{ top: `${120 + i * 22}px` }}>
                <div className={`rounded-[28px] border-[0.8px] border-line p-8 md:p-10 ${bg}`}>
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-full border-[0.8px] border-line bg-paper/60">
                      <Icon size={22} strokeWidth={1.3} />
                    </span>
                    <span className="text-[15px]">(0{i + 1})</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-3 text-[17px] font-light leading-[1.7]">{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          title={<>My <em>journey</em> so far</>}
          intro={<>From <b>graphic design</b> in 2010 to shipping <b>full-stack products</b> today.</>}
        />
        <ol className="mx-auto flex max-w-[860px] flex-col gap-4">
          {journey.map((j, i) => (
            <Reveal as="li" key={j.title + j.year} delay={i * 0.05} className="card grid gap-3 p-6 md:grid-cols-[150px_1fr] md:items-center md:gap-8 md:px-8">
              <span className="w-fit rounded-full border-[0.8px] border-line bg-lavender px-3 py-1 text-[13px]">{j.year}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{j.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{j.org}</p>
                <p className="mt-3 font-light leading-relaxed">{j.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12 text-center">
          <p className="text-xl">Want the full picture?</p>
          {site.resumeUrl ? (
            <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5">
              Download résumé <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link href="/contact" className="btn-outline mt-5">
              Get in touch
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
