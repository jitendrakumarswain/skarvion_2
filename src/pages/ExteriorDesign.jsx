
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaArrowRight,
  FaHouse,
  FaCheck,
} from "react-icons/fa6";
import "../css-modular/ExteriorDesign.css";

const WHATSAPP_NUMBER = "917604949597";

const exteriorServices = [
  {
    title: "Modern Exterior Design",
    category: "Modern",
    description:
      "Explore contemporary exterior concepts with clean lines, coordinated textures and balanced proportions.",
    features: ["Modern facade concepts", "Material combinations", "Colour coordination"],
  },
  {
    title: "Luxury Exterior Design",
    category: "Luxury",
    description:
      "Discuss a distinctive exterior concept with decorative features and coordinated finishes.",
    features: ["Feature walls", "Premium-style finishes", "Exterior detailing"],
  },
  {
    title: "Simple Exterior Design",
    category: "Simple",
    description:
      "Consider a neat and practical exterior design that complements your home's architecture.",
    features: ["Simple finishes", "Balanced proportions", "Clean styling"],
  },
  {
    title: "Traditional Exterior Design",
    category: "Traditional",
    description:
      "Explore traditional exterior elements arranged to complement your preferred architectural style.",
    features: ["Classic details", "Coordinated materials", "Custom styling"],
  },
  {
    title: "Boundary Wall Design",
    category: "Boundary",
    description:
      "Discuss boundary wall and entrance concepts that coordinate with your property's exterior.",
    features: ["Wall composition", "Entrance features", "Finish options"],
  },
  {
    title: "Custom Exterior Design",
    category: "Custom",
    description:
      "Develop a design direction around your existing house, plot, preferences and project requirements.",
    features: ["Personalized concept", "Existing-house considerations", "Style consultation"],
  },
];

const categories = [
  "All",
  "Modern",
  "Luxury",
  "Simple",
  "Traditional",
  "Boundary",
  "Custom",
];

