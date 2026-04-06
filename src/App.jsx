import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="techStack">
        <TechStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
            {/* <div id="about">
        <AboutMe />
      </div> */}
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
};

export default App;
