
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaHouse,
  FaPalette,
  FaRegMoon,
  FaSun,
  FaWhatsapp,
  FaLayerGroup,
  FaBuilding,
} from "react-icons/fa6";
import "../css-modular/LightingDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const lightingDesigns = [
  {
    title: "Living Room Lighting",
    category: "Living Room",
    description:
      "Layer ambient and accent lighting to create a welcoming living space.",
    style: "light-living",
    tag: "Popular",
  },
  {
    title: "False Ceiling LED",
    category: "LED & Ceiling",
    description:
      "Explore concealed LED strips and cove lighting for a clean ceiling finish.",
    style: "light-ceiling",
    tag: "Contemporary",
  },
  {
    title: "Pendant Light Design",
    category: "Decorative Lights",
    description:
      "Make dining areas, kitchen islands and selected corners stand out.",
    style: "light-pendant",
    tag: "Statement",
  },
  {
    title: "Bedroom Ambient Lighting",
    category: "Bedroom",
    description:
      "Create a calm atmosphere with bedside lighting and soft indirect illumination.",
    style: "light-bedroom",
    tag: "Relaxed",
  },
  {
    title: "Kitchen Task Lighting",
    category: "Kitchen",
    description:
      "Improve visibility around worktops and cabinets with practical lighting layers.",
    style: "light-kitchen",
    tag: "Functional",
  },
  {
    title: "Decorative Chandelier",
    category: "Decorative Lights",
    description:
      "Add a decorative focal point to a suitable living room or entrance.",
    style: "light-chandelier",
    tag: "Elegant",
  },
  {
    title: "Wall Sconce Lighting",
    category: "Accent Lighting",
    description:
      "Highlight feature walls, corridors and architectural details with wall lights.",
    style: "light-sconce",
    tag: "Accent",
  },
  {
    title: "Exterior Facade Lighting",
    category: "Outdoor",
    description:
      "Explore architectural lighting concepts for entrances, facades and outdoor areas.",
    style: "light-exterior",
    tag: "Exterior",
  },
];

const categories = [
  "All Designs",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "LED & Ceiling",
  "Decorative Lights",
  "Accent Lighting",
  "Outdoor",
];

const benefits = [
  {
    icon: <FaLightbulb />,
    title: "Layered Lighting",
    description:
      "Combine general, task and accent lighting to suit different activities and spaces.",
  },
  {
    icon: <FaPalette />,
    title: "Colour Temperature",
    description:
      "Compare warm, neutral and cool light according to the room and intended atmosphere.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Ceiling Integration",
    description:
      "Coordinate ceiling details, cove lighting and selected decorative fixtures.",
  },
  {
    icon: <FaHouse />,
    title: "Indoor & Outdoor",
    description:
      "Explore lighting concepts for interiors, entrances and exterior architectural features.",
  },
];

