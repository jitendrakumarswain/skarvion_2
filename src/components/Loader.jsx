import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setExiting(true);

            setTimeout(() => {
              onFinish();
            }, 650);
          }, 250);

          return 100;
        }

        // Slightly varied speed for a more natural loading feel
        if (prev < 70) return prev + 1;
        if (prev < 90) return prev + 0.7;
        return prev + 0.4;
      });
    }, 18);

    return () => clearInterval(timer);
  }, [onFinish]);

  const displayedProgress = Math.min(100, Math.round(progress));

  return (
    <div
      className={`loader-screen ${
        exiting ? "loader-screen-exit" : ""
      }`}
    >
      {/* Architectural background */}
      <div className="loader-grid" />

      <div className="loader-glow loader-glow-one" />
      <div className="loader-glow loader-glow-two" />

      <div className="loader-content">

        {/* Logo */}
        <div className="loader-logo-wrapper">
          <div className="loader-logo-ring" />

          <img
            src={logo.src || logo}
            alt="Skarvion"
            className="loader-logo"
          />
        </div>

        {/* Brand */}
        <h1 className="loader-brand">
          SKARVION
        </h1>

        <p className="loader-tagline">
          PLAN <span>•</span> DESIGN <span>•</span> BUILD
        </p>

        {/* Loading message */}
        <div className="loader-message">
          Preparing your experience
          <span className="loader-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>

        {/* Progress */}
        <div className="loader-progress-wrapper">

          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{
                width: `${displayedProgress}%`,
              }}
            />
          </div>

          <div className="loader-progress-meta">
            <span>SKARVION INFRASTRUCTURE</span>
            <strong>{displayedProgress}%</strong>
          </div>

        </div>

      </div>

      {/* Bottom accent */}
      <div className="loader-bottom-line">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}