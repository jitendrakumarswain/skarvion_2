
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaBed,
  FaCheck,
  FaPalette,
  FaLightbulb,
  FaRulerCombined,
  FaHouse
} from "react-icons/fa6";
import "../css-modular/BedroomDesign.css";

const WHATSAPP_NUMBER = "917064949597";

const designs = [
  {
    title: "Modern Master Bedroom",
    category: "Modern",
    description: "A contemporary bedroom with balanced colours, practical storage and a relaxing atmosphere.",
    features: ["Modern furniture", "Coordinated finishes", "Smart storage"]
  },
  {
    title: "Luxury Bedroom Design",
    category: "Luxury",
    description: "An elegant bedroom concept with premium-looking finishes, accent walls and layered lighting.",
    features: ["Statement headboard", "Accent lighting", "Elegant finishes"]
  },
  {
    title: "Minimalist Bedroom",
    category: "Modern",
    description: "A calm, uncluttered space that focuses on essential furniture and simple styling.",
    features: ["Clean layout", "Neutral colours", "Clutter-free design"]
  },
  {
    title: "Small Bedroom Design",
    category: "Compact",
    description: "Make the most of a smaller bedroom through thoughtful furniture placement and storage.",
    features: ["Space-saving furniture", "Vertical storage", "Open visual feel"]
  },
  {
    title: "Kids' Bedroom Design",
    category: "Family",
    description: "A practical and cheerful bedroom concept designed around children's needs and available space.",
    features: ["Functional study area", "Accessible storage", "Flexible layout"]
  },
  {
    title: "Guest Bedroom Design",
    category: "Family",
    description: "A welcoming guest bedroom with comfortable essentials and a simple, coordinated look.",
    features: ["Comfortable layout", "Useful storage", "Warm lighting"]
  }
];

const categories = ["All", "Modern", "Luxury", "Compact", "Family"];

