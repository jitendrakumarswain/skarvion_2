import { style } from "framer-motion/client";


const projects = [
  {
    title: "Modern House",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Commercial Building",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Luxury Villa",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
];



export default function Projects() {
  return (
    <section
      style={{
        padding: "50px 20px",

      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Our Projects
        </h2>
        <p style={{ color: "#FFFFFF" }}>
          Explore our latest construction and design work
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                padding: "15px",
              }}
            >
              <h3 style={{ margin: 0 }}>{p.title}</h3>
              <span style={{ fontSize: "14px" }}>
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}