function LightingDesign() {
  const [activeCategory, setActiveCategory] = useState("All Designs");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    space: "Living Room",
    design: "Living Room Lighting",
    temperature: "Warm White",
    message: "",
  });

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All Designs") return lightingDesigns;

    return lightingDesigns.filter(
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
      "I am interested in lighting design.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Space: ${form.space}`,
      `Preferred Design: ${form.design}`,
      `Preferred Light Colour: ${form.temperature}`,
      form.message ? `Requirements: ${form.message}` : "",
      "",
      "Please contact me to discuss my lighting design requirements and estimate.",
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
    setForm((previous) => ({ ...previous, design }));

    document
      .getElementById("lighting-design-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>
          Lighting Design in Bhubaneswar | Skarvion Infrastructure
        </title>
        <meta
          name="description"
          content="Explore modern interior and exterior lighting design, LED cove lighting, pendant lights, chandeliers, bedroom lighting and facade lighting with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="lighting design Bhubaneswar, interior lighting Odisha, LED ceiling lighting, false ceiling cove lights, bedroom lighting, living room lights, exterior facade lighting"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/lighting-design"
        />
        <meta
          property="og:title"
          content="Lighting Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover lighting concepts for living rooms, bedrooms, kitchens, ceilings and exterior facades."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/lighting-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="lighting-design-page">
        <section className="lighting-design-hero">
          <div className="lighting-design-grid-pattern" />

          <div className="lighting-design-container lighting-design-hero-grid">
            <div className="lighting-design-hero-copy">
              <span className="lighting-design-eyebrow">
                <FaLightbulb /> LIGHTING DESIGN COLLECTION
              </span>

              <h1>
                Light Up Your
                <span> Living Experience.</span>
              </h1>

              <p>
                Thoughtfully planned lighting can change how a room feels.
                Discover modern concepts for ambient illumination, decorative
                fixtures, ceiling details and architectural highlights.
              </p>

              <div className="lighting-design-hero-actions">
                <a href="#lighting-design-gallery" className="lighting-design-btn">
                  Explore Designs <FaArrowRight />
                </a>
                <a
                  href="#lighting-design-enquiry"
                  className="lighting-design-btn lighting-design-btn-outline"
                >
                  Discuss Your Project
                </a>
              </div>

              <div className="lighting-design-hero-points">
                <span><FaCheck /> Interior Concepts</span>
                <span><FaCheck /> Modern Fixtures</span>
                <span><FaCheck /> Custom Enquiries</span>
              </div>
            </div>

            <div className="lighting-design-hero-visual">
              <div className="lighting-design-room">
                <div className="lighting-design-ceiling">
                  <span />
                  <span />
                </div>

                <div className="lighting-design-room-wall">
                  <div className="lighting-design-cove-glow" />
                  <div className="lighting-design-art">
                    <span />
                    <span />
                  </div>
                  <div className="lighting-design-pendant">
                    <span />
                    <span />
                  </div>
                  <div className="lighting-design-sofa">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="lighting-design-side-table">
                    <span />
                  </div>
                </div>

                <div className="lighting-design-floor" />
                <div className="lighting-design-lamp">
                  <span />
                  <span />
                </div>
              </div>

              <div className="lighting-design-visual-label">
                <span><FaSun /></span>
                <div>
                  <strong>Lighting in Layers</strong>
                  <small>Ambience, function and detail</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lighting-design-intro lighting-design-section">
          <div className="lighting-design-container lighting-design-intro-grid">
            <div>
              <span className="lighting-design-eyebrow">
                DESIGNED AROUND YOUR SPACE
              </span>
              <h2>
                The Right Light
                <span> Changes Everything.</span>
              </h2>
            </div>

            <p>
              Good lighting balances visual comfort, practical visibility
              and atmosphere. Explore concepts that coordinate light
              fixtures with furniture, wall finishes, ceilings and the
              architectural character of your home.
            </p>
          </div>
        </section>

        <section
          className="lighting-design-gallery lighting-design-section"
          id="lighting-design-gallery"
        >
          <div className="lighting-design-container">
            <div className="lighting-design-section-heading">
              <span className="lighting-design-eyebrow">
                FIND YOUR LIGHTING STYLE
              </span>
              <h2>Lighting Ideas for Every Space</h2>
              <p>
                Browse concepts and select the type of lighting you want
                to discuss for your project.
              </p>
            </div>

            <div
              className="lighting-design-filters"
              role="group"
              aria-label="Filter lighting designs"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "lighting-design-filter active"
                      : "lighting-design-filter"
                  }
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="lighting-design-cards">
              {filteredDesigns.map((design, index) => (
                <article
                  className="lighting-design-card"
                  key={design.title}
                  style={{ "--lighting-card-index": index }}
                >
                  <div
                    className={`lighting-design-art ${design.style}`}
                    role="img"
                    aria-label={`${design.title} lighting concept`}
                  >
                    <span className="lighting-design-art-tag">
                      {design.tag}
                    </span>

                    <div className="lighting-design-art-light">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="lighting-design-art-furniture">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="lighting-design-card-content">
                    <span className="lighting-design-card-category">
                      {design.category}
                    </span>
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>
                    <button
                      type="button"
                      className="lighting-design-card-link"
                      onClick={() => selectDesign(design.title)}
                    >
                      Enquire About This Design <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lighting-design-benefits lighting-design-section">
          <div className="lighting-design-container">
            <div className="lighting-design-section-heading">
              <span className="lighting-design-eyebrow">
                OUR DESIGN APPROACH
              </span>
              <h2>More Than Just Illumination</h2>
              <p>
                Lighting works best when appearance, function and room
                requirements are considered together.
              </p>
            </div>

            <div className="lighting-design-benefit-grid">
              {benefits.map((benefit) => (
                <article
                  className="lighting-design-benefit"
                  key={benefit.title}
                >
                  <div className="lighting-design-benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lighting-design-temperature lighting-design-section">
          <div className="lighting-design-container lighting-design-temperature-grid">
            <div className="lighting-design-temperature-copy">
              <span className="lighting-design-eyebrow">
                UNDERSTAND LIGHT COLOUR
              </span>
              <h2>
                Set the Mood
                <span> with Light.</span>
              </h2>
              <p>
                Light colour influences the atmosphere of a space. The
                suitable choice depends on the room, the activity and
                your personal preference.
              </p>

              <div className="lighting-design-temperature-options">
                <div>
                  <span className="lighting-design-temperature-dot warm" />
                  <div>
                    <strong>Warm White</strong>
                    <small>Cosy and relaxed atmosphere</small>
                  </div>
                </div>
                <div>
                  <span className="lighting-design-temperature-dot neutral" />
                  <div>
                    <strong>Neutral White</strong>
                    <small>Balanced everyday illumination</small>
                  </div>
                </div>
                <div>
                  <span className="lighting-design-temperature-dot cool" />
                  <div>
                    <strong>Cool White</strong>
                    <small>Bright, crisp appearance</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="lighting-design-temperature-board">
              <div className="lighting-design-temperature-heading">
                <FaRegMoon />
                <span>LIGHTING ATMOSPHERE</span>
              </div>

              <div className="lighting-design-temperature-scene">
                <div className="lighting-design-scene-glow" />
                <div className="lighting-design-scene-window">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="lighting-design-scene-pendant">
                  <span />
                  <span />
                </div>
                <div className="lighting-design-scene-sofa">
                  <span />
                  <span />
                </div>
              </div>

              <p>
                Compare lighting concepts before selecting fixtures and
                specifications for your project.
              </p>
            </div>
          </div>
        </section>

        <section
          className="lighting-design-enquiry lighting-design-section"
          id="lighting-design-enquiry"
        >
          <div className="lighting-design-container lighting-design-enquiry-grid">
            <div className="lighting-design-enquiry-copy">
              <span className="lighting-design-eyebrow">
                LET'S PLAN YOUR LIGHTING
              </span>

              <h2>
                Bring Your Space
                <span> to Light.</span>
              </h2>

              <p>
                Tell us which room you want to improve and what style you
                prefer. Your details will be prepared in WhatsApp for you
                to review and send.
              </p>

              <div className="lighting-design-whatsapp-note">
                <FaWhatsapp />
                <div>
                  <strong>Simple WhatsApp Enquiry</strong>
                  <span>No website backend required</span>
                </div>
              </div>

              <div className="lighting-design-enquiry-detail">
                <FaBuilding />
                <p>
                  Lighting concepts for homes, interiors and architectural
                  spaces in Bhubaneswar and surrounding areas.
                </p>
              </div>
            </div>

            <form
              className="lighting-design-form"
              onSubmit={handleSubmit}
            >
              <div className="lighting-design-form-heading">
                <h3>Lighting Design Enquiry</h3>
                <p>Share your project preferences.</p>
              </div>

              <div className="lighting-design-form-row">
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
                  <option>Kitchen</option>
                  <option>Dining Room</option>
                  <option>Bathroom</option>
                  <option>False Ceiling</option>
                  <option>Exterior / Facade</option>
                  <option>Office</option>
                  <option>Entire Home</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                Preferred Lighting Design
                <select
                  name="design"
                  value={form.design}
                  onChange={handleChange}
                >
                  {lightingDesigns.map((design) => (
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
                Preferred Light Colour
                <select
                  name="temperature"
                  value={form.temperature}
                  onChange={handleChange}
                >
                  <option>Warm White</option>
                  <option>Neutral White</option>
                  <option>Cool White</option>
                  <option>Need recommendations</option>
                </select>
              </label>

              <label>
                Additional Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your space, ceiling design, preferred fixtures or budget..."
                  rows={4}
                />
              </label>

              <button type="submit" className="lighting-design-submit">
                <FaWhatsapp /> Continue on WhatsApp <FaArrowRight />
              </button>

              <small className="lighting-design-form-note">
                WhatsApp will open with your message prepared. Press Send
                there to submit your enquiry.
              </small>
            </form>
          </div>
        </section>

        <section className="lighting-design-final-cta">
          <div className="lighting-design-container lighting-design-final-inner">
            <div>
              <span className="lighting-design-eyebrow">
                SKARVION INFRASTRUCTURE
              </span>
              <h2>Let Your Space Shine.</h2>
              <p>
                Explore lighting ideas that complement your architecture
                and interiors.
              </p>
            </div>

            <a
              href="#lighting-design-enquiry"
              className="lighting-design-btn"
            >
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default LightingDesign;
