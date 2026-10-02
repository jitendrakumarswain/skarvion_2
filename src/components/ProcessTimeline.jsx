import {
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Planning",
      shortTitle: "Discover",
      desc:
     "We understand your house construction requirements, plot conditions, budget and timeline before defining a practical project plan.",
      icon: <FaClipboardList />,
    },
    {
      number: "02",
      title: "Design",
      shortTitle: "Design",
      desc:
        "Our team develops architectural, structural and elevation concepts tailored to your needs and project goals.",
      icon: <FaDraftingCompass />,
    },
    {
      number: "03",
      title: "Execution",
      shortTitle: "Build",
      desc:
      "Construction is carried out with proper project coordination, site supervision, quality materials and attention to detail throughout execution.",
      icon: <FaHardHat />,
    },
    {
      number: "04",
      title: "Delivery",
      shortTitle: "Complete",
      desc:
      "We complete the project with quality checks, finishing coordination and a structured handover process focused on project completion.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="timeline-section" id="process">

      {/* Header */}
      <div className="timeline-header">

        <span className="timeline-tag">
          HOW WE WORK
        </span>

        <h2 className="timeline-title">
          Our House Construction Process in Bhubaneswar
        </h2>

        <p className="timeline-subtitle">
          A structured process designed to turn your vision into a
          well-planned, professionally executed project.
        </p>

      </div>

      {/* Timeline */}
      <div className="timeline">

        {/* Progress Line */}
        <div className="timeline-line">
          <div className="timeline-line-progress" />
        </div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >

            {/* Connector */}
            <div className="timeline-marker">
              <span>{step.number}</span>
            </div>

            {/* Content */}
            <div className="timeline-content">

              <div className="timeline-card">

                <div className="timeline-card-top">

                  <div className="timeline-icon">
                    {step.icon}
                  </div>

                  <div className="timeline-step-text">
                    <span>
                      STEP {step.number}
                    </span>

                    <h3>{step.title}</h3>
                  </div>

                </div>

                <p>{step.desc}</p>

                <div className="timeline-card-bottom">
                  <span className="timeline-short-title">
                    {step.shortTitle}
                  </span>

                  <FaArrowRight />
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}