import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Fonts are bundled in app/fonts so the build never depends on downloading them from Google.
const instrument = localFont({
  src: [
    { path: "./fonts/instrument-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});
const inter = localFont({ src: "./fonts/inter.woff2", weight: "100 900", variable: "--font-inter", display: "swap" });
const raleway = localFont({ src: "./fonts/raleway.woff2", weight: "800 900", variable: "--font-raleway", display: "swap" });
const caveat = localFont({ src: "./fonts/caveat.woff2", weight: "500 700", variable: "--font-caveat", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Sulaimon Yusuf",
    "codewithemperor",
    "Full-Stack Engineer",
    "React Native Developer",
    "Mobile Engineer Nigeria",
    "React",
    "Node.js",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: ["/images/yusuf.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@codewithemperor",
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: ["/images/yusuf.jpg"],
  },
  icons: { icon: "/favicon.png" },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable} ${raleway.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
