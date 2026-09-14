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
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#FF6B00] selection:text-white">
      <SmoothScrollController />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <RevealOnScroll delay={80} duration={1150}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <Services />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <DevSecOpsSection />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <WhyMe />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll delay={80} duration={1150}>
        <Contact />
      </RevealOnScroll>
      <Footer />
    </main>
  );
}
