import { useState, useEffect } from "react";


const expertise = [
  {
    title: "Residential Buildings",
    images: [
      
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    ],
  },
  {
    title: "Educational Buildings",
    images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85",
    ],
  },
  {
    title: "Institutional Buildings",
    images: [
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    ],
  },

];

export default function ExpertiseSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (hoveredCard === null) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => ({
        ...prev,
        [hoveredCard]:
          ((prev[hoveredCard] || 0) + 1) %
          expertise[hoveredCard].images.length,
      }));
    }, 1200);

    return () => clearInterval(interval);
  }, [hoveredCard]);

  return (
    <section className="expertise-section">

      <div className="expertise-header">

        <div className="expertise-showcase">

          <div className="showcase-left">

            <span className="showcase-badge">
              BUILD • DESIGN • DELIVER
            </span>

            <h3>
              Building the Future,
              <br />
              One Project at a Time
            </h3>

            <p>
              From concept planning and structural engineering to final
              construction, Skarvion delivers innovative, reliable and
              high-quality infrastructure solutions for residential,
              educational, institutional and business buildings.
            </p>

            <ul className="showcase-list">
              <li>✔ Architectural Planning</li>
              <li>✔ Structural Design</li>
              <li>✔ 3D Elevation</li>
              <li>✔ Construction Management</li>
            </ul>

          </div>

          <div className="showcase-right">

            <img
              src="construction_process.gif"
              alt="Skarvion construction process"
              className="construction-gif"
            />

          </div>

        </div>

        <span className="expertise-tag">
          OUR EXPERTISE
        </span>

        <h2>
          From Vision to Reality
        </h2>

        <p>
          Every successful project begins with intelligent planning and ends
          with exceptional execution. Explore how Skarvion transforms ideas
          into lasting infrastructure across residential, educational,
          institutional and business projects.
        </p>

      </div>

     <div className="expertise-grid">
  {expertise.map((item, index) => {
    const imageIndex =
      hoveredCard === index
        ? currentImage[index] || 0
        : 0;

    return (
      <div
        key={index}
        className="expertise-card"
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="expertise-image">
          <img
            src={item.images[imageIndex]}
            alt={item.title}
          />

          <div className="image-overlay" />
        </div>

        <div className="expertise-content">
          <h3>{item.title}</h3>
        </div>
      </div>
    );
  })}
</div>

    </section>
  );
}
