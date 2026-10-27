
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSeedling,
  FaTree,
  FaSun,
  FaLightbulb,
  FaChair,
  FaWater,
  FaRulerCombined,
  FaWhatsapp,
  FaMountainSun,
  FaHouse,
} from "react-icons/fa6";
import "../css-modular/GardenDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const services = [
  {
    title: "Modern Home Garden",
    category: "Home Gardens",
    icon: <FaHouse />,
    description:
      "Create a welcoming garden that complements your home's architecture and outdoor space.",
    features: ["Garden layout concepts", "Plant selection ideas", "Practical arrangements"],
  },
  {
    title: "Small Space Garden",
    category: "Home Gardens",
    icon: <FaSeedling />,
    description:
      "Make compact outdoor areas feel greener with carefully planned planting and decorative elements.",
    features: ["Compact planting", "Space-saving layouts", "Easy-care greenery"],
  },
  {
    title: "Terrace Garden",
    category: "Terrace & Vertical",
    icon: <FaSun />,
    description:
      "Explore ideas for transforming an open terrace into a useful, relaxing green space.",
    features: ["Container garden concepts", "Seating zones", "Sunlight planning"],
  },
  {
    title: "Vertical Garden",
    category: "Terrace & Vertical",
    icon: <FaLeaf />,
    description:
      "Introduce greenery along suitable walls and vertical surfaces where floor space is limited.",
    features: ["Wall-mounted planters", "Vertical arrangements", "Green feature walls"],
  },
  {
    title: "Landscape & Pathways",
    category: "Landscape",
    icon: <FaMountainSun />,
    description:
      "Plan a balanced outdoor environment with pathways, planting areas and decorative features.",
    features: ["Pathway concepts", "Garden zoning", "Decorative finishes"],
  },
  {
    title: "Lawn & Planting Design",
    category: "Landscape",
    icon: <FaTree />,
    description:
      "Explore lawn arrangements, border planting and greenery suited to the space and its conditions.",
    features: ["Lawn layout ideas", "Planting combinations", "Garden borders"],
  },
  {
    title: "Garden Lighting",
    category: "Features",
    icon: <FaLightbulb />,
    description:
      "Add atmosphere and improve visibility with considered outdoor lighting concepts.",
    features: ["Ambient lighting ideas", "Pathway illumination", "Feature lighting"],
  },
  {
    title: "Garden Seating & Water Features",
    category: "Features",
    icon: <FaChair />,
    description:
      "Plan a peaceful outdoor corner with seating and optional decorative water features.",
    features: ["Relaxation corners", "Seating arrangements", "Water feature concepts"],
  },
];

const categories = [
  "All",
  "Home Gardens",
  "Terrace & Vertical",
  "Landscape",
  "Features",
];

const benefits = [
  "Layouts planned around your available space",
  "Planting ideas based on sunlight and conditions",
  "Practical pathway and seating arrangements",
  "Consideration of drainage and maintenance",
  "Outdoor lighting and decorative concepts",
  "Design consultation for residential projects",
];

export default function GardenDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    gardenType: "Home Garden",
    area: "",
    message: "",
  });

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Skarvion Infrastructure,

I am interested in Garden Design services.

Name: ${form.name}
Phone: ${form.phone}
Garden Type: ${form.gardenType}
Approximate Area: ${form.area || "Not specified"}
Requirements: ${form.message || "I would like to discuss garden design options."}

