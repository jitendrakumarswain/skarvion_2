export default function WhyUs() {
  return (
    <section className="section">
      <h2>
        Why <span className="highlight-text">Skarvion</span> is Best for Construction?
      </h2>

      <div className="why-grid">

        {/* CARD 1 */}
        <div className="why-card">
          <p><strong>500+</strong> Projects Completed</p>
          <p><strong>10+</strong> Cities Served</p>
          <p><strong>95%</strong> On-time Delivery</p>
          <p><strong>10 Years</strong> Warranty</p>
        </div>

        {/* CARD 2 */}
        <div className="why-card">
          <p>✔ Timely Delivery</p>
          <p>✔ Construction Guarantee</p>
          <p>✔ No Hidden Charges</p>
          <p>✔ No Subcontracting</p>
        </div>

        {/* CARD 3 */}
        <div className="why-card">
          <p>🏡 Eco-friendly Designs</p>
          <p>💧 Water-saving Construction</p>
          <p>❄ Natural Cooling Homes</p>
        </div>

      </div>
    </section>
  );
}