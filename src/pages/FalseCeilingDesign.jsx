
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaHouse,
  FaBuilding,
  FaLightbulb,
  FaLayerGroup,
  FaPalette,
  FaRulerCombined,
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa6";
import "../css-modular/FalseCeilingDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const ceilingDesigns = [
  {
    id: 1,
    title: "Modern Cove Ceiling",
    category: "Modern",
    icon: FaLayerGroup,
    description:
      "Layered ceiling concepts with concealed lighting for a refined, contemporary finish.",
    features: ["Recessed lighting options", "Layered profiles", "Modern appearance"],
    style: "cove",
  },
  {
    id: 2,
    title: "Minimalist Ceiling",
    category: "Minimalist",
    icon: FaHouse,
    description:
      "Clean ceiling lines and simple detailing for understated residential interiors.",
    features: ["Simple geometry", "Clean finish", "Easy-to-coordinate style"],
    style: "minimal",
  },
  {
    id: 3,
    title: "POP Ceiling Design",
    category: "POP & Gypsum",
    icon: FaPalette,
    description:
      "Decorative plaster-of-Paris ceiling concepts with selected shapes and border details.",
    features: ["Decorative profiles", "Custom shapes", "Coordinated finishes"],
    style: "pop",
  },
  {
    id: 4,
    title: "Gypsum Ceiling",
    category: "POP & Gypsum",
    icon: FaBuilding,
    description:
      "Suspended gypsum-board ceiling concepts for selected homes and commercial spaces.",
    features: ["Neat ceiling planes", "Service integration planning", "Flexible layouts"],
    style: "gypsum",
  },
  {
    id: 5,
    title: "LED Lighting Ceiling",
    category: "Lighting",
    icon: FaLightbulb,
    description:
      "Ceiling concepts that coordinate ambient lighting, downlights and indirect illumination.",
    features: ["Lighting placement", "Layered illumination", "Mood-focused concepts"],
    style: "lighting",
  },
  {
    id: 6,
    title: "Bedroom Ceiling",
    category: "Bedroom",
    icon: FaHouse,
    description:
      "Comfortable bedroom ceiling concepts with restrained detailing and coordinated lighting.",
    features: ["Bed-area coordination", "Soft lighting options", "Balanced detailing"],
    style: "bedroom",
  },
  {
    id: 7,
    title: "Living Room Ceiling",
    category: "Living Room",
    icon: FaPalette,
    description:
      "Feature ceilings designed to complement living room proportions and interior finishes.",
    features: ["Statement centrepiece", "Lighting coordination", "Interior integration"],
    style: "living",
  },
  {
    id: 8,
    title: "Office Ceiling",
    category: "Commercial",
    icon: FaRulerCombined,
    description:
      "Practical commercial ceiling concepts that consider lighting, services and workspace needs.",
    features: ["Lighting layout", "Service coordination", "Professional finish"],
    style: "office",
  },
];

