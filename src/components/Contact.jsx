import { useState, useRef } from "react";

const ContactInfo = ({ icon, label, value }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
    <div style={{
      width: "38px", height: "38px", borderRadius: "10px",
      background: "rgba(99,182,255,0.12)", border: "1px solid rgba(99,182,255,0.2)",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
    }}>
      {icon}
    </div>
    <div>
      <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#6cbdff", textTransform: "uppercase", margin: "0 0 3px", fontFamily: "'DM Mono', monospace" }}>{label}</p>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", margin: 0, fontWeight: 400 }}>{value}</p>
    </div>
  </div>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6cbdff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6cbdff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6cbdff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.msg) {
      setStatus("empty");
      return;
    }
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", name: form.name, email: form.email, message: form.msg }).toString(),
      });
      setStatus("success");
      setForm({ name: "", email: "", msg: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%", boxSizing: "border-box",
    background: focused === field ? "rgba(99,182,255,0.05)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(99,182,255,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "10px", padding: "13px 16px", color: "#fff",
    fontSize: "14px", outline: "none", transition: "all 0.2s",
    fontFamily: "inherit",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        .contact-section *, .contact-section *::before, .contact-section *::after { box-sizing: border-box; }
        .contact-section input::placeholder, .contact-section textarea::placeholder { color: rgba(255,255,255,0.25); }
        .contact-section input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #0f1623 inset; -webkit-text-fill-color: #fff; }
        .send-btn { cursor: pointer; transition: all 0.25s; }
        .send-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 30px rgba(99,182,255,0.3) !important; }
        .send-btn:active { transform: translateY(0); }
        .send-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
        @keyframes pulse-ring { 0%,100% { opacity:0.5; transform: scale(1); } 50% { opacity:1; transform: scale(1.05); } }
      `}</style>

      <section className="contact-section" id="contact" style={{
        padding: "96px 24px",
        background: "linear-gradient(135deg, #080d14 0%, #0c1522 50%, #060d1a 100%)",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden"
      }}>

        {/* Background decorative elements */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,182,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "0%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,182,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* LEFT */}
          <div className="fade-up">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#6cbdff", textTransform: "uppercase", margin: "0 0 20px" }}>
              — Let's Connect
            </p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 800, color: "#fff", margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Have an idea?<br />
              <span style={{ color: "#6cbdff" }}>Let's build it.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", margin: "0 0 48px", lineHeight: 1.7, maxWidth: "340px" }}>
              Open to freelance projects, collaborations, and full-time opportunities. Drop a message and I'll get back within 24 hours.
            </p>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <ContactInfo icon={<PhoneIcon />} label="Phone" value="+91 70649 49597" />
              <ContactInfo icon={<MailIcon />} label="Email" value="jitendrakumarswain75@gmail.com" />
              <ContactInfo icon={<PinIcon />} label="Location" value="Bhubaneswar, Odisha, India" />
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="fade-up" style={{ animationDelay: "0.15s" }}>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "40px",
              backdropFilter: "blur(10px)",
            }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 700, color: "#fff", margin: "0 0 28px" }}>Send a message</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Name</label>
                    <input
                      type="text" placeholder="Jitendra"
                      value={form.name}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Email</label>
                    <input
                      type="email" placeholder="you@email.com"
                      value={form.email}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: "6px", fontFamily: "'DM Mono', monospace" }}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={form.msg}
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    rows={5}
                    style={{ ...inputStyle("msg"), resize: "vertical", lineHeight: 1.6 }}
                  />
                </div>

                <button
                  className="send-btn"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    width: "100%", padding: "14px",
                    background: status === "success" ? "rgba(34,197,94,0.15)" : "rgba(99,182,255,0.15)",
                    border: `1px solid ${status === "success" ? "rgba(34,197,94,0.4)" : "rgba(99,182,255,0.4)"}`,
                    borderRadius: "10px",
                    color: status === "success" ? "#4ade80" : "#6cbdff",
                    fontSize: "14px", fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span style={{ width: "14px", height: "14px", border: "2px solid #6cbdff", borderTopColor: "transparent", borderRadius: "50%", display: "inline-block", animation: "pulse-ring 1s linear infinite" }} />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <> ✓ Message sent! </>
                  ) : (
                    <> <SendIcon /> Send Message </>
                  )}
                </button>

                {status === "empty" && (
                  <p style={{ fontSize: "13px", color: "#f87171", textAlign: "center", margin: 0 }}>Please fill in all fields before sending.</p>
                )}
                {status === "error" && (
                  <p style={{ fontSize: "13px", color: "#f87171", textAlign: "center", margin: 0 }}>Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}