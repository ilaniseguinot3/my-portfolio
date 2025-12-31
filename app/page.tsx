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
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="journey"><AboutJourney /></div>
      {/* <div id="projects"><Projects /></div> */}
      {/* <Footer /> */}
    </div>
  );
}
