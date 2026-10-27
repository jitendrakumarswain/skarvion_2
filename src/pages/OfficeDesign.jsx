
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBuilding,
  FaBriefcase,
  FaUsers,
  FaLightbulb,
  FaPalette,
  FaRulerCombined,
  FaHouse,
  FaWhatsapp,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/OfficeDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const officeDesigns = [
  {
    id: 1,
    title: "Corporate Office",
    category: "Corporate",
    icon: FaBuilding,
    description:
      "Professional workspaces designed for productivity, brand identity and comfortable collaboration.",
    features: ["Executive cabins", "Workstations", "Visitor areas"],
    style: "corporate",
  },
  {
    id: 2,
    title: "Home Office",
    category: "Home Office",
    icon: FaHouse,
    description:
      "Practical home-office layouts with ergonomic furniture, smart storage and focused lighting.",
    features: ["Compact layouts", "Ergonomic setup", "Smart storage"],
    style: "home",
  },
  {
    id: 3,
    title: "Reception & Waiting Area",
    category: "Reception",
    icon: FaUsers,
    description:
      "A welcoming first impression through thoughtful seating, reception counters and brand details.",
    features: ["Reception counter", "Guest seating", "Brand display"],
    style: "reception",
  },
  {
    id: 4,
    title: "Meeting & Conference Room",
    category: "Meeting Room",
    icon: FaBriefcase,
    description:
      "Meeting spaces planned for presentations, team discussions and professional client meetings.",
    features: ["Conference table", "Display wall", "Acoustic planning"],
    style: "meeting",
  },
  {
    id: 5,
    title: "Creative Workspace",
    category: "Corporate",
    icon: FaLightbulb,
    description:
      "Flexible work environments that encourage creativity, teamwork and efficient use of space.",
    features: ["Collaborative zones", "Flexible seating", "Creative details"],
    style: "creative",
  },
  {
    id: 6,
    title: "Premium Executive Cabin",
    category: "Corporate",
    icon: FaPalette,
    description:
      "Refined executive interiors combining professional finishes, privacy and functional furniture.",
    features: ["Executive desk", "Storage solutions", "Premium finishes"],
    style: "executive",
  },
];

