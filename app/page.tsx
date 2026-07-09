import Navbar from "@/app/components/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Skills from "@/app/sections/Skills";
import Projects from "@/app/sections/Projects";
import Achievements from "@/app/sections/Achievements";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
