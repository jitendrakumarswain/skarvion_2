const pricing = [
  { name: "Planning(Floor Planning)", price: "₹8/sq.ft", popular: true },
  { name: "Additional Planning", price: "₹3/sq.ft" },
  { name: "Design(Structural Design)", price: "₹15/sq.ft" },
  { name: "Front Elevation(3D)",price: "₹6/sq.ft" }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="pricing-title">Our Pricing</h2>
      <p className="pricing-sub">Simple & Transparent Plans</p>

      <div className="pricing-grid">
        {pricing.map((p, i) => (
          <div key={i} className={`pricing-card ${p.popular ? "popular" : ""}`}>
            
            {p.popular && <span className="badge">Most Popular</span>}

            <h3>{p.name}</h3>
           

            <ul>
              <li>✔ Professional Service</li>
              <li>✔ High Quality Design</li>
              <li>✔ Fast Delivery</li>
            </ul>

            <button>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}