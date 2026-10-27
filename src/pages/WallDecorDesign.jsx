
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaLayerGroup,
  FaPalette,
  FaPaintRoller,
  FaWhatsapp,
  FaCouch,
  FaRegLightbulb,
  FaHouse,
  FaImages,
} from "react-icons/fa6";
import "../css-modular/WallDecorDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const wallDesigns = [
  {
    title: "TV Feature Wall",
    category: "Feature Walls",
    description:
      "Create a sophisticated focal point with decorative panels and a coordinated TV backdrop.",
    style: "wall-tv",
    tag: "Popular Choice",
  },
  {
    title: "Wooden Panel Wall",
    category: "Wall Panels",
    description:
      "Add warmth and depth with contemporary wooden textures and vertical panel designs.",
    style: "wall-wood",
    tag: "Modern",
  },
  {
    title: "Textured Accent Wall",
    category: "Texture & Paint",
    description:
      "Bring character to your space with subtle textures, layered finishes and elegant colours.",
    style: "wall-texture",
    tag: "Elegant",
  },
  {
    title: "Stone Feature Wall",
    category: "Feature Walls",
    description:
      "Introduce natural-looking stone finishes for a bold living room or entrance feature.",
    style: "wall-stone",
    tag: "Statement Design",
  },
  {
    title: "Decorative Wall Panels",
    category: "Wall Panels",
    description:
      "Use geometric patterns and refined panel layouts to create a clean, premium appearance.",
    style: "wall-panels",
    tag: "Contemporary",
  },
  {
    title: "Wallpaper Design",
    category: "Wallpaper",
    description:
      "Explore coordinated patterns, botanical prints and understated decorative finishes.",
    style: "wall-paper",
    tag: "Creative",
  },
  {
    title: "Bedroom Headboard Wall",
    category: "Bedroom Walls",
    description:
      "Design a relaxing backdrop behind the bed with upholstered textures and warm accents.",
    style: "wall-bedroom",
    tag: "Comfort",
  },
  {
    title: "Art & Gallery Wall",
    category: "Wallpaper",
    description:
      "Arrange wall art and decorative elements into a balanced and personalised display.",
    style: "wall-gallery",
    tag: "Personalised",
  },
];

const categories = [
  "All Designs",
  "Feature Walls",
  "Wall Panels",
  "Texture & Paint",
  "Wallpaper",
  "Bedroom Walls",
];

const benefits = [
  {
    icon: <FaPalette />,
    title: "Coordinated Colours",
    description:
      "Choose colours and finishes that complement your furniture, flooring and interior style.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Material Selection",
    description:
      "Compare panel, paint, wallpaper and decorative surface options for your space.",
  },
  {
    icon: <FaRegLightbulb />,
    title: "Lighting Integration",
    description:
      "Plan accent lighting to highlight textures, panels and selected wall features.",
  },
  {
    icon: <FaHouse />,
    title: "Space-Specific Design",
    description:
      "Create wall concepts suited to living rooms, bedrooms, entrances and other spaces.",
  },
];

