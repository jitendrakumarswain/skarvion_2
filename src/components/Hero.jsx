"use client";

import { useEffect, useState } from "react";
import structureImage from "../assets/structure.png";
import ParticlesBg from "./ParticlesBg";
import QuoteModal from "./QuoteModal";
import { Typewriter } from "react-simple-typewriter";

import {
  FaArrowRight,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { HiOutlineSparkles } from "react-icons/hi2";


const SLIDES = [

 
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    tag: "Modern Duplex Architecture",
    location: "Jayadev Vihar, Bhubaneswar",
  },

  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    tag: "Contemporary Interior & Planning",
    location: "Khandagiri, Bhubaneswar",
  },

  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    tag: "Premium Residential Elevation",
    location: "Cuttack-Bhubaneswar Road",
  },
];


const PILLARS = [
  "Architectural Planning",
  "3D Elevation Designing",
  "BOQ Estimation",
  "Turnkey Construction",
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Quote Modal control
  const [showForm, setShowForm] = useState(false);


  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };


  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + SLIDES.length) % SLIDES.length
    );
  };


  return (
    <section className="skv-hero">

      {/* Dynamic Background Image Slider */}
      <div className="skv-slider-container">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`skv-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <div
              className="skv-slide-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
          </div>
        ))}
      </div>


      {/* Modern Gradient Overlays */}
      <div className="skv-hero-overlay" />
      <div className="skv-hero-glow" />


      {/* Particle Effects */}
      <ParticlesBg />


      {/* Hero Content */}
      <div className="skv-hero-container">
        <div className="skv-hero-content">

          {/* Active Design Tag Pill */}
          <div className="skv-badge">
            <HiOutlineSparkles className="skv-badge-icon" />

            <span>
              {SLIDES[currentSlide].tag} •{" "}
              {SLIDES[currentSlide].location}
            </span>
          </div>


          {/* Typewriter Dynamic Headline */}
          <h1 className="skv-hero-headline">

            <span className="skv-static-heading">
              Architectural Elegance:
            </span>

            <span className="skv-typewriter-text">
              <Typewriter
                words={[
                  "Smart Planning for Dream Homes",
                  "Modern Luxury Villas & Duplexes",
                  "Innovative Structural Engineering",
                  "Turnkey Construction Precision",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={35}
                delaySpeed={2200}
              />
            </span>

          </h1>


          <p className="skv-hero-desc">
            Bespoke residential blueprints, custom elevation styles, and
            expert civil execution built to stand for generations across
            Odisha.
          </p>


          {/* Pillars */}
          <div className="skv-pillars-grid">
            {PILLARS.map((item) => (
              <span key={item} className="skv-pillar-chip">
                <span className="skv-chip-bullet" />
                {item}
              </span>
            ))}
          </div>


          {/* CTA & Trust Stats */}
          <div className="skv-hero-actions">

            <button
              className="skv-btn-hero-primary"
              onClick={() => {
                setShowForm(true);
              }}
            >
              <span>Get Free Estimation</span>
              <FaArrowRight className="skv-cta-icon" />
            </button>


            <div className="skv-exp-pill">

              <div className="skv-exp-badge">
                <FaAward />
              </div>

              <div className="skv-exp-text">
                <strong>10+ Years</strong>
                <span>Civil Architecture</span>
              </div>

            </div>

          </div>

        </div>
      </div>


      {/* Carousel Navigation Arrows */}

      <button
        className="skv-slider-arrow prev"
        onClick={prevSlide}
        aria-label="Previous home design"
      >
        <FaChevronLeft />
      </button>


      <button
        className="skv-slider-arrow next"
        onClick={nextSlide}
        aria-label="Next home design"
      >
        <FaChevronRight />
      </button>


      {/* Slide Pagination Indicator Bars */}
      <div className="skv-slider-indicators">

        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`skv-indicator-bar ${
              idx === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}

      </div>


      {/* Separate Quote Modal */}
      {showForm && (
        <QuoteModal
          onClose={() => setShowForm(false)}
        />
      )}

    </section>
  );
}