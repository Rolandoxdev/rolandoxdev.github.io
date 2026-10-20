import { useEffect, useLayoutEffect, useRef } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import TrakkonCaseStudy from "./components/TrakkonCaseStudy";
import RecoCaseStudy from "./components/RecoCaseStudy";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const scrollPositions = new Map();

const ScrollRevealObserver = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-scroll-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.scrollRevealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.scrollRevealed = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const currentKey = useRef(location.key);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const saveScrollPosition = () => {
      scrollPositions.set(currentKey.current, window.scrollY);
    };

    window.addEventListener("scroll", saveScrollPosition, { passive: true });
    saveScrollPosition();

    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    currentKey.current = location.key;

    if (location.pathname === "/" && location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        const top = Math.max(
          0,
          section.getBoundingClientRect().top + window.scrollY - 80
        );
        window.scrollTo(0, top);
        scrollPositions.set(location.key, top);
      }
      return;
    }

    if (navigationType === "POP") {
      window.scrollTo(0, scrollPositions.get(location.key) ?? 0);
      return;
    }

    window.scrollTo(0, 0);
  }, [location.key, location.pathname, location.state, navigationType]);

  return null;
};

const PortfolioHome = () => {
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

const App = () => (
  <>
    <ScrollManager />
    <ScrollRevealObserver />
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects/trakkon" element={<TrakkonCaseStudy />} />
      <Route path="/projects/reco" element={<RecoCaseStudy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
