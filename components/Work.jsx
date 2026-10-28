import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { featuredProjects, otherProjects } from "@/lib/projects";

const frames = ["bg-blush", "bg-mint", "bg-sky", "bg-butter", "bg-lavender", "bg-lime", "bg-peach"];

/** Meeko sticky card: each one pins under the navbar and the next slides over it. */
function StackCard({ project, index }) {
  return (
    <div className="sticky" style={{ top: `${110 + index * 18}px` }}>
      <Link
        href={`/projects/${project.slug}/`}
        className="group card grid items-center gap-8 p-5 md:grid-cols-[1fr_1.15fr] md:gap-12 md:p-10"
      >
        <div className="order-2 px-2 pb-3 md:order-1 md:px-6 md:pb-0">
          <h3 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.03em] md:text-[40px]">{project.title}</h3>
          <p className="eyebrow mt-3">{project.category}</p>
          <p className="mt-6 max-w-[380px] text-[17px] leading-relaxed text-muted">{project.tagline}</p>
          <span className="btn-outline mt-8 !py-2.5">
            Read case study <ArrowUpRight size={15} className="transition group-hover:rotate-45" />
          </span>
        </div>
        <div className={`order-1 overflow-hidden rounded-[20px] border-[0.8px] border-line p-3 md:order-2 md:p-4 ${frames[index % frames.length]}`}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[12px]">
            <Image
              src={project.cover}
              alt={`${project.title} screens`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-left-top transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

function CompactCard({ project, index }) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link href={`/projects/${project.slug}/`} className="group card flex h-full flex-col overflow-hidden transition hover:-translate-y-1">
        <div className={`border-b-[0.8px] border-line p-3 ${frames[(index + 3) % frames.length]}`}>
          <div className="relative aspect-[16/11] overflow-hidden rounded-[14px]">
            <Image
              src={project.cover}
              alt={`${project.title} website`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
        </div>
        <div className="flex flex-1 items-start justify-between gap-4 p-5">
          <div className="min-w-0">
            <h3 className="truncate text-xl font-semibold leading-tight tracking-[-0.02em]" title={project.title}>{project.title}</h3>
            <p className="mt-1.5 text-[13px] uppercase tracking-[0.06em] text-muted">{project.category}</p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border-[0.8px] border-line transition group-hover:rotate-45 group-hover:bg-lavender">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          title={<>My selected <em>works</em></>}
          intro={<>Products I&apos;ve built end to end. Each has a <b>case study</b> covering the problem, the <b>decisions</b> behind it, and what shipped.</>}
        />
        <div className="flex flex-col gap-8">
          {featuredProjects.map((p, i) => (
            <StackCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mb-10 mt-28 text-center">
          <h3 className="text-[32px] font-semibold tracking-[-0.03em] md:text-[40px]">
            More <em className="font-serif font-normal">work</em>
          </h3>
          <p className="mt-2 text-muted">Apps, platforms and websites</p>
        </Reveal>
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p, i) => (
            <CompactCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
