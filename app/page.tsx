import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import About from "@/components/About";
import AboutJourney from "@/components/AboutJourney";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <AboutJourney />
      <Projects />
      <Contact />
    </div>
  );
}