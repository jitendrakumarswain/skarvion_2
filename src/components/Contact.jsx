import { useEffect, useState } from "react";

const INDIA_LOCATIONS_URL =
  "https://raw.githubusercontent.com/CodingMation/indian-states-districts/main/data/india_states_districts.min.json";

const SERVICE_OPTIONS = [
  "Planning & Designing",
  "Construction Interior Work",
  "Construction",
];

const STATE_UT_OPTIONS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const normalizeName = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\bnct of\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getDistrictName = (district) =>
  typeof district === "string"
    ? district
    : district?.name || district?.district || district?.district_name || "";

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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    state: "",
    district: "",
    city: "",
    msg: "",
  });

  const [locations, setLocations] = useState([]);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState("");
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState(null);

useEffect(() => {
  let active = true;

  const loadLocations = async () => {
    try {
      setLocationLoading(true);
      setLocationError("");

      const response = await fetch(
        "https://raw.githubusercontent.com/CodingMation/indian-states-districts/main/data/india_states_districts.min.json"
      );

      if (!response.ok) {
        throw new Error("Unable to load Indian districts.");
      }

      const data = await response.json();

      const normalized = Array.isArray(data)
        ? data
            .map((item) => {
              const stateName =
                item.state ||
                item.name ||
                item.state_name ||
                "";

              const districts = Array.isArray(item.districts)
                ? item.districts
                    .map(getDistrictName)
                    .filter(Boolean)
                : [];

              return {
                state: stateName,
                districts,
              };
            })
            .filter((item) => item.state)
        : [];

      if (active) {
        setLocations(normalized);
      }
    } catch (error) {
      console.error("Location data error:", error);

      if (active) {
        setLocationError(
          "District list could not be loaded. Please refresh the page and try again."
        );
      }
    } finally {
      if (active) {
        setLocationLoading(false);
      }
    }
  };

  loadLocations();

  return () => {
    active = false;
  };
}, []);

  const locationMap = Object.fromEntries(
    locations.map((item) => [
      normalizeName(item.state),
      item.districts,
    ])
  );

  const districtOptions = locationMap[normalizeName(form.state)] || [];

  const handleStateChange = (e) => {
    const state = e.target.value;

    setForm((prev) => ({
      ...prev,
      state,
      district: "",
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.serviceRequired ||
      !form.state ||
      !form.district ||
      !form.city ||
      !form.msg
    ) {
      setStatus("empty");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/api/contacts`,
  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          serviceRequired: form.serviceRequired,
          state: form.state,
          district: form.district,
          city: form.city,
          message: form.msg,
        }),
      });

      if (!response.ok) {
        const serverMessage = await response.text();
        throw new Error(serverMessage);
      }

      setStatus("success");

      // GA4 lead event: count a successful contact-form submission.
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          currency: "INR",
          value: 1,
          lead_source: "contact_form",
          service_required: form.serviceRequired,
        });
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        serviceRequired: "",
        state: "",
        district: "",
        city: "",
        msg: "",
      });

      setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      setErrorMessage(error.message);
      setStatus("error");
      console.error(error);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    boxSizing: "border-box",
    background:
      focused === field
        ? "rgba(99,182,255,0.05)"
        : "rgba(255,255,255,0.03)",
    border: `1px solid ${
      focused === field
        ? "rgba(99,182,255,0.5)"
        : "rgba(255,255,255,0.1)"
    }`,
    borderRadius: "10px",
    padding: "13px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "inherit",
  });

  const fieldLabelStyle = {
    fontSize: "11px",
    color: "rgba(255,255,255,0.4)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
    fontFamily: "'DM Mono', monospace",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section *, .contact-section *::before, .contact-section *::after {
          box-sizing: border-box;
        }

        .contact-section input::placeholder,
        .contact-section textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }

        .contact-section input:-webkit-autofill,
        .contact-section select:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px #0f1623 inset;
          -webkit-text-fill-color: #fff;
        }

        .contact-select {
          appearance: none;
          -webkit-appearance: none;
          background-image:
            linear-gradient(45deg, transparent 50%, #6cbdff 50%),
            linear-gradient(135deg, #6cbdff 50%, transparent 50%);
          background-position:
            calc(100% - 18px) 50%,
            calc(100% - 13px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 40px !important;
        }

        .send-btn {
          cursor: pointer;
          transition: all 0.25s;
        }

        .send-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(99,182,255,0.3) !important;
        }

        .send-btn:active {
          transform: translateY(0);
        }

        .send-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(16px); }
          to { opacity:1; transform:translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.5s ease forwards;
        }

        @keyframes pulse-ring {
          0%,100% { opacity:0.5; transform: scale(1); }
          50% { opacity:1; transform: scale(1.05); }
        }
      `}</style>

      <section
        className="contact-section"
        id="contact"
        style={{
          padding: "96px 24px",
          background:
            "linear-gradient(135deg, #080d14 0%, #0c1522 50%, #060d1a 100%)",
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,182,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "0%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,182,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

<div
  className="contact-grid"
  style={{
    maxWidth: "1120px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  }}


        >
          {/* LEFT */}
          <div className="fade-up">
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "#6cbdff",
                textTransform: "uppercase",
                margin: "0 0 20px",
              }}
            >
              — Let's Connect
            </p>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 4vw, 54px)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 20px",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Have a project?
              <br />
              <span style={{ color: "#6cbdff" }}>
                Let's build it.
              </span>
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.45)",
                margin: "0 0 48px",
                lineHeight: 1.7,
                maxWidth: "340px",
              }}
            >
              Tell us what you need for planning, design,
              construction, or interior work. Our team will
              get back to you with the next steps.
            </p>

            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}>
              <ContactInfo
                icon={<PhoneIcon />}
                label="Phone"
                value="+91 70649 49597, +91637293 4049"
                
              />
              
              <ContactInfo
                icon={<MailIcon />}
                label="Email"
                value="skarvion.infra@gmail.com"
              />
              <ContactInfo
                icon={<PinIcon />}
                label="Location"
                value="Chintamaniswar, Bhubaneswar, Odisha, India"
              />
            </div>
          </div>

          {/* RIGHT — FORM */}
