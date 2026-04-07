import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Great planning and design service! Everything was handled professionally.",
    rating: 4.5
  },
  {
    name: "Priya Das",
    text: "Modern design and smooth execution. Loved the final outcome.",
    rating: 4
  },
  {
    name: "Sanjay Patel",
    text: "High quality work and timely delivery. Highly recommended.",
    rating: 5
  },
  {
    name: "Neha Verma",
    text: "Very supportive team. Guided us throughout the project.",
    rating: 4.5
  }
];

function Rating({ value }) {
  return (
    <div style={{ color: "gold" }}>
      {[1,2,3,4,5].map((i) =>
        value >= i ? "★" : value >= i - 0.5 ? "☆" : "✩"
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: "#020817", padding: "60px 20px" }}>
      
      <h2 style={{
        textAlign: "center",
        color: "white",
        marginBottom: "40px"
      }}>
        Client Testimonials
      </h2>

      {/* GRID FIX */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "auto"
      }}>

        {testimonials.map((t, i) => (
          <div key={i} style={{
            border: "1px solid rgba(255,215,0,0.4)",
            borderRadius: "15px",
            padding: "20px",
            background: "#020817",
            textAlign: "center",
            color: "white"
          }}>

            <Rating value={t.rating} />

            <p style={{ margin: "15px 0", color: "#ccc" }}>
              "{t.text}"
            </p>

            <hr style={{
              width: "40px",
              border: "1px solid gold",
              margin: "10px auto"
            }}/>

            <h4>{t.name}</h4>
            <p style={{ fontSize: "12px", color: "#aaa" }}>
              Verified Client
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}