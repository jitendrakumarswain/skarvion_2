"use client";
import { useState } from "react";
import ParticlesBg from "./ParticlesBg";
import structureImg from "../assets/structure.png";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    details: "",
  });

  // ✅ Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, type, details } = formData;

    if (name.trim().length < 3) {
      alert("Enter valid name");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    if (!type) {
      alert("Select building type");
      return;
    }

    setLoading(true);

    const message = `Hello Skarvion,
Name: ${name}
Mobile: ${phone}
Building Type: ${type}
Description: ${details}`;

    window.open(
      `https://wa.me/917064949597?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      setLoading(false);

      setFormData({
        name: "",
        phone: "",
        type: "",
        details: "",
      });

      setTimeout(() => {
        setShowForm(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.log("Backend not running");
      setLoading(false);
    }
  };

  return (
    <section className="hero relative overflow-hidden">

      {/* 🔥 Construction Background Animation */}
      <div className="construction-bg">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* OPTIONAL PARTICLES */}
      <ParticlesBg />

      {/* CONTENT */}
      <div className="overlay relative z-10">
        <h1>
         <b></b> Smart Planning for <b></b><span><b>Strong Infrastructure</b></span>
        </h1>

        <p className="hero-tagline">
          <span><b>Planning</b></span> • <span><b>Designing</b></span> •{" "}
          <span><b>Estimation</b></span> • <span><b>Construction</b></span>
        </p>

        <button
          onClick={() => {
            setShowForm(true);
            setSuccess(false);
          }}
        >
          Get Quote
        </button>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="modal">
          <div className="modal-content animate">

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Get a Quote</h2>

            {success ? (
              <div className="success-box">
                ✅ Message sent successfully!
              </div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit}>

                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select Building Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>

                <textarea
                  name="details"
                  placeholder="Building Description"
                  value={formData.details}
                  onChange={handleChange}
                />

                <div className="modal-buttons">
                  <button type="submit" className="submit-btn">
                    {loading ? "Sending..." : "Submit"}
                  </button>

                  <button
                    type="button"
                    className="close-btn"
                    onClick={() => setShowForm(false)}
                  >
                    Close
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}