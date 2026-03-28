import { useState } from "react";


export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.msg) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    if (!form.email.includes("@")) {
      setMessage("⚠️ Enter a valid email");
      return;
    }

    setMessage("✅ Message sent successfully!");
    setForm({ name: "", email: "", msg: "" });
    // 🔥 AUTO CLEAR AFTER 3 SECONDS
  setTimeout(() => {
    setMessage("");
  }, 3000);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <p>📞 <span>+91 7064949597</span></p>
        <p>📧 <span>jitendrakumarswain75@gmail.com</span></p>
        <p>📍 <span>Badagada, Bhubaneswar, Pin - 751006, Odisha</span></p>
      </div>

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Message"
          value={form.msg}
          onChange={(e) => setForm({ ...form, msg: e.target.value })}
        />

        <button type="submit">Send</button>
      </form>

      {/* MESSAGE */}
      {message && <p className="form-message">{message}</p>}
    </section>
  );
}