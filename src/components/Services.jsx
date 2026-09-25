const services = [
  {
    name: "Architectural Planning",
    description:
      "Smart planning and design solutions focused on functionality, aesthetics and efficient use of space.",
    img:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Structural Design",
    description:
      "Safe and durable structural solutions designed around stability, performance and construction requirements.",
    img:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "3D Elevation",
    description:
      "Detailed visual concepts that help you experience the exterior look and character before construction begins.",
    img:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Estimation",
    description:
      "Clear project estimation to help with budgeting, planning and better construction decisions.",
    img:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="services-tag">OUR SERVICES</span>

        <h2>What We Do</h2>

        <p>
          We deliver modern, reliable and high-quality construction,
          planning and design solutions for residential and commercial
          projects.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article
            key={service.name}
            className="service-card"
          >
            <div className="service-image-wrapper">
              <img
                src={service.img}
                alt={service.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />

              <div className="service-image-overlay" />

              <span className="service-badge">
                SKARVION
              </span>
            </div>

            <div className="service-content">
              <h3>{service.name}</h3>

              <p>{service.description}</p>

              <button
                type="button"
                className="service-btn"
              >
                Explore
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}