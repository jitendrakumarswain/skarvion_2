
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaHouse,
  FaBuilding,
  FaLayerGroup,
  FaRulerCombined,
  FaPalette,
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa6";
import "../css-modular/StaircaseDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const staircaseDesigns = [
  {
    id: 1,
    title: "Modern Staircase",
    category: "Modern",
    icon: FaHouse,
    description:
      "Clean lines, balanced proportions and contemporary finishes for modern homes.",
    features: ["Minimalist appearance", "Modern railing options", "Space-conscious layouts"],
    style: "modern",
  },
  {
    id: 2,
    title: "Floating Staircase",
    category: "Floating",
    icon: FaLayerGroup,
    description:
      "A visually light staircase concept with open risers and a distinctive contemporary character.",
    features: ["Open-riser appearance", "Glass or metal railing options", "Structural planning required"],
    style: "floating",
  },
  {
    id: 3,
    title: "Spiral Staircase",
    category: "Spiral",
    icon: FaRulerCombined,
    description:
      "A compact, sculptural staircase option for selected residential and commercial spaces.",
    features: ["Compact footprint", "Central-column concept", "Custom dimensions"],
    style: "spiral",
  },
  {
    id: 4,
    title: "Wooden Staircase",
    category: "Wooden",
    icon: FaPalette,
    description:
      "Warm wood finishes that bring natural texture and character to interior spaces.",
    features: ["Natural wood tones", "Coordinated handrails", "Choice of finishes"],
    style: "wooden",
  },
  {
    id: 5,
    title: "Marble Staircase",
    category: "Marble",
    icon: FaBuilding,
    description:
      "Elegant stone-finish steps designed to complement premium residential interiors.",
    features: ["Marble or stone finishes", "Coordinated wall details", "Slip resistance considerations"],
    style: "marble",
  },
  {
    id: 6,
    title: "Duplex Staircase",
    category: "Modern",
    icon: FaHouse,
    description:
      "A statement staircase concept for duplex homes, villas and spacious interiors.",
    features: ["Feature-wall options", "Under-stair space planning", "Custom railing concepts"],
    style: "duplex",
  },
];

