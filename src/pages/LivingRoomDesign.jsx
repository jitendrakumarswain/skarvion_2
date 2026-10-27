
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCouch,
  FaCheck,
  FaLightbulb,
  FaPalette,
  FaRulerCombined,
  FaHouse
} from "react-icons/fa6";
import "../css-modular/LivingRoomDesign.css";

const WHATSAPP_NUMBER = "917064949597";

const designs = [
  {
    title: "Modern Minimalist Living Room",
    category: "Modern",
    description:
      "A clean, spacious living room with simple furniture, balanced colours and functional layouts.",
    features: ["Minimal furniture", "Neutral colour palette", "Space-efficient layout"]
  },
  {
    title: "Luxury Living Room",
    category: "Luxury",
    description:
      "A premium interior concept featuring elegant finishes, statement lighting and sophisticated detailing.",
    features: ["Premium finishes", "Accent lighting", "Elegant focal wall"]
  },
  {
    title: "Contemporary Living Room",
    category: "Modern",
    description:
      "A modern living space combining comfortable seating, stylish textures and practical design.",
    features: ["Contemporary furniture", "Balanced textures", "Smart storage"]
  },
  {
    title: "Traditional Living Room",
    category: "Traditional",
    description:
      "A welcoming design inspired by classic details, warm colours and timeless furniture.",
    features: ["Warm colour scheme", "Classic details", "Comfortable seating"]
  },
  {
    title: "Small Living Room Design",
    category: "Compact",
    description:
      "Make smaller living rooms feel open with smart furniture placement and thoughtful storage.",
    features: ["Space-saving furniture", "Open visual layout", "Multipurpose storage"]
  },
  {
    title: "TV Unit & Feature Wall",
    category: "Modern",
    description:
      "Create an attractive focal point with a customised TV unit, shelving and coordinated finishes.",
    features: ["Custom TV unit", "Decorative wall panels", "Integrated storage"]
  }
];

const categories = ["All", "Modern", "Luxury", "Traditional", "Compact"];

