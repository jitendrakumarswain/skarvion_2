import { useEffect, useMemo, useState } from "react";
import { FaWhatsapp, FaArrowRight, FaSearch, FaTimes } from "react-icons/fa";
import { Helmet as HelmetComponent } from "react-helmet-async";
import "../css-modular/ModernElevation.css";

const designs = [
  { id: 1, title: "Contemporary Elevation", category: "Contemporary", description: "Clean lines, balanced proportions and modern materials.", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 2, title: "Luxury Modern Facade", category: "Luxury", description: "Premium architectural styling with elegant facade details.", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 3, title: "Minimalist House Design", category: "Minimalist", description: "Simple geometry, restrained colours and timeless appeal.", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 4, title: "Duplex Elevation", category: "Duplex", description: "A coordinated facade concept for a two-storey home.", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 5, title: "Single-Floor House", category: "Budget-Friendly", description: "A practical, attractive concept for a single-storey home.", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 6, title: "Multi-Storey Elevation", category: "Contemporary", description: "A modern facade concept for multi-level residences.", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 7, title: "Brick & Stone Facade", category: "Natural Materials", description: "Natural textures that add depth and character.", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 8, title: "Night Elevation", category: "Lighting", description: "Exterior concepts with warm architectural lighting.", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 9, title: "Narrow-Plot Design", category: "Budget-Friendly", description: "A facade concept for compact urban plots.", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 10, title: "Tropical Modern", category: "Contemporary", description: "Modern architecture with greenery and natural textures.", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 11, title: "Modern-Traditional Fusion", category: "Traditional", description: "A contemporary interpretation of traditional details.", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 12, title: "Sloping-Roof Design", category: "Traditional", description: "A roof-led concept for distinctive residential character.", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 13, title: "Concrete & Industrial", category: "Minimalist", description: "Strong forms and understated material palettes.", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 14, title: "Villa Elevation", category: "Luxury", description: "An elegant exterior concept for spacious residences.", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 15, title: "Pergola & Balcony", category: "Contemporary", description: "Outdoor architectural features integrated into the facade.", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 16, title: "Geometric Facade", category: "Minimalist", description: "Distinctive shapes, clean lines and layered surfaces.", image: "photo-1600607687920-4e2a09cf159d" },
  { id: 17, title: "Jaali Facade", category: "Traditional", description: "Decorative screening inspired by Indian architecture.", image: "photo-1600566753190-17f0baa2a6c3" },
  { id: 18, title: "Green Facade", category: "Natural Materials", description: "A greenery-focused exterior design concept.", image: "photo-1600607687939-ce8a6c25118c" },
  { id: 19, title: "Premium Stone & Marble", category: "Luxury", description: "Refined stone-inspired finishes and sophisticated detailing.", image: "photo-1600566753086-00f18fb6b3ea" },
  { id: 20, title: "Budget-Friendly Elevation", category: "Budget-Friendly", description: "A simple exterior concept designed around your budget.", image: "photo-1600607687920-4e2a09cf159d" },
];

const categories = [
  "All Designs",
  "Contemporary",
  "Luxury",
  "Minimalist",
  "Duplex",
  "Budget-Friendly",
  "Natural Materials",
  "Lighting",
  "Traditional",
];

