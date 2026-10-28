import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { Services, Stack } from "@/components/Services";
import { About, Numbers, Principles, Journey } from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Numbers />
      <Principles />
      <Services />
      <Stack />
      <Journey />
    </>
  );
}
