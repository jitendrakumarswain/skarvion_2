
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaDraftingCompass,
} from "react-icons/fa";
import "../css-modular/ArchitecturalPlanning.css";

const planningServices = [
  {
    id: 1,
    title: "Residential Architectural Planning",
    description:
      "Personalized home layouts planned around your plot, lifestyle and requirements.",
    category: "Residential",
    features: ["Room layout", "Space utilization", "Design consultation"],
  },
  {
    id: 2,
    title: "Duplex House Planning",
    description:
      "Coordinated layouts for two-storey homes with practical circulation and privacy.",
    category: "Residential",
    features: ["Floor coordination", "Staircase placement", "Room zoning"],
  },
  {
    id: 3,
    title: "Small Plot Planning",
    description:
      "Make better use of compact plots with carefully considered space planning.",
    category: "Compact Homes",
    features: ["Compact layouts", "Space efficiency", "Functional rooms"],
  },
  {
    id: 4,
    title: "Vastu-Informed Planning",
    description:
      "Discuss your preferred Vastu considerations alongside practical design needs.",
    category: "Specialized",
    features: ["Client preferences", "Room orientation", "Layout consultation"],
  },
  {
    id: 5,
    title: "Villa Planning",
    description:
      "Explore layouts for spacious homes with defined living and private areas.",
    category: "Premium Homes",
    features: ["Zoning", "Indoor-outdoor flow", "Custom requirements"],
  },
  {
    id: 6,
    title: "Custom Building Planning",
    description:
      "Start with your site dimensions, requirements and intended construction budget.",
    category: "Specialized",
    features: ["Requirement review", "Concept layout", "Planning discussion"],
  },
];

const categories = [
  "All Services",
  "Residential",
  "Compact Homes",
  "Premium Homes",
  "Specialized",
];

export default function ArchitecturalPlanning() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [plotSize, setPlotSize] = useState("");
  const [requirements, setRequirements] = useState("");

  const whatsappNumber = "917064949597";

  const visibleServices = planningServices.filter(
    (service) =>
      activeCategory === "All Services" ||
      service.category === activeCategory
  );

  const enquire = (service) => {
    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in ${service.title}.`,
      plotSize ? `Plot size: ${plotSize}.` : "",
      requirements ? `Requirements: ${requirements}.` : "",
      "Please contact me to discuss scope, deliverables and pricing.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="architectural-planning">
      <Helmet>
        <title>
          Architectural Planning in Bhubaneswar | Skarvion
        </title>
        <meta
          name="description"
          content="Explore residential architectural planning services in Bhubaneswar, Odisha. Discuss house layouts, duplex planning, compact plots and customized building concepts with Skarvion."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/architectural-planning"
        />
        <meta
          property="og:title"
          content="Architectural Planning | Skarvion"
        />
        <meta
          property="og:description"
          content="Discuss a practical architectural plan tailored to your plot and home requirements."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/architectural-planning"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="planning-hero">
        <div className="planning-hero-content">
          <span className="planning-eyebrow">
            SKARVION PLANNING & INFRASTRUCTURE
          </span>
          <h1>
            Architectural Planning
            <span>Built Around Your Life.</span>
          </h1>
          <p>
            Explore practical residential planning services designed around
            your plot dimensions, family requirements and construction goals.
          </p>
          <a href="#planning-services" className="planning-primary-button">
            Explore Services <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="planning-intro">
        <span className="planning-eyebrow">PLAN WITH PURPOSE</span>
        <h2>Find the Right Planning Service</h2>
        <p>
          Start with your site details and requirements. Our team can discuss
          a suitable planning scope and the next steps with you.
        </p>
      </section>

      <section
        id="planning-services"
        className="planning-services-section"
      >
        <div className="planning-filters" aria-label="Filter services">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "planning-filter active"
                  : "planning-filter"
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="planning-grid">
          {visibleServices.map((service) => (
            <article className="planning-card" key={service.id}>
              <div className="planning-card-icon">
                <FaDraftingCompass aria-hidden="true" />
              </div>
              <span className="planning-category">
                {service.category}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className="planning-enquire"
                onClick={() => enquire(service)}
              >
                <FaWhatsapp aria-hidden="true" />
                Discuss This Service
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="planning-contact">
        <h2>Tell Us About Your Plot</h2>
        <p>
          Add your plot size and main requirements before opening WhatsApp.
        </p>
        <label>
          Plot dimensions or area
          <input
            value={plotSize}
            onChange={(event) => setPlotSize(event.target.value)}
            placeholder="e.g. 30 × 40 ft or 1200 sq. ft."
          />
        </label>
        <label>
          Your planning requirements
          <textarea
            value={requirements}
            onChange={(event) => setRequirements(event.target.value)}
            placeholder="e.g. 3 bedrooms, parking, ground + first floor"
            rows={4}
          />
        </label>
        <button
          type="button"
          className="planning-enquire"
          onClick={() =>
            enquire({
              title: "Custom Architectural Planning",
            })
          }
        >
          <FaWhatsapp aria-hidden="true" />
          Send Requirements on WhatsApp
        </button>
      </section>
    </main>
  );
}
