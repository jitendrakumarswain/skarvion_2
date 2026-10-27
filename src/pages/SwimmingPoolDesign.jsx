
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaCheck,
  FaWater,
  FaHouse,
  FaRulerCombined,
  FaLightbulb,
  FaLeaf,
  FaUmbrellaBeach,
  FaBuilding,
  FaWhatsapp,
  FaLayerGroup,
  FaSun,
} from "react-icons/fa6";
import "../css-modular/SwimmingPoolDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const poolServices = [
  {
    title: "Modern Residential Pool",
    category: "Residential",
    icon: <FaHouse />,
    description:
      "Explore contemporary swimming pool concepts that complement residential architecture and outdoor living.",
    features: ["Pool layout concepts", "Modern finishes", "Outdoor integration"],
  },
  {
    title: "Compact Swimming Pool",
    category: "Residential",
    icon: <FaRulerCombined />,
    description:
      "Make the most of limited outdoor space with a carefully planned compact pool concept.",
    features: ["Space-conscious layouts", "Compact pool ideas", "Practical access planning"],
  },
  {
    title: "Infinity Pool Concept",
    category: "Luxury",
    icon: <FaWater />,
    description:
      "Discover infinity-edge pool concepts for properties where the site and views make them suitable.",
    features: ["Edge design concepts", "View-oriented layouts", "Luxury finishes"],
  },
  {
    title: "Plunge Pool",
    category: "Residential",
    icon: <FaLayerGroup />,
    description:
      "Consider a smaller pool designed for relaxation in a courtyard, garden or private outdoor area.",
    features: ["Compact footprint", "Relaxation-focused layout", "Outdoor space planning"],
  },
  {
    title: "Poolside Landscaping",
    category: "Outdoor Living",
    icon: <FaLeaf />,
    description:
      "Bring the pool area together with planting, pathways and coordinated outdoor finishes.",
    features: ["Planting concepts", "Pathway planning", "Landscape coordination"],
  },
  {
    title: "Pool Deck & Seating",
    category: "Outdoor Living",
    icon: <FaUmbrellaBeach />,
    description:
      "Plan a comfortable poolside setting with appropriate circulation, seating and outdoor materials.",
    features: ["Deck layout ideas", "Seating zones", "Outdoor material concepts"],
  },
  {
    title: "Swimming Pool Lighting",
    category: "Features",
    icon: <FaLightbulb />,
    description:
      "Explore lighting concepts that enhance the pool's appearance and support safe use after dark.",
    features: ["Ambient lighting ideas", "Landscape lighting", "Pool-area visibility"],
  },
  {
    title: "Pool Finishes & Materials",
    category: "Features",
    icon: <FaSun />,
    description:
      "Compare finish and material concepts for a cohesive appearance and practical maintenance.",
    features: ["Tile and finish concepts", "Decking options", "Maintenance considerations"],
  },
];

const categories = [
  "All",
  "Residential",
  "Luxury",
  "Outdoor Living",
  "Features",
];

const benefits = [
  "Pool layout concepts suited to the property",
  "Consideration of access and circulation",
  "Poolside landscape and seating coordination",
  "Material and finish recommendations",
  "Lighting and outdoor ambience concepts",
  "Planning considerations for drainage and safety",
];

export default function SwimmingPoolDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    poolType: "Residential Swimming Pool",
    area: "",
    location: "",
    message: "",
  });

  const filteredServices =
    activeCategory === "All"
      ? poolServices
      : poolServices.filter(
          (service) => service.category === activeCategory
        );

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Skarvion Infrastructure,

I am interested in Swimming Pool Design services.

