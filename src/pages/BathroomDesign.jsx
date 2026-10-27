
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCheck,
  FaPalette,
  FaLightbulb,
  FaRulerCombined,
  FaHouse,
  FaBath
} from "react-icons/fa6";
import "../css-modular/BathroomDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const designs = [
  {
    title: "Modern Bathroom Design",
    category: "Modern",
    description:
      "A contemporary bathroom concept with clean lines, coordinated finishes and practical fittings.",
    features: ["Clean visual layout", "Coordinated tiles", "Practical fittings"]
  },
  {
    title: "Luxury Bathroom",
    category: "Luxury",
    description:
      "An elegant concept featuring refined surfaces, considered lighting and a sophisticated finish palette.",
    features: ["Premium-style finishes", "Feature mirror", "Layered lighting"]
  },
  {
    title: "Small Bathroom Design",
    category: "Compact",
    description:
      "Make a compact bathroom more functional with efficient fixture placement and useful storage.",
    features: ["Space-conscious layout", "Wall-mounted storage", "Clear movement area"]
  },
  {
    title: "Minimalist Bathroom",
    category: "Modern",
    description:
      "A simple, uncluttered bathroom design that balances everyday function with a calm appearance.",
    features: ["Simple finishes", "Clean lines", "Organised storage"]
  },
  {
    title: "Walk-in Shower Design",
    category: "Shower",
    description:
      "Plan a shower area with appropriate drainage, splash control and a layout suited to the room.",
    features: ["Defined shower zone", "Drainage planning", "Easy-access layout"]
  },
  {
    title: "Contemporary Vanity Design",
    category: "Luxury",
    description:
      "Create a focal point with a coordinated vanity, mirror, basin and useful everyday storage.",
    features: ["Vanity storage", "Mirror placement", "Coordinated finishes"]
  }
];

const categories = ["All", "Modern", "Luxury", "Compact", "Shower"];

