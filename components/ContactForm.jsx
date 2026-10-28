"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

// Meeko underline fields
const field =
  "w-full border-b-[0.8px] border-line bg-transparent pb-3 pt-1 text-[17px] text-ink placeholder:text-ink/70 transition focus:border-violet focus:outline-none";
const label = "text-[13px] text-muted";

const projectTypes = ["Mobile app", "Web platform", "Embedded engineer", "Full-time role", "Something else"];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [type, setType] = useState(projectTypes[0]);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.set("type", type);
    try {
      const res = await fetch(site.formspree, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center py-10" role="status">
        <span className="grid size-14 place-items-center rounded-full border-[0.8px] border-line bg-mint"><Check /></span>
        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">Message sent.</h3>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-8">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <fieldset>
        <legend className={`${label} mb-3`}>I&apos;m interested in</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`rounded-full border-[0.8px] border-line px-4 py-2 text-sm transition ${
                type === t ? "bg-ink text-paper" : "bg-paper hover:bg-lavender"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-1">
        <span className={label}>Name</span>
        <input name="name" required autoComplete="name" placeholder="What is your name?*" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="Your email address*" className={field} />
      </label>
      <label className="flex flex-col gap-1">
        <span className={label}>Message</span>
        <textarea name="message" required rows={4} placeholder="Tell me about your project*" className={`${field} resize-none`} />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-outline self-start disabled:opacity-60">
        {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : "Send a message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Email me directly at {site.email}.
        </p>
      )}
    </form>
  );
}
