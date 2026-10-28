import fs from "node:fs";
import path from "node:path";
import Reveal from "@/components/Reveal";
import DesignGallery from "@/components/DesignGallery";

export const metadata = {
  title: "Design Work",
  description: "Brand identities, social graphics, posters and illustrations by Sulaimon Yusuf.",
};

// Read whatever is actually in /public/compressed at build time,
// so a missing file can never show up as a broken image.
function getImages() {
  const dir = path.join(process.cwd(), "public", "compressed");
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f))
    .sort((a, b) => parseInt(a.replace(/\D/g, ""), 10) - parseInt(b.replace(/\D/g, ""), 10))
    .map((f) => `/compressed/${f}`);
}

export default function DesignPage() {
  const images = getImages();
  return (
    <>
      <section className="bg-lavender px-4 pb-24 pt-40 md:px-6 md:pt-48">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <span className="chip">Since 2010 · {images.length} pieces</span>
          <h1 className="mt-8 text-[13vw] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-7xl md:text-[90px]">
            Design <em className="font-serif font-normal tracking-[-0.02em]">work.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed md:text-[22px] md:leading-snug">
            Before I wrote code, I designed. Brand identities, social graphics, posters and illustrations: the
            eye behind every interface I build.
          </p>
        </Reveal>
      </section>
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-[1100px]">
          <DesignGallery images={images} />
        </div>
      </section>
    </>
  );
}
