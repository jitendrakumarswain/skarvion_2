import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../css-modular/StructuralDesign.css";

export default function StructuralDesign() {
  const faqs = [
    {
      question:
        "Does Skarvion Infrastructure provide structural design services in Bhubaneswar?",
      answer:
        "Yes. Skarvion Infrastructure provides structural design and engineering solutions for residential and building projects in Bhubaneswar and surrounding areas.",
    },
    {
      question: "What does residential structural design include?",
      answer:
        "Structural design may include planning and coordination of foundations, columns, beams, slabs and other structural elements based on the project requirements and applicable engineering considerations.",
    },
    {
      question:
        "Can structural design be coordinated with my house plan?",
      answer:
        "Yes. Structural planning can be coordinated with the architectural house plan so that the architectural and structural requirements are considered together.",
    },
    {
      question: "Do you provide structural design for G+1 and duplex houses?",
      answer:
        "Structural design can be developed for residential configurations such as G+1 and duplex homes, subject to the specific site, architectural design and engineering requirements.",
    },
    {
      question: "How do I start a structural design project?",
      answer:
        "You can contact Skarvion Infrastructure with your plot information, house plan or project requirements. The project requirements can then be discussed before proceeding with the appropriate design scope.",
    },
  ];

  const services = [
    {
      title: "Residential Structural Design",
      description:
        "Structural planning for residential houses based on architectural requirements, site conditions and project configuration.",
    },
    {
      title: "RCC Structural Planning",
      description:
        "Planning and coordination of reinforced concrete structural elements for residential and building projects.",
    },
    {
      title: "Foundation Planning",
      description:
        "Structural consideration for foundation requirements based on project conditions and engineering requirements.",
    },
    {
      title: "Column, Beam & Slab Planning",
      description:
        "Coordination of major structural elements with the architectural layout and construction requirements.",
    },
    {
      title: "G+1 & Duplex Structural Design",
      description:
        "Structural planning support for multi-level residential configurations including G+1 and duplex homes.",
    },
    {
      title: "Architectural & Structural Coordination",
      description:
        "Coordination between architectural planning and structural requirements for better project planning.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Project Requirements",
      description:
        "Understand the plot, architectural requirements, building configuration and project scope.",
    },
    {
      number: "02",
      title: "Structural Planning",
      description:
        "Develop the structural approach around the architectural layout and project requirements.",
    },
    {
      number: "03",
      title: "Design Coordination",
      description:
        "Coordinate structural elements with architectural planning for practical construction.",
    },
    {
      number: "04",
      title: "Final Design",
      description:
        "Complete the agreed structural design scope for use during the relevant project stage.",
    },
  ];

  return (
    <div className="structural-design-page">
      <Helmet>
        <title>
          Structural Design in Bhubaneswar | Structural Engineering | Skarvion
          Infrastructure
        </title>

        <meta
          name="description"
          content="Skarvion Infrastructure provides structural design and engineering services in Bhubaneswar for residential houses, G+1 homes, duplex projects and building structures."
        />

        <link
          rel="canonical"
          href="https://skarvioninfra.com/structural-design"
        />

        <meta
          property="og:title"
          content="Structural Design in Bhubaneswar | Skarvion Infrastructure"
        />

        <meta
          property="og:description"
          content="Residential structural design and engineering services in Bhubaneswar by Skarvion Infrastructure."
        />

        <meta
          property="og:url"
          content="https://skarvioninfra.com/structural-design"
        />

        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Structural Design in Bhubaneswar | Skarvion Infrastructure"
        />

        <meta
          name="twitter:description"
          content="Structural design and engineering solutions for residential and building projects in Bhubaneswar."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Structural Design Services",
            serviceType: "Structural Design",
            provider: {
              "@type": "Organization",
              name: "Skarvion Infrastructure",
              url: "https://skarvioninfra.com/",
            },
            areaServed: {
              "@type": "City",
              name: "Bhubaneswar",
            },
            url: "https://skarvioninfra.com/structural-design",
            description:
              "Structural design and engineering services for residential and building projects in Bhubaneswar.",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-container">
          <span className="sd-eyebrow">
            STRUCTURAL DESIGN & ENGINEERING
          </span>

          <h1>
            Structural Design in Bhubaneswar
          </h1>

          <p className="sd-hero-description">
            Professional structural design and engineering solutions for
            residential houses, G+1 homes, duplex projects and building
            structures in Bhubaneswar and surrounding areas.
          </p>

          <div className="sd-actions">
            <Link
              to="/#contact"
              className="sd-primary-btn"
            >
              Request Structural Consultation
            </Link>

            <Link
              to="/house-plans"
              className="sd-secondary-btn"
            >
              House Plans
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="sd-section">
        <div className="sd-container sd-intro">
          <span className="sd-section-tag">
            STRUCTURAL ENGINEERING
          </span>

          <h2>
            Residential Structural Design for Planned Construction
          </h2>

          <p>
            Structural design is an important part of planning a safe,
            functional and buildable house. Skarvion Infrastructure works
            around the relationship between architectural planning,
            structural requirements and construction execution to support
            better project coordination.
          </p>

          <p>
            Our structural design services are intended for residential
            projects and building configurations where structural planning
            needs to be coordinated with the overall project requirements.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sd-section sd-section-dark">
        <div className="sd-container">
          <div className="sd-section-heading">
            <span className="sd-section-tag">
              OUR SERVICES
            </span>

            <h2>
              Structural Design Services in Bhubaneswar
            </h2>

            <p>
              Structural planning support for residential and building
              projects with a focus on coordination, practicality and
              project requirements.
            </p>
          </div>

          <div className="sd-service-grid">
            {services.map((service) => (
              <article
                className="sd-service-card"
                key={service.title}
              >
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="sd-section">
        <div className="sd-container">
          <div className="sd-section-heading">
            <span className="sd-section-tag">
              PROJECT TYPES
            </span>

            <h2>
              Structural Planning for Residential Projects
            </h2>
          </div>

          <div className="sd-project-grid">
            <div className="sd-project-card">
              <h3>Independent Houses</h3>
              <p>
                Structural planning for individual residential homes based
                on the architectural layout and project requirements.
              </p>
            </div>

            <div className="sd-project-card">
              <h3>G+1 Houses</h3>
              <p>
                Structural planning for two-level residential buildings
                coordinated with the house plan.
              </p>
            </div>

            <div className="sd-project-card">
              <h3>Duplex Homes</h3>
              <p>
                Structural coordination for duplex residential layouts and
                multi-level house configurations.
              </p>
            </div>

            <div className="sd-project-card">
              <h3>Residential Building Projects</h3>
              <p>
                Structural design support for residential projects requiring
                coordinated architectural and structural planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sd-section sd-section-dark">
        <div className="sd-container">
          <div className="sd-section-heading">
            <span className="sd-section-tag">
              OUR PROCESS
            </span>

            <h2>
              Structural Design Process
            </h2>

            <p>
              A structured approach helps coordinate structural requirements
              with the overall building plan.
            </p>
          </div>

          <div className="sd-process-grid">
            {process.map((step) => (
              <div
                className="sd-process-card"
                key={step.number}
              >
                <span className="sd-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STRUCTURAL DESIGN */}
      <section className="sd-section">
        <div className="sd-container">
          <div className="sd-section-heading">
            <span className="sd-section-tag">
              PROJECT PLANNING
            </span>

            <h2>
              Why Structural Planning Matters
            </h2>
          </div>

          <div className="sd-benefit-grid">
            <div className="sd-benefit-card">
              <h3>Better Coordination</h3>
              <p>
                Architectural and structural requirements can be considered
                together during project planning.
              </p>
            </div>

            <div className="sd-benefit-card">
              <h3>Clearer Construction Scope</h3>
              <p>
                Structural planning helps establish a clearer understanding
                of the building structure before construction.
              </p>
            </div>

            <div className="sd-benefit-card">
              <h3>Practical Planning</h3>
              <p>
                Structural requirements can be coordinated with the actual
                building layout and project objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sd-section sd-section-dark">
        <div className="sd-container">
          <div className="sd-section-heading">
            <span className="sd-section-tag">
              FAQ
            </span>

            <h2>
              Structural Design FAQs
            </h2>
          </div>

          <div className="sd-faq-list">
            {faqs.map((faq) => (
              <div
                className="sd-faq-item"
                key={faq.question}
              >
                <h3>{faq.question}</h3>

                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta">
        <div className="sd-container">
          <span className="sd-section-tag">
            START YOUR PROJECT
          </span>

          <h2>
            Need Structural Design for Your House?
          </h2>

          <p>
            Discuss your plot, house plan and structural requirements with
            Skarvion Infrastructure.
          </p>

          <div className="sd-actions">
            <Link
              to="/#contact"
              className="sd-primary-btn"
            >
              Request Consultation
            </Link>

            <Link
              to="/construction-cost"
              className="sd-secondary-btn"
            >
              Construction Cost
            </Link>

            <Link
              to="/house-construction"
              className="sd-secondary-btn"
            >
              House Construction
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}