import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col">
      <Hero />
      <About />
      <Services />
      <Benefits />
      <CTA />
      <Contact />
    </main>
  );
}
