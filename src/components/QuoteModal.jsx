import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../css-modular/QuoteModal.css";

import {
  FaTimes,
  FaUser,
  FaPhoneAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

export default function QuoteModal({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    details: "",
  });

  /* Lock background scrolling while modal is open */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, type, details } = formData;

    if (name.trim().length < 3) {
      alert("Please enter a valid full name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!type) {
      alert("Please select a building type.");
      return;
    }

    setLoading(true);

    const message = `Hello Skarvion Team,
I'd like to get a quote:
• Name: ${name}
• Mobile: ${phone}
• Project Type: ${type}
• Details: ${details || "N/A"}`;

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch {
      console.log(
        "Backend offline, routing directly to WhatsApp."
      );
    }

    window.open(
      `https://wa.me/917064949597?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSuccess(true);
    setLoading(false);

    setFormData({
      name: "",
      phone: "",
      type: "",
      details: "",
    });

    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 2200);
  };

  const modalContent = (
    <div
      className="quote-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="quote-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        {/* Close */}
        <button
          type="button"
          className="skv-modal-close"
          onClick={onClose}
          aria-label="Close form"
        >
          <FaTimes />
        </button>

        {success ? (
          <div className="skv-success-state">
            <FaCheckCircle className="skv-success-icon" />

            <h3>Quote Request Sent!</h3>

            <p>
              Redirecting to WhatsApp to finalize your
              consultation...
            </p>
          </div>
        ) : (
          <>
            <div className="skv-modal-header">
              <span className="skv-modal-tag">
                Fast Response
              </span>

              <h2 id="quote-modal-title">
                Request Home Design &amp; Estimate
              </h2>

              <p>
                Share your plot dimensions, location, and
                requirements.
              </p>
            </div>

            <form
              className="skv-quote-form"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="skv-input-group">
                <FaUser className="skv-field-icon" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              {/* Phone */}
              <div className="skv-input-group">
                <FaPhoneAlt className="skv-field-icon" />

                <input
                  type="tel"
                  name="phone"
                  placeholder="10-Digit Mobile Number *"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                    setFormData((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }}
                  autoComplete="tel"
                />
              </div>

              {/* Project Type */}
              <div className="skv-input-group">
                <FaBuilding className="skv-field-icon" />

                <select
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Building Project *
                  </option>

                  <option value="Luxury Duplex / Villa">
                    Luxury Duplex / Villa
                  </option>

                  <option value="Residential Floor Building">
                    Residential Floor Building
                  </option>

                  <option value="Modern Elevation & 3D Planning">
                    Modern Elevation &amp; 3D Planning
                  </option>

                  <option value="Turnkey House Construction">
                    Complete Turnkey Construction
                  </option>
                </select>
              </div>

              {/* Details */}
              <div className="skv-input-group textarea-group">
                <textarea
                  name="details"
                  placeholder="Describe your plot size, location (e.g. 1500 sq.ft, Bhubaneswar), or special preferences"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                />
              </div>

              <div className="skv-modal-footer">
                <button
                  type="submit"
                  className="skv-submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : "Get Instant Quote"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );

  /* Render outside the normal page stacking context */
  return createPortal(modalContent, document.body);
}