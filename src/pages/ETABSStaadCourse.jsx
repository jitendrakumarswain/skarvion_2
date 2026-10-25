
import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBuilding,
  FaCheckCircle,
  FaDraftingCompass,
  FaLayerGroup,
  FaWhatsapp,
} from "react-icons/fa";
import "../css-modular/ETABSStaadCourse.css";

const WHATSAPP_NUMBER = "917064949597";

const modules = [
  {
    title: "Structural Engineering Fundamentals",
    topics: [
      "Introduction to structural analysis",
      "Loads, supports and load combinations",
      "Basic concepts of beams, columns and frames",
    ],
  },
  {
    title: "ETABS Modelling & Analysis",
    topics: [
      "Building geometry, grids and storey levels",
      "Material properties and section assignments",
      "Load cases, analysis and result interpretation",
    ],
  },
  {
    title: "STAAD.Pro Workflow",
    topics: [
      "Structural model creation and member properties",
      "Support conditions and load definitions",
      "Analysis results and design workflow overview",
    ],
  },
  {
    title: "Design & Project Interpretation",
    topics: [
      "Understanding analysis and design results",
      "Reviewing member forces and structural behaviour",
      "Model checking and technical documentation",
    ],
  },
];

const outcomes = [
  "Understand structural modelling fundamentals",
  "Create basic building models in ETABS",
  "Understand STAAD.Pro modelling and analysis workflows",
  "Interpret analysis results and identify modelling issues",
  "Develop a foundation for further structural design practice",
];

export default function ETABSStaadCourse() {
  const message =
    "Hello Skarvion Academy, I am interested in ETABS and STAAD.Pro training in Bhubaneswar. Please share the fees, duration, syllabus and upcoming batch details.";

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "ETABS & STAAD.Pro Structural Analysis Training",
    description:
      "Training covering structural modelling, analysis workflows and interpretation of results using ETABS and STAAD.Pro.",
    url: "https://skarvioninfra.com/courses/etabs-staad-pro",
    inLanguage: "en",
    provider: {
      "@type": "Organization",
      name: "Skarvion Academy",
      url: "https://skarvioninfra.com/",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          ETABS & STAAD.Pro Training in Bhubaneswar | Skarvion Academy
        </title>

        <meta
          name="description"
          content="Explore ETABS and STAAD.Pro training in Bhubaneswar with Skarvion Academy. Learn structural modelling, load definitions, analysis workflows and result interpretation. Contact us for fees and batch details."
        />

        <link
          rel="canonical"
          href="https://skarvioninfra.com/courses/etabs-staad-pro"
        />

        <meta
          property="og:title"
          content="ETABS & STAAD.Pro Training in Bhubaneswar | Skarvion Academy"
        />

        <meta
          property="og:description"
          content="Explore structural modelling and analysis software training with Skarvion Academy in Bhubaneswar."
        />

        <meta
          property="og:url"
          content="https://skarvioninfra.com/courses/etabs-staad-pro"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>

      <main className="etabs-page">
        <section className="etabs-hero">
          <div className="etabs-hero-content">
            <span className="etabs-eyebrow">
              SKARVION ACADEMY · BHUBANESWAR
            </span>

            <h1>
              ETABS & STAAD.Pro
              <span> Training</span>
            </h1>

            <p>
              Develop your understanding of structural modelling,
              building analysis and engineering software workflows.
              Explore ETABS and STAAD.Pro with a structured learning
              programme for civil engineering students and professionals.
            </p>

            <div className="etabs-actions">
              <a
                className="etabs-btn etabs-btn-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Enquire on WhatsApp
              </a>

              <a
                className="etabs-btn etabs-btn-outline"
                href="#etabs-syllabus"
              >
                Explore syllabus
              </a>
            </div>

            <div className="etabs-highlights">
              <span><FaCheckCircle /> Structural modelling</span>
              <span><FaCheckCircle /> Analysis workflows</span>
              <span><FaCheckCircle /> Result interpretation</span>
            </div>
          </div>

          <div className="etabs-hero-visual">
            <FaBuilding className="etabs-building-icon" />

            <div className="etabs-frame">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <h2>Model. Analyse. Understand.</h2>
            <p>
              Explore the digital workflows behind structural engineering.
            </p>
          </div>
        </section>

        <section className="etabs-section">
          <div className="etabs-heading">
            <span>ABOUT THE COURSE</span>
            <h2>Build your structural analysis skills</h2>
            <p>
              Learn the fundamentals of structural models, loading,
              analysis and result interpretation using engineering
              software workflows.
            </p>
          </div>

          <div className="etabs-feature-grid">
            <article className="etabs-card">
              <FaBuilding />
              <h3>Building Modelling</h3>
              <p>
                Understand grids, storeys, structural members,
                supports and model organization.
              </p>
            </article>

            <article className="etabs-card">
              <FaLayerGroup />
              <h3>Structural Analysis</h3>
              <p>
                Explore loads, load combinations, analysis processes
                and structural response.
              </p>
            </article>

            <article className="etabs-card">
              <FaDraftingCompass />
              <h3>Engineering Workflow</h3>
              <p>
                Learn to review analysis outputs and understand
                the steps involved in structural design workflows.
              </p>
            </article>
          </div>
        </section>

        <section
          className="etabs-section etabs-syllabus"
          id="etabs-syllabus"
        >
          <div className="etabs-heading">
            <span>PROPOSED COURSE SYLLABUS</span>
            <h2>What you can learn</h2>
            <p>
              The following modules outline the proposed learning
              topics. Confirm the final syllabus with the academy.
            </p>
          </div>

          <div className="etabs-module-grid">
            {modules.map((module, index) => (
              <article className="etabs-module" key={module.title}>
                <span className="etabs-number">
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

        <section className="etabs-section">
          <div className="etabs-outcomes">
            <div>
              <span className="etabs-eyebrow">LEARNING OUTCOMES</span>
              <h2>Strengthen your engineering software foundation</h2>
              <p>
                Build familiarity with structural analysis tools.
                Professional engineering work still requires suitable
                technical knowledge, code compliance and qualified review.
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

        <section className="etabs-cta">
          <span>SKARVION ACADEMY</span>
          <h2>Interested in ETABS & STAAD.Pro Training?</h2>

          <p>
            Contact us for confirmed fees, course duration, training
            format, software requirements and upcoming batches in
            Bhubaneswar.
          </p>

          <a
            className="etabs-btn etabs-btn-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Ask About Fees & Batches
          </a>
        </section>
      </main>
    </>
  );
}
