"use client";
import { useState } from "react";

export default function ConsultationModal({ show, onClose }) {
  const [success, setSuccess] = useState(false);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Show success message
    setSuccess(true);

    // 👉 Auto close after 2 sec
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 7000);
  };

  return (
    <div className="modal">
      <div className="modal-content">

        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>×</button>

        <h2>Get Free Consultation</h2>

        {/* ✅ SUCCESS MESSAGE */}
        {success ? (
          <p style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>
            ✅ Submitted successfully! We will contact you soon.
          </p>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            
            <input placeholder="Full Name" required />
            <input placeholder="Mobile Number" required />

            <select required>
              <option value="">Select Location</option>
              <option>Bhubaneswar</option>
              <option>Cuttack</option>
              <option>Puri</option>
              <option>Rourkela</option>
              <option>Sambalpur</option>
              <option>Berhampur</option>
              <option>Balasore</option>
              <option>Baripada</option>
              <option>Jharsuguda</option>
              <option>Jeypore</option>
              <option>Angul</option>
              <option>Dhenkanal</option>
              <option>Bhadrak</option>
              <option>Keonjhar</option>
              <option>Rayagada</option>
              <option>Kendrapara</option>
              <option>Jagatsinghpur</option>
              <option>Nayagarh</option>
              <option>Boudh</option>
              <option>Subarnapur (Sonepur)</option>
              <option>Kalahandi (Bhawanipatna)</option>
              <option>Nuapada</option>
              <option>Malkangiri</option>
              <option>Kandhamal (Phulbani)</option>
              <option>Ganjam</option>
              <option>Gajapati</option>
              <option>Koraput</option>
              <option>Mayurbhanj</option>
              <option>Sundargarh</option>
              <option>Bolangir</option>
            </select>

            <select required>
              <option value="">Select Plot Size</option>
              <option>0-800 sq.ft</option>
              <option>800-1000 sq.ft</option>
              <option>1000-2000 sq.ft</option>
              <option>2000-3000 sq.ft</option>
              <option>3000-4000 sq.ft</option>
              <option>4000-5000 sq.ft</option>
              <option>5000-7000 sq.ft</option>
              <option>7000-10000 sq.ft</option>
              <option>10000+ sq.ft</option>
            </select>

            <textarea placeholder="Construction Requirements"></textarea>

            <div className="modal-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>

              <button
                type="button"
                className="close-btn"
                onClick={onClose}
              >
                Close
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}