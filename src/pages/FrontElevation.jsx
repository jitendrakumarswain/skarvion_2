
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaHouse,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/FrontElevation.css";

const WHATSAPP_NUMBER = "917604949597";

const designs = [
  {
    title: "Modern Front Elevation",
    category: "Modern",
    description:
      "Explore contemporary facade concepts with clean geometry, balanced proportions and modern finishes.",
    features: ["Geometric facade", "Modern finish concepts", "Balanced openings"],
  },
  {
    title: "Simple Front Elevation",
    category: "Simple",
    description:
      "A clean exterior concept focused on simplicity, practical details and a neat appearance.",
    features: ["Clean lines", "Simple materials", "Practical styling"],
  },
  {
    title: "Luxury Front Elevation",
    category: "Luxury",
    description:
      "Discuss a distinctive front facade with feature elements and coordinated exterior finishes.",
    features: ["Feature facade", "Decorative elements", "Coordinated finishes"],
  },
  {
    title: "Duplex Front Elevation",
    category: "Duplex",
    description:
      "Explore a coordinated facade for a duplex home, including balcony and upper-floor details.",
    features: ["Two-floor composition", "Balcony concepts", "Unified exterior"],
  },
  {
    title: "Traditional Front Elevation",
    category: "Traditional",
    description:
      "Consider traditional architectural details arranged to suit your home's layout and preferences.",
    features: ["Classic details", "Balanced facade", "Custom finishes"],
  },
  {
    title: "Custom Front Elevation",
    category: "Custom",
    description:
      "Discuss a personalized front elevation based on your floor plan, plot and preferred style.",
    features: ["Plan-based design", "Personalized concept", "Style consultation"],
  },
];

const categories = [
  "All",
  "Modern",
  "Simple",
  "Luxury",
  "Duplex",
  "Traditional",
  "Custom",
];

export default function FrontElevation() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("Ground + 1 floor");
  const [style, setStyle] = useState("Modern");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "Front Elevation Design") => {
    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in ${designName}.`,
      plotSize ? `Plot size/dimensions: ${plotSize}` : "",
      `Building floors: ${floors}`,
      `Preferred style: ${style}`,
      requirements ? `Additional requirements: ${requirements}` : "",
      "",
      "Please contact me to discuss the design and quotation.",
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
        <title>Front Elevation Designs in Bhubaneswar | Skarvion</title>
        <meta
          name="description"
          content="Explore modern, simple, luxury and duplex front elevation design concepts with Skarvion Planning & Infrastructure in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/front-elevation"
        />
        <meta
          property="og:title"
          content="Front Elevation Designs | Skarvion"
        />
        <meta
          property="og:description"
          content="Discuss a customized front elevation design based on your house plan, plot and preferred exterior style."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/front-elevation"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="front-elevation-page">
        <section className="fe-hero">
          <div className="fe-hero-content">
            <span className="fe-eyebrow">
              SKARVION PLANNING & INFRASTRUCTURE
            </span>
            <h1>
              Make Your Home Stand Out.
              <span> Starting at the Front.</span>
            </h1>
            <p>
              Explore front elevation concepts that bring together facade
              proportions, entrance details, balconies and exterior finishes.
            </p>

            <button
              className="fe-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your Front Elevation <FaArrowRight />
            </button>

            <div className="fe-trust-points">
              <span><FaCheck /> Multiple style options</span>
              <span><FaCheck /> Plan-based discussions</span>
              <span><FaCheck /> WhatsApp enquiries</span>
            </div>
          </div>

          <div className="fe-hero-visual">
            <div className="fe-visual-label">
              <FaHouse />
              <div>
                <strong>Front Facade Concepts</strong>
                <span>Proportion · Materials · Character</span>
              </div>
            </div>
          </div>
        </section>

        <section className="fe-services section-container">
          <div className="fe-section-heading">
            <span className="fe-eyebrow">EXPLORE ELEVATION STYLES</span>
            <h2>Choose Your Front Elevation Style</h2>
            <p>
              Find a design direction for your home and discuss how it can
              work with your floor plan.
            </p>
          </div>

          <div
            className="fe-filters"
            aria-label="Filter front elevation designs"
          >
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

          <div className="fe-design-grid">
            {filteredDesigns.map((design, index) => (
              <article className="fe-design-card" key={design.title}>
                <div className="fe-card-top">
                  <span className="fe-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="fe-card-category">
                    {design.category}
                  </span>
                </div>

                <div className="fe-card-icon">
                  <FaHouse />
                </div>

                <h3>{design.title}</h3>
                <p>{design.description}</p>

                <ul>
                  {design.features.map((feature) => (
                    <li key={feature}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="fe-card-link"
                  onClick={() => sendEnquiry(design.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="fe-enquiry-section">
          <div className="fe-enquiry-copy">
            <span className="fe-eyebrow">YOUR HOME, YOUR STYLE</span>
            <h2>Tell Us About Your House</h2>
            <p>
              Share your plot dimensions, building floors and style preference.
              WhatsApp will open with your enquiry ready for review.
            </p>
            <div className="fe-whatsapp-note">
              <FaWhatsapp />
              <span>Review the details before sending your message.</span>
            </div>
          </div>

          <form
            className="fe-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom Front Elevation Design");
            }}
          >
            <label htmlFor="fe-plot-size">Plot size or dimensions</label>
            <input
              id="fe-plot-size"
              type="text"
              placeholder="e.g. 30 × 40 ft or 1200 sq. ft."
              value={plotSize}
              onChange={(event) => setPlotSize(event.target.value)}
            />

            <label htmlFor="fe-floors">Building floors</label>
            <select
              id="fe-floors"
              value={floors}
              onChange={(event) => setFloors(event.target.value)}
            >
              <option>Ground floor</option>
              <option>Ground + 1 floor</option>
              <option>Ground + 2 floors</option>
              <option>Ground + 3 floors</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="fe-style">Preferred style</label>
            <select
              id="fe-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              <option>Modern</option>
              <option>Simple</option>
              <option>Luxury</option>
              <option>Duplex</option>
              <option>Traditional</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="fe-requirements">Additional requirements</label>
            <textarea
              id="fe-requirements"
              rows="4"
              placeholder="Balcony, entrance, materials, colour preferences..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button
              type="submit"
              className="fe-primary-btn fe-submit-btn"
            >
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>
              Your browser opens WhatsApp with a prefilled message. Sending
              it is your choice.
            </small>
          </form>
        </section>

        <section className="fe-bottom-cta">
          <h2>Ready to Plan Your Home's Front Elevation?</h2>
          <p>Start with your plot dimensions and preferred design style.</p>
          <button
            className="fe-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
