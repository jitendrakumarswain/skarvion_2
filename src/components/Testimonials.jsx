import React from "react";
import "../css-modular/11-testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Residential Client",
    text:
      "The planning process was clear, professional and well organized. The team understood our requirements and guided us through every stage.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Priya Das",
    role: "Homeowner",
    text:
      "We really appreciated the attention to detail and the modern design approach. Communication was smooth throughout the project.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Sanjay Patel",
    role: "Business Client",
    text:
      "The team provided practical solutions and maintained a strong focus on quality. The overall experience was very professional.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85",
  },
  {
    name: "Neha Verma",
    role: "Residential Client",
    text:
      "The team was supportive and responsive from planning through execution. They made the entire process easier to understand.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=85",
  },
];

function Rating({ value }) {
  return (
    <div className="testimonial-stars" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= value ? "testimonial-star active" : "testimonial-star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">

      <div className="testimonials-header">
        <span className="testimonials-tag">
          CLIENT FEEDBACK
        </span>

        <h2>
          What Our Clients Say
        </h2>

        <p>
          Real experiences, thoughtful planning and professional execution
          are at the heart of every Skarvion project.
        </p>
      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.name}
          >

            <div className="testimonial-top">
              <div className="testimonial-profile">

                <div className="testimonial-avatar">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                </div>

                <div className="testimonial-person">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>

              </div>

              <div className="testimonial-quote-mark">
                “
              </div>
            </div>

            <Rating value={testimonial.rating} />

            <p className="testimonial-text">
              “{testimonial.text}”
            </p>

            <div className="testimonial-bottom">
              <span className="testimonial-line" />
              <span className="testimonial-label">
                Client Feedback
              </span>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}