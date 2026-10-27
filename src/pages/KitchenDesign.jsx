
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaKitchenSet,
  FaCheck,
  FaPalette,
  FaLightbulb,
  FaRulerCombined,
  FaHouse
} from "react-icons/fa6";
import "../css-modular/KitchenDesign.css";

const WHATSAPP_NUMBER = "917064949597";

const designs = [
  {
    title: "L-Shaped Modular Kitchen",
    category: "Modular",
    description:
      "An efficient corner layout that helps organise cooking, preparation and cleaning zones.",
    features: ["Corner-space planning", "Practical work triangle", "Cabinet storage"]
  },
  {
    title: "U-Shaped Kitchen",
    category: "Layout",
    description:
      "A three-sided kitchen arrangement offering generous worktop space and accessible storage.",
    features: ["Three-sided workspace", "Multiple storage zones", "Efficient workflow"]
  },
  {
    title: "Parallel Kitchen",
    category: "Layout",
    description:
      "Two opposing counters create a practical cooking area for homes with a suitable narrow layout.",
    features: ["Separate work zones", "Organised counters", "Easy access"]
  },
  {
    title: "Luxury Modular Kitchen",
    category: "Luxury",
    description:
      "A premium kitchen concept with coordinated finishes, refined cabinetry and considered lighting.",
    features: ["Premium-style finishes", "Integrated storage", "Layered lighting"]
  },
  {
    title: "Kitchen Island Design",
    category: "Luxury",
    description:
      "Add a central island for preparation, serving or casual seating where sufficient space is available.",
    features: ["Central work surface", "Optional seating", "Extra storage"]
  },
  {
    title: "Compact Kitchen Design",
    category: "Compact",
    description:
      "Make a smaller kitchen more functional with smart storage and a carefully planned layout.",
    features: ["Space-saving cabinets", "Vertical storage", "Clear work zones"]
  }
];

const categories = ["All", "Modular", "Layout", "Luxury", "Compact"];

