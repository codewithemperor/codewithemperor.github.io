import Link from "next/link";
import { Check, Smartphone, LayoutDashboard, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { services, stack } from "@/lib/site";

const serviceStyle = [
  { bg: "bg-sky", Icon: Smartphone },
  { bg: "bg-blush", Icon: LayoutDashboard },
  { bg: "bg-lime", Icon: Users },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          title={<>Services I <em>offer</em></>}
          intro={<>Whether you need a <b>whole product</b> built or an <b>extra engineer</b> on your team, here&apos;s how I can help.</>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const { bg, Icon } = serviceStyle[i % serviceStyle.length];
            return (
              <Reveal key={s.title} delay={i * 0.08} className="card flex flex-col p-8 transition hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className={`grid size-14 place-items-center rounded-full border-[0.8px] border-line ${bg}`}>
                    <Icon size={22} strokeWidth={1.3} />
                  </span>
                  <span className="text-[15px]">(0{i + 1})</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 font-light leading-relaxed">{s.description}</p>
                <ul className="mt-8 flex flex-col gap-3 border-t-[0.8px] border-hair pt-6">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px]">
                      <Check size={16} className="mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="text-xl">Not sure which fits your project?</p>
          <Link href="/contact" className="btn-outline mt-5">
            Start a conversation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="border-y-[0.8px] border-line px-4 py-24 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          title={<>What I build <em>with</em></>}
          intro={<>The tools I reach for to take a product from <b>Figma file</b> to <b>store release</b>.</>}
        />
        <div className="mx-auto flex max-w-[900px] flex-col gap-8">
          {stack.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.05} className="text-center">
              <p className="eyebrow mb-4 text-muted">{g.group}</p>
              <ul className="flex flex-wrap justify-center gap-3">
                {g.items.map((item) => (
                  <li key={item} className="chip shadow-[inset_0_-3px_0_0_rgba(29,29,29,0.12)] transition hover:-translate-y-0.5 hover:bg-lavender">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
