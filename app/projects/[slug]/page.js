import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.title} — Case Study`,
    description: p.summary,
    openGraph: { title: `${p.title} — Case Study by ${site.name}`, description: p.summary, images: [p.cover] },
    twitter: { title: `${p.title} — Case Study`, description: p.summary, images: [p.cover] },
  };
}

const frames = ["bg-blush", "bg-mint", "bg-sky", "bg-butter", "bg-lavender", "bg-lime", "bg-peach"];

function Chapter({ title, children }) {
  return (
    <Reveal className="mt-14 first:mt-0">
      <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.03em] md:text-[34px]">{title}</h2>
      <div className="mt-5 text-lg font-light leading-[1.8]">{children}</div>
    </Reveal>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const index = projects.findIndex((x) => x.slug === slug);
  const frame = frames[index % frames.length];
  const related = [1, 2].map((d) => projects[(index + d) % projects.length]);

  const meta = [
    { k: "Client", v: p.client },
    { k: "Category", v: p.category },
    { k: "My role", v: p.role },
    { k: "Platforms", v: p.platforms.join(", ") },
    { k: "Year", v: p.year },
  ].filter((m) => m.v);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    headline: p.tagline,
    description: p.summary,
    url: `${site.url}/projects/${p.slug}/`,
    author: { "@type": "Person", name: site.name, url: site.url },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-lavender px-4 pb-56 pt-40 md:px-6 md:pt-48">
        <Reveal className="mx-auto max-w-[820px] text-center">
          <Link href="/#work" className="inline-flex items-center gap-2 text-[15px] underline-offset-4 hover:underline">
            <ArrowLeft size={16} /> All work
          </Link>
          <h1 className="mt-8 text-[12vw] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl md:text-[90px]">{p.title}</h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed md:text-[22px] md:leading-snug">{p.tagline}</p>
        </Reveal>
      </header>

      <div className="px-4 md:px-6">
        {/* Framed cover, overlapping the header like Meeko */}
        <Reveal className={`mx-auto -mt-44 max-w-[1100px] rounded-[28px] border-[0.8px] border-line p-3 md:p-5 ${frame}`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] md:aspect-[16/8.5]">
            <Image src={p.cover} alt={`${p.title} cover`} fill priority sizes="(min-width: 1100px) 1100px, 100vw" className="object-cover object-top" />
          </div>
        </Reveal>

        <div className="mx-auto mt-20 grid max-w-[1000px] gap-12 md:grid-cols-[220px_1fr] md:gap-20">
          <Reveal className="h-fit md:sticky md:top-32">
            <dl className="flex flex-col gap-5">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="text-[13px] uppercase tracking-[0.06em] text-muted">{m.k}:</dt>
                  <dd className="mt-1 text-[17px]">{m.v}</dd>
                </div>
              ))}
            </dl>
            {p.links.length > 0 && (
              <div className="mt-8 flex flex-col items-start gap-3">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2.5">
                    {l.label} <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[26px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[30px]">{p.summary}</p>
            </Reveal>

            {p.metrics?.length > 0 && (
              <Reveal className="mt-10 flex flex-wrap gap-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="rounded-full border-[0.8px] border-line px-6 py-3">
                    <span className="text-2xl font-semibold">{m.value}</span> <span className="text-muted">{m.label}</span>
                  </div>
                ))}
              </Reveal>
            )}

            <div className="mt-14">
              <Chapter title="The product">
                <p>{p.overview}</p>
              </Chapter>
              <Chapter title="What made it hard">
                <p>{p.challenge}</p>
              </Chapter>
              <Chapter title="How I built it">
                <ol className="flex flex-col gap-4">
                  {p.approach.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border-[0.8px] border-line text-[13px] font-normal">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Chapter>
              <Chapter title="Tools used">
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </Chapter>
              <Chapter title="What shipped">
                <p>{p.outcome}</p>
              </Chapter>
            </div>
          </div>
        </div>

        {p.gallery.length > 1 && (
          <div className="mx-auto mt-24 grid max-w-[1100px] gap-6 md:grid-cols-2">
            {p.gallery.slice(1).map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className={`rounded-[28px] border-[0.8px] border-line p-3 ${frames[(index + i + 2) % frames.length]}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                  <Image src={src} alt={`${p.title} screen ${i + 2}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Related projects */}
        <section className="mx-auto mt-28 max-w-[1100px] pb-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-[42px] font-semibold tracking-[-0.04em] md:text-[50px]">
              Related <em className="font-serif font-normal">projects</em>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link href={`/projects/${r.slug}/`} className="group card block overflow-hidden transition hover:-translate-y-1">
                  <div className={`border-b-[0.8px] border-line p-3 ${frames[(index + i + 1) % frames.length]}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[14px]">
                      <Image src={r.cover} alt={`${r.title} preview`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.04]" />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em]">{r.title}</h3>
                      <p className="mt-1 text-[13px] uppercase tracking-[0.06em] text-muted">{r.category}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border-[0.8px] border-line transition group-hover:rotate-45 group-hover:bg-lavender">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/#work" className="btn-outline">See all projects</Link>
          </Reveal>
        </section>
      </div>
    </article>
  );
}
