
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaMap,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/SitePlanning.css";

const WHATSAPP_NUMBER = "917604949597";

const siteServices = [
  {
    title: "Residential Site Planning",
    category: "Residential",
    description:
      "Plan the arrangement of a residential plot around building placement, access and outdoor space.",
    features: ["Building placement", "Entry and access", "Open-space planning"],
  },
  {
    title: "Plot Layout Planning",
    category: "Plot Layout",
    description:
      "Explore a functional layout based on plot dimensions, boundaries and your intended use.",
    features: ["Plot dimensions", "Layout options", "Space utilization"],
  },
  {
    title: "Building Setback Planning",
    category: "Building Layout",
    description:
      "Discuss building placement and setback requirements for your proposed site.",
    features: ["Boundary review", "Building position", "Approval requirements"],
  },
  {
    title: "Parking and Access Planning",
    category: "Access",
    description:
      "Consider vehicle movement, parking placement and convenient access to your property.",
    features: ["Parking arrangement", "Entry and exit", "Movement space"],
  },
  {
    title: "Drainage and Open-Space Planning",
    category: "Site Layout",
    description:
      "Include drainage considerations, open areas and circulation in the site layout concept.",
    features: ["Drainage considerations", "Open areas", "Site circulation"],
  },
  {
    title: "Custom Site Planning",
    category: "Custom",
    description:
      "Discuss a site-specific planning concept based on your land, project type and requirements.",
    features: ["Requirement-based concept", "Site constraints", "Planning consultation"],
  },
];

const categories = [
  "All",
  "Residential",
  "Plot Layout",
  "Building Layout",
  "Access",
  "Site Layout",
  "Custom",
];

export default function SitePlanning() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [plotSize, setPlotSize] = useState("");
  const [projectType, setProjectType] = useState("Residential house");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  const filteredServices =
    activeCategory === "All"
      ? siteServices
      : siteServices.filter(
          (service) => service.category === activeCategory
        );

  const sendEnquiry = (serviceName = "Site Planning") => {
    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in ${serviceName}.`,
      `Project type: ${projectType}`,
      plotSize ? `Plot size/dimensions: ${plotSize}` : "",
      location ? `Project location: ${location}` : "",
      requirements ? `Requirements: ${requirements}` : "",
      "",
      "Please contact me to discuss the planning and quotation.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Site Planning Services in Bhubaneswar | Skarvion</title>
        <meta
          name="description"
          content="Explore residential site planning, plot layout, building placement, parking and access planning with Skarvion Planning & Infrastructure in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/site-planning"
        />
        <meta property="og:title" content="Site Planning | Skarvion" />
        <meta
          property="og:description"
          content="Plan building placement, access, parking and open spaces around your site requirements."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/site-planning"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="site-planning-page">
        <section className="sp-hero">
          <div className="sp-hero-content">
            <span className="sp-eyebrow">
              SKARVION PLANNING & INFRASTRUCTURE
            </span>
            <h1>
              Better Site Planning.
              <span> Smarter Spaces.</span>
            </h1>
            <p>
              Explore site layouts that consider building placement, access,
              parking, open areas and your project requirements.
            </p>

            <button
              className="sp-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your Site <FaArrowRight />
            </button>

            <div className="sp-trust-points">
              <span><FaCheck /> Site-specific concepts</span>
              <span><FaCheck /> Practical space planning</span>
              <span><FaCheck /> WhatsApp enquiries</span>
            </div>
          </div>

          <div className="sp-hero-visual">
            <div className="sp-plan-label">
              <FaMap />
              <div>
                <strong>Plan the Entire Site</strong>
                <span>Building · Access · Open space</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sp-services section-container">
          <div className="sp-section-heading">
            <span className="sp-eyebrow">SITE PLANNING SERVICES</span>
            <h2>Plan Your Site Around Your Project</h2>
            <p>
              Choose a service to discuss the planning approach that fits your
              property and intended use.
            </p>
          </div>

          <div className="sp-filters" aria-label="Filter site planning services">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="sp-service-grid">
            {filteredServices.map((service, index) => (
              <article className="sp-service-card" key={service.title}>
                <div className="sp-card-top">
                  <span className="sp-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="sp-card-category">
                    {service.category}
                  </span>
                </div>

                <div className="sp-card-icon">
                  <FaMap />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="sp-card-link"
                  onClick={() => sendEnquiry(service.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="sp-enquiry-section">
          <div className="sp-enquiry-copy">
            <span className="sp-eyebrow">TELL US ABOUT YOUR SITE</span>
            <h2>Share Your Project Requirements</h2>
            <p>
              Provide your basic project details below. Your enquiry will open
              in WhatsApp, ready for you to review and send.
            </p>
            <div className="sp-whatsapp-note">
              <FaWhatsapp />
              <span>You stay in control of sending your enquiry.</span>
            </div>
          </div>

          <form
            className="sp-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom Site Planning");
            }}
          >
            <label htmlFor="sp-project-type">Project type</label>
            <select
              id="sp-project-type"
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
            >
              <option>Residential house</option>
              <option>Apartment or multi-unit building</option>
              <option>Commercial building</option>
              <option>Institutional project</option>
              <option>Other project</option>
            </select>

            <label htmlFor="sp-plot-size">Plot size or dimensions</label>
            <input
              id="sp-plot-size"
              type="text"
              placeholder="e.g. 40 × 60 ft or 2400 sq. ft."
              value={plotSize}
              onChange={(event) => setPlotSize(event.target.value)}
            />

            <label htmlFor="sp-location">Project location</label>
            <input
              id="sp-location"
              type="text"
              placeholder="e.g. Bhubaneswar, Odisha"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />

            <label htmlFor="sp-requirements">Additional requirements</label>
            <textarea
              id="sp-requirements"
              rows="4"
              placeholder="Parking, building floors, access, open space..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button
              type="submit"
              className="sp-primary-btn sp-submit-btn"
            >
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>
              No website account is needed. Review the message before sending.
            </small>
          </form>
        </section>

        <section className="sp-bottom-cta">
          <h2>Have a Site to Plan?</h2>
          <p>Start with your plot dimensions and project requirements.</p>
          <button
            className="sp-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
