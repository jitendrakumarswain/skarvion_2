const testimonials = [
  {
    name: "Rahul",
    text: "Great planning and design service!",
    rating: 5
  },
  {
    name: "Amit",
    text: "Very professional and affordable pricing.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section dark" id="testimonials">
      <h2>Client Testimonials</h2>

      <div className="grid">
        {testimonials.map((t, i) => (
          <div key={i} className="card testimonial-card">
            
            {/* ⭐⭐⭐⭐⭐ */}
            <div className="stars">
              {"⭐".repeat(t.rating)}
            </div>

            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}