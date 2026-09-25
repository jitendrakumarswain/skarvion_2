import React from "react";
import { useNavigate } from "react-router-dom";

export default function Career() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: "var(--font-sans)", boxSizing: "border-box", color: "var(--color-text-primary)" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Smooth animations & Hover effects */
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(55, 138, 221, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(55, 138, 221, 0); }
          100% { box-shadow: 0 0 0 0 rgba(55, 138, 221, 0); }
        }

        .job-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .job-card:hover { 
          border-color: var(--color-border-primary) !important; 
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        }
        
        .apply-btn { transition: all 0.2s ease; }
        .job-card:hover .apply-btn { background: var(--color-background-info) !important; }

        .btn-primary { transition: all 0.2s ease; }
        .btn-primary:hover { 
          background: #0C447C !important; 
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); 
        }
        .btn-primary:active { transform: scale(0.98); }

        .btn-secondary { transition: all 0.2s ease; }
        .btn-secondary:hover { background: var(--color-background-secondary) !important; }
        
        .apply-link { transition: color 0.2s ease; }
        .apply-link:hover { text-decoration: underline; color: var(--color-text-primary) !important; }

        .feature-card { transition: transform 0.2s ease; }
        .feature-card:hover { transform: translateY(-2px); }
      `}</style>

      {/* Hero Section */}
      <div style={{ padding: "4rem 2rem 3rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 12, fontWeight: 600, color: "var(--color-text-info)",
          background: "var(--color-background-info)", borderRadius: 100,
          padding: "6px 16px", marginBottom: "1.5rem",
          animation: "pulse 2s infinite"
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#378ADD" }} />
          We're hiring
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "1rem" }}>
          Build the future <br />at Skarvion
        </h1>
        
        <p style={{ fontSize: 16, color: "var(--color-text-secondary)", maxWidth: 540, lineHeight: 1.6, marginBottom: "2.5rem" }}>
          We're a team of engineers, builders, and designers solving problems that matter. Come shape what's next.
        </p>

        <div style={{ display: "flex", gap: "3rem", background: "var(--color-background-secondary)", padding: "1.5rem 3rem", borderRadius: "var(--border-radius-lg)", border: "0.5px solid var(--color-border-tertiary)" }}>
          {[
            { value: "3", label: "Open roles" },
            { value: "Remote", label: "Work style" },
            { value: "Full-time", label: "Job type" },
          ].map((item, index) => (
            <React.Fragment key={item.label}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 600, color: "var(--color-text-primary)" }}>{item.value}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</span>
              </div>
              {index !== 2 && <div style={{ width: 1, background: "var(--color-border-tertiary)" }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2rem" }}>
        
        {/* Open Positions */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
            <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-tertiary)" }}>
              Open positions
            </div>
            <div style={{ height: "0.5px", flex: 1, background: "var(--color-border-tertiary)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {[
              {
                accent: "#378ADD", iconBg: "#E6F1FB", badge: { text: "Hot", bg: "var(--color-background-info)", color: "var(--color-text-info)" },
                title: "Frontend developer", dept: "Engineering · Remote", route: "/career/frontend-developer/apply",
                tags: ["React", "CSS", "TypeScript", "UI/UX"], posted: "Posted 2 days ago", featured: true,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="1" y="3" width="16" height="12" rx="2" stroke="#378ADD" strokeWidth="1.5"/>
                    <path d="M5 7h8M5 10.5h5" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                accent: "#7F77DD", iconBg: "#EEEDFE", badge: null,
                title: "Backend developer", dept: "Engineering · Remote", route: "/career/backend-developer/apply",
                tags: ["Node.js", "REST APIs", "PostgreSQL"], posted: "Posted 5 days ago", featured: false,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="1" width="12" height="16" rx="2" stroke="#7F77DD" strokeWidth="1.5"/>
                    <path d="M6 6h6M6 9h6M6 12h4" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                accent: "#1D9E75", iconBg: "#E1F5EE", badge: { text: "New", bg: "#E1F5EE", color: "#0F6E56" },
                title: "Site engineer", dept: "Operations · On-site", route: "/career/site-engineer/apply",
                tags: ["Supervision", "Planning", "AutoCAD"], posted: "Posted today", featured: false,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 14L9 4l7 10H2z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 8v3" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((job) => (
              <div key={job.title} className="job-card" style={{
                background: "var(--color-background-primary)",
                border: `1.5px solid ${job.featured ? "var(--color-border-info)" : "transparent"}`,
                boxShadow: job.featured ? "none" : "inset 0 0 0 0.5px var(--color-border-tertiary)",
                borderRadius: "var(--border-radius-lg)", padding: "1.5rem",
                cursor: "pointer", position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column"
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: job.accent }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "var(--border-radius-md)", background: job.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {job.icon}
                  </div>
                  {job.badge && (
                    <span style={{ fontSize: 11, fontWeight: 600, background: job.badge.bg, color: job.badge.color, padding: "4px 10px", borderRadius: 100 }}>
                      {job.badge.text}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.25rem" }}>{job.title}</h3>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: "1.25rem" }}>{job.dept}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.5rem", flexGrow: 1 }}>
                  {job.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 100, padding: "4px 10px" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "0.5px solid var(--color-border-tertiary)", marginTop: "auto" }}>
                  <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)" }}>{job.posted}</span>
                  <button
  className="apply-btn"
  onClick={() => navigate(job.route)}
  style={{
    fontSize: 12,
    fontWeight: 600,
    color: "var(--color-text-info)",
    background: "transparent",
    border: "1px solid var(--color-border-info)",
    borderRadius: 100,
    padding: "6px 16px",
    cursor: "pointer"
  }}
>
  Apply ↗
</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Skarvion */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
            <div style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-tertiary)" }}>
              Why Skarvion
            </div>
            <div style={{ height: "0.5px", flex: 1, background: "var(--color-border-tertiary)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#1D9E75" strokeWidth="1.5"/><path d="M7 10l2 2 4-4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Meaningful work", desc: "Work on products that reach real people, every day.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="4" stroke="#378ADD" strokeWidth="1.5"/><path d="M6 10h8M10 6v8" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                title: "Room to grow", desc: "We invest in your career, not just your output.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.9 7.6 19 8.5l-4.5 4.4 1.1 6.1L10 16l-5.6 3 1.1-6.1L1 8.5l6.1-.9L10 2z" stroke="#7F77DD" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
                title: "Flat hierarchy", desc: "Ideas win on merit. Everyone has a seat at the table.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="7" cy="7" r="4" stroke="#BA7517" strokeWidth="1.5"/><circle cx="14" cy="13" r="4" stroke="#BA7517" strokeWidth="1.5"/></svg>,
                title: "Diverse team", desc: "Multiple disciplines, one shared goal.",
              },
            ].map((v) => (
              <div key={v.title} className="feature-card" style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "1.5rem", border: "0.5px solid var(--color-border-tertiary)" }}>
                <div style={{ marginBottom: 12 }}>{v.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>{v.title}</h4>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      {/* Apply Section */}
<div style={{
  background: "var(--color-background-secondary)",
  borderRadius: "var(--border-radius-lg)",
  border: "0.5px solid var(--color-border-tertiary)",
  padding: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "2rem",
}}>
  <div style={{ flex: "1 1 350px" }}>
    <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
      Don't see the right role?
    </h2>
    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
      Send us your resume anyway. We're always looking for exceptional people to join our team. Reach us at{" "}
      <a href="mailto:careers@skarvion.com" className="apply-link" style={{ color: "var(--color-text-info)", textDecoration: "none", fontWeight: 500 }}>
        careers@skarvioninfra.com
      </a>
    </p>
  </div>

  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
    
    <button
      className="btn-secondary"
      style={{
        fontSize: 13,
        fontWeight: 500,
        color: "var(--color-text-secondary)",
        background: "transparent",
        border: "0.5px solid var(--color-border-secondary)",
        borderRadius: "var(--border-radius-md)",
        padding: "10px 20px",
        cursor: "pointer"
      }}
    >
      Learn about us
    </button>

    {/* 🔥 WHATSAPP BUTTON */}
    <button
      className="btn-primary"
      style={{
        fontSize: 14,
        fontWeight: 500,
        color: "#fff",
        background: "#185FA5",
        border: "none",
        borderRadius: "var(--border-radius-md)",
        padding: "10px 20px",
        cursor: "pointer"
      }}
      onClick={() => {
    const phone = "917064949597"; // 🔥 your number
    const message = encodeURIComponent(
      "Hello, I want to apply for a job at Skarvion"
    );

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }}
>
      Send application ↗
    </button>

  </div>
</div>

</div>
</div>
  );
}