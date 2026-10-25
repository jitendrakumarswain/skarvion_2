
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaCheckCircle, FaGraduationCap } from "react-icons/fa";
import "../css-modular/AutoCADCourse.css";

const courseUrl = "https://skarvioninfra.com/courses/autocad-civil-3d";

export default function AutoCADCourse() {
  const whatsappMessage = encodeURIComponent(
    "Hello Skarvion Academy, I am interested in AutoCAD and Civil 3D training in Bhubaneswar. Please share the syllabus, fees, batch availability and enrollment details."
  );

  const topics = [
    "Technical drawing and 2D drafting fundamentals",
    "Layers, dimensions, blocks and drawing standards",
    "Civil 3D surfaces and terrain modeling",
    "Alignments, profiles and corridor concepts",
    "Site grading and civil infrastructure drawing workflows",
    "Practical drawing exercises and project documentation",
  ];

  return (
    <main className="autocad-page">
      <Helmet>
        <title>
          AutoCAD & Civil 3D Training in Bhubaneswar | Skarvion Academy
        </title>
        <meta
          name="description"
          content="Explore AutoCAD and Civil 3D training in Bhubaneswar, Odisha. Learn drafting, terrain modeling, grading and civil infrastructure workflows. Contact Skarvion Academy for syllabus, fees and batch availability."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={courseUrl} />
        <meta
          property="og:title"
          content="AutoCAD & Civil 3D Training in Bhubaneswar | Skarvion Academy"
        />
        <meta
          property="og:description"
          content="Explore CAD drafting and Civil 3D learning topics for civil engineering students and professionals in Bhubaneswar, Odisha."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={courseUrl} />
        <meta
          property="og:site_name"
          content="Skarvion Planning & Infrastructure"
        />
      </Helmet>

      <section className="autocad-hero">
        <div className="autocad-container">
          <span className="autocad-eyebrow">
            <FaGraduationCap /> SKARVION ACADEMY
          </span>

          <h1>
            AutoCAD & Civil 3D Training in{" "}
            <span>Bhubaneswar</span>
          </h1>

          <p className="autocad-hero-description">
            Explore computer-aided drafting, civil design workflows and
            infrastructure modeling topics for civil engineering students,
            graduates and working professionals.
          </p>

          <div className="autocad-hero-actions">
            <a
              className="autocad-primary-btn"
              href={`https://wa.me/917064949597?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire about training <FaArrowRight />
            </a>
            <a className="autocad-secondary-btn" href="#autocad-syllabus">
              Explore syllabus
            </a>
          </div>

          <p className="autocad-disclaimer">
            Contact us to confirm course availability, delivery mode, schedule,
            syllabus and fees before enrolling.
          </p>
        </div>
      </section>

      <section className="autocad-content autocad-container">
        <div className="autocad-section-heading">
          <span className="autocad-kicker">ABOUT THE COURSE</span>
          <h2>Learn CAD concepts for civil engineering projects</h2>
        </div>

        <p>
          AutoCAD is used for technical drafting, while Civil 3D supports
          civil infrastructure design workflows such as surfaces, alignments,
          profiles and grading. This learning path introduces topics that can
          help learners understand how digital drawings and civil design
          models are developed.
        </p>

        <p>
          If you are looking for AutoCAD classes in Bhubaneswar, Civil 3D
          training in Odisha, or software skills to support your civil
          engineering portfolio, contact Skarvion Academy to discuss the
          training format and available practical exercises.
        </p>

        <div className="autocad-feature-grid">
          <article className="autocad-feature">
            <h3>2D drafting</h3>
            <p>
              Explore drawing setup, layers, dimensions and technical drawing
              organization.
            </p>
          </article>

          <article className="autocad-feature">
            <h3>Civil 3D workflows</h3>
            <p>
              Understand surfaces, alignments, profiles and introductory site
              grading concepts.
            </p>
          </article>

          <article className="autocad-feature">
            <h3>Project practice</h3>
            <p>
              Ask about practical exercises and project-based learning
              opportunities available with the course.
            </p>
          </article>
        </div>
      </section>

      <section
        className="autocad-syllabus"
        id="autocad-syllabus"
      >
        <div className="autocad-container">
          <span className="autocad-kicker">LEARNING TOPICS</span>
          <h2>AutoCAD & Civil 3D syllabus overview</h2>
          <p>
            The following is a proposed topic outline. Confirm the final
            syllabus with Skarvion Academy before enrollment.
          </p>

          <ul className="autocad-topic-list">
            {topics.map((topic) => (
              <li key={topic}>
                <FaCheckCircle /> <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="autocad-audience autocad-container">
        <span className="autocad-kicker">WHO CAN EXPLORE THIS COURSE?</span>
        <h2>For aspiring civil design professionals</h2>
        <ul>
          <li>Civil engineering students and diploma learners</li>
          <li>Recent graduates building technical software skills</li>
          <li>Site engineers exploring digital drafting workflows</li>
          <li>Professionals interested in civil infrastructure modeling</li>
        </ul>
      </section>

      <section className="autocad-cta">
        <div className="autocad-container">
          <span className="autocad-kicker">START WITH AN ENQUIRY</span>
          <h2>Looking for AutoCAD training in Bhubaneswar?</h2>
          <p>
            Ask Skarvion Academy about current batches, course fees, project
            practice, prerequisites and enrollment.
          </p>

          <a
            className="autocad-primary-btn"
            href={`https://wa.me/917064949597?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Skarvion Academy <FaArrowRight />
          </a>

          <p className="autocad-related-link">
            <a href="/courses">Explore all engineering courses</a>
          </p>
        </div>
      </section>
    </main>
  );
}
