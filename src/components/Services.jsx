const services = [
  {
    name: "Architectural Planning",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    name: "Structural Design",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    name: "Additional Planning",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    name: "3D Elevation",
    img: "https://images.unsplash.com/photo-1599423300746-b62533397364"
  },
  {
    name: "Estimation",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0"
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>

     <div className="grid">
      {services.map((s, i) => (
      <div key={i} className="card">
      <img src={s.img} alt={s.name} />
      <h3>{s.name}</h3>
    </div>
  ))}
</div>
    </section>
  );
}

