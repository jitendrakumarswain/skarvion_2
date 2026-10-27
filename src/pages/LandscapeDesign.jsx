
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaTree,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/LandscapeDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const landscapeServices = [
  {
    title: "Residential Garden Design",
    category: "Garden",
    description:
      "Explore garden layouts that complement your home, available outdoor space and lifestyle.",
    features: ["Garden layout concepts", "Planting zones", "Outdoor circulation"],
  },
  {
    title: "Front Yard Landscaping",
    category: "Front Yard",
    description:
      "Plan an inviting front yard with coordinated greenery, pathways and entrance details.",
    features: ["Entrance landscaping", "Pathway concepts", "Greenery placement"],
  },
  {
    title: "Backyard Design",
    category: "Backyard",
    description:
      "Consider ways to organize backyard space for relaxing, gardening and outdoor activities.",
    features: ["Outdoor seating zones", "Planting areas", "Space planning"],
  },
  {
    title: "Small Garden Design",
    category: "Small Spaces",
    description:
      "Make a compact outdoor area feel more useful through thoughtful planting and layout choices.",
    features: ["Compact layouts", "Vertical greenery ideas", "Space-efficient planting"],
  },
  {
    title: "Lawn and Planting Layout",
    category: "Planting",
    description:
      "Explore a coordinated arrangement of lawn areas, planting beds and garden borders.",
    features: ["Lawn placement", "Planting beds", "Garden borders"],
  },
  {
    title: "Custom Landscape Design",
    category: "Custom",
    description:
      "Discuss a landscape concept based on your site dimensions, preferences and intended use.",
    features: ["Site-specific concept", "Personalized layout", "Design consultation"],
  },
];

const categories = [
  "All",
  "Garden",
  "Front Yard",
  "Backyard",
  "Small Spaces",
  "Planting",
  "Custom",
];

export default function LandscapeDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [siteSize, setSiteSize] = useState("");
  const [propertyType, setPropertyType] = useState("Independent house");
  const [style, setStyle] = useState("Modern");
  const [requirements, setRequirements] = useState("");

  const filteredServices =
    activeCategory === "All"
      ? landscapeServices
      : landscapeServices.filter(
          (service) => service.category === activeCategory
        );

  const sendEnquiry = (serviceName = "Landscape Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      `I am interested in ${serviceName}.`,
      `Property type: ${propertyType}`,
      siteSize ? `Outdoor/site size: ${siteSize}` : "",
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
        <title>Landscape and Garden Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore residential garden, front yard, backyard and small-space landscape design concepts with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/landscape-design"
        />
        <meta
          property="og:title"
          content="Landscape Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discuss a personalized garden or landscape layout for your home and outdoor space."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/landscape-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="landscape-design-page">
        <section className="ld-hero">
          <div className="ld-hero-content">
            <span className="ld-eyebrow">SKARVION INFRASTRUCTURE</span>
            <h1>
              Bring Your Outdoor Space to Life.
              <span> Naturally.</span>
            </h1>
            <p>
              Explore landscape concepts for home gardens, front yards,
              backyards and compact outdoor spaces.
            </p>

            <button
              className="ld-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your Landscape <FaArrowRight />
            </button>

            <div className="ld-trust-points">
              <span><FaCheck /> Space-conscious layouts</span>
              <span><FaCheck /> Personalized concepts</span>
              <span><FaCheck /> WhatsApp enquiries</span>
            </div>
          </div>

          <div className="ld-hero-visual">
            <div className="ld-visual-label">
              <FaTree />
              <div>
                <strong>Landscape Concepts</strong>
                <span>Greenery · Pathways · Outdoor living</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ld-services section-container">
          <div className="ld-section-heading">
            <span className="ld-eyebrow">EXPLORE LANDSCAPE SERVICES</span>
            <h2>Find Ideas for Your Outdoor Space</h2>
            <p>
              Select a category to explore a landscape design direction for
              your property.
            </p>
          </div>

          <div
            className="ld-filters"
            aria-label="Filter landscape design services"
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

          <div className="ld-service-grid">
            {filteredServices.map((service, index) => (
              <article className="ld-service-card" key={service.title}>
                <div className="ld-card-top">
                  <span className="ld-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="ld-card-category">
                    {service.category}
                  </span>
                </div>

                <div className="ld-card-icon">
                  <FaTree />
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
                  className="ld-card-link"
                  onClick={() => sendEnquiry(service.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="ld-enquiry-section">
          <div className="ld-enquiry-copy">
            <span className="ld-eyebrow">TELL US ABOUT YOUR SPACE</span>
            <h2>Let's Plan Your Landscape</h2>
            <p>
              Share your outdoor area size, property type and design
              preferences. WhatsApp will open with your enquiry ready to review.
            </p>
            <div className="ld-whatsapp-note">
              <FaWhatsapp />
              <span>Review the message before sending it.</span>
            </div>
          </div>

          <form
            className="ld-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom Landscape Design");
            }}
          >
            <label htmlFor="ld-property-type">Property type</label>
            <select
              id="ld-property-type"
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
            >
              <option>Independent house</option>
              <option>Duplex house</option>
              <option>Apartment complex</option>
              <option>Commercial property</option>
              <option>Farmhouse</option>
              <option>Other property</option>
            </select>

            <label htmlFor="ld-site-size">Outdoor area size</label>
            <input
              id="ld-site-size"
              type="text"
              placeholder="e.g. 500 sq. ft. or 20 × 25 ft."
              value={siteSize}
              onChange={(event) => setSiteSize(event.target.value)}
            />

            <label htmlFor="ld-style">Preferred style</label>
            <select
              id="ld-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              <option>Modern</option>
              <option>Natural</option>
              <option>Minimalist</option>
              <option>Tropical</option>
              <option>Traditional</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="ld-requirements">Additional requirements</label>
            <textarea
              id="ld-requirements"
              rows="4"
              placeholder="Lawn, seating, pathways, plants, maintenance preferences..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button
              type="submit"
              className="ld-primary-btn ld-submit-btn"
            >
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>
              Your browser opens WhatsApp with a prefilled message. Sending it
              is your choice.
            </small>
          </form>
        </section>

        <section className="ld-bottom-cta">
          <h2>Make More of Your Outdoor Space</h2>
          <p>Start with your available area and landscape preferences.</p>
          <button
            className="ld-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion Infrastructure <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
