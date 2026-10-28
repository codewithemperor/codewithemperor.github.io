import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-32 text-center">
      <p className="font-display text-[120px] font-black leading-none md:text-[180px]">404</p>
      <h1 className="mt-2 font-serif text-4xl italic md:text-5xl">Page not found</h1>
      <Link href="/" className="btn-outline mt-10">Back home</Link>
    </section>
  );
}
