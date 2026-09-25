import React, { useEffect, useMemo, useState } from "react";
import ChatLeadsSection from "./ChatLeadsSection";

function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  const authHeaders = useMemo(
    () => ({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
    [token]
  );

  const loadContacts = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contacts`, 
        {
          method: "GET",
          headers: authHeaders,
        }
      );

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("AUTH_ERROR");
        }

        throw new Error("Failed to load contacts");
      }

      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);

      if (err.message === "AUTH_ERROR") {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "/admin-login";
        return;
      }

      setError("Unable to load contacts. Please check the backend.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chat-leads`, 
        {
          method: "DELETE",
          headers: authHeaders,
        }
      );

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminLoggedIn");
          window.location.href = "/admin-login";
          return;
        }

        throw new Error("Failed to delete contact");
      }

      setContacts((prev) =>
        prev.filter((contact) => contact.id !== id)
      );

      setSelectedContact((current) =>
        current?.id === id ? null : current
      );
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert("Unable to delete contact.");
    }
  };

  const exportContacts = () => {
    if (contacts.length === 0) {
      alert("No contacts available to export.");
      return;
    }

    const headers = ["ID", "Name", "Email", "Phone", "Message"];

    const rows = contacts.map((contact) => [
      contact.id,
      contact.name,
      contact.email,
      contact.phone || "",
      contact.message,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) =>
        row
          .map((value) =>
            `"${String(value ?? "").replace(/"/g, '""')}"`
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob(["\ufeff" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "skarvion-contacts.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  const filteredContacts = contacts.filter((contact) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      contact.name?.toLowerCase().includes(query) ||
      contact.email?.toLowerCase().includes(query) ||
      contact.phone?.toLowerCase().includes(query) ||
      contact.message?.toLowerCase().includes(query)
    );
  });

  const latestContact =
    contacts.length > 0
      ? contacts[contacts.length - 1]
      : null;

  const stats = [
    {
      label: "System Status",
      value: loading ? "Checking" : error ? "Offline" : "Operational",
      icon: "◉",
      type: loading ? "warning" : error ? "danger" : "success",
    },
    {
      label: "Latest Contact",
      value: latestContact?.name || "No contacts",
      icon: "✉",
      type: "blue",
    },
    {
      label: "Total Contacts",
      value: contacts.length,
      icon: "#",
      type: "blue",
    },
    {
      label: "Search Results",
      value: filteredContacts.length,
      icon: "⌕",
      type: "purple",
    },
  ];

  return (
    <div className="skv-admin">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .skv-admin {
          min-height: 100vh;
          color: #f8fafc;
          background:
            radial-gradient(circle at 82% 0%, rgba(72, 149, 239, 0.12), transparent 26%),
            radial-gradient(circle at 5% 85%, rgba(124, 58, 237, 0.08), transparent 25%),
            #070b12;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          padding: 28px;
        }

        .skv-shell {
          width: 100%;
          max-width: 1480px;
          margin: 0 auto;
        }

        .skv-topbar {
          min-height: 74px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0 4px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .skv-brand {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .skv-brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #07101c;
          font-weight: 900;
          background: linear-gradient(135deg, #f4b000, #ffd86b);
          box-shadow: 0 10px 28px rgba(244,176,0,0.16);
        }

        .skv-title {
          margin: 0;
          font-size: clamp(22px, 3vw, 30px);
          line-height: 1.15;
          letter-spacing: -0.7px;
          font-weight: 750;
        }

        .skv-subtitle {
          margin: 7px 0 0;
          color: #7f8ba0;
          font-size: 13px;
        }

        .skv-user-area {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .skv-user-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          background: rgba(255,255,255,0.025);
        }

        .skv-avatar {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #cfe8ff;
          font-size: 12px;
          font-weight: 800;
          background: rgba(108,189,255,0.12);
          border: 1px solid rgba(108,189,255,0.22);
        }

        .skv-user-name {
          color: #dbe5f1;
          font-size: 13px;
          font-weight: 600;
        }

        .skv-logout {
          padding: 10px 15px;
          border: 1px solid rgba(248,113,113,0.22);
          border-radius: 10px;
          background: rgba(248,113,113,0.06);
          color: #fca5a5;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .skv-logout:hover {
          background: rgba(248,113,113,0.11);
          transform: translateY(-1px);
        }

        .skv-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 22px;
        }

        .skv-stat {
          position: relative;
          overflow: hidden;
          min-height: 142px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.075);
          border-radius: 16px;
          background:
            linear-gradient(145deg, rgba(19,27,41,0.96), rgba(11,18,30,0.96));
          box-shadow:
            0 16px 45px rgba(0,0,0,0.18),
            inset 0 1px 0 rgba(255,255,255,0.025);
        }

        .skv-stat::after {
          content: "";
          position: absolute;
          width: 90px;
          height: 90px;
          right: -45px;
          bottom: -45px;
          border-radius: 50%;
          background: rgba(108,189,255,0.05);
          pointer-events: none;
        }

        .skv-stat-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
          border-radius: 10px;
          color: #8dcbff;
          font-size: 15px;
          font-weight: 800;
          background: rgba(108,189,255,0.09);
          border: 1px solid rgba(108,189,255,0.14);
        }

        .skv-stat-label {
          color: #748198;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .skv-stat-value {
          margin-top: 7px;
          color: #f8fafc;
          font-size: 23px;
          font-weight: 720;
          letter-spacing: -0.4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .skv-stat-number {
          font-size: 30px;
        }

        .skv-success {
          color: #4ade80;
        }

        .skv-warning {
          color: #fbbf24;
        }

        .skv-danger {
          color: #f87171;
        }

        .skv-purple {
          color: #c4b5fd;
        }

        .skv-panel {
          margin-top: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.075);
          border-radius: 18px;
          background: rgba(10,16,27,0.72);
          box-shadow: 0 22px 70px rgba(0,0,0,0.18);
        }

        .skv-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 22px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .skv-section-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.25px;
        }

        .skv-section-meta {
          margin: 5px 0 0;
          color: #69778c;
          font-size: 12px;
        }

        .skv-actions {
          display: flex;
          align-items: center;
          gap: 9px;
          flex-wrap: wrap;
        }

        .skv-search {
          width: 285px;
          padding: 10px 13px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          outline: none;
          background: #0e1624;
          color: #f8fafc;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .skv-search::placeholder {
          color: #536176;
        }

        .skv-search:focus {
          border-color: rgba(108,189,255,0.42);
          box-shadow: 0 0 0 3px rgba(108,189,255,0.07);
        }

        .skv-btn {
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .skv-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.07);
        }

        .skv-btn-blue {
          border: 1px solid rgba(108,189,255,0.22);
          background: rgba(108,189,255,0.07);
          color: #8dcbff;
        }

        .skv-btn-gold {
          border: 1px solid rgba(244,176,0,0.25);
          background: rgba(244,176,0,0.08);
          color: #ffd76a;
        }

        .skv-btn-danger {
          border: 1px solid rgba(248,113,113,0.22);
          background: rgba(248,113,113,0.06);
          color: #fca5a5;
        }

        .skv-table-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .skv-table {
          width: 100%;
          min-width: 920px;
          border-collapse: collapse;
        }

        .skv-table th {
          padding: 13px 18px;
          text-align: left;
          color: #69778c;
          background: rgba(255,255,255,0.018);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-size: 10px;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .skv-table td {
          padding: 15px 18px;
          color: #cbd5e1;
          border-bottom: 1px solid rgba(255,255,255,0.045);
          vertical-align: top;
          font-size: 13px;
        }

        .skv-table tbody tr {
          transition: background 0.18s ease;
        }

        .skv-table tbody tr:hover {
          background: rgba(255,255,255,0.018);
        }

        .skv-id {
          color: #718096;
          font-variant-numeric: tabular-nums;
        }

        .skv-name {
          color: #f8fafc;
          font-weight: 650;
        }

        .skv-email {
          color: #a8bdd4;
          word-break: break-word;
        }

        .skv-phone {
          color: #b9c5d4;
        }

        .skv-message {
          max-width: 440px;
          color: #9aa8bb;
          line-height: 1.5;
          word-break: break-word;
        }

        .skv-empty,
        .skv-loading {
          padding: 65px 20px;
          text-align: center;
          color: #66748a;
        }

        .skv-empty-title {
          margin-top: 10px;
          color: #d5deea;
          font-weight: 650;
        }

        .skv-empty-text {
          margin-top: 5px;
          font-size: 12px;
        }

        .skv-spinner {
          width: 27px;
          height: 27px;
          margin: 0 auto 13px;
          border: 3px solid rgba(108,189,255,0.13);
          border-top-color: #6cbdff;
          border-radius: 50%;
          animation: skv-spin 0.8s linear infinite;
        }

        .skv-error {
          margin: 20px;
          padding: 14px;
          border: 1px solid rgba(248,113,113,0.16);
          border-radius: 10px;
          background: rgba(248,113,113,0.05);
          color: #fca5a5;
          font-size: 13px;
        }

        .skv-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(2,6,13,0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .skv-modal {
          position: relative;
          width: 100%;
          max-width: 620px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          background:
            radial-gradient(circle at top right, rgba(108,189,255,0.08), transparent 35%),
            linear-gradient(145deg, #111a29, #0c1421);
          box-shadow: 0 30px 100px rgba(0,0,0,0.5);
        }

        .skv-modal-close {
          position: absolute;
          top: 17px;
          right: 17px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9px;
          background: rgba(255,255,255,0.04);
          color: #9aa8bb;
          font-size: 19px;
          cursor: pointer;
        }

        .skv-modal-title {
          margin: 0 45px 24px 0;
          font-size: 21px;
          font-weight: 720;
          letter-spacing: -0.35px;
        }

        .skv-detail-grid {
          display: grid;
          gap: 13px;
        }

        .skv-detail {
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 12px;
          background: rgba(255,255,255,0.025);
        }

        .skv-detail-label {
          margin-bottom: 6px;
          color: #6cbdff;
          font-size: 9px;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .skv-detail-value {
          color: #edf3f9;
          font-size: 14px;
          line-height: 1.5;
          word-break: break-word;
        }

        .skv-detail-message {
          white-space: pre-wrap;
        }

        @keyframes skv-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1050px) {
          .skv-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .skv-admin {
            padding: 16px;
          }

          .skv-topbar {
            align-items: flex-start;
          }

          .skv-user-chip {
            display: none;
          }

          .skv-stats {
            grid-template-columns: 1fr;
          }

          .skv-panel-head {
            align-items: flex-start;
            flex-direction: column;
          }

          .skv-actions {
            width: 100%;
          }

          .skv-search {
            width: 100%;
          }

          .skv-btn {
            flex: 1;
          }

          .skv-modal {
            padding: 22px;
          }
        }
      `}</style>

      <div className="skv-shell">
        {/* Top navigation */}
        <header className="skv-topbar">
          <div className="skv-brand">
            <div className="skv-brand-mark">S</div>

            <div>
              <h1 className="skv-title">Skarvion Admin</h1>
              <p className="skv-subtitle">
                Contact management &amp; business enquiries
              </p>
            </div>
          </div>

          <div className="skv-user-area">
            <div className="skv-user-chip">
              <div className="skv-avatar">A</div>
              <span className="skv-user-name">Administrator</span>
            </div>

            <button
              className="skv-logout"
              onClick={() => {
                localStorage.removeItem("adminLoggedIn");
                localStorage.removeItem("adminToken");
                window.location.href = "/admin-login";
              }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* KPI cards */}
        <section className="skv-stats">
          {stats.map((stat, index) => (
            <div className="skv-stat" key={stat.label}>
              <div className="skv-stat-icon">{stat.icon}</div>

              <div className="skv-stat-label">{stat.label}</div>

              <div
                className={`skv-stat-value ${
                  index >= 2 ? "skv-stat-number" : ""
                } ${
                  stat.type === "success"
                    ? "skv-success"
                    : stat.type === "warning"
                    ? "skv-warning"
                    : stat.type === "danger"
                    ? "skv-danger"
                    : stat.type === "purple"
                    ? "skv-purple"
                    : ""
                }`}
                title={String(stat.value)}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </section>

        {/* Contacts panel */}
        <section className="skv-panel">
          <div className="skv-panel-head">
            <div>
              <h2 className="skv-section-title">Contact Messages</h2>
              <p className="skv-section-meta">
                {contacts.length} total contact
                {contacts.length === 1 ? "" : "s"}
                {search.trim()
                  ? ` · ${filteredContacts.length} matching`
                  : ""}
              </p>
            </div>

            <div className="skv-actions">
              <input
                className="skv-search"
                type="text"
                placeholder="Search name, email, phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                className="skv-btn skv-btn-blue"
                onClick={() => loadContacts(true)}
                disabled={refreshing}
              >
                {refreshing ? "Refreshing..." : "Refresh"}
              </button>

              <button
                className="skv-btn skv-btn-gold"
                onClick={exportContacts}
              >
                Export CSV
              </button>
            </div>
          </div>

          {loading && (
            <div className="skv-loading">
              <div className="skv-spinner" />
              Loading contact messages...
            </div>
          )}

          {!loading && error && (
            <div className="skv-error">{error}</div>
          )}

          {!loading && !error && (
            <div className="skv-table-wrap">
              <table className="skv-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan="6">
                        <div className="skv-empty">
                          <div style={{ fontSize: "28px" }}>⌕</div>
                          <div className="skv-empty-title">
                            No contacts found
                          </div>
                          <div className="skv-empty-text">
                            Try another search or refresh the dashboard.
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>
                          <span className="skv-id">
                            #{contact.id}
                          </span>
                        </td>

                        <td>
                          <span className="skv-name">
                            {contact.name}
                          </span>
                        </td>

                        <td>
                          <span className="skv-email">
                            {contact.email}
                          </span>
                        </td>

                        <td>
                          <span className="skv-phone">
                            {contact.phone || "-"}
                          </span>
                        </td>

                        <td>
                          <div className="skv-message">
                            {contact.message}
                          </div>
                        </td>

                        <td style={{ whiteSpace: "nowrap" }}>
                          <button
                            className="skv-btn skv-btn-blue"
                            style={{ marginRight: "7px" }}
                            onClick={() =>
                              setSelectedContact(contact)
                            }
                          >
                            View
                          </button>

                          <button
                            className="skv-btn skv-btn-danger"
                            onClick={() => {
                              const confirmed = window.confirm(
                                "Are you sure you want to delete this contact?"
                              );

                              if (confirmed) {
                                handleDelete(contact.id);
                              }
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Contact details modal */}
        {selectedContact && (
          <div
            className="skv-modal-backdrop"
            onClick={() => setSelectedContact(null)}
          >
            <div
              className="skv-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="skv-modal-close"
                onClick={() => setSelectedContact(null)}
                aria-label="Close contact details"
              >
                ×
              </button>

              <h2 className="skv-modal-title">
                Contact Details
              </h2>

              <div className="skv-detail-grid">
                <div className="skv-detail">
                  <div className="skv-detail-label">Name</div>
                  <div className="skv-detail-value">
                    {selectedContact.name}
                  </div>
                </div>

                <div className="skv-detail">
                  <div className="skv-detail-label">Email</div>
                  <div className="skv-detail-value">
                    {selectedContact.email}
                  </div>
                </div>

                <div className="skv-detail">
                  <div className="skv-detail-label">Phone</div>
                  <div className="skv-detail-value">
                    {selectedContact.phone || "-"}
                  </div>
                </div>

                <div className="skv-detail">
                  <div className="skv-detail-label">Message</div>
                  <div className="skv-detail-value skv-detail-message">
                    {selectedContact.message}
                  </div>
                </div>
              </div>

              <button
                className="skv-btn skv-btn-blue"
                style={{
                  width: "100%",
                  marginTop: "18px",
                }}
                onClick={() => setSelectedContact(null)}
              >
                Close
              </button>

              <ChatLeadsSection />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
