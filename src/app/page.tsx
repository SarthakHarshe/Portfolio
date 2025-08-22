import Hero from "@/components/sections/Hero";
import Photography from "@/components/sections/Photography";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Photography />
      <About />
      <Contact />
    </main>
  );
}