export default function KitchenDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirements, setRequirements] = useState("");

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((design) => design.category === activeCategory);

  const sendEnquiry = (designName = "Kitchen Interior Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      "I am interested in your kitchen interior design services.",
      `Design preference: ${designName}`,
      name.trim() ? `Name: ${name.trim()}` : "",
      phone.trim() ? `Contact number: ${phone.trim()}` : "",
      requirements.trim() ? `Requirements: ${requirements.trim()}` : "",
      "",
      "Please contact me to discuss the kitchen layout, design and estimate."
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
        <title>Kitchen Interior Design in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modular kitchen designs, L-shaped kitchens, U-shaped layouts, parallel kitchens and kitchen islands with Skarvion Infrastructure in Bhubaneswar. Enquire through WhatsApp."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/kitchen-design"
        />
        <meta
          property="og:title"
          content="Kitchen Interior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Explore practical and stylish kitchen design concepts for your home."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/kitchen-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="kitchen-page">
        <section className="kitchen-hero">
          <div className="kitchen-container kitchen-hero-layout">
            <div className="kitchen-hero-copy">
              <span className="kitchen-eyebrow">
                <FaKitchenSet /> KITCHEN INTERIOR DESIGN
              </span>

              <h1>
                A Better Kitchen, <span>Designed Around You</span>
              </h1>

              <p>
                Explore kitchen layouts that bring together smart storage,
                practical workspaces and a coordinated look. Find a concept
                that suits your home and daily routine.
              </p>

              <div className="kitchen-actions">
                <button
                  className="kitchen-primary-btn"
                  onClick={() => sendEnquiry()}
                >
                  <FaWhatsapp /> Discuss Your Kitchen
                </button>

                <a href="#kitchen-options" className="kitchen-secondary-btn">
                  Explore Designs <FaArrowRight />
                </a>
              </div>

              <div className="kitchen-trust-points">
                <span><FaCheck /> Functional layouts</span>
                <span><FaCheck /> Storage planning</span>
                <span><FaCheck /> Personalised concepts</span>
              </div>
            </div>

            <div className="kitchen-visual">
              <div className="kitchen-visual-top">
                <span>KITCHEN CONCEPT</span>
                <strong>Form meets function</strong>
              </div>

              <div className="kitchen-art" aria-label="Stylised kitchen illustration">
                <div className="kitchen-art-window">
                  <span />
                  <span />
                </div>

                <div className="kitchen-art-upper-cabinets">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="kitchen-art-counter" />

                <div className="kitchen-art-backsplash">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="kitchen-art-lower-cabinets">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="kitchen-art-sink">
                  <span />
                </div>

                <div className="kitchen-art-hob">
                  <span />
                  <span />
                </div>

                <div className="kitchen-art-plant">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>

                <div className="kitchen-art-floor" />
              </div>

              <div className="kitchen-visual-caption">
                <FaPalette />
                <div>
                  <strong>Planned for everyday living</strong>
                  <span>Layout, cabinetry, finishes and lighting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="kitchen-benefits-section">
          <div className="kitchen-container">
            <div className="kitchen-section-heading">
              <span className="kitchen-eyebrow">THOUGHTFUL KITCHEN PLANNING</span>
              <h2>Designed for Cooking, Storage and Everyday Life</h2>
              <p>
                A well-planned kitchen considers movement, countertop space,
                cabinet access, lighting and the relationship between key work zones.
              </p>
            </div>

            <div className="kitchen-benefits">
              <article>
                <span><FaRulerCombined /></span>
                <h3>Layout Planning</h3>
                <p>Choose a layout based on room dimensions, openings and daily cooking needs.</p>
              </article>

              <article>
                <span><FaHouse /></span>
                <h3>Smart Storage</h3>
                <p>Consider cabinets, drawers and shelves for an organised kitchen.</p>
              </article>

              <article>
                <span><FaPalette /></span>
                <h3>Finishes & Colours</h3>
                <p>Coordinate cabinet finishes, countertops, backsplash and hardware.</p>
              </article>

              <article>
                <span><FaLightbulb /></span>
                <h3>Task Lighting</h3>
                <p>Plan suitable lighting for counters, cooking areas and general use.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="kitchen-options-section" id="kitchen-options">
          <div className="kitchen-container">
            <div className="kitchen-section-heading">
              <span className="kitchen-eyebrow">EXPLORE KITCHEN STYLES</span>
              <h2>Find a Kitchen Layout That Fits Your Home</h2>
              <p>
                Browse different concepts and select one to discuss with
                Skarvion Infrastructure. The final layout depends on your
                available space and requirements.
              </p>
            </div>

            <div className="kitchen-filters" aria-label="Filter kitchen designs">
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

            <div className="kitchen-design-grid">
              {filteredDesigns.map((design, index) => (
                <article className="kitchen-design-card" key={design.title}>
                  <div className={`kitchen-card-art kitchen-art-${index % 3}`}>
                    <span className="kitchen-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="kitchen-card-window" />

                    <div className="kitchen-card-upper">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="kitchen-card-backsplash" />
                    <div className="kitchen-card-counter" />

                    <div className="kitchen-card-lower">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="kitchen-card-category">{design.category}</span>
                  </div>

                  <div className="kitchen-card-content">
                    <h3>{design.title}</h3>
                    <p>{design.description}</p>

                    <ul>
                      {design.features.map((feature) => (
                        <li key={feature}><FaCheck /> {feature}</li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="kitchen-card-enquire"
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

        <section className="kitchen-process-section">
          <div className="kitchen-container kitchen-process-layout">
            <div>
              <span className="kitchen-eyebrow">FROM IDEA TO PLAN</span>
              <h2>How to Start Your Kitchen Design</h2>
              <p>
                Begin with your available space and priorities. Discuss the
                details to determine a suitable design direction.
              </p>
            </div>

            <div className="kitchen-process-steps">
              <article>
                <span>01</span>
                <div>
                  <h3>Share Your Space</h3>
                  <p>Provide approximate dimensions and the room layout.</p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Choose Your Priorities</h3>
                  <p>Discuss storage, worktops, appliances and preferred finishes.</p>
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

        <section className="kitchen-enquiry-section" id="kitchen-enquiry">
          <div className="kitchen-container kitchen-enquiry-layout">
            <div className="kitchen-enquiry-copy">
              <span className="kitchen-eyebrow">LET'S PLAN YOUR KITCHEN</span>
              <h2>Tell Us What You Have in Mind</h2>
              <p>
                Share your preferred layout, room dimensions and design
                requirements. Continue directly in WhatsApp to discuss the
                next steps and an estimate.
              </p>

              <div className="kitchen-enquiry-points">
                <span><FaCheck /> Kitchen dimensions and layout</span>
                <span><FaCheck /> Cabinet and countertop preferences</span>
                <span><FaCheck /> Storage and appliance requirements</span>
              </div>
            </div>

            <form className="kitchen-form" onSubmit={handleSubmit}>
              <label htmlFor="kitchen-name">Your name</label>
              <input
                id="kitchen-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
              />

              <label htmlFor="kitchen-phone">Contact number (optional)</label>
              <input
                id="kitchen-phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />

              <label htmlFor="kitchen-requirements">Kitchen requirements</label>
              <textarea
                id="kitchen-requirements"
                rows="4"
                placeholder="Dimensions, layout preference, budget or other details"
                value={requirements}
                onChange={(event) => setRequirements(event.target.value)}
              />

              <button type="submit" className="kitchen-primary-btn">
                <FaWhatsapp /> Continue on WhatsApp
              </button>

              <small>
                This form prepares a WhatsApp message. It does not send your
                information to a website backend.
              </small>
            </form>
          </div>
        </section>

        <section className="kitchen-final-cta">
          <div className="kitchen-container kitchen-final-cta-inner">
            <div>
              <span className="kitchen-eyebrow">SKARVION INFRASTRUCTURE</span>
              <h2>Ready to Plan Your Kitchen?</h2>
              <p>Let's discuss a kitchen design suited to your home.</p>
            </div>

            <button
              className="kitchen-primary-btn"
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
