import { useEffect, useState } from "react";

export default function ChatLeadsSection() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);

  const token = localStorage.getItem("adminToken");

  const loadLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const response = awaitfetch(
  `${import.meta.env.VITE_API_BASE_URL}/api/chat-leads`,
  {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 401 || response.status === 403) {
        throw new Error("AUTH_ERROR");
      }

      if (!response.ok) {
        throw new Error("Failed to load AI leads");
      }

      const data = await response.json();

      setLeads(data);
    } catch (error) {
      console.error("AI leads error:", error);

      if (error.message === "AUTH_ERROR") {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "/admin-login";
        return;
      }

      setError("Unable to load AI leads.");
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id) => {
    const confirmed = window.confirm(
      "Delete this AI lead?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/api/chat-leads/${id}`,
  {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setLeads((prev) =>
        prev.filter((lead) => lead.id !== id)
      );

      if (selectedLead?.id === id) {
        setSelectedLead(null);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to delete this AI lead.");
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <section
      style={{
        marginTop: "32px",
        padding: "24px",
        borderRadius: "20px",
        background:
          "linear-gradient(145deg, rgba(108,189,255,0.07), rgba(255,255,255,0.025))",
        border:
          "1px solid rgba(108,189,255,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "22px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "22px",
            }}
          >
            🤖 AI Leads
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Leads collected through Skarvion AI
          </p>
        </div>

        <button
          type="button"
          onClick={loadLeads}
          style={{
            border: "1px solid rgba(108,189,255,0.25)",
            background: "rgba(108,189,255,0.08)",
            color: "#9dd5ff",
            borderRadius: "10px",
            padding: "9px 14px",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>

      {loading && (
        <p style={{ color: "#94a3b8" }}>
          Loading AI leads...
        </p>
      )}

      {!loading && error && (
        <p style={{ color: "#f87171" }}>
          {error}
        </p>
      )}

      {!loading && !error && leads.length === 0 && (
        <div
          style={{
            padding: "30px",
            textAlign: "center",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            color: "#94a3b8",
          }}
        >
          No AI leads yet.
        </div>
      )}

      {!loading && !error && leads.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          {leads.map((lead) => (
            <div
              key={lead.id}
              style={{
                padding: "18px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.035)",
                border:
                  "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <strong
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    {lead.name || "Unknown Client"}
                  </strong>

                  <div
                    style={{
                      marginTop: "5px",
                      color: "#6cbdff",
                      fontSize: "13px",
                    }}
                  >
                    {lead.serviceRequired || "Service not specified"}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedLead(lead)
                    }
                    style={{
                      border:
                        "1px solid rgba(108,189,255,0.2)",
                      background:
                        "rgba(108,189,255,0.06)",
                      color: "#9dd5ff",
                      borderRadius: "8px",
                      padding: "7px 11px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteLead(lead.id)
                    }
                    style={{
                      border:
                        "1px solid rgba(248,113,113,0.2)",
                      background:
                        "rgba(248,113,113,0.06)",
                      color: "#fca5a5",
                      borderRadius: "8px",
                      padding: "7px 11px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div
                style={{
                  marginTop: "12px",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "8px",
                  color: "#cbd5e1",
                  fontSize: "13px",
                }}
              >
                <span>
                  📞 {lead.phone || "—"}
                </span>

                <span>
                  ✉️ {lead.email || "—"}
                </span>

                <span>
                  📍{" "}
                  {[lead.city, lead.district, lead.state]
                    .filter(Boolean)
                    .join(", ") || "—"}
                </span>

                <span>
                  🏠 {lead.buildingType || "—"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedLead && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "16px",
            background: "#101827",
            border:
              "1px solid rgba(108,189,255,0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#ffffff",
              }}
            >
              Lead Details
            </h3>

            <button
              type="button"
              onClick={() =>
                setSelectedLead(null)
              }
              style={{
                background: "transparent",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              marginTop: "18px",
              display: "grid",
              gap: "10px",
              color: "#cbd5e1",
              fontSize: "14px",
            }}
          >
            <div>
              <strong>Name:</strong>{" "}
              {selectedLead.name || "—"}
            </div>

            <div>
              <strong>Phone:</strong>{" "}
              {selectedLead.phone || "—"}
            </div>

            <div>
              <strong>Email:</strong>{" "}
              {selectedLead.email || "—"}
            </div>

            <div>
              <strong>Service:</strong>{" "}
              {selectedLead.serviceRequired || "—"}
            </div>

            <div>
              <strong>Building:</strong>{" "}
              {selectedLead.buildingType || "—"}
            </div>

            <div>
              <strong>Location:</strong>{" "}
              {[
                selectedLead.city,
                selectedLead.district,
                selectedLead.state,
              ]
                .filter(Boolean)
                .join(", ") || "—"}
            </div>

            <div>
              <strong>Project Size:</strong>{" "}
              {selectedLead.projectSize || "—"}
            </div>

            <div>
              <strong>Budget:</strong>{" "}
              {selectedLead.budget || "—"}
            </div>

            <div>
              <strong>Expected Start:</strong>{" "}
              {selectedLead.expectedStart || "—"}
            </div>

            <div>
              <strong>Preferred Contact:</strong>{" "}
              {selectedLead.preferredContactMethod || "—"}
            </div>

            <div>
              <strong>Project Details:</strong>{" "}
              {selectedLead.projectDetails || "—"}
            </div>

            <div>
              <strong>Created:</strong>{" "}
              {selectedLead.createdAt
                ? new Date(
                    selectedLead.createdAt
                  ).toLocaleString()
                : "—"}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}