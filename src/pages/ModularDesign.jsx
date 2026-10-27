
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaKitchenSet,
  FaHouse,
  FaLayerGroup,
  FaPalette,
  FaWhatsapp,
  FaBed,
  FaCouch,
  FaBoxesStacked,
  FaRulerCombined,
} from "react-icons/fa6";
import "../css-modular/ModularDesign.css";

const WHATSAPP_NUMBER = "917064949597";

const modularDesigns = [
  {
    title: "L-Shaped Modular Kitchen",
    category: "Kitchen",
    description:
      "Make efficient use of corner spaces with a practical layout and coordinated cabinetry.",
    style: "modular-kitchen-l",
    tag: "Space Efficient",
  },
  {
    title: "Parallel Modular Kitchen",
    category: "Kitchen",
    description:
      "Create distinct preparation and cooking zones with a streamlined parallel layout.",
    style: "modular-kitchen-parallel",
    tag: "Functional",
  },
  {
    title: "Sliding Door Wardrobe",
    category: "Wardrobes",
    description:
      "Explore sleek wardrobe concepts that make thoughtful use of bedroom space.",
    style: "modular-wardrobe",
    tag: "Modern",
  },
  {
    title: "Modular TV Unit",
    category: "Living Room",
    description:
      "Combine display shelves, concealed storage and a coordinated entertainment wall.",
    style: "modular-tv",
    tag: "Popular",
  },
  {
    title: "Walk-In Wardrobe",
    category: "Wardrobes",
    description:
      "Organise clothing, accessories and storage with a layout suited to the available room.",
    style: "modular-walkin",
    tag: "Premium Concept",
  },
  {
    title: "Study Desk & Storage",
    category: "Study & Office",
    description:
      "Design a dedicated workspace with shelving, desk space and useful storage.",
    style: "modular-study",
    tag: "Work From Home",
  },
  {
    title: "Modular Shoe Cabinet",
    category: "Storage",
    description:
      "Keep entrances organised with compact cabinets and practical concealed storage.",
    style: "modular-shoe",
    tag: "Compact",
  },
  {
    title: "Bedroom Storage Unit",
    category: "Bedroom",
    description:
      "Coordinate bedside storage, headboard features and built-in cabinet concepts.",
    style: "modular-bedroom",
    tag: "Coordinated",
  },
];

const categories = [
  "All Designs",
  "Kitchen",
  "Wardrobes",
  "Living Room",
  "Bedroom",
  "Study & Office",
  "Storage",
];

const benefits = [
  {
    icon: <FaRulerCombined />,
    title: "Space Planning",
    description:
      "Plan cabinetry around room dimensions, circulation and everyday use.",
  },
  {
    icon: <FaBoxesStacked />,
    title: "Organised Storage",
    description:
      "Explore drawers, shelves, cabinets and storage zones for different needs.",
  },
  {
    icon: <FaPalette />,
    title: "Coordinated Finishes",
    description:
      "Compare colours, textures and surface finishes that complement your interiors.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Functional Layouts",
    description:
      "Balance appearance and accessibility when planning modular furniture.",
  },
];