export default function LivingRoomDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "Living Room Interior Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in your living room interior design services.",
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
        <title>Living Room Interior Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern, luxury and space-saving living room interior design concepts with Skarvion Infrastructure in Bhubaneswar. Discuss your requirements through WhatsApp."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/living-room-design"
        />
        <meta
          property="og:title"
          content="Living Room Interior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover practical and stylish living room interior design concepts for your home."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/living-room-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="living-room-page">
        <section className="living-room-hero">
          <div className="living-room-hero-glow" />

          <div className="living-room-container living-room-hero-content">
            <div className="living-room-hero-copy">
              <span className="living-room-eyebrow">
                <FaCouch /> INTERIOR DESIGN
              </span>

              <h1>
                Living Room <span>Interior Design</span>
              </h1>

              <p>
                Create a living room that feels comfortable, looks beautiful
                and suits the way you live. Explore design concepts for
                different styles, spaces and budgets.
              </p>

              <div className="living-room-hero-actions">
                <button
                  className="living-room-primary-btn"
                  onClick={() => sendEnquiry()}
                >
                  Discuss Your Design <FaArrowRight />
                </button>

                <a href="#living-room-options" className="living-room-secondary-btn">
                  Explore Designs
                </a>
              </div>

              <div className="living-room-trust-points">
                <span><FaCheck /> Functional layouts</span>
                <span><FaCheck /> Style-focused concepts</span>
                <span><FaCheck /> Personalised requirements</span>
              </div>
            </div>

            <div className="living-room-visual" aria-label="Living room design concept">
              <div className="living-room-visual-label">
                <span>DESIGN CONCEPT</span>
                <strong>Comfort meets style</strong>
              </div>

              <div className="living-room-art">
                <div className="living-room-art-window">
                  <div />
                  <div />
                </div>
                <div className="living-room-art-frame">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="living-room-art-floor" />
                <div className="living-room-art-sofa">
                  <div className="living-room-sofa-back" />
                  <div className="living-room-sofa-seat" />
                  <div className="living-room-sofa-arm left" />
                  <div className="living-room-sofa-arm right" />
                  <div className="living-room-sofa-cushion one" />
                  <div className="living-room-sofa-cushion two" />
                </div>
                <div className="living-room-art-table" />
                <div className="living-room-art-plant">
                  <span />
                  <span />
                  <span />
                  <i />
                </div>
                <div className="living-room-art-lamp">
                  <span />
                  <i />
                </div>
                <div className="living-room-art-rug" />
              </div>

              <div className="living-room-visual-note">
                <FaPalette />
                <div>
                  <strong>Designed around you</strong>
                  <span>Colours, furniture and finishes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="living-room-intro">
          <div className="living-room-container">
            <div className="living-room-section-heading">
              <span className="living-room-eyebrow">YOUR SPACE, YOUR STYLE</span>
              <h2>Plan a Living Room That Works for You</h2>
              <p>
                From compact apartments to spacious family homes, thoughtful
                planning helps balance comfort, movement, lighting and storage.
              </p>
            </div>

            <div className="living-room-benefits">
              <article>
                <span className="living-room-benefit-icon"><FaRulerCombined /></span>
                <h3>Smart Space Planning</h3>
                <p>Arrange furniture and circulation areas to make better use of your room.</p>
              </article>

              <article>
                <span className="living-room-benefit-icon"><FaPalette /></span>
                <h3>Coordinated Finishes</h3>
                <p>Explore colours, textures and materials that complement your home.</p>
              </article>

              <article>
                <span className="living-room-benefit-icon"><FaLightbulb /></span>
                <h3>Lighting & Ambience</h3>
                <p>Consider lighting layers for everyday activities and a welcoming atmosphere.</p>
              </article>

              <article>
                <span className="living-room-benefit-icon"><FaHouse /></span>
                <h3>Personalised Concepts</h3>
                <p>Discuss your room dimensions, preferences and practical requirements.</p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="living-room-options"
          id="living-room-options"
        >
          <div className="living-room-container">
            <div className="living-room-section-heading">
              <span className="living-room-eyebrow">EXPLORE OUR CONCEPTS</span>
              <h2>Living Room Design Options</h2>
              <p>
                Choose a design direction to discuss with Skarvion Infrastructure.
                Final layouts and estimates depend on your requirements.
              </p>
            </div>

            <div className="living-room-filters" aria-label="Filter living room designs">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="living-room-design-grid">
              {filteredDesigns.map((design, index) => (
                <article className="living-room-design-card" key={design.title}>
                  <div className={`living-room-card-art art-${index % 3}`}>
                    <span className="living-room-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="living-room-card-room">
                      <div className="living-room-card-wall-art" />
                      <div className="living-room-card-window" />
                      <div className="living-room-card-sofa" />
                      <div className="living-room-card-table" />
                      <div className="living-room-card-plant" />
                    </div>
                    <span className="living-room-card-category">{design.category}</span>
                  </div>

                  <div className="living-room-card-body">
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>

                    <ul>
                      {design.features.map((feature) => (
                        <li key={feature}><FaCheck /> {feature}</li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="living-room-card-link"
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

        <section className="living-room-enquiry" id="living-room-enquiry">
          <div className="living-room-container living-room-enquiry-layout">
            <div className="living-room-enquiry-copy">
              <span className="living-room-eyebrow">LET'S DISCUSS YOUR SPACE</span>
              <h2>Tell Us About Your Living Room</h2>
              <p>
                Share a few details and continue the enquiry directly through
                WhatsApp. You can discuss room size, preferred style and
                approximate budget in the chat.
              </p>

              <div className="living-room-enquiry-points">
                <span><FaCheck /> Your preferred design style</span>
                <span><FaCheck /> Room dimensions and requirements</span>
                <span><FaCheck /> Questions about planning and estimates</span>
              </div>
            </div>

            <form className="living-room-form" onSubmit={handleSubmit}>
              <label htmlFor="living-name">Your name</label>
              <input
                id="living-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
              />

              <label htmlFor="living-phone">Contact number (optional)</label>
              <input
                id="living-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />

              <label htmlFor="living-requirements">Your requirements</label>
              <textarea
                id="living-requirements"
                placeholder="Room size, preferred style, budget or other details"
                rows="4"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
              />

              <button type="submit" className="living-room-primary-btn">
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <small>
                Your details are placed in a WhatsApp message. This form does
                not submit information to a website backend.
              </small>
            </form>
          </div>
        </section>

        <section className="living-room-final-cta">
          <div className="living-room-container living-room-final-cta-inner">
            <div>
              <span className="living-room-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Ready to Plan Your Living Room?</h2>
              <p>Start a conversation about your interior design requirements.</p>
            </div>

            <button
              className="living-room-primary-btn"
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
