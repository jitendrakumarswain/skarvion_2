"use client";

import { useState } from "react";
import {
  FaUsers,
  FaDraftingCompass,
  FaFileContract,
  FaHardHat,
  FaMapMarkedAlt,
  FaHome,
} from "react-icons/fa";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Planning",
      desc: "Understanding your requirements, budget, and timeline to create a strong foundation."
    },
    {
      number: "02",
      title: "Design",
      desc: "We create modern architectural and structural designs tailored to your needs."
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our expert team starts construction with quality materials and proper supervision."
    },
    {
      number: "04",
      title: "Delivery",
      desc: "On-time delivery with complete quality assurance and customer satisfaction."
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Our Working Process</h2>

      <div className="timeline">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}