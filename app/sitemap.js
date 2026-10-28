import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["", "/contact/", "/design/"].map((p) => ({ url: `${site.url}${p || "/"}` }));
  const cases = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}/` }));
  return [...pages, ...cases];
}