export default function BathroomDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "Bathroom Interior Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in your bathroom interior design services.",
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
        <title>Bathroom Interior Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern, luxury, compact bathroom, walk-in shower and vanity design concepts with Skarvion Infrastructure in Bhubaneswar. Enquire through WhatsApp."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/bathroom-design"
        />
        <meta
          property="og:title"
          content="Bathroom Interior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discover stylish and practical bathroom design concepts for your home."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/bathroom-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="bathroom-page">
        <section className="bathroom-hero">
          <div className="bathroom-container bathroom-hero-layout">
            <div className="bathroom-hero-copy">
              <span className="bathroom-eyebrow">
                <FaBath /> BATHROOM INTERIOR DESIGN
              </span>

              <h1>
                Everyday Comfort, <span>Thoughtfully Designed</span>
              </h1>

              <p>
                Explore bathroom concepts that combine practical layouts,
                coordinated finishes, lighting and storage. Find a design
                direction that suits your home and available space.
              </p>

              <div className="bathroom-actions">
                <button
                  className="bathroom-primary-btn"
                  onClick={() => sendEnquiry()}
                >
                  <FaWhatsapp /> Discuss Your Bathroom
                </button>

                <a href="#bathroom-options" className="bathroom-secondary-btn">
                  Explore Designs <FaArrowRight />
                </a>
              </div>

              <div className="bathroom-trust-points">
                <span><FaCheck /> Practical layouts</span>
                <span><FaCheck /> Coordinated finishes</span>
                <span><FaCheck /> Personalised concepts</span>
              </div>
            </div>

            <div className="bathroom-visual">
              <div className="bathroom-visual-top">
                <span>INTERIOR CONCEPT</span>
                <strong>Clean lines. Calm spaces.</strong>
              </div>

              <div
                className="bathroom-art"
                aria-label="Stylised bathroom design illustration"
              >
                <div className="bathroom-art-wall-tiles">
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index} />
                  ))}
                </div>

                <div className="bathroom-art-window">
                  <span />
                  <span />
                </div>

                <div className="bathroom-art-mirror" />

                <div className="bathroom-art-vanity">
                  <div className="bathroom-art-basin" />
                  <div className="bathroom-art-cabinet">
                    <span />
                    <span />
                  </div>
                </div>

                <div className="bathroom-art-shower">
                  <span />
                  <i />
                  <div />
                </div>

                <div className="bathroom-art-toilet">
                  <span />
                  <i />
                </div>

                <div className="bathroom-art-floor" />
              </div>

              <div className="bathroom-visual-caption">
                <FaPalette />
                <div>
                  <strong>Designed for daily comfort</strong>
                  <span>Layout, tiles, fixtures and lighting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bathroom-benefits-section">
          <div className="bathroom-container">
            <div className="bathroom-section-heading">
              <span className="bathroom-eyebrow">THOUGHTFUL SPACE PLANNING</span>
              <h2>Balance Style with Everyday Function</h2>
              <p>
                A good bathroom plan considers fixture positions, movement,
                ventilation, lighting, storage and water management.
              </p>
            </div>

            <div className="bathroom-benefits">
              <article>
                <span><FaRulerCombined /></span>
                <h3>Layout Planning</h3>
                <p>Arrange the basin, toilet and shower to suit the available room dimensions.</p>
              </article>

              <article>
                <span><FaPalette /></span>
                <h3>Tiles & Finishes</h3>
                <p>Coordinate wall and floor finishes with suitable bathroom fixtures.</p>
              </article>

              <article>
                <span><FaLightbulb /></span>
                <h3>Lighting & Ventilation</h3>
                <p>Consider suitable lighting, ventilation and moisture-conscious detailing.</p>
              </article>

              <article>
                <span><FaHouse /></span>
                <h3>Storage Solutions</h3>
                <p>Plan vanity storage and shelves while keeping the room easy to use.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bathroom-options-section" id="bathroom-options">
          <div className="bathroom-container">
            <div className="bathroom-section-heading">
              <span className="bathroom-eyebrow">EXPLORE DESIGN CONCEPTS</span>
              <h2>Bathroom Styles for Different Spaces</h2>
              <p>
                Browse these design directions and choose one to discuss
                with Skarvion Infrastructure. Final layouts depend on your
                dimensions, plumbing and requirements.
              </p>
            </div>

            <div className="bathroom-filters" aria-label="Filter bathroom designs">
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

            <div className="bathroom-design-grid">
              {filteredDesigns.map((design, index) => (
                <article className="bathroom-design-card" key={design.title}>
                  <div className={`bathroom-card-art bathroom-art-${index % 3}`}>
                    <span className="bathroom-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="bathroom-card-window" />
                    <div className="bathroom-card-mirror" />
                    <div className="bathroom-card-vanity">
                      <span />
                      <i />
                    </div>
                    <div className="bathroom-card-shower" />
                    <div className="bathroom-card-floor" />

                    <span className="bathroom-card-category">{design.category}</span>
                  </div>

                  <div className="bathroom-card-content">
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>

                    <ul>
                      {design.features.map((feature) => (
                        <li key={feature}><FaCheck /> {feature}</li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="bathroom-card-enquire"
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

        <section className="bathroom-process-section">
          <div className="bathroom-container bathroom-process-layout">
            <div>
              <span className="bathroom-eyebrow">FROM IDEA TO PLAN</span>
              <h2>Start with Your Bathroom Requirements</h2>
              <p>
                Share your room dimensions, preferred style and priorities.
                Discuss the design scope before finalising the layout and estimate.
              </p>
            </div>

            <div className="bathroom-process-steps">
              <article>
                <span>01</span>
                <div>
                  <h3>Share the Dimensions</h3>
                  <p>Provide approximate room measurements and existing fixture positions.</p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Choose Your Style</h3>
                  <p>Discuss tiles, fittings, storage, lighting and shower preferences.</p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Discuss the Estimate</h3>
                  <p>Review the scope and pricing based on the agreed requirements.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bathroom-enquiry-section" id="bathroom-enquiry">
          <div className="bathroom-container bathroom-enquiry-layout">
            <div className="bathroom-enquiry-copy">
              <span className="bathroom-eyebrow">LET'S DISCUSS YOUR SPACE</span>
              <h2>Tell Us About Your Bathroom</h2>
              <p>
                Share your preferred style, room dimensions and requirements.
                Continue directly in WhatsApp to discuss design options and an estimate.
              </p>

              <div className="bathroom-enquiry-points">
                <span><FaCheck /> Bathroom size and layout</span>
                <span><FaCheck /> Tile and fixture preferences</span>
                <span><FaCheck /> Storage and shower requirements</span>
              </div>
            </div>

            <form className="bathroom-form" onSubmit={handleSubmit}>
              <label htmlFor="bathroom-name">Your name</label>
              <input
                id="bathroom-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
              />

              <label htmlFor="bathroom-phone">Contact number (optional)</label>
              <input
                id="bathroom-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />

              <label htmlFor="bathroom-requirements">Your requirements</label>
              <textarea
                id="bathroom-requirements"
                rows="4"
                placeholder="Room size, preferred style, budget or other details"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
              />

              <button type="submit" className="bathroom-primary-btn">
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <small>
                This form prepares a WhatsApp message. It does not submit
                information to a website backend.
              </small>
            </form>
          </div>
        </section>

        <section className="bathroom-final-cta">
          <div className="bathroom-container bathroom-final-cta-inner">
            <div>
              <span className="bathroom-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Ready to Plan Your Bathroom?</h2>
              <p>Let's discuss a design suited to your home and space.</p>
            </div>

            <button
              className="bathroom-primary-btn"
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
