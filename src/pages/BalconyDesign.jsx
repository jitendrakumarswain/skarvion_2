
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaLeaf,
  FaSeedling,
  FaChair,
  FaSun,
  FaLightbulb,
  FaLayerGroup,
  FaWhatsapp,
  FaBuilding,
  FaRulerCombined,
  FaTree,
} from "react-icons/fa6";
import "../css-modular/BalconyDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const balconyServices = [
  {
    id: 1,
    title: "Modern Balcony Design",
    category: "Modern",
    icon: <FaBuilding />,
    description:
      "Contemporary balcony concepts with clean lines, elegant finishes, and a practical layout.",
    features: ["Modern railing concepts", "Space-efficient layouts", "Premium finishes"],
  },
  {
    id: 2,
    title: "Balcony Garden",
    category: "Green Spaces",
    icon: <FaSeedling />,
    description:
      "Transform your balcony into a refreshing green retreat with thoughtfully arranged plants.",
    features: ["Plant placement", "Decorative planters", "Green corners"],
  },
  {
    id: 3,
    title: "Vertical Garden",
    category: "Green Spaces",
    icon: <FaLeaf />,
    description:
      "Make use of vertical space to introduce greenery without overcrowding your balcony.",
    features: ["Wall-mounted planters", "Vertical arrangements", "Compact greenery"],
  },
  {
    id: 4,
    title: "Balcony Seating",
    category: "Comfort",
    icon: <FaChair />,
    description:
      "Create a comfortable spot for morning tea, reading, relaxing, or spending time outdoors.",
    features: ["Compact seating ideas", "Relaxation corners", "Furniture planning"],
  },
  {
    id: 5,
    title: "Balcony Lighting",
    category: "Lighting",
    icon: <FaLightbulb />,
    description:
      "Enhance the atmosphere with thoughtfully placed lighting for comfortable evening use.",
    features: ["Ambient lighting", "Decorative lights", "Functional illumination"],
  },
  {
    id: 6,
    title: "Terrace Balcony",
    category: "Modern",
    icon: <FaSun />,
    description:
      "Plan an open-air terrace or large balcony with functional zones and an inviting appearance.",
    features: ["Zoned layouts", "Outdoor flooring concepts", "Seating and greenery"],
  },
  {
    id: 7,
    title: "Balcony Flooring",
    category: "Finishes",
    icon: <FaLayerGroup />,
    description:
      "Explore outdoor flooring ideas that balance appearance, maintenance, and practical use.",
    features: ["Tile concepts", "Outdoor finishes", "Easy-care materials"],
  },
  {
    id: 8,
    title: "Small Balcony Makeover",
    category: "Comfort",
    icon: <FaRulerCombined />,
    description:
      "Get more from a compact balcony with smart arrangements and space-conscious design.",
    features: ["Compact layouts", "Multi-purpose furniture", "Space-saving ideas"],
  },
];

const categories = [
  "All",
  "Modern",
  "Green Spaces",
  "Comfort",
  "Lighting",
  "Finishes",
];

const benefits = [
  "Design ideas tailored to your available space",
  "Practical layouts for everyday use",
  "Material and finish recommendations",
  "Greenery and lighting concepts",
  "Design consultation for your requirements",
  "Support for residential design planning",
];

function BalconyDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    balconyType: "Residential Balcony",
    area: "",
    message: "",
  });

  const filteredServices =
    activeCategory === "All"
      ? balconyServices
      : balconyServices.filter(
          (service) => service.category === activeCategory
        );

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Skarvion Infrastructure,

I would like to enquire about Balcony Design.

Name: ${form.name}
Phone: ${form.phone}
Balcony Type: ${form.balconyType}
Approximate Area: ${form.area || "Not specified"}
Requirements: ${form.message || "Please contact me to discuss the design."}

