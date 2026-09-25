"use client";
import React, { useState } from "react";

export default function AnnouncementBar() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const items = [
    {
      tag: "EXCLUSIVE OFFER",
      highlight: "5% OFF",
      text: "on All Architectural Planning & 3D Estimation",
      cta: "Claim Now",
      link: "#contact",
    },
    {
      tag: "FREE CONSULTATION",
      highlight: "Direct Site Visit",
      text: "Schedule with Senior Structural Engineers in Bhubaneswar",
      cta: "Book Slot",
      link: "#contact",
    },
    {
      tag: "QUALITY ASSURANCE",
      highlight: "100% Precision",
      text: "Smart Planning for Strong Commercial & Residential Infrastructure",
      cta: "Explore",
      link: "#services",
    },
  ];

  return (
    <div className="announcement-bar">
      {/* Animated Glowing Gradient Underline */}
      <div className="announcement-glow-line"></div>

      {/* Infinite Scrolling Ticker Track */}
      <div className="announcement-track">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="announcement-item">
            {/* Pulsing Tag Badge */}
            <span className="announcement-badge">
              <span className="pulse-dot"></span>
              {item.tag}
            </span>

            {/* Main Text & Highlight */}
            <span className="announcement-text">
              <strong>{item.highlight}</strong> {item.text}
            </span>

            {/* Interactive CTA Chip */}
            <a href={item.link} className="announcement-cta">
              {item.cta}
              <span className="cta-arrow">→</span>
            </a>

            {/* Glowing Divider */}
            <span className="announcement-divider">✦</span>
          </div>
        ))}
      </div>

      {/* Close Button */}
      <button
        className="announcement-close"
        onClick={() => setClosed(true)}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}