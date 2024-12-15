import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <About/>
    </main>    
  );
}