<div
  className="fade-up"
  style={{
    animationDelay: "0.15s",
    width: "100%",
  }}
>
<div
  style={{
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "40px",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
  }}
>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 28px",
                }}
              >
                Tell us about your project
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {/* Name + Email */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}>
                  <div>
                    <label style={fieldLabelStyle}>Name *</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      style={inputStyle("name")}
                    />
                  </div>

                  <div>
                    <label style={fieldLabelStyle}>Email *</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}>
                  <div>
                    <label style={fieldLabelStyle}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      value={form.phone}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      style={inputStyle("phone")}
                    />
                  </div>

                  <div>
                    <label style={fieldLabelStyle}>
                      Service Required *
                    </label>

                    <select
                      className="contact-select"
                      value={form.serviceRequired}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          serviceRequired: e.target.value,
                        })
                      }
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("service"),
                        color:
                          form.serviceRequired
                            ? "#fff"
                            : "rgba(255,255,255,0.25)",
                      }}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      {SERVICE_OPTIONS.map((service) => (
                        <option
                          key={service}
                          value={service}
                          style={{
                            background: "#0f1623",
                            color: "#fff",
                          }}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* State + District */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "14px",
                }}>
                  <div>
                    <label style={fieldLabelStyle}>
                      State / UT *
                    </label>

                    <select
                      className="contact-select"
                      value={form.state}
                      onChange={handleStateChange}
                      disabled={locationLoading}
                      onFocus={() => setFocused("state")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("state"),
                        color:
                          form.state
                            ? "#fff"
                            : "rgba(255,255,255,0.25)",
                        opacity: locationLoading ? 0.6 : 1,
                      }}
                    >
                      <option value="" disabled>
                        {locationLoading
                          ? "Loading states..."
                          : "Select state / UT"}
                      </option>

                      {STATE_UT_OPTIONS.map((state) => (
                        <option
                          key={state}
                          value={state}
                          style={{
                            background: "#0f1623",
                            color: "#fff",
                          }}
                        >
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={fieldLabelStyle}>
                      District *
                    </label>

                    <select
                      className="contact-select"
                      value={form.district}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          district: e.target.value,
                        })
                      }
                      disabled={
                        !form.state ||
                        locationLoading ||
                        districtOptions.length === 0
                      }
                      onFocus={() => setFocused("district")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...inputStyle("district"),
                        color:
                          form.district
                            ? "#fff"
                            : "rgba(255,255,255,0.25)",
                        opacity:
                          !form.state ||
                          locationLoading
                            ? 0.6
                            : 1,
                      }}
                    >
                      <option value="" disabled>
                        {!form.state
                          ? "Select state first"
                          : locationLoading
                          ? "Loading districts..."
                          : districtOptions.length
                          ? "Select district"
                          : "District unavailable"}
                      </option>

                      {districtOptions.map((district) => (
                        <option
                          key={district}
                          value={district}
                          style={{
                            background: "#0f1623",
                            color: "#fff",
                          }}
                        >
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City */}
                <div>
                  <label style={fieldLabelStyle}>City *</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={form.city}
                    onFocus={() => setFocused("city")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                    style={inputStyle("city")}
                  />
                </div>

                {/* Project Details */}
                <div>
                  <label style={fieldLabelStyle}>
                    Project Details *
                  </label>

                  <textarea
                    placeholder="Tell us about your project, plot size, requirements, budget, timeline, or any other details..."
                    value={form.msg}
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        msg: e.target.value,
                      })
                    }
                    rows={5}
                    style={{
                      ...inputStyle("msg"),
                      resize: "vertical",
                      lineHeight: 1.6,
                    }}
                  />
                </div>

                {locationError && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#fbbf24",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {locationError}
                  </p>
                )}

                <button
                  type="submit"
                  className="send-btn"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background:
                      status === "success"
                        ? "rgba(34,197,94,0.15)"
                        : "rgba(99,182,255,0.15)",
                    border: `1px solid ${
                      status === "success"
                        ? "rgba(34,197,94,0.4)"
                        : "rgba(99,182,255,0.4)"
                    }`,
                    borderRadius: "10px",
                    color:
                      status === "success"
                        ? "#4ade80"
                        : "#6cbdff",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          width: "14px",
                          height: "14px",
                          border: "2px solid #6cbdff",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation:
                            "pulse-ring 1s linear infinite",
                        }}
                      />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>✓ Message sent!</>
                  ) : (
                    <>
                      <SendIcon />
                      Submit Enquiry
                    </>
                  )}
                </button>

                {status === "empty" && (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#f87171",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Please complete all required fields before
                    sending.
                  </p>
                )}

                {status === "error" && (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#f87171",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {errorMessage ||
                      "Something went wrong. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