const categories = [
  "All",
  "Modern",
  "Minimalist",
  "POP & Gypsum",
  "Lighting",
  "Bedroom",
  "Living Room",
  "Commercial",
];

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function FalseCeilingDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    ceilingType: "Modern Cove Ceiling",
    roomType: "Living Room",
    area: "",
    location: "",
    requirements: "",
  });

  const visibleDesigns =
    activeCategory === "All"
      ? ceilingDesigns
      : ceilingDesigns.filter(
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
      "I am interested in false ceiling design services.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Preferred Ceiling Design: ${form.ceilingType}`,
      `Room Type: ${form.roomType}`,
      `Approximate Area: ${form.area || "Not specified"}`,
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
        <title>False Ceiling Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore false ceiling designs by Skarvion Infrastructure in Bhubaneswar, Odisha, including modern cove ceilings, POP, gypsum, LED lighting, bedroom and living room ceiling concepts."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/false-ceiling-design"
        />
        <meta
          property="og:title"
          content="False Ceiling Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover modern false ceiling concepts for bedrooms, living rooms, offices and other interiors."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/false-ceiling-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="false-ceiling-page">
        <section className="fc-hero">
          <div className="fc-hero-glow" />

          <div className="fc-container fc-hero-grid">
            <div className="fc-hero-copy">
              <span className="fc-eyebrow">
                <FaLayerGroup /> FALSE CEILING DESIGN
              </span>

              <h1>
                Look Up to
                <span> Better Design.</span>
              </h1>

              <p>
                Discover ceiling concepts that bring together architectural
                detail, coordinated lighting and a polished finish for
                residential and commercial interiors.
              </p>

              <div className="fc-hero-actions">
                <button
                  className="fc-btn fc-btn-primary"
                  onClick={() =>
                    document
                      .getElementById("fc-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Plan Your Ceiling <FaArrowRight />
                </button>

                <button
                  className="fc-btn fc-btn-outline"
                  onClick={() =>
                    document
                      .getElementById("fc-collection")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Designs
                </button>
              </div>

              <div className="fc-hero-points">
                <span><FaCheck /> Thoughtful layouts</span>
                <span><FaCheck /> Lighting coordination</span>
                <span><FaCheck /> Custom concepts</span>
              </div>
            </div>

            <div className="fc-hero-visual" aria-label="Illustrated false ceiling concept">
              <div className="fc-visual-header">
                <span>CEILING CONCEPT</span>
                <span>DESIGN STUDY / 01</span>
              </div>

              <div className="fc-room-scene">
                <div className="fc-ceiling-outer">
                  <div className="fc-ceiling-inner">
                    <div className="fc-ceiling-panel" />
                    <div className="fc-ceiling-led fc-led-one" />
                    <div className="fc-ceiling-led fc-led-two" />
                    <div className="fc-ceiling-led fc-led-three" />
                    <div className="fc-ceiling-led fc-led-four" />
                    <div className="fc-ceiling-centre-light" />
                  </div>
                </div>

                <div className="fc-scene-wall fc-scene-left">
                  <div className="fc-scene-window" />
                </div>

                <div className="fc-scene-wall fc-scene-right">
                  <div className="fc-scene-art" />
                </div>

                <div className="fc-scene-floor" />
              </div>

              <div className="fc-visual-caption">
                <div>
                  <span>DESIGN APPROACH</span>
                  <strong>Light, layers & proportion</strong>
                </div>
                <FaLightbulb />
              </div>
            </div>
          </div>
        </section>

        <section className="fc-intro fc-section">
          <div className="fc-container fc-intro-grid">
            <div>
              <span className="fc-eyebrow">CEILING DESIGN MATTERS</span>
              <h2>
                The finishing touch
                <span> above every room.</span>
              </h2>
            </div>

            <p>
              A well-planned false ceiling can help organise lighting,
              accommodate selected building services and complement an
              interior's proportions. The suitable design depends on ceiling
              height, room use, maintenance access, materials and budget.
              Discuss your space with our team before finalising a concept.
            </p>
          </div>
        </section>

        <section className="fc-collection fc-section" id="fc-collection">
          <div className="fc-container">
            <div className="fc-section-heading">
              <span className="fc-eyebrow">EXPLORE THE COLLECTION</span>
              <h2>Find Your Ceiling Style</h2>
              <p>
                Browse design concepts and filter by style or room.
              </p>
            </div>

            <div className="fc-filters" aria-label="Filter ceiling designs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`fc-filter ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="fc-card-grid">
              {visibleDesigns.map((design) => {
                const DesignIcon = design.icon;

                return (
                  <article className="fc-card" key={design.id}>
                    <div
                      className={`fc-card-art fc-art-${design.style}`}
                      aria-hidden="true"
                    >
                      <div className="fc-art-ceiling">
                        <div className="fc-art-inner">
                          <i className="fc-art-light light-a" />
                          <i className="fc-art-light light-b" />
                          <i className="fc-art-light light-c" />
                          <i className="fc-art-light light-d" />
                          <i className="fc-art-centre" />
                        </div>
                      </div>

                      <div className="fc-art-wall" />
                      <div className="fc-card-icon"><DesignIcon /></div>
                      <span className="fc-card-number">
                        0{design.id}
                      </span>
                    </div>

                    <div className="fc-card-body">
                      <span className="fc-card-category">
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
                        className="fc-card-link"
                        onClick={() =>
                          openWhatsApp(
                            `Hello Skarvion Infrastructure,\nI would like to enquire about your ${design.title} concept.\nPlease discuss the design options and project requirements with me.`
                          )
                        }
                      >
                        Enquire About This Design <FaArrowRight />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fc-considerations fc-section">
          <div className="fc-container">
            <div className="fc-section-heading">
              <span className="fc-eyebrow">PLAN WITH CARE</span>
              <h2>What to Consider Before Choosing</h2>
              <p>
                Important factors to discuss before installing a false ceiling.
              </p>
            </div>

            <div className="fc-consideration-grid">
              <article>
                <FaRulerCombined />
                <h3>Ceiling Height</h3>
                <p>
                  Check the available height and how the proposed ceiling
                  affects the room's usable clearance.
                </p>
              </article>

              <article>
                <FaLightbulb />
                <h3>Lighting Layout</h3>
                <p>
                  Plan downlights, indirect lighting and access for electrical
                  installation and maintenance.
                </p>
              </article>

              <article>
                <FaLayerGroup />
                <h3>Materials & Services</h3>
                <p>
                  Choose suitable ceiling materials and coordinate electrical,
                  ventilation and other building services.
                </p>
              </article>

              <article>
                <FaPalette />
                <h3>Interior Coordination</h3>
                <p>
                  Match ceiling profiles, colours and lighting with the room's
                  furniture and interior finishes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="fc-enquiry fc-section" id="fc-enquiry">
          <div className="fc-container fc-enquiry-grid">
            <div className="fc-enquiry-copy">
              <span className="fc-eyebrow">START YOUR PROJECT</span>
              <h2>
                Let's design
                <span> your ceiling.</span>
              </h2>
              <p>
                Share your preferred style and room details. Your enquiry
                will open in WhatsApp so you can review it and send it
                directly to Skarvion Infrastructure.
              </p>

              <div className="fc-whatsapp-note">
                <FaWhatsapp />
                <div>
                  <strong>Direct WhatsApp enquiry</strong>
                  <span>No website backend or account required.</span>
                </div>
              </div>
            </div>

            <form className="fc-form" onSubmit={submitEnquiry}>
              <h3>False Ceiling Enquiry</h3>
              <p>Tell us a little about your project.</p>

              <div className="fc-form-grid">
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
                  Preferred Ceiling Type *
                  <select
                    name="ceilingType"
                    value={form.ceilingType}
                    onChange={updateForm}
                    required
                  >
                    <option>Modern Cove Ceiling</option>
                    <option>Minimalist Ceiling</option>
                    <option>POP Ceiling Design</option>
                    <option>Gypsum Ceiling</option>
                    <option>LED Lighting Ceiling</option>
                    <option>Bedroom Ceiling</option>
                    <option>Living Room Ceiling</option>
                    <option>Office Ceiling</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Room Type *
                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={updateForm}
                    required
                  >
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Kitchen</option>
                    <option>Bathroom</option>
                    <option>Office</option>
                    <option>Commercial Space</option>
                    <option>Multiple Rooms</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Approximate Area
                  <input
                    name="area"
                    value={form.area}
                    onChange={updateForm}
                    placeholder="e.g. 250 sq. ft."
                  />
                </label>

                <label>
                  Project Location
                  <input
                    name="location"
                    value={form.location}
                    onChange={updateForm}
                    placeholder="e.g. Bhubaneswar"
                  />
                </label>

                <label className="fc-full-field">
                  Additional Requirements
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={updateForm}
                    placeholder="Describe your preferred design, lighting or budget..."
                    rows={4}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="fc-btn fc-btn-primary fc-submit"
              >
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <span className="fc-form-note">
                WhatsApp opens with your enquiry details. Press Send there
                to submit your message.
              </span>
            </form>
          </div>
        </section>

        <section className="fc-bottom-cta">
          <div className="fc-container fc-bottom-inner">
            <div>
              <span className="fc-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Ready to transform your ceiling?</h2>
              <p>Let's discuss your interior design requirements.</p>
            </div>

            <button
              className="fc-btn fc-btn-primary"
              onClick={() =>
                openWhatsApp(
                  "Hello Skarvion Infrastructure, I would like to discuss a false ceiling design project."
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
