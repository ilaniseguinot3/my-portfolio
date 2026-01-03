import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
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
      {/* <Footer /> */}
    </div>
  );
}