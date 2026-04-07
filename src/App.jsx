import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Topbar from "./components/Topbar";
import WhyUs from "./components/WhyUs";
import ProcessTimeline from "./components/ProcessTimeline";
import Careers from "./components/Careers";
import { FaWhatsapp } from "react-icons/fa";
import './App.css'

function App() {


 return (
  <>
   
    <Navbar />

    <section id="home">
      <Hero />
      <WhyUs />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="services">
      <Services />
      <ProcessTimeline />
    </section>


      <section id="pricing">
        <Pricing />
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

      <a
        href="https://wa.me/917064949597?text=Hello%20Skarvion,%20I%20am%20looking%20for%20construction%20services.%20Could%20you%20please%20share%20more%20details?%20Thank%20you!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      
    </>
  );
}

export default App;