Name: ${form.name}
Phone: ${form.phone}
Pool Type: ${form.poolType}
Approximate Area: ${form.area || "Not specified"}
Project Location: ${form.location || "Not specified"}
Requirements: ${form.message || "I would like to discuss suitable pool design options."}

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
        <title>Swimming Pool Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore residential swimming pool design, compact pools, infinity pool concepts, poolside landscaping, decking and lighting with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <meta
          name="keywords"
          content="swimming pool design Bhubaneswar, swimming pool planning Odisha, residential pool design, infinity pool concept, poolside landscaping, pool deck design"
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/swimming-pool-design"
        />
        <meta
          property="og:title"
          content="Swimming Pool Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Plan a swimming pool with coordinated layouts, finishes, landscaping and lighting concepts."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/swimming-pool-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="pool-page">
        <section className="pool-hero">
          <div className="pool-hero-decoration" aria-hidden="true">
            <FaWater />
          </div>

          <div className="pool-container pool-hero-grid">
            <div className="pool-hero-content">
              <span className="pool-eyebrow">
                <FaWater /> Outdoor Luxury, Thoughtfully Planned
              </span>

              <h1>
                Swimming Pool
                <span> Design & Planning</span>
              </h1>

              <p>
                Explore swimming pool concepts that bring together modern
                design, functional layouts, poolside landscaping and inviting
                outdoor spaces for your property.
              </p>

              <div className="pool-hero-actions">
                <a href="#pool-services" className="pool-btn pool-btn-gold">
                  Explore Designs <FaArrowRight />
                </a>
                <a href="#pool-enquiry" className="pool-btn pool-btn-outline">
                  Discuss Your Project
                </a>
              </div>

              <div className="pool-hero-points">
                <span><FaCheck /> Tailored concepts</span>
                <span><FaCheck /> Outdoor integration</span>
                <span><FaCheck /> Practical planning</span>
              </div>
            </div>

            <div className="pool-hero-visual">
              <div className="pool-visual-card">
                <div className="pool-visual-header">
                  <span>OUTDOOR LIVING</span>
                  <FaWater />
                </div>

                <div className="pool-illustration">
                  <div className="pool-sky" />
                  <div className="pool-background-building">
                    <div className="pool-building-window" />
                    <div className="pool-building-door" />
                  </div>
                  <div className="pool-background-palm pool-palm-one">
                    <span />
                    <i />
                  </div>
                  <div className="pool-background-palm pool-palm-two">
                    <span />
                    <i />
                  </div>
                  <div className="pool-deck" />
                  <div className="pool-water">
                    <div className="pool-water-shimmer" />
                  </div>
                  <div className="pool-edge" />
                  <div className="pool-planter pool-planter-one" />
                  <div className="pool-planter pool-planter-two" />
                </div>

                <div className="pool-visual-footer">
                  <div>
                    <strong>Your Private Retreat</strong>
                    <span>Designed around your property</span>
                  </div>
                  <FaArrowRight />
                </div>
              </div>

              <div className="pool-floating-note">
                <FaLeaf />
                <div>
                  <strong>Design Beyond the Pool</strong>
                  <span>Landscaping meets outdoor comfort</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pool-intro pool-section-spacing">
          <div className="pool-container pool-intro-grid">
            <div>
              <span className="pool-section-label">A COHESIVE OUTDOOR DESIGN</span>
              <h2>
                More Than a Pool.
                <span> A Complete Outdoor Experience.</span>
              </h2>
            </div>

            <div>
              <p>
                A successful pool concept considers the available site,
                circulation, privacy, drainage, landscaping and maintenance.
                Whether you're considering a compact residential pool or a
                larger outdoor feature, careful planning helps connect the
                pool with its surroundings.
              </p>
              <a href="#pool-enquiry" className="pool-text-link">
                Discuss your requirements <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section
          id="pool-services"
          className="pool-services pool-section-spacing"
        >
          <div className="pool-container">
            <div className="pool-section-heading">
              <span className="pool-section-label">OUR DESIGN OPTIONS</span>
              <h2>Explore Swimming Pool Concepts</h2>
              <p>
                Choose a category to discover concepts for your residential or
                outdoor project.
              </p>
            </div>

            <div className="pool-filters" aria-label="Filter pool services">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "pool-filter active"
                      : "pool-filter"
                  }
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="pool-service-grid">
              {filteredServices.map((service, index) => (
                <article className="pool-service-card" key={service.title}>
                  <span className="pool-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="pool-service-icon">{service.icon}</div>
                  <span className="pool-service-category">
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
                    className="pool-card-link"
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

        <section className="pool-benefits pool-section-spacing">
          <div className="pool-container pool-benefits-grid">
            <div className="pool-benefits-copy">
              <span className="pool-section-label">OUR APPROACH</span>
              <h2>
                Thoughtful Design.
                <span> Better Outdoor Living.</span>
              </h2>
              <p>
                Pool planning involves more than appearance. Site conditions,
                circulation, appropriate waterproofing, drainage and safety
                measures should be assessed by qualified professionals.
              </p>

              <a href="#pool-enquiry" className="pool-btn pool-btn-gold">
                Start Planning <FaArrowRight />
              </a>
            </div>

            <div className="pool-benefit-list">
              {benefits.map((benefit, index) => (
                <div className="pool-benefit-item" key={benefit}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{benefit}</p>
                  <FaCheck />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pool-enquiry" className="pool-enquiry pool-section-spacing">
          <div className="pool-container pool-enquiry-grid">
            <div className="pool-enquiry-copy">
              <span className="pool-section-label">LET'S DISCUSS YOUR PROJECT</span>
              <h2>
                Tell Us About
                <span> Your Pool Project</span>
              </h2>
              <p>
                Share your initial requirements and send your enquiry directly
                to Skarvion Infrastructure through WhatsApp.
              </p>

              <div className="pool-contact-note">
                <FaWhatsapp />
                <div>
                  <strong>Direct WhatsApp Enquiry</strong>
                  <span>Review your prefilled message before sending it.</span>
                </div>
              </div>
            </div>

            <form className="pool-form" onSubmit={handleSubmit}>
              <h3>Swimming Pool Enquiry</h3>
              <p>Tell us a little about your project.</p>

              <div className="pool-form-row">
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

              <div className="pool-form-row">
                <label>
                  Pool Type
                  <select
                    name="poolType"
                    value={form.poolType}
                    onChange={handleChange}
                  >
                    <option>Residential Swimming Pool</option>
                    <option>Compact Swimming Pool</option>
                    <option>Infinity Pool Concept</option>
                    <option>Plunge Pool</option>
                    <option>Poolside Landscape Project</option>
                    <option>Commercial Swimming Pool</option>
                  </select>
                </label>

                <label>
                  Approximate Area
                  <input
                    type="text"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    placeholder="e.g. 600 sq. ft."
                  />
                </label>
              </div>

              <label className="pool-full-label">
                Project Location
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Bhubaneswar"
                  autoComplete="address-level2"
                />
              </label>

              <label className="pool-full-label">
                Your Requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe your ideas, preferred style or project requirements..."
                />
              </label>

              <button type="submit" className="pool-btn pool-btn-gold pool-submit">
                <FaWhatsapp /> Send Enquiry on WhatsApp
              </button>

              <span className="pool-form-disclaimer">
                WhatsApp opens in a new tab. No enquiry is stored by this page.
              </span>
            </form>
          </div>
        </section>

        <section className="pool-final-cta">
          <div className="pool-container pool-final-cta-inner">
            <div>
              <span className="pool-section-label">SKARVION INFRASTRUCTURE</span>
              <h2>Let's Plan Your Outdoor Retreat.</h2>
              <p>
                Explore swimming pool design concepts for properties in
                Bhubaneswar and across Odisha.
              </p>
            </div>

            <a href="#pool-enquiry" className="pool-btn pool-btn-gold">
              Discuss Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
