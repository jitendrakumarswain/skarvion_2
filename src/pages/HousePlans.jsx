import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "../css-modular/HousePlans.css";

export default function HousePlans() {
  const faqItems = [
    {
      question: "Can Skarvion Infrastructure prepare house plans in Bhubaneswar?",
      answer:
        "Yes. Skarvion Infrastructure provides residential architectural planning services for house projects in Bhubaneswar and surrounding areas.",
    },
    {
      question: "Do you provide 2D house plans?",
      answer:
        "Yes. House planning can include 2D floor plans based on the plot dimensions, requirements, room configuration and project needs.",
    },
    {
      question: "Can you prepare plans for duplex and G+1 houses?",
      answer:
        "Yes. Planning can be prepared for independent houses, duplex homes and G+1 residential projects depending on the site and project requirements.",
    },
    {
      question: "Can I request a 3D elevation design?",
      answer:
        "Yes. 3D elevation design can be included to help visualize the proposed exterior appearance of the house.",
    },
    {
      question: "How do I start a house planning project?",
      answer:
        "You can contact Skarvion Infrastructure with your plot dimensions, preferred house configuration and requirements. The project can then proceed through requirement discussion, planning, design and estimation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "House Planning & Architectural Design",
    serviceType: [
      "House Plan Design",
      "Architectural Planning",
      "2D House Plan",
      "3D Elevation Design",
      "Residential Planning",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Skarvion Infrastructure",
      url: "https://skarvioninfra.com",
    },
    areaServed: {
      "@type": "City",
      name: "Bhubaneswar",
    },
    url: "https://skarvioninfra.com/house-plans",
  };

  return (
    <>
      <Helmet>
        <title>
          House Plan in Bhubaneswar | 2D & 3D House Planning | Skarvion
          Infrastructure
        </title>

        <meta
          name="description"
          content="Get professional house planning and architectural design in Bhubaneswar. Skarvion Infrastructure provides 2D house plans, residential planning, duplex planning and 3D elevation design."
        />

        <link
          rel="canonical"
          href="https://skarvioninfra.com/house-plans"
        />

        <meta
          property="og:title"
          content="House Plan in Bhubaneswar | Skarvion Infrastructure"
        />

        <meta
          property="og:description"
          content="Professional house planning, 2D floor plans, residential architectural planning and 3D elevation design in Bhubaneswar."
        />

        <meta
          property="og:url"
          content="https://skarvioninfra.com/house-plans"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="House Plan in Bhubaneswar | Skarvion Infrastructure"
        />

        <meta
          name="twitter:description"
          content="Residential house planning, 2D floor plans and 3D elevation design in Bhubaneswar."
        />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="skv-service-page">
        {/* HERO */}
        <section className="skv-service-hero">
          <div className="skv-service-container">
            <span className="skv-service-eyebrow">
              HOUSE PLANS • ARCHITECTURAL PLANNING • BHUBANESWAR
            </span>

            <h1>House Plan in Bhubaneswar</h1>

            <p className="skv-service-lead">
              Professional residential house planning, 2D floor plans,
              architectural planning and 3D elevation design for homes in
              Bhubaneswar and surrounding areas.
            </p>

            <div className="skv-service-actions">
              <Link to="/#contact" className="skv-service-primary-btn">
                Request a House Plan
              </Link>

              <Link
                to="/construction-cost"
                className="skv-service-secondary-btn"
              >
                Check Construction Cost
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="skv-service-section">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>RESIDENTIAL ARCHITECTURAL PLANNING</span>

              <h2>
                House Planning & Architectural Design in Bhubaneswar
              </h2>
            </div>

            <p>
              A well-planned house starts with understanding the plot,
              lifestyle requirements, room configuration, circulation,
              structural requirements and overall project objectives.
              Skarvion Infrastructure provides residential planning support
              for homeowners looking to develop houses in Bhubaneswar and
              surrounding areas.
            </p>

            <p>
              Our planning approach can cover the initial requirements,
              floor-plan development, architectural coordination, elevation
              concepts and construction estimation so that homeowners can
              understand the project before execution.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="skv-service-section skv-service-section-alt">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>HOUSE PLAN SERVICES</span>

              <h2>Residential House Planning Services</h2>
            </div>

            <div className="skv-service-grid">
              <article className="skv-service-card">
                <h3>2D House Plan</h3>
                <p>
                  Floor-plan planning based on plot dimensions, room
                  requirements, circulation and the intended residential
                  configuration.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Architectural Planning</h3>
                <p>
                  Residential planning that considers the site, functional
                  requirements and overall design objectives of the project.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Duplex House Planning</h3>
                <p>
                  Planning support for duplex residences with appropriate
                  floor relationships and functional space distribution.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>G+1 House Planning</h3>
                <p>
                  Residential planning for G+1 projects based on plot
                  dimensions, requirements and structural considerations.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>3D Elevation Design</h3>
                <p>
                  Exterior elevation concepts that help homeowners visualize
                  the proposed architectural appearance of their house.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Construction Estimation</h3>
                <p>
                  Planning support can be connected with construction
                  estimation to help understand the expected project scope.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOUSE TYPES */}
        <section className="skv-service-section">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>RESIDENTIAL PROJECT TYPES</span>

              <h2>Planning for Different House Requirements</h2>
            </div>

            <div className="skv-service-grid">
              <article className="skv-service-card">
                <h3>Independent Houses</h3>
                <p>
                  Planning for individual residential homes based on plot
                  dimensions, family requirements and preferred room
                  configuration.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Duplex Homes</h3>
                <p>
                  Residential planning for multi-level homes with connected
                  living spaces and functional floor arrangements.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>G+1 Residences</h3>
                <p>
                  Planning support for ground-plus-one residential projects
                  with consideration for the overall project requirements.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Custom House Plans</h3>
                <p>
                  Planning can be adapted to individual plot dimensions,
                  lifestyle requirements and preferred residential layouts.
                </p>
              </article>
            </div>
          </div>
        </section>




        {/* PROCESS */}
        <section className="skv-service-section skv-service-section-alt">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>OUR PLANNING PROCESS</span>

              <h2>From Plot Requirements to House Plan</h2>
            </div>

            <div className="skv-process-grid">
              <div className="skv-process-step">
                <span>01</span>
                <h3>Requirement Discussion</h3>
                <p>
                  Understand the plot, family requirements, preferred spaces
                  and project objectives.
                </p>
              </div>

              <div className="skv-process-step">
                <span>02</span>
                <h3>Planning & Layout</h3>
                <p>
                  Develop the proposed residential layout based on the
                  available site information and requirements.
                </p>
              </div>

              <div className="skv-process-step">
                <span>03</span>
                <h3>Design Development</h3>
                <p>
                  Refine the planning and coordinate architectural design
                  requirements.
                </p>
              </div>

              <div className="skv-process-step">
                <span>04</span>
                <h3>Elevation & Estimation</h3>
                <p>
                  Connect the planning with elevation design and construction
                  estimation where required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="skv-service-section">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>WHY PLAN BEFORE CONSTRUCTION?</span>

              <h2>A Clear Plan Helps Define the Project</h2>
            </div>

            <div className="skv-service-grid">
              <article className="skv-service-card">
                <h3>Better Space Planning</h3>
                <p>
                  A structured floor plan helps organize rooms, movement and
                  functional spaces before construction begins.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Clearer Project Scope</h3>
                <p>
                  Planning helps establish what needs to be designed and
                  considered during the next stages of the project.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Visual Understanding</h3>
                <p>
                  Elevation concepts can provide a clearer visual direction
                  for the proposed exterior design.
                </p>
              </article>

              <article className="skv-service-card">
                <h3>Better Coordination</h3>
                <p>
                  Architectural planning, structural requirements and
                  estimation can be coordinated as the project develops.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="skv-service-section skv-service-section-alt">
          <div className="skv-service-container">
            <div className="skv-service-heading">
              <span>FREQUENTLY ASKED QUESTIONS</span>

              <h2>House Plan FAQ</h2>
            </div>

            <div className="skv-faq-list">
              {faqItems.map((item, index) => (
                <details key={index} className="skv-faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="skv-service-cta">
          <div className="skv-service-container">
            <span>READY TO START?</span>

            <h2>Let's Plan Your House Project</h2>

            <p>
              Share your plot dimensions and house requirements with
              Skarvion Infrastructure to discuss your residential planning
              project in Bhubaneswar.
            </p>

            <div className="skv-service-actions">
              <Link to="/#contact" className="skv-service-primary-btn">
                Request a House Plan
              </Link>

              <Link
                to="/house-construction"
                className="skv-service-secondary-btn"
              >
                House Construction
              </Link>
              <Link
                to="/construction-cost"
                className="skv-service-secondary-btn"
                >
                Construction Cost
                </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}