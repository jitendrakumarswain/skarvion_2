import React from "react";



export default function WhyUs() {
  return (
    <section className="section" data-aos="fade-up">
      <h2>
        Why <span className="highlight-text">Skarvion</span> is Best for Construction?
      </h2>

      <div className="why-grid">

        {/* CARD 1 */}
        <div
  className="why-card"
  data-aos="fade-up"
  data-aos-delay="100"
>
          <p><strong>150+</strong> Projects Completed</p>
          <p><strong>10+</strong> Cities Served</p>
          <p><strong>95%</strong> On-time Delivery</p>
          <p><strong>10 Years</strong> Warranty</p>
        </div>

        {/* CARD 2 */}
        <div
  className="why-card"
  data-aos="fade-up"
  data-aos-delay="200"
>
          <p>✔ Timely Delivery</p>
          <p>✔ Construction Guarantee</p>
          <p>✔ No Hidden Charges</p>
          <p>✔ No Subcontracting</p>
        </div>

        {/* CARD 3 */}
        <div
  className="why-card"
  data-aos="fade-up"
  data-aos-delay="300"
>
          <p>🏡 Eco-friendly Designs</p>
          <p>🏗️ Modern Construction Solutions</p>
          <p>❄ Natural Cooling Homes</p>
        </div>

      </div>
    </section>
  );
}