Please contact me to discuss the next steps.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Garden Design & Landscaping in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore home garden design, terrace gardens, vertical greenery, landscaping, garden pathways and outdoor lighting with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="garden design Bhubaneswar, landscaping Odisha, home garden design, terrace garden design, vertical garden, landscape planning, garden pathways"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/garden-design"
        />
        <meta
          property="og:title"
          content="Garden Design & Landscaping | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Plan a beautiful outdoor space with garden layouts, greenery, pathways and lighting concepts."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/garden-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="garden-page">
        <section className="garden-hero">
          <div className="garden-hero-decoration" aria-hidden="true">
            <FaLeaf />
          </div>

          <div className="garden-container garden-hero-grid">
            <div className="garden-hero-content">
              <span className="garden-eyebrow">
                <FaSeedling /> Outdoor Spaces, Naturally Better
              </span>

              <h1>
                Garden Design
                <span>& Landscaping</span>
              </h1>

              <p>
                Bring your outdoor ideas to life with thoughtful garden
                layouts, greenery, pathways and relaxing spaces designed
                around your property and lifestyle.
              </p>

              <div className="garden-hero-actions">
                <a href="#garden-services" className="garden-btn garden-btn-gold">
                  Explore Services <FaArrowRight />
                </a>
                <a href="#garden-enquiry" className="garden-btn garden-btn-outline">
                  Plan Your Garden
                </a>
              </div>

              <div className="garden-hero-points">
                <span><FaCheck /> Thoughtful layouts</span>
                <span><FaCheck /> Green design concepts</span>
                <span><FaCheck /> Practical planning</span>
              </div>
            </div>

            <div className="garden-hero-visual">
              <div className="garden-visual-card">
                <div className="garden-visual-header">
                  <span>YOUR OUTDOOR RETREAT</span>
                  <FaLeaf />
                </div>

                <div className="garden-illustration">
                  <div className="garden-sun" />
                  <div className="garden-backdrop">
                    <div className="garden-house">
                      <div className="garden-house-roof" />
                      <div className="garden-house-wall">
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>

                  <div className="garden-tree garden-tree-one">
                    <span className="garden-tree-crown" />
                    <span className="garden-tree-trunk" />
                  </div>

                  <div className="garden-tree garden-tree-two">
                    <span className="garden-tree-crown" />
                    <span className="garden-tree-trunk" />
                  </div>

                  <div className="garden-shrub garden-shrub-one" />
                  <div className="garden-shrub garden-shrub-two" />

                  <div className="garden-path">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="garden-ground" />
                </div>

                <div className="garden-visual-footer">
                  <div>
                    <strong>A Greener Everyday</strong>
                    <span>Outdoor design made personal</span>
                  </div>
                  <FaArrowRight />
                </div>
              </div>

              <div className="garden-floating-note">
                <FaSeedling />
                <div>
                  <strong>Nature Meets Design</strong>
                  <span>Make room for green living</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="garden-intro garden-section-spacing">
          <div className="garden-container garden-intro-grid">
            <div>
              <span className="garden-section-label">DESIGNED FOR YOUR OUTDOORS</span>
              <h2>
                Create a Garden
                <span> You Love Coming Home To</span>
              </h2>
            </div>

            <div>
              <p>
                A well-planned garden brings together greenery, movement,
                comfort and practical maintenance. Whether you have a small
                courtyard, a home garden or an open terrace, the right design
                can help make the most of your outdoor area.
              </p>
              <a href="#garden-enquiry" className="garden-text-link">
                Discuss your garden <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section
          id="garden-services"
          className="garden-services garden-section-spacing"
        >
          <div className="garden-container">
            <div className="garden-section-heading">
              <span className="garden-section-label">OUR DESIGN OPTIONS</span>
              <h2>Explore Garden Design Services</h2>
              <p>
                Choose a category to explore ideas for your outdoor space.
              </p>
            </div>

            <div className="garden-filters" aria-label="Filter garden services">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "garden-filter active"
                      : "garden-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="garden-service-grid">
              {filteredServices.map((service, index) => (
                <article className="garden-service-card" key={service.title}>
                  <span className="garden-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="garden-service-icon">{service.icon}</div>
                  <span className="garden-service-category">
                    {service.category}
                  </span>

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
                    type="button"
                    className="garden-card-link"
                    onClick={() =>
                      setForm((previous) => ({
                        ...previous,
                        message: `I am interested in ${service.title}. Please discuss suitable design options with me.`,
                      }))
                    }
                  >
                    Enquire About This <FaArrowRight />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="garden-benefits garden-section-spacing">
          <div className="garden-container garden-benefits-grid">
            <div className="garden-benefits-copy">
              <span className="garden-section-label">OUR APPROACH</span>
              <h2>
                Good Planning.
                <span> Greener Living.</span>
              </h2>
              <p>
                Garden design should consider sunlight, soil, drainage,
                available space and ongoing maintenance. We help you explore
                concepts that suit your property's requirements.
              </p>

              <a href="#garden-enquiry" className="garden-btn garden-btn-gold">
                Start Planning <FaArrowRight />
              </a>
            </div>

            <div className="garden-benefit-list">
              {benefits.map((benefit, index) => (
                <div className="garden-benefit-item" key={benefit}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{benefit}</p>
                  <FaCheck />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="garden-enquiry" className="garden-enquiry garden-section-spacing">
          <div className="garden-container garden-enquiry-grid">
            <div className="garden-enquiry-copy">
              <span className="garden-section-label">LET'S PLAN YOUR OUTDOOR SPACE</span>
              <h2>
                Tell Us About
                <span> Your Garden</span>
              </h2>
              <p>
                Share your requirements and send your enquiry directly to
                Skarvion Infrastructure through WhatsApp.
              </p>

              <div className="garden-contact-note">
                <FaWhatsapp />
                <div>
                  <strong>Enquire Directly on WhatsApp</strong>
                  <span>Your message is prepared from the details you provide.</span>
                </div>
              </div>
            </div>

            <form className="garden-form" onSubmit={handleSubmit}>
              <h3>Garden Design Enquiry</h3>
              <p>Tell us a little about your project.</p>

              <div className="garden-form-row">
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
                    pattern="[0-9+() -]{8,18}"
                    title="Enter a valid phone number"
                    required
                  />
                </label>
              </div>

              <div className="garden-form-row">
                <label>
                  Garden Type
                  <select
                    name="gardenType"
                    value={form.gardenType}
                    onChange={handleChange}
                  >
                    <option>Home Garden</option>
                    <option>Small Space Garden</option>
                    <option>Terrace Garden</option>
                    <option>Vertical Garden</option>
                    <option>Landscape Project</option>
                    <option>Commercial Outdoor Space</option>
                  </select>
                </label>

                <label>
                  Approximate Area
                  <input
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    placeholder="e.g. 300 sq. ft."
                  />
                </label>
              </div>

              <label>
                Your Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your garden ideas or requirements..."
                />
              </label>

              <button type="submit" className="garden-btn garden-btn-gold garden-submit">
                <FaWhatsapp /> Send Enquiry on WhatsApp
              </button>

              <span className="garden-form-disclaimer">
                WhatsApp will open in a new tab so you can review and send your message.
              </span>
            </form>
          </div>
        </section>

        <section className="garden-final-cta">
          <div className="garden-container garden-final-cta-inner">
            <div>
              <span className="garden-section-label">SKARVION INFRASTRUCTURE</span>
              <h2>Let's Make Your Outdoor Space More Inviting.</h2>
              <p>
                Explore garden design and landscaping concepts for your home
                in Bhubaneswar and across Odisha.
              </p>
            </div>

            <a href="#garden-enquiry" className="garden-btn garden-btn-gold">
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