Please share the next steps for a consultation.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Balcony Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern balcony design, balcony garden ideas, vertical greenery, seating, lighting and small balcony makeovers with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="balcony design Bhubaneswar, balcony garden design Odisha, small balcony design, modern balcony design, terrace balcony, vertical garden design"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/balcony-design"
        />
        <meta property="og:title" content="Balcony Design | Skarvion Infrastructure" />
        <meta
          property="og:description"
          content="Plan a beautiful, practical balcony with modern design concepts, greenery, seating and lighting."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/balcony-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="balcony-page">
        <section className="balcony-hero">
          <div className="balcony-hero-pattern" aria-hidden="true">
            <FaLeaf />
          </div>

          <div className="balcony-container balcony-hero-grid">
            <div className="balcony-hero-content">
              <span className="balcony-eyebrow">
                <FaLeaf /> Outdoor Living, Thoughtfully Designed
              </span>

              <h1>
                Beautiful Balcony
                <span> Design & Planning</span>
              </h1>

              <p>
                Turn your balcony into a comfortable extension of your home.
                Explore modern layouts, green corners, stylish seating and
                inviting lighting designed around your space.
              </p>

              <div className="balcony-hero-actions">
                <a href="#balcony-services" className="balcony-btn balcony-btn-gold">
                  Explore Designs <FaArrowRight />
                </a>
                <a href="#balcony-enquiry" className="balcony-btn balcony-btn-outline">
                  Discuss Your Project
                </a>
              </div>

              <div className="balcony-hero-points">
                <span><FaCheck /> Space-conscious concepts</span>
                <span><FaCheck /> Modern aesthetics</span>
                <span><FaCheck /> Practical planning</span>
              </div>
            </div>

            <div className="balcony-hero-visual">
              <div className="balcony-visual-card">
                <div className="balcony-visual-top">
                  <span>OUTDOOR LIVING</span>
                  <FaLeaf />
                </div>

                <div className="balcony-illustration">
                  <div className="balcony-sky" />
                  <div className="balcony-building">
                    <div className="balcony-window" />
                    <div className="balcony-door" />
                  </div>
                  <div className="balcony-railing">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="balcony-plant balcony-plant-one">
                    <FaTree />
                  </div>
                  <div className="balcony-plant balcony-plant-two">
                    <FaSeedling />
                  </div>
                  <div className="balcony-chair">
                    <div />
                  </div>
                  <div className="balcony-floor" />
                </div>

                <div className="balcony-visual-caption">
                  <div>
                    <strong>Your Outdoor Corner</strong>
                    <span>Designed around your lifestyle</span>
                  </div>
                  <FaArrowRight />
                </div>
              </div>

              <div className="balcony-floating-note">
                <FaSeedling />
                <div>
                  <strong>Bring Nature Home</strong>
                  <span>Greenery meets modern living</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="balcony-intro section-spacing">
          <div className="balcony-container balcony-intro-grid">
            <div>
              <span className="balcony-section-label">DESIGN THAT FITS YOUR SPACE</span>
              <h2>
                Make Every Square Foot
                <span> Feel Special</span>
              </h2>
            </div>
            <div>
              <p>
                Whether you have a compact apartment balcony or a spacious
                terrace, thoughtful planning can make it more functional and
                inviting. Skarvion Infrastructure helps you explore design
                possibilities that balance appearance, comfort and everyday use.
              </p>
              <a href="#balcony-enquiry" className="balcony-text-link">
                Plan your balcony <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section
          id="balcony-services"
          className="balcony-services section-spacing"
        >
          <div className="balcony-container">
            <div className="balcony-section-heading">
              <span className="balcony-section-label">OUR DESIGN OPTIONS</span>
              <h2>Explore Balcony Design Ideas</h2>
              <p>
                Choose a design category to explore ideas for your outdoor space.
              </p>
            </div>

            <div className="balcony-filters" aria-label="Filter balcony designs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "balcony-filter active"
                      : "balcony-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="balcony-service-grid">
              {filteredServices.map((service, index) => (
                <article className="balcony-service-card" key={service.id}>
                  <div className="balcony-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="balcony-service-icon">{service.icon}</div>
                  <span className="balcony-service-category">
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
                    className="balcony-card-link"
                    onClick={() =>
                      setForm((previous) => ({
                        ...previous,
                        message: `I am interested in ${service.title}. Please discuss the available design options with me.`,
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

        <section className="balcony-benefits section-spacing">
          <div className="balcony-container balcony-benefits-grid">
            <div className="balcony-benefits-copy">
              <span className="balcony-section-label">OUR APPROACH</span>
              <h2>
                A Balcony That Works
                <span> for You</span>
              </h2>
              <p>
                Good balcony design considers the available area, sunlight,
                ventilation, privacy, drainage and maintenance needs—not just
                the appearance.
              </p>
              <a href="#balcony-enquiry" className="balcony-btn balcony-btn-gold">
                Start Planning <FaArrowRight />
              </a>
            </div>

            <div className="balcony-benefit-list">
              {benefits.map((benefit, index) => (
                <div className="balcony-benefit-item" key={benefit}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{benefit}</p>
                  <FaCheck />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="balcony-enquiry" className="balcony-enquiry section-spacing">
          <div className="balcony-container balcony-enquiry-grid">
            <div className="balcony-enquiry-copy">
              <span className="balcony-section-label">LET'S DISCUSS YOUR IDEA</span>
              <h2>
                Plan Your Dream
                <span> Balcony</span>
              </h2>
              <p>
                Share a few details about your balcony. Your enquiry will open
                WhatsApp with a prefilled message so you can send it directly
                to our team.
              </p>

              <div className="balcony-contact-note">
                <FaWhatsapp />
                <div>
                  <strong>Direct WhatsApp Enquiry</strong>
                  <span>No account creation or website backend required.</span>
                </div>
              </div>
            </div>

            <form className="balcony-form" onSubmit={handleSubmit}>
              <h3>Balcony Design Enquiry</h3>
              <p>Tell us a little about your project.</p>

              <div className="balcony-form-row">
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

              <div className="balcony-form-row">
                <label>
                  Balcony Type
                  <select
                    name="balconyType"
                    value={form.balconyType}
                    onChange={handleChange}
                  >
                    <option>Residential Balcony</option>
                    <option>Apartment Balcony</option>
                    <option>Balcony Garden</option>
                    <option>Terrace Balcony</option>
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
                    placeholder="e.g. 80 sq. ft."
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
                  placeholder="Describe your ideas, preferred style or budget..."
                />
              </label>

              <button type="submit" className="balcony-btn balcony-btn-gold balcony-submit">
                <FaWhatsapp /> Send Enquiry on WhatsApp
              </button>
              <span className="balcony-form-disclaimer">
                By continuing, WhatsApp will open in a new tab to send your enquiry.
              </span>
            </form>
          </div>
        </section>

        <section className="balcony-final-cta">
          <div className="balcony-container balcony-final-cta-inner">
            <div>
              <span className="balcony-section-label">SKARVION INFRASTRUCTURE</span>
              <h2>Give Your Balcony a Thoughtful Makeover.</h2>
              <p>Explore practical outdoor design ideas for your home in Bhubaneswar and Odisha.</p>
            </div>
            <a href="#balcony-enquiry" className="balcony-btn balcony-btn-gold">
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default BalconyDesign;
