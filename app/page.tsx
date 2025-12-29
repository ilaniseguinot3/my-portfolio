import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <div id="hero"><Hero /></div>
      <div id="projects"><Projects /></div>
      <Footer />
    </div>
  );
}
