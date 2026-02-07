import { ReactLenis } from "lenis/react";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";

export default function Home() {
  return (
    <ReactLenis root>
      <Hero />
      <About />
      <Services />
      <OurProcess />
      <Blog />
      <Cta />
    </ReactLenis>
  );
}
