
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBuilding,
  FaCheckCircle,
  FaCubes,
  FaLaptop,
  FaWhatsapp,
} from "react-icons/fa";
import "../css-modular/RevitTraining.css";

const WHATSAPP_NUMBER = "917064949597";

const modules = [
  {
    title: "Revit Fundamentals",
    topics: [
      "Interface, project setup and navigation",
      "Levels, grids and project units",
      "Views, sheets and drawing management",
    ],
  },
  {
    title: "Architectural BIM Modelling",
    topics: [
      "Walls, doors, windows and floors",
      "Stairs, roofs and building components",
      "Rooms, dimensions, tags and schedules",
    ],
  },
  {
    title: "Documentation & Visualization",
    topics: [
      "Plans, sections and elevations",
      "Sheet setup, annotations and layouts",
      "3D views, materials and presentation",
    ],
  },
  {
    title: "BIM Workflow",
    topics: [
      "Understanding BIM concepts and workflows",
      "Model organization and information",
      "Introduction to coordination and model exchange",
    ],
  },
];

const outcomes = [
  "Create and edit architectural building models",
  "Generate plans, sections and elevations",
  "Prepare sheets and construction documentation",
  "Understand essential BIM modelling workflows",
];

export default function RevitTraining() {
  const enquiryText =
    "Hello Skarvion Academy, I want to know about Revit & BIM Training in Bhubaneswar, including fees, duration and upcoming batches.";

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiryText)}`;

  return (
    <>
      <Helmet>
        <title>
          Revit & BIM Training in Bhubaneswar | Skarvion Academy
        </title>
        <meta
          name="description"
          content="Explore Revit and BIM training in Bhubaneswar with Skarvion Academy. Learn architectural modelling, building documentation, schedules and essential BIM workflows. Contact us for course fees and batch details."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/courses/revit-training"
        />
        <meta
          property="og:title"
          content="Revit & BIM Training in Bhubaneswar | Skarvion Academy"
        />
        <meta
          property="og:description"
          content="Explore Revit modelling, architectural documentation and BIM workflows with Skarvion Academy in Bhubaneswar."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/courses/revit-training"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Revit & BIM Training",
            description:
              "Training in Revit architectural modelling, building documentation and essential BIM workflows.",
            provider: {
              "@type": "Organization",
              name: "Skarvion Academy",
              url: "https://skarvioninfra.com/",
            },
            url: "https://skarvioninfra.com/courses/revit-training",
            inLanguage: "en",
          })}
        </script>
      </Helmet>

      <main className="revit-page">
        <section className="revit-hero">
          <div className="revit-hero-content">
            <span className="revit-eyebrow">
              SKARVION ACADEMY · BHUBANESWAR
            </span>

            <h1>
              Revit & BIM Training
              <span> in Bhubaneswar</span>
            </h1>

            <p>
              Learn building information modelling, architectural
              modelling and construction documentation through a
              structured training programme designed for aspiring
              building design professionals.
            </p>

            <div className="revit-hero-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="revit-btn revit-btn-primary"
              >
                <FaWhatsapp /> Enquire on WhatsApp
              </a>

              <a href="#revit-syllabus" className="revit-btn revit-btn-outline">
                Explore syllabus
              </a>
            </div>

            <div className="revit-highlights">
              <span><FaCheckCircle /> Architectural modelling</span>
              <span><FaCheckCircle /> BIM fundamentals</span>
              <span><FaCheckCircle /> Project documentation</span>
            </div>
          </div>

          <div className="revit-hero-visual">
            <div className="revit-visual-card">
              <FaBuilding className="revit-building-icon" />
              <FaCubes className="revit-cubes-icon" />
              <h2>Design. Model. Document.</h2>
              <p>Explore digital building design and BIM workflows.</p>
              <FaLaptop className="revit-laptop-icon" />
            </div>
          </div>
        </section>

        <section className="revit-section" id="revit-overview">
          <div className="revit-section-heading">
            <span>ABOUT THE COURSE</span>
            <h2>Build your Revit and BIM skills</h2>
            <p>
              Develop an understanding of digital building models,
              architectural documentation and information-based
              design workflows.
            </p>
          </div>

          <div className="revit-overview-grid">
            <article className="revit-info-card">
              <FaBuilding />
              <h3>Architectural Modelling</h3>
              <p>
                Understand how building components come together
                in a coordinated digital model.
              </p>
            </article>

            <article className="revit-info-card">
              <FaCubes />
              <h3>BIM Fundamentals</h3>
              <p>
                Learn core concepts behind building information,
                model organization and coordination.
              </p>
            </article>

            <article className="revit-info-card">
              <FaLaptop />
              <h3>Drawing Documentation</h3>
              <p>
                Explore how to prepare views, schedules, sheets
                and drawing outputs from a model.
              </p>
            </article>
          </div>
        </section>

        <section className="revit-section revit-syllabus" id="revit-syllabus">
          <div className="revit-section-heading">
            <span>COURSE SYLLABUS</span>
            <h2>What you can learn</h2>
            <p>
              The proposed learning modules cover the following
              core Revit and BIM topics.
            </p>
          </div>

          <div className="revit-module-grid">
            {modules.map((module, index) => (
              <article className="revit-module-card" key={module.title}>
                <span className="revit-module-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{module.title}</h3>
                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>
                      <FaCheckCircle />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="revit-section">
          <div className="revit-outcomes">
            <div>
              <span className="revit-eyebrow">LEARNING OUTCOMES</span>
              <h2>Practical skills for building design workflows</h2>
              <p>
                Build a foundation in Revit and BIM concepts that
                you can continue developing through practice and
                project-based learning.
              </p>
            </div>

            <ul>
              {outcomes.map((outcome) => (
                <li key={outcome}>
                  <FaCheckCircle />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="revit-cta">
          <span>START YOUR LEARNING JOURNEY</span>
          <h2>Interested in Revit & BIM Training?</h2>
          <p>
            Contact Skarvion Academy to confirm course fees,
            duration, delivery mode and upcoming batches in
            Bhubaneswar.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="revit-btn revit-btn-primary"
          >
            <FaWhatsapp /> Ask About Fees & Batches
          </a>
        </section>
      </main>
    </>
  );
}
