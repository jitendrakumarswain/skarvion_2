import React from "react";

const projects = [
  {
    area: "Niladri Vihar",
    type: "G+2 Residential Building",
    status: "Completed",
    category: "Residential",
    img:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Patia",
    type: "Luxury Duplex",
    status: "Ongoing",
    category: "Residential",
    img:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Khandagiri",
    type: "Commercial Building",
    status: "Completed",
    category: "Business",
    img:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Jaydev Vihar",
    type: "Modern Villa",
    status: "Completed",
    category: "Residential",
    img:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Chandrasekharpur",
    type: "Interior Design",
    status: "Ongoing",
    category: "Interior",
    img:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Rasulgarh",
    type: "Apartment Construction",
    status: "Completed",
    category: "Residential",
    img:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Saheed Nagar",
    type: "Luxury Apartment",
    status: "Completed",
    category: "Residential",
    img:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=85",
  },
  {
    area: "Cuttack Road",
    type: "Corporate Office Building",
    status: "Ongoing",
    category: "Business",
    img:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="projects-header">

        <span className="projects-tag">
          OUR WORK
        </span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Explore selected residential, commercial and interior projects
          that demonstrate our approach to planning, design and execution.
        </p>

      </div>

      {/* Project Grid */}
      <div className="projects-grid">

        {projects.map((project, index) => (
          <article
            key={`${project.area}-${project.type}`}
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            {/* Image */}
            <div className="project-image-wrapper">

              <img
                src={project.img}
                alt={`${project.type} at ${project.area}`}
                className="project-image"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                }}
              />

              <div className="project-image-overlay" />

              {/* Status */}
              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "completed"
                    : "ongoing"
                }`}
              >
                <span className="status-dot" />
                {project.status}
              </span>

              {/* Category */}
              <span className="project-category">
                {project.category}
              </span>

            </div>

            {/* Content */}
            <div className="project-content">

              <div className="project-location">
                <span className="location-icon">⌖</span>
                {project.area}
              </div>

              <h3>{project.type}</h3>

              <div className="project-footer">

                <span className="project-label">
                  SKARVION PROJECT
                </span>

                <button
                  type="button"
                  className="project-view-btn"
                >
                  View Project
                  <span>→</span>
                </button>

              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}