export default function ExteriorDesign() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [propertyType, setPropertyType] = useState("Independent house");
  const [floors, setFloors] = useState("Ground + 1 floor");
  const [style, setStyle] = useState("Modern");
  const [requirements, setRequirements] = useState("");

  const filteredServices =
    activeCategory === "All"
      ? exteriorServices
      : exteriorServices.filter(
          (service) => service.category === activeCategory
        );

  const sendEnquiry = (serviceName = "Exterior Design") => {
    const message = [
      "Hello Skarvion Infrastructure,",
      "",
      `I am interested in ${serviceName}.`,
      `Property type: ${propertyType}`,
      `Building floors: ${floors}`,
      `Preferred style: ${style}`,
      requirements ? `Additional requirements: ${requirements}` : "",
      "",
      "Please contact me to discuss the design and quotation.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Helmet>
        <title>Exterior Design Services in Bhubaneswar | Skarvion Infrastructure</title>
        <meta
          name="description"
          content="Explore modern, luxury, simple and traditional exterior design concepts, including boundary wall designs, with Skarvion Infrastructure in Bhubaneswar, Odisha."
        />
        <link
          rel="canonical"
          href="https://skarvioninfra.com/exterior-design"
        />
        <meta
          property="og:title"
          content="Exterior Design | Skarvion Infrastructure"
        />
        <meta
          property="og:description"
          content="Discuss a customized exterior design for your home or property with Skarvion Infrastructure."
        />
        <meta
          property="og:url"
          content="https://skarvioninfra.com/exterior-design"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="exterior-design-page">
        <section className="ed-hero">
          <div className="ed-hero-content">
            <span className="ed-eyebrow">SKARVION INFRASTRUCTURE</span>
            <h1>
              Design Your Exterior.
              <span> Define Your Style.</span>
            </h1>
            <p>
              Explore exterior concepts for homes and properties, from modern
              facades to boundary walls and coordinated finishing details.
            </p>

            <button
              className="ed-primary-btn"
              onClick={() => sendEnquiry()}
            >
              Discuss Your Exterior <FaArrowRight />
            </button>

            <div className="ed-trust-points">
              <span><FaCheck /> Multiple design styles</span>
              <span><FaCheck /> Property-specific concepts</span>
              <span><FaCheck /> WhatsApp enquiries</span>
            </div>
          </div>

          <div className="ed-hero-visual">
            <div className="ed-visual-label">
              <FaHouse />
              <div>
                <strong>Exterior Design Concepts</strong>
                <span>Facade · Finishes · Details</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ed-services section-container">
          <div className="ed-section-heading">
            <span className="ed-eyebrow">EXPLORE OUR SERVICES</span>
            <h2>Exterior Design for Different Styles</h2>
            <p>
              Choose a category to explore a design direction for your property.
            </p>
          </div>

          <div className="ed-filters" aria-label="Filter exterior design services">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="ed-service-grid">
            {filteredServices.map((service, index) => (
              <article className="ed-service-card" key={service.title}>
                <div className="ed-card-top">
                  <span className="ed-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="ed-card-category">
                    {service.category}
                  </span>
                </div>

                <div className="ed-card-icon">
                  <FaHouse />
                </div>

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
                  className="ed-card-link"
                  onClick={() => sendEnquiry(service.title)}
                >
                  Enquire on WhatsApp <FaArrowRight />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="ed-enquiry-section">
          <div className="ed-enquiry-copy">
            <span className="ed-eyebrow">TELL US ABOUT YOUR PROPERTY</span>
            <h2>Let's Discuss Your Exterior</h2>
            <p>
              Share your property type, building floors and design preferences.
              WhatsApp will open with your enquiry ready for you to review.
            </p>
            <div className="ed-whatsapp-note">
              <FaWhatsapp />
              <span>You decide whether to send the message.</span>
            </div>
          </div>

          <form
            className="ed-enquiry-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendEnquiry("Custom Exterior Design");
            }}
          >
            <label htmlFor="ed-property-type">Property type</label>
            <select
              id="ed-property-type"
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
            >
              <option>Independent house</option>
              <option>Duplex house</option>
              <option>Apartment building</option>
              <option>Commercial property</option>
              <option>Boundary wall or entrance</option>
              <option>Other property</option>
            </select>

            <label htmlFor="ed-floors">Building floors</label>
            <select
              id="ed-floors"
              value={floors}
              onChange={(event) => setFloors(event.target.value)}
            >
              <option>Ground floor</option>
              <option>Ground + 1 floor</option>
              <option>Ground + 2 floors</option>
              <option>Ground + 3 floors</option>
              <option>Not applicable</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="ed-style">Preferred style</label>
            <select
              id="ed-style"
              value={style}
              onChange={(event) => setStyle(event.target.value)}
            >
              <option>Modern</option>
              <option>Luxury</option>
              <option>Simple</option>
              <option>Traditional</option>
              <option>Minimalist</option>
              <option>Not decided yet</option>
            </select>

            <label htmlFor="ed-requirements">Additional requirements</label>
            <textarea
              id="ed-requirements"
              rows="4"
              placeholder="Exterior colours, wall design, materials, entrance..."
              value={requirements}
              onChange={(event) => setRequirements(event.target.value)}
            />

            <button
              type="submit"
              className="ed-primary-btn ed-submit-btn"
            >
              Continue on WhatsApp <FaWhatsapp />
            </button>
            <small>
              WhatsApp opens with a prefilled message. No website account is needed.
            </small>
          </form>
        </section>

        <section className="ed-bottom-cta">
          <h2>Ready to Refresh Your Property's Exterior?</h2>
          <p>Tell us about your property and the style you have in mind.</p>
          <button
            className="ed-primary-btn"
            onClick={() => sendEnquiry()}
          >
            Contact Skarvion Infrastructure <FaWhatsapp />
          </button>
        </section>
      </main>
    </>
  );
}
