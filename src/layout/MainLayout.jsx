import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Journey from "../sections/Journey";
import Contact from "../sections/Contact";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#050b14] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
