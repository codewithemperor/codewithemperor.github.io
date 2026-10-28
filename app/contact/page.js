import { Mail, MessageCircle, CalendarDays, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a mobile app, web platform or engineering role.`,
};

const details = [
  { label: "E-mail", value: site.email, href: `mailto:${site.email}`, Icon: Mail, bg: "bg-sky" },
  { label: "WhatsApp", value: site.phone, href: site.whatsapp, Icon: MessageCircle, bg: "bg-mint" },
  { label: "Book a call", value: "30 min on Calendly", href: site.calendly, Icon: CalendarDays, bg: "bg-blush" },
  { label: "Based in", value: `${site.location} · Remote-friendly`, Icon: MapPin, bg: "bg-butter" },
];

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Cross-platform mobile apps (React Native / Expo), full-stack web platforms and admin dashboards, and embedded engineering work where I join your team.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I work on contract or full-time, and I'm comfortable inside an existing sprint process.",
  },
  {
    q: "How do we usually start?",
    a: "Send a message with what you're building, your timeline and budget, or book a 30-minute call. I'll reply with questions and a suggested way forward.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Clear async updates by email or WhatsApp, plus calls when a decision needs talking through.",
  },
  {
    q: "Can you help if I only have an idea or a Figma file?",
    a: "Yes. I have a design background, so I can help shape the idea, fill gaps in the design, and take it all the way to a store-ready build.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-lavender px-4 pb-48 pt-40 md:px-6 md:pt-48">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h1 className="text-[13vw] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl md:text-[90px]">
            Get in <em className="font-serif font-normal tracking-[-0.02em]">touch.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[520px] text-lg leading-relaxed md:text-[22px] md:leading-snug">
            Whether you have a clear spec or just an idea, I&apos;ll help shape it into something that ships.
          </p>
        </Reveal>
      </section>

      <section className="-mt-32 px-4 md:px-6">
        <Reveal className="card mx-auto grid max-w-[1000px] gap-12 p-8 md:grid-cols-2 md:gap-16 md:p-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Let&apos;s get in touch</h2>
            <p className="mt-4 max-w-[340px] font-light leading-relaxed">
              Feel free to reach out about projects, collaborations, roles, or just to say hello.
            </p>
            <ul className="mt-10 flex flex-col gap-7">
              {details.map(({ label, value, href, Icon, bg }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-full border-[0.8px] border-line ${bg}`}>
                    <Icon size={18} strokeWidth={1.4} />
                  </span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-0.5 block font-light underline-offset-4 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-light">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </Reveal>
      </section>

      <section className="px-4 py-24 md:px-6 md:py-32">
        <SectionHeader
          title={<>Need more <em>details?</em></>}
          intro="A few answers to things people usually ask before we start working together."
        />
        <Reveal>
          <Faq items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
