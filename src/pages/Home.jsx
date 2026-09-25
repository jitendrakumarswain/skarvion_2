import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ExpertiseSection from "../components/ExpertiseSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import ProcessTimeline from "../components/ProcessTimeline";



import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />

          <AnnouncementBar />
          <WhyUs />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="expertise">
          <ExpertiseSection />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <ProcessTimeline />
        </section>

          <section id="projects">
          <Projects />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
          <Footer />
        </section>
      </main>

      <a
        href="tel:+917064949597"
        className="call-btn"
        aria-label="Call SKARVION"
      >
        📞
      </a>

      <a
        href="https://wa.me/917064949597"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact SKARVION on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}