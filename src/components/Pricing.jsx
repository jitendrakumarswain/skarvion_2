const pricing = [
  { name: "Architectural Planning", price: "₹14/sq.ft" },
  { name: "Structural Design", price: "₹16/sq.ft" },
  { name: "Additional Planning", price: "₹9/sq.ft" },
  { name: "3D Elevation", price: "₹7/sq.ft" }
];

export default function Pricing() {
  return (
<section id="pricing" className="section dark">
  <h2>Pricing</h2>

  <div className="pricing-container">
    <div className="grid">
      {pricing.map((p, i) => (
        <div key={i} className="card highlight">
  <h3>{p.name}</h3>
    <p style={{ fontSize: "18px", marginTop: "10px" }}>
  {p.price}
    </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}