export default function BedroomDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "Bedroom Interior Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in your bedroom interior design services.",
      `Design preference: ${designName}`,
      name.trim() ? `Name: ${name.trim()}` : "",
      phone.trim() ? `Contact number: ${phone.trim()}` : "",
      requirements.trim() ? `Requirements: ${requirements.trim()}` : "",
      "",
      "Please contact me to discuss the design and estimate."
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEnquiry();
  };

  return (
    <>
      <Helmet>
        <title>Bedroom Interior Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern, luxury, compact and family bedroom interior design concepts with Skarvion Infrastructure in Bhubaneswar. Send your requirements through WhatsApp."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/bedroom-design"
        />
        <meta
          property="og:title"
          content="Bedroom Interior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover stylish and practical bedroom design concepts for your home."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/bedroom-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="bedroom-page">
        <section className="bedroom-hero">
          <div className="bedroom-container bedroom-hero-layout">
            <div className="bedroom-hero-copy">
              <span className="bedroom-eyebrow">
                <FaBed /> BEDROOM INTERIOR DESIGN
              </span>

              <h1>
                Your Personal Space, <span>Beautifully Designed</span>
              </h1>

              <p>
                Discover bedroom concepts that balance comfort, style,
                storage and everyday functionality. Find an approach that
                suits your room and your preferences.
              </p>

              <div className="bedroom-actions">
                <button
                  className="bedroom-primary-btn"
                  onClick={() => sendEnquiry()}
                >
                  <FaWhatsapp /> Discuss Your Bedroom
                </button>

                <a href="#bedroom-options" className="bedroom-secondary-btn">
                  Explore Designs <FaArrowRight />
                </a>
              </div>

              <div className="bedroom-trust-points">
                <span><FaCheck /> Practical layouts</span>
                <span><FaCheck /> Personalised concepts</span>
                <span><FaCheck /> Storage-focused planning</span>
              </div>
            </div>

            <div className="bedroom-visual">
              <div className="bedroom-visual-top">
                <span>INTERIOR CONCEPT</span>
                <strong>Rest. Relax. Recharge.</strong>
              </div>

              <div className="bedroom-art" aria-label="Stylised bedroom design illustration">
                <div className="bedroom-art-window">
                  <span />
                  <span />
                </div>
                <div className="bedroom-art-picture">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="bedroom-art-floor" />
                <div className="bedroom-art-rug" />
                <div className="bedroom-art-bed">
                  <div className="bedroom-headboard" />
                  <div className="bedroom-mattress" />
                  <div className="bedroom-duvet" />
                  <div className="bedroom-pillow one" />
                  <div className="bedroom-pillow two" />
                  <div className="bedroom-bed-base" />
                </div>
                <div className="bedroom-art-side-table">
                  <span />
                </div>
                <div className="bedroom-art-lamp">
                  <span />
                  <i />
                </div>
                <div className="bedroom-art-plant">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>
              </div>

              <div className="bedroom-visual-caption">
                <FaPalette />
                <div>
                  <strong>Designed around your lifestyle</strong>
                  <span>Layout, colours, lighting and storage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bedroom-benefits-section">
          <div className="bedroom-container">
            <div className="bedroom-section-heading">
              <span className="bedroom-eyebrow">THOUGHTFUL INTERIOR PLANNING</span>
              <h2>A Bedroom That Feels Like Yours</h2>
              <p>
                Good bedroom planning considers how you rest, move, store
                belongings and use the room every day.
              </p>
            </div>

            <div className="bedroom-benefits">
              <article>
                <span><FaRulerCombined /></span>
                <h3>Space Planning</h3>
                <p>Arrange beds, wardrobes and circulation space around your room dimensions.</p>
              </article>

              <article>
                <span><FaPalette /></span>
                <h3>Colours & Materials</h3>
                <p>Explore coordinated colours, textures and finishes for a consistent look.</p>
              </article>

              <article>
                <span><FaLightbulb /></span>
                <h3>Lighting Design</h3>
                <p>Consider general, bedside and accent lighting for different activities.</p>
              </article>

              <article>
                <span><FaHouse /></span>
                <h3>Storage Solutions</h3>
                <p>Plan wardrobes, shelves and other storage to suit your available space.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bedroom-options-section" id="bedroom-options">
          <div className="bedroom-container">
            <div className="bedroom-section-heading">
              <span className="bedroom-eyebrow">FIND YOUR STYLE</span>
              <h2>Bedroom Design Ideas</h2>
              <p>
                Browse these design directions and choose one to discuss
                with Skarvion Infrastructure.
              </p>
            </div>

            <div className="bedroom-filters" aria-label="Filter bedroom designs">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="bedroom-design-grid">
              {filteredDesigns.map((design, index) => (
                <article className="bedroom-design-card" key={design.title}>
                  <div className={`bedroom-card-art bedroom-art-${index % 3}`}>
                    <span className="bedroom-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="bedroom-card-window" />
                    <div className="bedroom-card-picture" />
                    <div className="bedroom-card-bed">
                      <span />
                      <i />
                      <i />
                    </div>
                    <div className="bedroom-card-table" />
                    <span className="bedroom-card-category">{design.category}</span>
                  </div>

                  <div className="bedroom-card-content">
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>

                    <ul>
                      {design.features.map((feature) => (
                        <li key={feature}><FaCheck /> {feature}</li>
                      ))}
                    </ul>

                    <button
                      className="bedroom-card-enquire"
                      type="button"
                      onClick={() => sendEnquiry(design.title)}
                    >
                      Enquire on WhatsApp <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bedroom-enquiry-section" id="bedroom-enquiry">
          <div className="bedroom-container bedroom-enquiry-layout">
            <div className="bedroom-enquiry-copy">
              <span className="bedroom-eyebrow">LET'S PLAN YOUR ROOM</span>
              <h2>Share Your Bedroom Requirements</h2>
              <p>
                Tell us about your room, preferred style and priorities.
                Continue the conversation directly in WhatsApp to discuss
                possible designs and estimates.
              </p>

              <div className="bedroom-enquiry-points">
                <span><FaCheck /> Room size and layout</span>
                <span><FaCheck /> Style and colour preferences</span>
                <span><FaCheck /> Furniture and storage requirements</span>
              </div>
            </div>

            <form className="bedroom-form" onSubmit={handleSubmit}>
              <label htmlFor="bedroom-name">Your name</label>
              <input
                id="bedroom-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
              />

              <label htmlFor="bedroom-phone">Contact number (optional)</label>
              <input
                id="bedroom-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />

              <label htmlFor="bedroom-requirements">Requirements</label>
              <textarea
                id="bedroom-requirements"
                rows="4"
                placeholder="Room dimensions, preferred style, budget or other details"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
              />

              <button type="submit" className="bedroom-primary-btn">
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <small>
                This form prepares a WhatsApp message. It does not send your
                information to a website backend.
              </small>
            </form>
          </div>
        </section>

        <section className="bedroom-final-cta">
          <div className="bedroom-container bedroom-final-cta-inner">
            <div>
              <span className="bedroom-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Let's Create Your Ideal Bedroom</h2>
              <p>Start a conversation about your bedroom interior requirements.</p>
            </div>

            <button
              className="bedroom-primary-btn"
              onClick={() => sendEnquiry()}
            >
              <FaWhatsapp /> Chat on WhatsApp
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
