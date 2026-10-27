
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaRulerCombined } from "react-icons/fa";
import "../css-modular/SpacePlanning.css";

const WHATSAPP_NUMBER = "917064949597";

export default function SpacePlanning() {
  const handleEnquiry = () => {
    const message =
      "Hello Skarvion Infrastructure, I am interested in your Space Planning services. Please share the details.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Space Planning Services | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore professional space planning for homes, offices and commercial interiors with Skarvion Infrastructure. Contact us for a personalized consultation."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/space-planning"
        />
      </Helmet>

      <main className="space-planning-page">
        <section className="space-planning-hero">
          <div className="space-planning-content">
            <span className="space-planning-label">
              SMART DESIGN · BETTER LIVING
            </span>

            <h1>
              Space Planning for
              <span> Modern Living</span>
            </h1>

            <p>
              Make every square foot count. We help organize rooms, furniture,
              circulation and functional zones to create practical, comfortable
              and well-balanced spaces.
            </p>

            <button
              type="button"
              className="space-planning-cta"
              onClick={handleEnquiry}
            >
              <FaWhatsapp aria-hidden="true" />
              Discuss Your Project
            </button>
          </div>

          <div className="space-planning-feature">
            <FaRulerCombined aria-hidden="true" />
            <h2>Plan with Purpose</h2>
            <p>
              Thoughtful layouts for homes, offices and commercial spaces.
            </p>
          </div>
        </section>

        <section className="space-planning-services">
          <h2>Our Space Planning Services</h2>
          <p className="space-planning-intro">
            Layout solutions tailored to your space, needs and lifestyle.
          </p>

          <div className="space-planning-grid">
            <article className="space-planning-card">
              <h3>Residential Planning</h3>
              <p>
                Organize bedrooms, living rooms, kitchens and shared areas for
                comfortable everyday living.
              </p>
            </article>

            <article className="space-planning-card">
              <h3>Office Planning</h3>
              <p>
                Arrange workstations, meeting rooms and circulation areas for
                efficient use of available space.
              </p>
            </article>

            <article className="space-planning-card">
              <h3>Furniture Layouts</h3>
              <p>
                Plan furniture positions, movement paths and practical room
                arrangements before implementation.
              </p>
            </article>

            <article className="space-planning-card">
              <h3>Small-Space Solutions</h3>
              <p>
                Explore smart layout ideas to make compact rooms feel more
                usable, organized and open.
              </p>
            </article>
          </div>
        </section>

        <section className="space-planning-bottom">
          <h2>Planning a New Space?</h2>
          <p>Tell us about your project and discuss your requirements on WhatsApp.</p>
          <button
            type="button"
            className="space-planning-cta"
            onClick={handleEnquiry}
          >
            <FaWhatsapp aria-hidden="true" />
            Enquire on WhatsApp
          </button>
        </section>
      </main>
    </>
  );
}