const imageUrl = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1000&q=80`;

export default function ModernElevation() {
  const [activeCategory, setActiveCategory] = useState("All Designs");
  const [search, setSearch] = useState("");
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Replace with your WhatsApp business number: country code + number, digits only.
  // Example format for India: 919876543210
  const whatsappNumber = "917064949597"; // Replace with your WhatsApp number

  const filteredDesigns = useMemo(() => {
    const term = search.trim().toLowerCase();

    return designs.filter((design) => {
      const matchesCategory =
        activeCategory === "All Designs" || design.category === activeCategory;
      const matchesSearch =
        !term ||
        `${design.title} ${design.category} ${design.description}`
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  useEffect(() => {
    if (!selectedDesign) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedDesign(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedDesign]);

  const enquire = (design) => {
    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      window.alert(
        "Please replace YOUR_WHATSAPP_NUMBER in ModernElevation.jsx with your WhatsApp number, including country code and digits only."
      );
      return;
    }

    const message = [
      "Hello Skarvion Planning & Infrastructure,",
      "",
      `I am interested in: ${design.title}.`,
      `Design category: ${design.category}.`,
      "Please share the design package, pricing, and customization options.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All Designs");
  };

  return (
    <main className="modern-elevation">
        <HelmetComponent>
  <title>Modern House Elevation Designs in Bhubaneswar | Skarvion</title>

  <meta
    name="description"
    content="Explore modern house elevation designs, contemporary facades and exterior planning concepts in Bhubaneswar, Odisha. Contact Skarvion Planning & Infrastructure for customized design enquiries."
  />

  <link
    rel="canonical"
    href="https://skarvioninfra.com/modern-elevation"
  />

  <meta
    property="og:title"
    content="Modern House Elevation Designs | Skarvion"
  />

  <meta
    property="og:description"
    content="Explore modern residential elevation concepts and discuss a design tailored to your plot and budget."
  />

  <meta
    property="og:url"
    content="https://skarvioninfra.com/modern-elevation"
  />

  <meta property="og:type" content="website" />
</HelmetComponent>


      <section className="elevation-hero">
        <div className="elevation-hero-content">
          <span className="elevation-eyebrow">SKARVION DESIGN STUDIO</span>
          <h1>
            Modern Elevation
            <span>Designed Around You.</span>
          </h1>
          <p>
            Explore residential facade concepts, discover your preferred style,
            and enquire about a design tailored to your plot, requirements, and budget.
          </p>
          <a href="#design-gallery" className="elevation-cta">
            Explore 20 Designs <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="elevation-intro">
        <span className="elevation-eyebrow">OUR COLLECTION</span>
        <h2>Find Your Exterior Style</h2>
        <p>
          Browse our design concepts and select a style to discuss with the Skarvion team.
        </p>
      </section>

      <section id="design-gallery" className="elevation-gallery-section">
        <div className="elevation-toolbar">
          <label className="elevation-search">
            <FaSearch aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search designs..."
              aria-label="Search elevation designs"
            />
          </label>
          <span className="elevation-result-count" aria-live="polite">
            {filteredDesigns.length} {filteredDesigns.length === 1 ? "design" : "designs"}
          </span>
        </div>

        <div className="elevation-filters" aria-label="Design categories">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "elevation-filter active" : "elevation-filter"}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredDesigns.length > 0 ? (
          <div className="elevation-gallery">
            {filteredDesigns.map((design) => (
              <article className="elevation-card" key={design.id}>
                <button
                  type="button"
                  className="elevation-image-button"
                  onClick={() => setSelectedDesign(design)}
                  aria-label={`Preview ${design.title}`}
                >
                  <img
                    src={imageUrl(design.image)}
                    alt={`${design.title} architectural inspiration`}
                    loading={design.id <= 3 ? "eager" : "lazy"}
                  />
                  <span className="view-design">View Design ↗</span>
                </button>

                <div className="elevation-card-content">
                  <span className="elevation-category">{design.category}</span>
                  <h3>{design.title}</h3>
                  <p>{design.description}</p>
                  <strong className="elevation-price">
                    Indicative starting rate: ₹7/sq. ft.
                  </strong>
                  <button
                    type="button"
                    className="elevation-enquire"
                    onClick={() => enquire(design)}
                  >
                    <FaWhatsapp aria-hidden="true" /> Enquire on WhatsApp
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="elevation-empty">
            <h3>No matching designs</h3>
            <p>Try another keyword or select a different category.</p>
            <button type="button" className="elevation-enquire" onClick={resetFilters}>
              Show All Designs
            </button>
          </div>
        )}
      </section>

      {selectedDesign && (
        <div
          className="elevation-modal"
          role="presentation"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="elevation-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="elevation-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="elevation-modal-close"
              onClick={() => setSelectedDesign(null)}
              aria-label="Close preview"
            >
              <FaTimes aria-hidden="true" />
            </button>
            <img
              src={imageUrl(selectedDesign.image)}
              alt={`${selectedDesign.title} preview`}
            />
            <span className="elevation-category">{selectedDesign.category}</span>
            <h2 id="elevation-modal-title">{selectedDesign.title}</h2>
            <p>{selectedDesign.description}</p>
            <p className="elevation-price">
              Indicative starting rate: ₹7/sq. ft. Final pricing depends on scope and requirements.
            </p>
            <button
              type="button"
              className="elevation-enquire"
              onClick={() => enquire(selectedDesign)}
            >
              <FaWhatsapp aria-hidden="true" /> Discuss This Design
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
