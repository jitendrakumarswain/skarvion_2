
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaHouse,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/HousePlanning.css";

const WHATSAPP_NUMBER = "917604949597";

const planningServices = [
  {
    title: "2BHK House Planning",
    category: "Residential",
    description:
      "A practical layout for a comfortable home with two bedrooms and well-planned living spaces.",
    features: ["Bedroom layout", "Living and dining", "Kitchen planning"],
  },
  {
    title: "3BHK House Planning",
    category: "Residential",
    description:
      "A family-friendly home layout designed around privacy, movement and everyday convenience.",
    features: ["Three-bedroom layout", "Space optimization", "Ventilation planning"],
  },
  {
    title: "Duplex House Planning",
    category: "Duplex",
    description:
      "A coordinated two-level home layout with thoughtful connections between floors.",
    features: ["Floor-wise layout", "Staircase placement", "Private family spaces"],
  },
  {
    title: "Compact Plot Planning",
    category: "Small Plot",
    description:
      "Make better use of limited plot space through an efficient room arrangement.",
    features: ["Space-saving layout", "Functional circulation", "Room placement"],
  },
  {
    title: "Vastu-Based House Planning",
    category: "Vastu",
    description:
      "Explore room placement options based on your Vastu preferences and plot orientation.",
    features: ["Plot orientation", "Room placement preferences", "Customized layout"],
  },
  {
    title: "Custom House Planning",
    category: "Custom",
    description:
      "A personalized planning concept based on your plot dimensions, family needs and preferences.",
    features: ["Requirement-based design", "Custom room layout", "Design consultation"],
  },
];

const categories = [
  "All",
  "Residential",
  "Duplex",
  "Small Plot",
  "Vastu",
  "Custom",
];

export default function HousePlanning() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [plotSize, setPlotSize] = useState("");
  const [floors, setFloors] = useState("Ground floor");
  const [requirements, setRequirements] = useState("");

  const filteredServices =
    activeCategory === "All"
      ? planningServices
      : planningServices.filter(
          (service) => service.category === activeCategory
        );

  const sendEnquiry = (serviceName = "House Planning") => {
    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in ${serviceName}.`,
      plotSize ? `Plot size: ${plotSize}` : "",
      `Preferred floors: ${floors}`,
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
        <title>House Planning Services in Bhubaneswar | Skarvion</title>
        <meta
          name="description"
          content="Explore customized house planning services in Bhubaneswar, Odisha. Discuss 2BHK, 3BHK, duplex and compact plot layouts with Skarvion Planning & Infrastructure."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/house-planning"
        />
        <meta property="og:title" content="House Planning | Skarvion" />
        <meta
          property="og:description"
          content="Plan your home around your plot, family needs and preferred layout with Skarvion."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/house-planning"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="house-planning-page">
        <section className="hp-hero">
          <div className="hp-hero-content">
            <span className="hp-eyebrow">
              SKARVION PLANNING & INFRASTRUCTURE
            </span>
            <h1>
              Thoughtful House Planning.
              <span> Better Living.</span>
            </h1>
            <p>
              Explore home layouts designed around your plot dimensions,
              lifestyle, space requirements and design preferences.
            </p>

            <button
              className="hp-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your House Plan <FaArrowRight />
            </button>

            <div className="hp-trust-points">
              <span><FaCheck /> Requirement-based concepts</span>
              <span><FaCheck /> Space-conscious layouts</span>
              <span><FaCheck /> Direct WhatsApp enquiry</span>
            </div>
          </div>

          <div className="hp-hero-visual">
            <div className="hp-visual-label">
              <FaHouse />
              <div>
                <strong>Your Plot. Your Plan.</strong>
                <span>Planning around your needs</span>
              </div>
            </div>
          </div>
        </section>

        <section className="hp-services section-container">
          <div className="hp-section-heading">
            <span className="hp-eyebrow">OUR PLANNING OPTIONS</span>
            <h2>Find a House Plan That Fits Your Needs</h2>
            <p>
              Choose a planning category to explore a suitable starting point
              for your home.
            </p>
          </div>

          <div className="hp-filters" aria-label="Filter house planning services">
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

          <div className="hp-service-grid">
            {filteredServices.map((service, index) => (
              <article className="hp-service-card" key={service.title}>
                <div className="hp-card-top">
                  <span className="hp-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hp-card-category">{service.category}</span>
                </div>

                <div className="hp-card-icon">
                  <FaHouse />
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
                  className="hp-card-link"
                  onClick={() => sendEnquiry(service.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="hp-enquiry-section">
          <div className="hp-enquiry-copy">
            <span className="hp-eyebrow">START YOUR HOME PLAN</span>
            <h2>Tell Us About Your Plot</h2>
            <p>
              Share a few basic details. Your enquiry will open in WhatsApp,
              where you can review and send the message directly.
            </p>
            <div className="hp-enquiry-note">
              <FaWhatsapp />
              <span>No website account or online payment required.</span>
            </div>
          </div>

          <form
            className="hp-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom House Planning");
            }}
          >
            <label htmlFor="hp-plot-size">Plot size or dimensions</label>
            <input
              id="hp-plot-size"
              type="text"
              placeholder="e.g. 30 × 40 ft or 1200 sq. ft."
              value={plotSize}
              onChange={(event) => setPlotSize(event.target.value)}
            />

            <label htmlFor="hp-floors">Preferred building type</label>
            <select
              id="hp-floors"
              value={floors}
              onChange={(event) => setFloors(event.target.value)}
            >
              <option>Ground floor</option>
              <option>Ground + 1 floor</option>
              <option>Ground + 2 floors</option>
              <option>Duplex house</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="hp-requirements">Your requirements</label>
            <textarea
              id="hp-requirements"
              rows="4"
              placeholder="Number of bedrooms, parking, Vastu preferences..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button type="submit" className="hp-primary-btn hp-submit-btn">
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>Your details are placed in a WhatsApp message for you to send.</small>
          </form>
        </section>

        <section className="hp-bottom-cta">
          <h2>Ready to Discuss Your House Plan?</h2>
          <p>Let’s start with your plot dimensions and requirements.</p>
          <button
            className="hp-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
