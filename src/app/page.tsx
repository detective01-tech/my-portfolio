import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import DevSecOpsSection from "@/components/DevSecOpsSection";
import WhyMe from "@/components/WhyMe";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import SmoothScrollController from "@/components/SmoothScrollController";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SmoothScrollController />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-white text-slate-900 selection:bg-[#FF6B00] selection:text-white">
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll direction="none">
          <LogoMarquee />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll>
          <DevSecOpsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <WhyMe />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}
