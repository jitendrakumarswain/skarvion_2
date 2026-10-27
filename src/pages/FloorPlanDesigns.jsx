
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaRulerCombined,
  FaCheck,
} from "react-icons/fa";
import "../css-modular/FloorPlanDesigns.css";

const plans = [
  {
    id: 1,
    title: "Compact 1 BHK Floor Plan",
    category: "Compact Homes",
    area: "Small plots",
    description: "A compact layout concept for essential living spaces.",
    rooms: ["Bedroom", "Living area", "Kitchen", "Bathroom"],
  },
  {
    id: 2,
    title: "Practical 2 BHK Floor Plan",
    category: "Family Homes",
    area: "Small to medium plots",
    description: "A balanced layout concept for everyday family living.",
    rooms: ["2 bedrooms", "Living room", "Kitchen", "Bathrooms"],
  },
  {
    id: 3,
    title: "Spacious 3 BHK Floor Plan",
    category: "Family Homes",
    area: "Medium to large plots",
    description: "A three-bedroom concept with distinct shared and private spaces.",
    rooms: ["3 bedrooms", "Living room", "Kitchen", "Bathrooms"],
  },
  {
    id: 4,
    title: "Duplex Floor Plan",
    category: "Duplex Homes",
    area: "Two-storey homes",
    description: "A coordinated planning concept across two floors.",
    rooms: ["Floor coordination", "Staircase", "Bedrooms", "Living spaces"],
  },
  {
    id: 5,
    title: "Vastu-Informed Floor Plan",
    category: "Specialized Plans",
    area: "Based on plot details",
    description: "Discuss your preferred Vastu considerations during planning.",
    rooms: ["Room orientation", "Layout preferences", "Space planning"],
  },
  {
    id: 6,
    title: "Custom Plot Floor Plan",
    category: "Specialized Plans",
    area: "Customized",
    description: "A layout concept tailored to your site dimensions and needs.",
    rooms: ["Plot review", "Room requirements", "Custom layout"],
  },
];

const categories = [
  "All Plans",
  "Compact Homes",
  "Family Homes",
  "Duplex Homes",
  "Specialized Plans",
];

const WHATSAPP_NUMBER = "917604949597";

export default function FloorPlanDesigns() {
  const [activeCategory, setActiveCategory] = useState("All Plans");
  const [plotSize, setPlotSize] = useState("");
  const [bedrooms, setBedrooms] = useState("3 bedrooms");
  const [notes, setNotes] = useState("");

  const filteredPlans = plans.filter(
    (plan) =>
      activeCategory === "All Plans" ||
      plan.category === activeCategory
  );

  const enquire = (plan) => {
    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in: ${plan.title}.`,
      `Preferred bedrooms: ${bedrooms}.`,
      plotSize ? `Plot size: ${plotSize}.` : "",
      notes ? `Additional requirements: ${notes}.` : "",
      "Please share the scope, deliverables, estimated fee and next steps.",
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
    <main className="floor-plans-page">
      <Helmet>
        <title>House Floor Plan Designs in Bhubaneswar | Skarvion</title>
        <meta
          name="description"
          content="Explore 1 BHK, 2 BHK, 3 BHK, duplex and customized house floor plan concepts. Discuss residential planning requirements with Skarvion in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/floor-plan-designs"
        />
        <meta
          property="og:title"
          content="House Floor Plan Designs | Skarvion"
        />
        <meta
          property="og:description"
          content="Discuss a residential floor plan tailored to your plot, room requirements and lifestyle."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/floor-plan-designs"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="floor-plans-hero">
        <div className="floor-plans-hero-content">
          <span className="floor-plans-eyebrow">
            SKARVION PLANNING & INFRASTRUCTURE
          </span>
          <h1>
            House Floor Plan Designs
            <span>Make Every Space Count.</span>
          </h1>
          <p>
            Explore residential layout concepts and discuss a floor plan
            tailored to your plot dimensions, family requirements and budget.
          </p>
          <a href="#floor-plan-gallery" className="floor-plans-cta">
            Explore Floor Plans <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="floor-plans-intro">
        <span className="floor-plans-eyebrow">OUR COLLECTION</span>
        <h2>Find a Layout for Your Home</h2>
        <p>
          These are starting concepts, not construction-ready drawings.
          Final plans require site details and appropriate professional review.
        </p>
      </section>

      <section
        id="floor-plan-gallery"
        className="floor-plans-gallery-section"
      >
        <div className="floor-plans-filters" aria-label="Filter floor plans">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "floor-plans-filter active"
                  : "floor-plans-filter"
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="floor-plans-grid">
          {filteredPlans.map((plan) => (
            <article className="floor-plan-card" key={plan.id}>
              <div className="floor-plan-card-icon">
                <FaRulerCombined aria-hidden="true" />
              </div>
              <span className="floor-plans-category">{plan.category}</span>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <span className="floor-plan-area">{plan.area}</span>
              <ul>
                {plan.rooms.map((room) => (
                  <li key={room}>
                    <FaCheck aria-hidden="true" />
                    {room}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="floor-plans-enquire"
                onClick={() => enquire(plan)}
              >
                <FaWhatsapp aria-hidden="true" />
                Enquire on WhatsApp
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="floor-plans-contact">
        <h2>Tell Us What You Need</h2>
        <p>
          Add your plot details and requirements to start a planning discussion.
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
          Preferred bedroom count
          <select
            value={bedrooms}
            onChange={(event) => setBedrooms(event.target.value)}
          >
            <option>1 bedroom</option>
            <option>2 bedrooms</option>
            <option>3 bedrooms</option>
            <option>4 bedrooms</option>
            <option>5+ bedrooms</option>
          </select>
        </label>

        <label>
          Additional requirements
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="e.g. parking, puja room, balcony, ground + first floor"
            rows={4}
          />
        </label>

        <button
          type="button"
          className="floor-plans-enquire"
          onClick={() =>
            enquire({ title: "Custom House Floor Plan" })
          }
        >
          <FaWhatsapp aria-hidden="true" />
          Send Requirements on WhatsApp
        </button>
      </section>
    </main>
  );
}