function ModularDesign() {
  const [activeCategory, setActiveCategory] = useState("All Designs");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    space: "Modular Kitchen",
    design: "L-Shaped Modular Kitchen",
    size: "",
    budget: "Need guidance",
    message: "",
  });

  const filteredDesigns = useMemo(() => {
    if (activeCategory === "All Designs") return modularDesigns;

    return modularDesigns.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in modular design.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Space: ${form.space}`,
      `Preferred Design: ${form.design}`,
      form.size ? `Approximate Size: ${form.size}` : "",
      `Budget: ${form.budget}`,
      form.message ? `Additional Requirements: ${form.message}` : "",
      "",
      "Please contact me to discuss design options and an estimate.",
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
    const matchingSpace = {
      "L-Shaped Modular Kitchen": "Modular Kitchen",
      "Parallel Modular Kitchen": "Modular Kitchen",
      "Sliding Door Wardrobe": "Wardrobe",
      "Modular TV Unit": "Living Room",
      "Walk-In Wardrobe": "Wardrobe",
      "Study Desk & Storage": "Study / Office",
      "Modular Shoe Cabinet": "Storage",
      "Bedroom Storage Unit": "Bedroom",
    };

    setForm((previous) => ({
      ...previous,
      design,
      space: matchingSpace[design] || previous.space,
    }));

    document
      .getElementById("modular-design-enquiry")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>
          Modular Design in Bhubaneswar | Skarvion Infrastructure
        </title>
        <meta
          name="description"
          content="Explore modular kitchen designs, wardrobes, TV units, bedroom storage, study desks and space-saving furniture concepts with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="modular design Bhubaneswar, modular kitchen Odisha, wardrobe design Bhubaneswar, modular TV unit, bedroom storage, modular furniture design"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/modular-design"
        />
        <meta
          property="og:title"
          content="Modular Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Explore modular kitchens, wardrobes, TV units and functional storage concepts."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/modular-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="modular-design-page">
        <section className="modular-design-hero">
          <div className="modular-design-hero-pattern" />

          <div className="modular-design-container modular-design-hero-grid">
            <div className="modular-design-hero-copy">
              <span className="modular-design-eyebrow">
                <FaLayerGroup /> MODULAR INTERIOR COLLECTION
              </span>

              <h1>
                Smart Storage.
                <span> Beautiful Spaces.</span>
              </h1>

              <p>
                Discover modular furniture concepts that bring together
                practical storage, considered layouts and contemporary
                finishes for modern homes.
              </p>

              <div className="modular-design-hero-actions">
                <a
                  href="#modular-design-gallery"
                  className="modular-design-btn"
                >
                  Explore Designs <FaArrowRight />
                </a>
                <a
                  href="#modular-design-enquiry"
                  className="modular-design-btn modular-design-btn-outline"
                >
                  Discuss Your Space
                </a>
              </div>

              <div className="modular-design-hero-points">
                <span><FaCheck /> Space Planning</span>
                <span><FaCheck /> Storage Concepts</span>
                <span><FaCheck /> Custom Enquiries</span>
              </div>
            </div>

            <div className="modular-design-hero-visual">
              <div className="modular-design-room">
                <div className="modular-design-room-ceiling" />
                <div className="modular-design-room-wall">
                  <div className="modular-design-upper-cabinets">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="modular-design-backsplash" />
                  <div className="modular-design-counter" />
                  <div className="modular-design-lower-cabinets">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="modular-design-plant">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="modular-design-room-floor" />
              </div>

              <div className="modular-design-visual-label">
                <span><FaKitchenSet /></span>
                <div>
                  <strong>Designed for Everyday Living</strong>
                  <small>Function meets refined style</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="modular-design-intro modular-design-section">
          <div className="modular-design-container modular-design-intro-grid">
            <div>
              <span className="modular-design-eyebrow">
                DESIGN WITH PURPOSE
              </span>
              <h2>
                Make Better Use
                <span> of Every Corner.</span>
              </h2>
            </div>

            <p>
              Modular furniture can help organise daily essentials and
              create a coordinated interior. Explore kitchen cabinetry,
              wardrobes, entertainment units and storage concepts planned
              around your space and requirements.
            </p>
          </div>
        </section>

        <section
          className="modular-design-gallery modular-design-section"
          id="modular-design-gallery"
        >
          <div className="modular-design-container">
            <div className="modular-design-section-heading">
              <span className="modular-design-eyebrow">
                MODULAR DESIGN IDEAS
              </span>
              <h2>Find a Design for Your Space</h2>
              <p>
                Browse concepts and choose a style to discuss with our team.
              </p>
            </div>

            <div
              className="modular-design-filters"
              role="group"
              aria-label="Filter modular designs"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "modular-design-filter active"
                      : "modular-design-filter"
                  }
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="modular-design-cards">
              {filteredDesigns.map((design, index) => (
                <article
                  className="modular-design-card"
                  key={design.title}
                  style={{ "--modular-card-index": index }}
                >
                  <div
                    className={`modular-design-art ${design.style}`}
                    role="img"
                    aria-label={`${design.title} concept illustration`}
                  >
                    <span className="modular-design-art-tag">
                      {design.tag}
                    </span>
                    <div className="modular-design-art-panels">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="modular-design-art-base">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="modular-design-card-content">
                    <span className="modular-design-card-category">
                      {design.category}
                    </span>
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>
                    <button
                      type="button"
                      className="modular-design-card-link"
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

        <section className="modular-design-benefits modular-design-section">
          <div className="modular-design-container">
            <div className="modular-design-section-heading">
              <span className="modular-design-eyebrow">
                OUR DESIGN APPROACH
              </span>
              <h2>Planned Around Your Needs</h2>
              <p>
                The best modular concept balances layout, storage and
                the way you use your home.
              </p>
            </div>

            <div className="modular-design-benefit-grid">
              {benefits.map((benefit) => (
                <article
                  className="modular-design-benefit"
                  key={benefit.title}
                >
                  <div className="modular-design-benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="modular-design-materials modular-design-section">
          <div className="modular-design-container modular-design-materials-grid">
            <div className="modular-design-materials-copy">
              <span className="modular-design-eyebrow">
                FINISHES & DETAILS
              </span>
              <h2>
                A Finish That
                <span> Fits Your Style.</span>
              </h2>
              <p>
                Explore coordinated cabinet colours, wood-inspired
                finishes, neutral surfaces and contrasting accents.
                The final selection should suit the room, intended use
                and project budget.
              </p>

              <ul className="modular-design-check-list">
                <li><FaCheck /> Coordinated colours and textures</li>
                <li><FaCheck /> Practical cabinet layouts</li>
                <li><FaCheck /> Storage suited to daily needs</li>
                <li><FaCheck /> Space-conscious design concepts</li>
              </ul>

              <a
                href="#modular-design-enquiry"
                className="modular-design-btn"
              >
                Plan Your Modular Space <FaArrowRight />
              </a>
            </div>

            <div className="modular-design-material-board">
              <div className="modular-design-material-board-heading">
                <FaPalette />
                <span>MATERIAL & COLOUR PALETTE</span>
              </div>

              <div className="modular-design-swatches">
                <div className="modular-design-swatch modular-swatch-cream">
                  <span>Soft Neutrals</span>
                </div>
                <div className="modular-design-swatch modular-swatch-wood">
                  <span>Wood Finishes</span>
                </div>
                <div className="modular-design-swatch modular-swatch-stone">
                  <span>Stone Textures</span>
                </div>
                <div className="modular-design-swatch modular-swatch-dark">
                  <span>Dark Accents</span>
                </div>
              </div>

              <p>
                Finish availability, durability and maintenance needs
                should be considered before final selection.
              </p>
            </div>
          </div>
        </section>

        <section
          className="modular-design-enquiry modular-design-section"
          id="modular-design-enquiry"
        >
          <div className="modular-design-container modular-design-enquiry-grid">
            <div className="modular-design-enquiry-copy">
              <span className="modular-design-eyebrow">
                LET'S DISCUSS YOUR PROJECT
              </span>

              <h2>
                Your Space.
                <span> Your Storage Solution.</span>
              </h2>

              <p>
                Share your preferred modular design, room type and
                approximate dimensions. We will prepare your enquiry
                in WhatsApp so you can review and send it.
              </p>

              <div className="modular-design-whatsapp-note">
                <FaWhatsapp />
                <div>
                  <strong>Enquire Directly on WhatsApp</strong>
                  <span>No website backend required</span>
                </div>
              </div>

              <div className="modular-design-enquiry-note">
                <FaRulerCombined />
                <p>
                  If available, include room measurements or a floor-plan
                  reference to help explain your requirements.
                </p>
              </div>
            </div>

            <form
              className="modular-design-form"
              onSubmit={handleSubmit}
            >
              <div className="modular-design-form-heading">
                <h3>Modular Design Enquiry</h3>
                <p>Tell us about your requirements.</p>
              </div>

              <div className="modular-design-form-row">
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
                Space / Room
                <select
                  name="space"
                  value={form.space}
                  onChange={handleChange}
                >
                  <option>Modular Kitchen</option>
                  <option>Wardrobe</option>
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Study / Office</option>
                  <option>Storage</option>
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
                  {modularDesigns.map((design) => (
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
                Approximate Room Size
                <input
                  type="text"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  placeholder="e.g. 10 ft × 12 ft"
                />
              </label>

              <label>
                Estimated Budget
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option>Need guidance</option>
                  <option>Below ₹50,000</option>
                  <option>₹50,000–₹1 lakh</option>
                  <option>₹1–₹2 lakh</option>
                  <option>₹2–₹5 lakh</option>
                  <option>Above ₹5 lakh</option>
                </select>
              </label>

              <label>
                Additional Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Mention preferred colours, storage needs, room details or other requirements..."
                  rows={4}
                />
              </label>

              <button type="submit" className="modular-design-submit">
                <FaWhatsapp /> Continue on WhatsApp <FaArrowRight />
              </button>

              <small className="modular-design-form-note">
                WhatsApp opens with your enquiry prepared. Press Send
                there to submit your message.
              </small>
            </form>
          </div>
        </section>

        <section className="modular-design-final-cta">
          <div className="modular-design-container modular-design-final-inner">
            <div>
              <span className="modular-design-eyebrow">
                SKARVION INFRASTRUCTURE
              </span>
              <h2>Make Space Work Better.</h2>
              <p>
                Let's discuss a modular design concept for your home.
              </p>
            </div>

            <a
              href="#modular-design-enquiry"
              className="modular-design-btn"
            >
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default ModularDesign;
