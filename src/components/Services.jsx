import { Link } from "react-router-dom";
const services = [

    {
    name: "House Construction",
    description:
    "Residential house construction planning and project coordination for homeowners in Bhubaneswar and surrounding areas, with a focus on practical design, structural requirements and clear project estimation.",
    img:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    link: "/house-construction",
  },
  {
    name: "Architectural Planning",
    description:
  "Architectural planning and house design solutions in Bhubaneswar focused on functional layouts, efficient use of space, practical planning and modern residential design.",
    img:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    link: "/house-plans",
  },
  {
    name: "Structural Design",
   description:
  "Structural design and engineering solutions in Bhubaneswar focused on safe, durable and practical building structures, aligned with project requirements and construction needs.",
    img:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    link: "/structural-design",
    },
 
{
  name: "Estimation",
  description:
  "Construction cost estimation and project budgeting support in Bhubaneswar to help homeowners understand project scope, plan expenses and make informed construction decisions.",
  img:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  link: "/construction-cost",
},

];

const fallbackImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <span className="services-tag">OUR SERVICES</span>

        <h2>Construction & Design Services in Bhubaneswar</h2>

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
                alt={`${service.name} services by Skarvion Infrastructure in Bhubaneswar`}
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

              {service.link ? (
  <Link
    to={service.link}
    className="service-btn"
  >
    Explore
    <span>→</span>
  </Link>
) : (
  <button
    type="button"
    className="service-btn"
  >
    Explore
    <span>→</span>
  </button>
)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}