const categories = ["All", "Modern", "Floating", "Spiral", "Wooden", "Marble"];

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function StaircaseDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    staircaseType: "Modern Staircase",
    location: "",
    floors: "Ground + 1",
    requirements: "",
  });

  const visibleDesigns =
    activeCategory === "All"
      ? staircaseDesigns
      : staircaseDesigns.filter(
          (design) => design.category === activeCategory
        );

  function updateForm(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function submitEnquiry(event) {
    event.preventDefault();

    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in staircase design services.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Staircase Type: ${form.staircaseType}`,
      `Building Floors: ${form.floors}`,
      `Project Location: ${form.location || "Not specified"}`,
      `Requirements: ${form.requirements || "Not specified"}`,
      "",
      "Please contact me to discuss the design and project requirements.",
    ].join("\n");

    openWhatsApp(message);
  }

  return (
    <>
      <Helmet>
        <title>Staircase Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern, floating, spiral, wooden and marble staircase design ideas with Skarvion Infrastructure in Bhubaneswar, Odisha. Enquire through WhatsApp."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/staircase-design"
        />
        <meta
          property="og:title"
          content="Staircase Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover staircase design concepts for modern homes, duplexes and selected commercial spaces."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/staircase-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="staircase-page">
        <section className="staircase-hero">
          <div className="staircase-container staircase-hero-grid">
            <div className="staircase-hero-copy">
              <span className="staircase-eyebrow">
                <FaLayerGroup /> STAIRCASE DESIGN
              </span>

              <h1>
                Steps That Make
                <span> a Statement.</span>
              </h1>

              <p>
                Explore staircase concepts that combine architectural
                character, functional movement and carefully considered
                materials for your home or building.
              </p>

              <div className="staircase-hero-actions">
                <button
                  className="staircase-btn staircase-btn-primary"
                  onClick={() =>
                    document
                      .getElementById("staircase-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Discuss Your Design <FaArrowRight />
                </button>

                <button
                  className="staircase-btn staircase-btn-outline"
                  onClick={() =>
                    document
                      .getElementById("staircase-collection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Styles
                </button>
              </div>

              <div className="staircase-hero-points">
                <span><FaCheck /> Style-led concepts</span>
                <span><FaCheck /> Space planning</span>
                <span><FaCheck /> Material choices</span>
              </div>
            </div>

            <div className="staircase-hero-art" aria-label="Illustrated staircase concept">
              <div className="staircase-art-top">
                <span>ARCHITECTURAL DETAIL</span>
                <span>01 / CONCEPT</span>
              </div>

              <div className="staircase-scene">
                <div className="staircase-scene-wall">
                  <div className="staircase-scene-window" />
                  <div className="staircase-scene-frame">
                    <span>S</span>
                  </div>
                </div>

                <div className="staircase-steps">
                  <div className="stair-step step-one" />
                  <div className="stair-step step-two" />
                  <div className="stair-step step-three" />
                  <div className="stair-step step-four" />
                  <div className="stair-step step-five" />
                  <div className="stair-step step-six" />
                  <div className="stair-step step-seven" />
                </div>

                <div className="staircase-rail" />
                <div className="staircase-floor" />
              </div>

              <div className="staircase-art-caption">
                <div>
                  <span>DESIGN PHILOSOPHY</span>
                  <strong>Structure meets style</strong>
                </div>
                <FaRulerCombined />
              </div>
            </div>
          </div>
        </section>

        <section className="staircase-intro staircase-section">
          <div className="staircase-container staircase-intro-grid">
            <div>
              <span className="staircase-eyebrow">THOUGHTFUL PLANNING</span>
              <h2>
                More than a connection
                <span> between floors.</span>
              </h2>
            </div>

            <p>
              A staircase influences movement, safety and the visual flow of
              a building. The right concept depends on available space,
              floor height, intended use, materials and applicable structural
              requirements. Start with your preferred style and discuss the
              project details with our team.
            </p>
          </div>
        </section>

        <section
          className="staircase-collection staircase-section"
          id="staircase-collection"
        >
          <div className="staircase-container">
            <div className="staircase-section-heading">
              <span className="staircase-eyebrow">EXPLORE THE COLLECTION</span>
              <h2>Find Your Staircase Style</h2>
              <p>
                Filter the concepts below to explore different staircase
                styles and finishes.
              </p>
            </div>

            <div className="staircase-filters" aria-label="Filter staircase designs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`staircase-filter ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="staircase-card-grid">
              {visibleDesigns.map((design) => {
                const DesignIcon = design.icon;

                return (
                  <article className="staircase-card" key={design.id}>
                    <div
                      className={`staircase-card-art staircase-art-${design.style}`}
                      aria-hidden="true"
                    >
                      <div className="staircase-art-wall" />
                      <div className="staircase-mini-steps">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="staircase-mini-rail" />
                      <div className="staircase-card-icon">
                        <DesignIcon />
                      </div>
                      <span className="staircase-card-number">
                        0{design.id}
                      </span>
                    </div>

                    <div className="staircase-card-body">
                      <span className="staircase-card-category">
                        {design.category}
                      </span>
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
                        className="staircase-card-link"
                        onClick={() =>
                          openWhatsApp(
                            `Hello Skarvion Infrastructure,\nI would like to enquire about your ${design.title} concept.\nPlease discuss the design options and project requirements with me.`
                          )
                        }
                      >
                        Enquire About This Style <FaArrowRight />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="staircase-planning staircase-section">
          <div className="staircase-container">
            <div className="staircase-section-heading">
              <span className="staircase-eyebrow">DESIGN CONSIDERATIONS</span>
              <h2>What Goes Into Staircase Planning?</h2>
              <p>
                Important factors to discuss before finalising a staircase
                concept.
              </p>
            </div>

            <div className="staircase-planning-grid">
              <article>
                <FaRulerCombined />
                <h3>Space & Dimensions</h3>
                <p>
                  Consider the available footprint, floor-to-floor height,
                  headroom and circulation space.
                </p>
              </article>

              <article>
                <FaLayerGroup />
                <h3>Materials & Finishes</h3>
                <p>
                  Compare wood, stone, metal and glass options for appearance,
                  maintenance and suitability.
                </p>
              </article>

              <article>
                <FaHouse />
                <h3>Safety & Structure</h3>
                <p>
                  Stair dimensions, handrails, supports and structural details
                  must be checked for the specific building.
                </p>
              </article>

              <article>
                <FaPalette />
                <h3>Interior Coordination</h3>
                <p>
                  Coordinate the staircase with flooring, lighting, walls and
                  the overall interior design.
                </p>
              </article>
            </div>

            <p className="staircase-safety-note">
              Final dimensions and structural details should be verified by
              qualified professionals against applicable building codes.
            </p>
          </div>
        </section>

        <section
          className="staircase-enquiry staircase-section"
          id="staircase-enquiry"
        >
          <div className="staircase-container staircase-enquiry-grid">
            <div className="staircase-enquiry-copy">
              <span className="staircase-eyebrow">LET'S DISCUSS YOUR PROJECT</span>
              <h2>
                Your staircase.
                <span> Your style.</span>
              </h2>
              <p>
                Tell us about your building and preferred staircase. We'll
                prepare an enquiry message in WhatsApp for you to review and
                send.
              </p>

              <div className="staircase-whatsapp-note">
                <FaWhatsapp />
                <div>
                  <strong>Simple WhatsApp enquiry</strong>
                  <span>No backend or website account required.</span>
                </div>
              </div>
            </div>

            <form className="staircase-form" onSubmit={submitEnquiry}>
              <h3>Staircase Design Enquiry</h3>
              <p>Share your project details below.</p>

              <div className="staircase-form-grid">
                <label>
                  Your Name *
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Phone Number *
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    pattern="[0-9+() -]{8,20}"
                    title="Enter a valid phone number."
                    required
                  />
                </label>

                <label>
                  Staircase Type *
                  <select
                    name="staircaseType"
                    value={form.staircaseType}
                    onChange={updateForm}
                    required
                  >
                    <option>Modern Staircase</option>
                    <option>Floating Staircase</option>
                    <option>Spiral Staircase</option>
                    <option>Wooden Staircase</option>
                    <option>Marble Staircase</option>
                    <option>Duplex Staircase</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Building Floors *
                  <select
                    name="floors"
                    value={form.floors}
                    onChange={updateForm}
                    required
                  >
                    <option>Ground + 1</option>
                    <option>Ground + 2</option>
                    <option>Ground + 3 or more</option>
                    <option>Internal staircase renovation</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="staircase-full-field">
                  Project Location
                  <input
                    name="location"
                    value={form.location}
                    onChange={updateForm}
                    placeholder="e.g. Bhubaneswar"
                  />
                </label>

                <label className="staircase-full-field">
                  Additional Requirements
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={updateForm}
                    placeholder="Describe your space, preferred materials or ideas..."
                    rows={4}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="staircase-btn staircase-btn-primary staircase-submit"
              >
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <span className="staircase-form-note">
                WhatsApp opens with your enquiry details. Press Send there to
                submit your message.
              </span>
            </form>
          </div>
        </section>

        <section className="staircase-bottom-cta">
          <div className="staircase-container staircase-bottom-inner">
            <div>
              <span className="staircase-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Ready to plan your staircase?</h2>
              <p>Let's discuss a concept that fits your building.</p>
            </div>

            <button
              className="staircase-btn staircase-btn-primary"
              onClick={() =>
                openWhatsApp(
                  "Hello Skarvion Infrastructure, I would like to discuss a staircase design project."
                )
              }
            >
              <FaWhatsapp /> Enquire Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
