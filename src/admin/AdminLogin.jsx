import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((value) => value - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const requestOtp = async (event) => {
    event.preventDefault();

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setError("Please enter your administrator email.");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/request-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: cleanEmail,
          }),
        }
      );

const responseText = await response.text();

let result = {};

if (responseText) {
  try {
    result = JSON.parse(responseText);
  } catch {
    throw new Error(
      "The server returned an invalid response."
    );
  }
}

if (!response.ok) {
  throw new Error(
    result.message || "Unable to send OTP."
  );
}

      setEmail(cleanEmail);
      setStep("otp");
      setCooldown(60);
      setMessage(
        "If this email is registered, a 6-digit OTP has been sent."
      );
    } catch (err) {
      console.error("OTP request error:", err);
      setError(
        err.message || "Unable to send OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (event) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit OTP.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/api/admin/verify-otp`,
  {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            otp,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Invalid or expired OTP."
        );
      }

      localStorage.setItem(
        "adminToken",
        result.token
      );

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      navigate("/admin");
    } catch (err) {
      console.error("OTP verification error:", err);
      setError(
        err.message || "Invalid or expired OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (cooldown > 0 || loading) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/request-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to resend OTP."
        );
      }

      setOtp("");
      setCooldown(60);
      setMessage(
        "If this email is registered, a new OTP has been sent."
      );
    } catch (err) {
      console.error("Resend OTP error:", err);
      setError(
        err.message || "Unable to resend OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (loading) return;

    setStep("email");
    setOtp("");
    setError("");
    setMessage("");
  };

  return (
    <div className="skv-otp-login">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .skv-otp-login {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          color: #f8fafc;
          background:
            radial-gradient(circle at 15% 15%, rgba(108,189,255,0.13), transparent 28%),
            radial-gradient(circle at 88% 84%, rgba(244,176,0,0.07), transparent 25%),
            #060a11;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .skv-otp-shell {
          width: 100%;
          max-width: 1040px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 26px;
          background: rgba(10,16,27,0.82);
          box-shadow: 0 35px 110px rgba(0,0,0,0.42);
        }

        .skv-otp-brand {
          min-height: 620px;
          padding: 52px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 12%, rgba(108,189,255,0.10), transparent 30%),
            #0a111c;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .skv-otp-brand-mark {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #f4b000, #ffd86b);
          color: #07101c;
          font-size: 20px;
          font-weight: 900;
        }

        .skv-otp-brand-name {
          margin: 0;
          font-size: 16px;
          font-weight: 750;
        }

        .skv-otp-brand-meta {
          margin: 3px 0 0;
          color: #728095;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .skv-otp-hero-title {
          max-width: 470px;
          margin: 20px 0 14px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -2.2px;
          font-weight: 800;
        }

        .skv-otp-hero-title span {
          color: #6cbdff;
        }

        .skv-otp-hero-text {
          max-width: 420px;
          margin: 0;
          color: #8794a8;
          line-height: 1.75;
          font-size: 14px;
        }

        .skv-otp-trust {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .skv-otp-trust-item {
          padding: 13px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
        }

        .skv-otp-trust-item strong {
          display: block;
          color: #e6edf5;
          font-size: 11px;
        }

        .skv-otp-trust-item span {
          display: block;
          margin-top: 4px;
          color: #627087;
          font-size: 9px;
        }

        .skv-otp-form-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 52px;
          background: #0b121e;
        }

        .skv-otp-card {
          width: 100%;
          max-width: 390px;
        }

        .skv-otp-kicker {
          color: #6cbdff;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .skv-otp-title {
          margin: 8px 0 10px;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.8px;
        }

        .skv-otp-subtitle {
          margin: 0 0 28px;
          color: #718097;
          font-size: 13px;
          line-height: 1.6;
        }

        .skv-otp-label {
          display: block;
          margin-bottom: 8px;
          color: #9aa8bb;
          font-size: 11px;
          font-weight: 650;
        }

        .skv-otp-input,
        .skv-otp-code {
          width: 100%;
          height: 48px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          outline: none;
          background: #0e1724;
          color: #f8fafc;
          transition: 0.2s ease;
        }

        .skv-otp-input {
          padding: 0 14px;
          font-size: 14px;
        }

        .skv-otp-code {
          padding: 0 12px;
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.55em;
        }

        .skv-otp-input:focus,
        .skv-otp-code:focus {
          border-color: rgba(108,189,255,0.45);
          box-shadow: 0 0 0 3px rgba(108,189,255,0.07);
        }

        .skv-otp-message,
        .skv-otp-error {
          margin: 14px 0;
          padding: 11px 12px;
          border-radius: 9px;
          font-size: 12px;
          line-height: 1.45;
        }

        .skv-otp-message {
          border: 1px solid rgba(74,222,128,0.14);
          background: rgba(74,222,128,0.045);
          color: #86efac;
        }

        .skv-otp-error {
          border: 1px solid rgba(248,113,113,0.15);
          background: rgba(248,113,113,0.05);
          color: #fca5a5;
        }

        .skv-otp-submit {
          width: 100%;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
          border: 1px solid rgba(108,189,255,0.25);
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(108,189,255,0.20), rgba(108,189,255,0.08));
          color: #cfe9ff;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .skv-otp-submit:disabled {
          opacity: 0.62;
          cursor: not-allowed;
        }

        .skv-otp-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 15px;
        }

        .skv-otp-link {
          border: 0;
          background: transparent;
          color: #7fbff2;
          font-size: 11px;
          cursor: pointer;
          padding: 4px;
        }

        .skv-otp-link:disabled {
          color: #4d5a6e;
          cursor: not-allowed;
        }

        .skv-otp-secure {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 22px;
          color: #536176;
          font-size: 10px;
        }

        .skv-otp-secure-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
        }

        @media (max-width: 900px) {
          .skv-otp-shell {
            grid-template-columns: 1fr;
            max-width: 620px;
          }

          .skv-otp-brand {
            min-height: auto;
            gap: 40px;
            padding: 34px;
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }

          .skv-otp-form-side {
            padding: 34px;
          }
        }

        @media (max-width: 560px) {
          .skv-otp-login {
            padding: 12px;
          }

          .skv-otp-shell {
            border-radius: 20px;
          }

          .skv-otp-brand,
          .skv-otp-form-side {
            padding: 25px;
          }

          .skv-otp-trust {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="skv-otp-shell">
        <section className="skv-otp-brand">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "13px",
            }}
          >
            <div className="skv-otp-brand-mark">S</div>

            <div>
              <p className="skv-otp-brand-name">
                Skarvion Admin
              </p>
              <p className="skv-otp-brand-meta">
                Planning &amp; Infrastructure
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "7px 10px",
                border: "1px solid rgba(108,189,255,0.14)",
                borderRadius: "999px",
                background: "rgba(108,189,255,0.05)",
                color: "#90cfff",
                fontSize: "10px",
                fontWeight: 750,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ade80",
                }}
              />
              Email verification
            </div>

            <h1 className="skv-otp-hero-title">
              Secure access
              <br />
              for your <span>workspace.</span>
            </h1>

            <p className="skv-otp-hero-text">
              Sign in with a one-time verification code
              delivered directly to the administrator email.
            </p>
          </div>

          <div className="skv-otp-trust">
            <div className="skv-otp-trust-item">
              <strong>6-digit OTP</strong>
              <span>5 minute validity</span>
            </div>

            <div className="skv-otp-trust-item">
              <strong>JWT session</strong>
              <span>Protected dashboard</span>
            </div>

            <div className="skv-otp-trust-item">
              <strong>Attempt limit</strong>
              <span>5 verification tries</span>
            </div>
          </div>
        </section>

        <section className="skv-otp-form-side">
          <div className="skv-otp-card">
            {step === "email" ? (
              <>
                <div className="skv-otp-kicker">
                  Step 01 · Email
                </div>

                <h2 className="skv-otp-title">
                  Verify your identity
                </h2>

                <p className="skv-otp-subtitle">
                  Enter the administrator email to receive
                  your secure login code.
                </p>

                <form onSubmit={requestOtp}>
                  <label className="skv-otp-label">
                    Administrator email
                  </label>

                  <input
                    className="skv-otp-input"
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus
                    disabled={loading}
                  />

                  {message && (
                    <div className="skv-otp-message">
                      {message}
                    </div>
                  )}

                  {error && (
                    <div className="skv-otp-error">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="skv-otp-submit"
                    disabled={loading}
                  >
                    {loading
                      ? "Sending OTP..."
                      : "Send OTP →"}
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="skv-otp-kicker">
                  Step 02 · Verification
                </div>

                <h2 className="skv-otp-title">
                  Enter your OTP
                </h2>

                <p className="skv-otp-subtitle">
                  Enter the 6-digit code sent to{" "}
                  <strong style={{ color: "#cbd5e1" }}>
                    {email}
                  </strong>
                  .
                </p>

                <form onSubmit={verifyOtp}>
                  <label className="skv-otp-label">
                    One-time password
                  </label>

                  <input
                    className="skv-otp-code"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    placeholder="••••••"
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                      )
                    }
                    autoFocus
                    disabled={loading}
                  />

                  {message && (
                    <div className="skv-otp-message">
                      {message}
                    </div>
                  )}

                  {error && (
                    <div className="skv-otp-error">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="skv-otp-submit"
                    disabled={loading}
                  >
                    {loading
                      ? "Verifying..."
                      : "Verify & Enter →"}
                  </button>
                </form>

                <div className="skv-otp-actions">
                  <button
                    className="skv-otp-link"
                    type="button"
                    onClick={goBack}
                    disabled={loading}
                  >
                    ← Change email
                  </button>

                  <button
                    className="skv-otp-link"
                    type="button"
                    onClick={resendOtp}
                    disabled={loading || cooldown > 0}
                  >
                    {cooldown > 0
                      ? `Resend in ${cooldown}s`
                      : "Resend OTP"}
                  </button>
                </div>
              </>
            )}

            <div className="skv-otp-secure">
              <span className="skv-otp-secure-dot" />
              Secure administrator authentication
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminLogin;
