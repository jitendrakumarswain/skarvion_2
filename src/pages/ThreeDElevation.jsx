
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaBuilding,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/ThreeDElevation.css";

const WHATSAPP_NUMBER = "917064949597";

const designs = [
  {
    title: "Modern 3D Elevation",
    category: "Modern",
    description:
      "Explore contemporary exterior concepts with clean lines, geometric forms and balanced materials.",
    features: ["Contemporary styling", "Material combinations", "Facade composition"],
  },
  {
    title: "Luxury House Elevation",
    category: "Luxury",
    description:
      "Discuss a distinctive exterior concept with premium-looking finishes and carefully composed details.",
    features: ["Feature walls", "Decorative details", "Premium-style finishes"],
  },
  {
    title: "Simple House Elevation",
    category: "Simple",
    description:
      "A clean, practical exterior concept focused on proportion, simplicity and visual balance.",
    features: ["Clean facade", "Simple finishes", "Balanced proportions"],
  },
  {
    title: "Duplex 3D Elevation",
    category: "Duplex",
    description:
      "Explore exterior designs for two-level homes with coordinated balconies, openings and facade elements.",
    features: ["Two-floor composition", "Balcony concepts", "Coordinated facade"],
  },
  {
    title: "Traditional Elevation",
    category: "Traditional",
    description:
      "Combine familiar architectural elements with a thoughtfully planned residential exterior.",
    features: ["Traditional detailing", "Balanced openings", "Custom finishes"],
  },
  {
    title: "Custom 3D Elevation",
    category: "Custom",
    description:
      "Discuss a personalized 3D exterior concept based on your house plan, plot and style preferences.",
    features: ["Personalized concept", "Style consultation", "Plan-based design"],
  },
];

const categories = [
  "All",
  "Modern",
  "Luxury",
  "Simple",
  "Duplex",
  "Traditional",
  "Custom",
];

export default function ThreeDElevation() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("Ground + 1 floor");
  const [style, setStyle] = useState("Modern");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "3D Elevation Design") => {
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
        <title>3D House Elevation Designs in Bhubaneswar | Skarvion</title>
        <meta
          name="description"
          content="Explore modern, luxury, simple and duplex 3D house elevation design concepts with Skarvion Planning & Infrastructure in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/3d-elevation"
        />
        <meta
          property="og:title"
          content="3D House Elevation Designs | Skarvion"
        />
        <meta
          property="og:description"
          content="Discuss a customized 3D house elevation concept based on your house plan and design preferences."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/3d-elevation"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="three-d-elevation-page">
        <section className="tde-hero">
          <div className="tde-hero-content">
            <span className="tde-eyebrow">
              SKARVION PLANNING & INFRASTRUCTURE
            </span>
            <h1>
              Visualize Your Home.
              <span> Shape Your Style.</span>
            </h1>
            <p>
              Explore 3D exterior design concepts for modern homes, duplexes
              and customized residential projects.
            </p>

            <button
              className="tde-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your Elevation <FaArrowRight />
            </button>

            <div className="tde-trust-points">
              <span><FaCheck /> Style-based concepts</span>
              <span><FaCheck /> Plan-led design discussions</span>
              <span><FaCheck /> WhatsApp enquiries</span>
            </div>
          </div>

          <div className="tde-hero-visual">
            <div className="tde-visual-label">
              <FaBuilding />
              <div>
                <strong>Exterior Design Concepts</strong>
                <span>Modern · Classic · Customized</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tde-services section-container">
          <div className="tde-section-heading">
            <span className="tde-eyebrow">EXPLORE DESIGN STYLES</span>
            <h2>Find Your Preferred Elevation Style</h2>
            <p>
              Select a category to explore different approaches for your
              home's exterior.
            </p>
          </div>

          <div
            className="tde-filters"
            aria-label="Filter 3D elevation designs"
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

          <div className="tde-design-grid">
            {filteredDesigns.map((design, index) => (
              <article className="tde-design-card" key={design.title}>
                <div className="tde-card-top">
                  <span className="tde-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tde-card-category">
                    {design.category}
                  </span>
                </div>

                <div className="tde-card-icon">
                  <FaBuilding />
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
                  className="tde-card-link"
                  onClick={() => sendEnquiry(design.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="tde-enquiry-section">
          <div className="tde-enquiry-copy">
            <span className="tde-eyebrow">CUSTOMIZE YOUR DESIGN</span>
            <h2>Tell Us About Your Home</h2>
            <p>
              Share your plot dimensions, building floors and preferred style.
              Your details will be prepared as a WhatsApp message for you to
              review and send.
            </p>
            <div className="tde-whatsapp-note">
              <FaWhatsapp />
              <span>You can review the message before sending it.</span>
            </div>
          </div>

          <form
            className="tde-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom 3D Elevation Design");
            }}
          >
            <label htmlFor="tde-plot-size">Plot size or dimensions</label>
            <input
              id="tde-plot-size"
              type="text"
              placeholder="e.g. 30 × 40 ft or 1200 sq. ft."
              value={plotSize}
              onChange={(event) => setPlotSize(event.target.value)}
            />

            <label htmlFor="tde-floors">Building floors</label>
            <select
              id="tde-floors"
              value={floors}
              onChange={(event) => setFloors(event.target.value)}
            >
              <option>Ground floor</option>
              <option>Ground + 1 floor</option>
              <option>Ground + 2 floors</option>
              <option>Ground + 3 floors</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="tde-style">Preferred design style</label>
            <select
              id="tde-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              <option>Modern</option>
              <option>Luxury</option>
              <option>Simple</option>
              <option>Traditional</option>
              <option>Minimalist</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="tde-requirements">Additional requirements</label>
            <textarea
              id="tde-requirements"
              rows="4"
              placeholder="Balcony, exterior materials, colour preferences..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button
              type="submit"
              className="tde-primary-btn tde-submit-btn"
            >
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>
              No account is required. Your browser opens WhatsApp with a
              prefilled message.
            </small>
          </form>
        </section>

        <section className="tde-bottom-cta">
          <h2>Give Your Home a Distinctive Exterior</h2>
          <p>Start with your plot size and preferred elevation style.</p>
          <button
            className="tde-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