const categories = [
  "All",
  "Corporate",
  "Home Office",
  "Reception",
  "Meeting Room",
];

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function OfficeDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    officeType: "Corporate Office",
    area: "",
    location: "",
    requirements: "",
  });

  const visibleDesigns =
    activeCategory === "All"
      ? officeDesigns
      : officeDesigns.filter(
          (design) => design.category === activeCategory
        );

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const submitEnquiry = (event) => {
    event.preventDefault();

    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in office interior design services.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Office Type: ${form.officeType}`,
      `Approximate Area: ${form.area || "Not specified"}`,
      `Location: ${form.location || "Not specified"}`,
      `Requirements: ${form.requirements || "Not specified"}`,
      "",
      "Please contact me to discuss the project.",
    ].join("\n");

    openWhatsApp(message);
  };

  return (
    <>
      <Helmet>
        <title>Office Interior Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore office interior design solutions by Skarvion Infrastructure in Bhubaneswar, Odisha. Plan corporate offices, home offices, reception areas and meeting rooms."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/office-design"
        />
        <meta
          property="og:title"
          content="Office Interior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Professional office interior concepts for productive, functional and modern workspaces."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/office-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="office-page">
        <section className="office-hero">
          <div className="office-hero-glow office-glow-one" />
          <div className="office-hero-glow office-glow-two" />

          <div className="office-container office-hero-grid">
            <div className="office-hero-content">
              <span className="office-eyebrow">
                <FaBuilding /> WORKSPACE DESIGN
              </span>

              <h1>
                Office Interiors
                <span> Designed for Better Work.</span>
              </h1>

              <p>
                Thoughtfully planned workspaces that balance functionality,
                comfort and professional identity—from reception areas to
                complete office interiors.
              </p>

              <div className="office-hero-actions">
                <button
                  className="office-btn office-btn-primary"
                  onClick={() =>
                    document
                      .getElementById("office-enquiry")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Plan Your Office <FaArrowRight />
                </button>

                <button
                  className="office-btn office-btn-outline"
                  onClick={() =>
                    document
                      .getElementById("office-designs")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Designs
                </button>
              </div>

              <div className="office-hero-points">
                <span><FaCheck /> Functional layouts</span>
                <span><FaCheck /> Professional aesthetics</span>
                <span><FaCheck /> Tailored concepts</span>
              </div>
            </div>

            <div className="office-hero-visual">
              <div className="office-visual-topline">
                <span>WORKSPACE CONCEPT</span>
                <span className="office-live-dot">● PLANNING</span>
              </div>

              <div className="office-room-scene">
                <div className="office-room-wall">
                  <div className="office-wall-window">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="office-wall-art">S</div>
                  <div className="office-wall-shelf" />
                </div>

                <div className="office-desk">
                  <div className="office-monitor">
                    <span>IDEAS</span>
                  </div>
                  <div className="office-desk-top" />
                  <div className="office-desk-leg office-leg-left" />
                  <div className="office-desk-leg office-leg-right" />
                </div>

                <div className="office-chair">
                  <div className="office-chair-back" />
                  <div className="office-chair-seat" />
                  <div className="office-chair-base" />
                </div>

                <div className="office-plant">
                  <i />
                  <i />
                  <i />
                  <i />
                  <span />
                </div>

                <div className="office-room-floor" />
              </div>

              <div className="office-visual-caption">
                <div>
                  <span>DESIGN APPROACH</span>
                  <strong>Form meets function</strong>
                </div>
                <FaRulerCombined />
              </div>
            </div>
          </div>
        </section>

        <section className="office-intro office-section">
          <div className="office-container office-intro-grid">
            <div>
              <span className="office-eyebrow">OUR APPROACH</span>
              <h2>
                A workspace that
                <span> works for you.</span>
              </h2>
            </div>

            <p>
              Every office has different requirements. Our design approach
              considers available space, workflow, furniture placement,
              lighting and the impression your business wants to create.
              Start with your requirements and discuss a suitable concept
              with our team.
            </p>
          </div>
        </section>

        <section
          className="office-design-section office-section"
          id="office-designs"
        >
          <div className="office-container">
            <div className="office-section-heading">
              <span className="office-eyebrow">DESIGN COLLECTION</span>
              <h2>Explore Office Design Ideas</h2>
              <p>
                Choose a workspace category to explore suitable design
                directions.
              </p>
            </div>

            <div className="office-filters" aria-label="Filter office designs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`office-filter ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="office-design-grid">
              {visibleDesigns.map((design) => {
                const DesignIcon = design.icon;

                return (
                  <article className="office-design-card" key={design.id}>
                    <div
                      className={`office-card-art office-art-${design.style}`}
                      aria-hidden="true"
                    >
                      <div className="office-art-window" />
                      <div className="office-art-wall-panel" />
                      <div className="office-art-desk" />
                      <div className="office-art-chair" />
                      <div className="office-art-plant">
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="office-art-icon">
                        <DesignIcon />
                      </div>
                      <span className="office-art-number">
                        0{design.id}
                      </span>
                    </div>

                    <div className="office-card-content">
                      <span className="office-card-category">
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
                        className="office-card-link"
                        onClick={() =>
                          openWhatsApp(
                            `Hello Skarvion Infrastructure,\nI would like to enquire about ${design.title}.\nPlease share details and discuss my requirements.`
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

        <section className="office-process office-section">
          <div className="office-container">
            <div className="office-section-heading">
              <span className="office-eyebrow">HOW TO GET STARTED</span>
              <h2>From Requirements to Concept</h2>
              <p>
                A simple starting point for discussing your office design
                project.
              </p>
            </div>

            <div className="office-process-grid">
              <article>
                <span>01</span>
                <FaRulerCombined />
                <h3>Share Your Space</h3>
                <p>Tell us the location, approximate area and office type.</p>
              </article>

              <article>
                <span>02</span>
                <FaLightbulb />
                <h3>Discuss Your Needs</h3>
                <p>Explain your preferred style, layout and requirements.</p>
              </article>

              <article>
                <span>03</span>
                <FaPalette />
                <h3>Explore Concepts</h3>
                <p>Discuss design directions that suit your workspace.</p>
              </article>

              <article>
                <span>04</span>
                <FaCheck />
                <h3>Plan Next Steps</h3>
                <p>Review the scope, deliverables and project expectations.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="office-enquiry-section office-section" id="office-enquiry">
          <div className="office-container office-enquiry-grid">
            <div className="office-enquiry-copy">
              <span className="office-eyebrow">START YOUR PROJECT</span>
              <h2>
                Let's plan a
                <span> better workspace.</span>
              </h2>
              <p>
                Share a few details about your office project. Your enquiry
                will open in WhatsApp so you can send it directly to Skarvion
                Infrastructure.
              </p>

              <div className="office-contact-note">
                <FaWhatsapp />
                <div>
                  <strong>Direct WhatsApp enquiry</strong>
                  <span>No website account or backend form required.</span>
                </div>
              </div>
            </div>

            <form className="office-enquiry-form" onSubmit={submitEnquiry}>
              <h3>Tell Us About Your Office</h3>
              <p>Fill in the details to prepare your WhatsApp message.</p>

              <div className="office-form-grid">
                <label>
                  Your Name *
                  <input
                    type="text"
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
                  Office Type *
                  <select
                    name="officeType"
                    value={form.officeType}
                    onChange={updateForm}
                    required
                  >
                    <option>Corporate Office</option>
                    <option>Home Office</option>
                    <option>Reception & Waiting Area</option>
                    <option>Meeting & Conference Room</option>
                    <option>Executive Cabin</option>
                    <option>Complete Office Interior</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Approximate Area
                  <input
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={updateForm}
                    placeholder="e.g. 1,000 sq. ft."
                  />
                </label>

                <label className="office-full-field">
                  Project Location
                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={updateForm}
                    placeholder="e.g. Bhubaneswar"
                  />
                </label>

                <label className="office-full-field">
                  Additional Requirements
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={updateForm}
                    placeholder="Describe your design ideas or requirements..."
                    rows={4}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="office-btn office-btn-primary office-submit-btn"
              >
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <span className="office-form-footnote">
                Your message is prepared in WhatsApp. You must press Send
                there to submit the enquiry.
              </span>
            </form>
          </div>
        </section>

        <section className="office-bottom-cta">
          <div className="office-container office-bottom-cta-inner">
            <div>
              <span className="office-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Have a workspace in mind?</h2>
              <p>Let's discuss your office design requirements.</p>
            </div>

            <button
              className="office-btn office-btn-primary"
              onClick={() =>
                openWhatsApp(
                  "Hello Skarvion Infrastructure, I would like to discuss an office interior design project."
                )
              }
            >
              <FaWhatsapp /> Discuss Your Project
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
