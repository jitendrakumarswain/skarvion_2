import React from "react";
import { FaBullseye, FaEye, FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-badge">WHO WE ARE</span>
          <h2 className="about-title">
            Building Dreams with <span>Precision & Trust</span>
          </h2>
          <p className="about-subtitle">
            Skarvion Infra is a trusted construction company in Bhubaneswar, Odisha,
            specializing in residential construction, commercial buildings,
            architectural planning, interior design, renovation, and turnkey projects.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="about-grid">
          {/* Mission */}
          <div className="about-card">
            <div className="icon-box">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide innovative, reliable, and cost-effective construction
              solutions that consistently exceed client expectations.
            </p>
          </div>

          {/* Vision */}
          <div className="about-card">
            <div className="icon-box">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become a leading infrastructure and design firm celebrated for
              architectural quality, trust, and structural excellence.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="about-card">
            <div className="icon-box">
              <FaAward />
            </div>
            <h3>Why Choose Us</h3>
            <p>
              Experienced engineering team, contemporary designs, transparent
              pricing, and an unwavering commitment to on-time project delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}