function WallDecorDesign() {
  const [activeCategory, setActiveCategory] = useState("All Designs");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    space: "Living Room",
    design: "TV Feature Wall",
    message: "",
  });

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All Designs") return wallDesigns;
    return wallDesigns.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in wall decor design.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Space: ${form.space}`,
      `Preferred Design: ${form.design}`,
      form.message ? `Requirements: ${form.message}` : "",
      "",
      "Please contact me to discuss the design and estimate.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const selectDesign = (design) => {
    setForm((previous) => ({
      ...previous,
      design,
    }));
    document
      .getElementById("wall-decor-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>
          Wall Decor Design in Bhubaneswar | Skarvion Infrastructure
        </title>
        <meta
          name="description"
          content="Explore modern wall decor, TV feature walls, wooden panels, textured finishes, wallpaper and bedroom accent wall concepts with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="wall decor design Bhubaneswar, TV unit background design, wooden wall panels Odisha, accent wall design, bedroom wall decor, living room wall design"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/wall-decor-design"
        />
        <meta
          property="og:title"
          content="Wall Decor Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover elegant wall panels, accent walls, textures and decorative finishes for your home."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/wall-decor-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="wall-decor-page">
        <section className="wall-decor-hero">
          <div className="wall-decor-hero-pattern" />

          <div className="wall-decor-container wall-decor-hero-content">
            <div className="wall-decor-hero-copy">
              <span className="wall-decor-eyebrow">
                <FaPalette /> INTERIOR DESIGN COLLECTION
              </span>

              <h1>
                Walls That Make
                <span> A Statement.</span>
              </h1>

              <p>
                Transform ordinary walls into remarkable interiors with
                thoughtful colours, premium-looking finishes and
                contemporary decorative concepts.
              </p>

              <div className="wall-decor-hero-actions">
                <a href="#wall-decor-gallery" className="wall-decor-btn">
                  Explore Designs <FaArrowRight />
                </a>
                <a
                  href="#wall-decor-enquiry"
                  className="wall-decor-btn wall-decor-btn-outline"
                >
                  Get a Consultation
                </a>
              </div>

              <div className="wall-decor-hero-points">
                <span><FaCheck /> Custom Concepts</span>
                <span><FaCheck /> Modern Finishes</span>
                <span><FaCheck /> WhatsApp Enquiry</span>
              </div>
            </div>

            <div className="wall-decor-hero-visual">
              <div className="wall-decor-room">
                <div className="wall-decor-room-ceiling" />
                <div className="wall-decor-room-wall">
                  <div className="wall-decor-art-frame">
                    <div className="wall-decor-art-inner">
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="wall-decor-wall-sconce" />
                  <div className="wall-decor-room-console">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                <div className="wall-decor-room-floor" />
                <div className="wall-decor-room-plant">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="wall-decor-visual-caption">
                <span className="wall-decor-caption-icon">
                  <FaImages />
                </span>
                <div>
                  <strong>Thoughtful Wall Styling</strong>
                  <small>Designed around your space</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wall-decor-intro wall-decor-section">
          <div className="wall-decor-container wall-decor-intro-grid">
            <div>
              <span className="wall-decor-eyebrow">
                DETAILS DEFINE DESIGN
              </span>
              <h2>
                Give Every Wall
                <span> A Purpose.</span>
              </h2>
            </div>
            <p>
              The right wall treatment can add depth, visual interest and
              personality to a room. Explore concepts for feature walls,
              decorative panels, textured surfaces and coordinated
              bedroom designs with Skarvion Infrastructure.
            </p>
          </div>
        </section>

        <section
          className="wall-decor-gallery wall-decor-section"
          id="wall-decor-gallery"
        >
          <div className="wall-decor-container">
            <div className="wall-decor-section-heading">
              <span className="wall-decor-eyebrow">DESIGN INSPIRATION</span>
              <h2>Explore Wall Decor Ideas</h2>
              <p>
                Find a style that complements your home and the way you live.
              </p>
            </div>

            <div
              className="wall-decor-filters"
              role="group"
              aria-label="Filter wall decor designs"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "wall-decor-filter active"
                      : "wall-decor-filter"
                  }
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="wall-decor-grid">
              {filteredDesigns.map((design, index) => (
                <article
                  className="wall-decor-card"
                  key={design.title}
                  style={{ "--card-index": index }}
                >
                  <div
                    className={`wall-decor-card-art ${design.style}`}
                    aria-label={`${design.title} decorative wall concept`}
                    role="img"
                  >
                    <span className="wall-decor-art-tag">{design.tag}</span>
                    <div className="wall-decor-art-detail">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="wall-decor-art-console">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="wall-decor-card-content">
                    <span className="wall-decor-card-category">
                      {design.category}
                    </span>
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>
                    <button
                      type="button"
                      className="wall-decor-card-link"
                      onClick={() => selectDesign(design.title)}
                    >
                      Enquire About This Design <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredDesigns.length === 0 && (
              <p className="wall-decor-empty">
                No designs found in this category.
              </p>
            )}
          </div>
        </section>

        <section className="wall-decor-benefits wall-decor-section">
          <div className="wall-decor-container">
            <div className="wall-decor-section-heading">
              <span className="wall-decor-eyebrow">OUR APPROACH</span>
              <h2>Design Beyond Decoration</h2>
              <p>
                A considered wall design balances appearance, materials
                and the function of the room.
              </p>
            </div>

            <div className="wall-decor-benefit-grid">
              {benefits.map((benefit) => (
                <article className="wall-decor-benefit" key={benefit.title}>
                  <div className="wall-decor-benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wall-decor-process wall-decor-section">
          <div className="wall-decor-container wall-decor-process-grid">
            <div className="wall-decor-process-copy">
              <span className="wall-decor-eyebrow">FROM IDEA TO CONCEPT</span>
              <h2>
                Your Wall.
                <span> Your Style.</span>
              </h2>
              <p>
                Start with your preferred style, room dimensions and
                requirements. Our team can discuss suitable design
                directions and the next steps with you.
              </p>

              <ul className="wall-decor-check-list">
                <li><FaCheck /> Discuss your design preferences</li>
                <li><FaCheck /> Review finish and material options</li>
                <li><FaCheck /> Plan a concept for your room</li>
                <li><FaCheck /> Discuss the project estimate</li>
              </ul>

              <a
                href="#wall-decor-enquiry"
                className="wall-decor-btn"
              >
                Start Your Enquiry <FaArrowRight />
              </a>
            </div>

            <div className="wall-decor-material-board">
              <div className="wall-decor-material-board-heading">
                <FaPaintRoller />
                <span>FINISHES & TEXTURES</span>
              </div>
              <div className="wall-decor-swatches">
                <div className="wall-decor-swatch swatch-cream">
                  <span>Soft Neutrals</span>
                </div>
                <div className="wall-decor-swatch swatch-wood">
                  <span>Natural Wood</span>
                </div>
                <div className="wall-decor-swatch swatch-stone">
                  <span>Stone Texture</span>
                </div>
                <div className="wall-decor-swatch swatch-gold">
                  <span>Metallic Accents</span>
                </div>
              </div>
              <p>
                A coordinated palette helps bring the room together.
                Final material choices depend on your project requirements.
              </p>
            </div>
          </div>
        </section>

        <section
          className="wall-decor-enquiry-section wall-decor-section"
          id="wall-decor-enquiry"
        >
          <div className="wall-decor-container wall-decor-enquiry-grid">
            <div className="wall-decor-enquiry-copy">
              <span className="wall-decor-eyebrow">LET'S DISCUSS YOUR IDEA</span>
              <h2>
                Ready to Transform
                <span> Your Walls?</span>
              </h2>
              <p>
                Share a few details about your space and preferred style.
                Submit the form to open WhatsApp with your enquiry ready
                to send.
              </p>

              <div className="wall-decor-contact-note">
                <FaWhatsapp />
                <div>
                  <strong>Connect through WhatsApp</strong>
                  <span>No website backend required</span>
                </div>
              </div>
            </div>

            <form
              className="wall-decor-form"
              onSubmit={handleSubmit}
            >
              <div className="wall-decor-form-heading">
                <h3>Wall Decor Enquiry</h3>
                <p>Tell us about your project.</p>
              </div>

              <div className="wall-decor-form-row">
                <label>
                  Your Name *
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
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
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    pattern="[0-9+\-\s()]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />
                </label>
              </div>

              <label>
                Room / Space
                <select
                  name="space"
                  value={form.space}
                  onChange={handleChange}
                >
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Dining Room</option>
                  <option>Entrance / Foyer</option>
                  <option>Office</option>
                  <option>Entire Home</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Preferred Design
                <select
                  name="design"
                  value={form.design}
                  onChange={handleChange}
                >
                  {wallDesigns.map((design) => (
                    <option key={design.title} value={design.title}>
                      {design.title}
                    </option>
                  ))}
                  <option value="Need design suggestions">
                    Need design suggestions
                  </option>
                </select>
              </label>

              <label>
                Additional Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Room dimensions, preferred colours, budget or other requirements..."
                  rows={4}
                />
              </label>

              <button type="submit" className="wall-decor-submit">
                <FaWhatsapp /> Continue on WhatsApp <FaArrowRight />
              </button>

              <small className="wall-decor-form-note">
                Your enquiry will be prepared in WhatsApp. You must press
                Send there to submit it.
              </small>
            </form>
          </div>
        </section>

        <section className="wall-decor-final-cta">
          <div className="wall-decor-container wall-decor-final-cta-inner">
            <div>
              <span className="wall-decor-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Make Every Detail Count.</h2>
              <p>Let's discuss a wall design that feels right for your space.</p>
            </div>
            <a
              href="#wall-decor-enquiry"
              className="wall-decor-btn"
            >
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default WallDecorDesign;
