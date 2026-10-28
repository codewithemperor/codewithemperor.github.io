import { Mail } from "lucide-react";

/** Meeko's rotating circular "I am available" stamp. Pass a position class (relative/absolute) via className. */
export default function AvailableBadge({ className = "relative", text = "I am available · for freelance & roles · " }) {
  return (
    <div className={`grid size-[150px] place-items-center rounded-full border-[0.8px] border-line bg-sky ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text fontSize="8.4" fontWeight="500" letterSpacing="2.2" fill="#1d1d1d" style={{ textTransform: "uppercase" }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <Mail className="size-8" strokeWidth={1.2} aria-hidden="true" />
      <span className="sr-only">Available for work</span>
    </div>
  );
}
