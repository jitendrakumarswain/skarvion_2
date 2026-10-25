
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaArrowRight,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaSearch,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";
import "../css-modular/Courses.css";

const courses = [
  {
    id: 1,
    title: "AutoCAD & Civil 3D",
    category: "Software",
    level: "Beginner to Intermediate",
    duration: "8–10 weeks",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    description:
      "Develop skills in technical drafting, site layouts, grading and civil infrastructure design workflows.",
    modules: ["2D drafting fundamentals", "Civil 3D surfaces", "Site grading and layouts"],
  },
  {
    id: 2,
    title: "Revit Structure & Architecture",
    category: "BIM",
    level: "Beginner to Intermediate",
    duration: "8–10 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore Building Information Modeling, architectural documentation and structural coordination.",
    modules: ["BIM fundamentals", "Architectural modeling", "Structural modeling and sheets"],
  },
  {
    id: 3,
    title: "ETABS & STAAD.Pro",
    category: "Structural",
    level: "Intermediate",
    duration: "8–10 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
    description:
      "Learn structural modeling, load analysis and software-based building design workflows.",
    modules: ["Structural modeling", "Load combinations", "Analysis and design interpretation"],
  },
  {
    id: 4,
    title: "HEC-RAS & HEC-HMS",
    category: "Water & Environment",
    level: "Beginner to Intermediate",
    duration: "6–8 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore rainfall-runoff modeling, river hydraulics and flood simulation workflows.",
    modules: ["Hydrology fundamentals", "Watershed modeling", "River and flood analysis"],
  },
  {
    id: 5,
    title: "ArcGIS & QGIS",
    category: "GIS",
    level: "Beginner",
    duration: "6–8 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=85",
    description:
      "Build practical geospatial skills in mapping, spatial analysis and geographic data visualization.",
    modules: ["GIS fundamentals", "Spatial analysis", "Maps and data visualization"],
  },
  {
    id: 6,
    title: "Engineering Project Management",
    category: "Management",
    level: "All levels",
    duration: "6 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    description:
      "Understand construction scheduling, cost control, project risks and progress reporting.",
    modules: ["Project planning", "Cost and schedule control", "Risk and quality management"],
  },
  {
    id: 7,
    title: "Sustainable Construction Management",
    category: "Management",
    level: "All levels",
    duration: "5–6 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    description:
      "Study sustainable materials, construction waste reduction and resource-efficient building practices.",
    modules: ["Green construction", "Resource efficiency", "Sustainability assessment"],
  },
  {
    id: 8,
    title: "Water & Wastewater Engineering",
    category: "Water & Environment",
    level: "Intermediate",
    duration: "6–8 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=85",
    description:
      "Understand water supply systems, treatment processes and wastewater infrastructure planning.",
    modules: ["Water demand and supply", "Treatment fundamentals", "Wastewater systems"],
  },
  {
    id: 9,
    title: "Geotechnical & Foundation Engineering",
    category: "Structural",
    level: "Intermediate",
    duration: "6–8 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    description:
      "Learn soil mechanics, site investigation, bearing capacity and foundation design principles.",
    modules: ["Soil mechanics", "Site investigation", "Foundation design concepts"],
  },
  {
    id: 10,
    title: "Seismic & Tall Building Design",
    category: "Structural",
    level: "Advanced",
    duration: "8–10 weeks",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore earthquake engineering, lateral loads and analysis concepts for tall structures.",
    modules: ["Seismic fundamentals", "Lateral load systems", "Tall-building analysis concepts"],
  },
];

const categories = [
  "All Courses",
  "Software",
  "BIM",
  "Structural",
  "GIS",
  "Water & Environment",
  "Management",
];

const money = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Engineering Courses in Bhubaneswar | Skarvion Academy",
  "description": "Explore engineering software, BIM, structural design, GIS, water resources and construction project training options in Bhubaneswar, Odisha.",
  "numberOfItems": courses.length,
  "itemListElement": courses.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "@id": `https://skarvioninfra.com/courses#course-${course.id}`,
      "url": `https://skarvioninfra.com/courses#course-${course.id}`,
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "Skarvion Academy",
        "url": "https://skarvioninfra.com/"
      }
    }
  }))
};

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredCourses = useMemo(() => {
    const term = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory =
        category === "All Courses" || course.category === category;

      const matchesSearch =
        !term ||
        course.title.toLowerCase().includes(term) ||
        course.description.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const openEnrollment = (course) => {
    setStudent({ name: "", email: "", phone: "" });
    setSubmitted(false);
    setSelectedCourse(course);
  };

  const handleEnrollment = (event) => {
    event.preventDefault();

    // This is only a frontend enrollment-interest form.
    // Payment and enrollment must be confirmed by the backend.
    setSubmitted(true);
  };

  return (
    <main className="academy-page">
      <Helmet>
        <title>Engineering Courses in Bhubaneswar | Skarvion Academy</title>
        <meta
          name="description"
          content="Explore AutoCAD, Civil 3D, Revit, ETABS, STAAD.Pro, GIS and engineering project training options with Skarvion Academy in Bhubaneswar, Odisha. Check course details, indicative fees and availability."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://skarvioninfra.com/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Engineering Courses in Bhubaneswar | Skarvion Academy" />
        <meta
          property="og:description"
          content="Explore engineering software, BIM, structural design, GIS and infrastructure training options in Bhubaneswar, Odisha."
        />
        <meta property="og:url" content="https://skarvioninfra.com/courses" />
        <meta property="og:site_name" content="Skarvion Planning & Infrastructure" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engineering Courses in Bhubaneswar | Skarvion Academy" />
        <meta
          name="twitter:description"
          content="Explore engineering software, BIM, structural design, GIS and infrastructure training options in Bhubaneswar, Odisha."
        />
        <script type="application/ld+json">{JSON.stringify(courseListSchema)}</script>
      </Helmet>
      <section className="academy-hero">
        <div className="academy-hero-grid" />

        <div className="academy-container academy-hero-content">
          <div className="academy-eyebrow">
            <FaGraduationCap />
            SKARVION ACADEMY
          </div>

          <h1>
            Build skills.
            <br />
            <span>Engineer your future.</span>
          </h1>

          <p className="academy-hero-description">
            Explore professional engineering software and infrastructure
            training designed to help you develop practical, industry-relevant
            skills.
          </p>

          <div className="academy-hero-actions">
            <a href="#course-catalog" className="academy-primary-btn">
              Explore courses <FaArrowRight />
            </a>
            <div className="academy-trust-note">
              <FaShieldAlt />
              Transparent course pricing
            </div>
          </div>

          <div className="academy-hero-stats">
            <div>
              <strong>10</strong>
              <span>Training programs</span>
            </div>
            <div>
              <strong>₹5k–₹10k</strong>
              <span>Proposed course fees</span>
            </div>
            <div>
              <strong>Career-focused</strong>
              <span>Engineering skills</span>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-intro">
        <div className="academy-container">
          <div>
            <span className="academy-section-kicker">LEARN WITH PURPOSE</span>
            <h2>Engineering knowledge, built for real projects.</h2>
          </div>
          <p>
            From CAD and BIM tools to structural analysis, GIS and project
            management, explore learning paths aligned with your professional
            interests.
          </p>
        </div>
      </section>

      <section
        className="academy-catalog academy-container"
        id="course-catalog"
      >
        <div className="academy-catalog-heading">
          <div>
            <span className="academy-section-kicker">OUR PROGRAMS</span>
            <h2>Explore training courses</h2>
            <p>Find a program that matches your goals.</p>
          </div>

          <div className="academy-search">
            <FaSearch />
            <input
              type="search"
              placeholder="Search courses..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search courses"
            />
          </div>
        </div>

        <div className="academy-filters" aria-label="Filter courses">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="academy-results-count">
          Showing {filteredCourses.length} of {courses.length} courses
        </div>

        {filteredCourses.length > 0 ? (
          <div className="academy-course-grid">
            {filteredCourses.map((course) => (
              <article className="academy-course-card" key={course.id}>
                <div className="academy-course-image">
                  <img
                    src={course.image}
                    alt={`${course.title} training`}
                    loading="lazy"
                  />
                  <span className="academy-course-category">
                    {course.category}
                  </span>
                </div>

                <div className="academy-course-body">
                  <div className="academy-course-meta">
                    <span>
                      <FaBookOpen /> {course.level}
                    </span>
                    <span>
                      <FaClock /> {course.duration}
                    </span>
                  </div>

                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  <div className="academy-course-footer">
                    <div>
                      <span className="academy-fee-label">Course fee</span>
                      <strong>{money(course.price)}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => openEnrollment(course)}
                      className="academy-enroll-btn"
                    >
                      View course <FaArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="academy-empty">
            <FaSearch />
            <h3>No courses found</h3>
            <p>Try a different search term or category.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Courses");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="academy-local-seo">
        <div className="academy-container">
          <span className="academy-section-kicker">ENGINEERING LEARNING IN ODISHA</span>
          <h2>Engineering software and project training in Bhubaneswar</h2>
          <p>
            Explore learning options in AutoCAD and Civil 3D, Revit Architecture and
            Structure, ETABS, STAAD.Pro, GIS tools such as ArcGIS and QGIS, water
            resources software, structural analysis and engineering project management.
            These topics may suit civil engineering students, graduates and working
            professionals who want to build software familiarity and project skills.
          </p>
          <p>
            Interested in civil engineering software training, BIM learning, structural
            design tools or guidance for an engineering project in Bhubaneswar? Review
            the course information above and contact Skarvion to confirm the current
            syllabus, batch dates, delivery format, fees and availability before enrolling.
          </p>
          <a
            className="academy-primary-btn"
            href="https://wa.me/917064949597?text=Hello%20Skarvion%2C%20I%20am%20looking%20for%20engineering%20course%20or%20project%20training%20in%20Bhubaneswar."
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask about courses and projects <FaArrowRight />
          </a>
        </div>
      </section>

      <section className="academy-steps">
        <div className="academy-container">
          <span className="academy-section-kicker">YOUR LEARNING JOURNEY</span>
          <h2>Three steps to get started</h2>

          <div className="academy-steps-grid">
            <div className="academy-step-card">
              <span>01</span>
              <h3>Choose your course</h3>
              <p>Compare course content, level and fees before enrolling.</p>
            </div>
            <div className="academy-step-card">
              <span>02</span>
              <h3>Register your interest</h3>
              <p>Share your contact details to enquire about the program.</p>
            </div>
            <div className="academy-step-card">
              <span>03</span>
              <h3>Confirm enrollment</h3>
              <p>
                Once registration and payment services are configured, follow
                the official enrollment and payment instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-cta">
        <div className="academy-container academy-cta-inner">
          <div>
            <span className="academy-section-kicker">HAVE A QUESTION?</span>
            <h2>Find the right learning path for you.</h2>
            <p>Contact the Skarvion team for course availability and details.</p>
          </div>
          <a
            href="https://wa.me/917064949597?text=Hello%20Skarvion%2C%20I%20would%20like%20to%20know%20about%20engineering%20training%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="academy-primary-btn"
          >
            Enquire on WhatsApp <FaArrowRight />
          </a>
        </div>
      </section>

      {selectedCourse && (
        <div
          className="academy-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCourse(null);
            }
          }}
        >
          <section
            className="academy-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="academy-modal-title"
          >
            <button
              type="button"
              className="academy-modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close course details"
            >
              <FaTimes />
            </button>

            {!submitted ? (
              <>
                <span className="academy-section-kicker">COURSE DETAILS</span>
                <h2 id="academy-modal-title">{selectedCourse.title}</h2>
                <div className="academy-modal-price">
                  {money(selectedCourse.price)}
                </div>
                <p className="academy-modal-description">
                  {selectedCourse.description}
                </p>

                <h3>What you'll explore</h3>
                <ul className="academy-module-list">
                  {selectedCourse.modules.map((module) => (
                    <li key={module}>
                      <FaCheckCircle /> {module}
                    </li>
                  ))}
                </ul>

                <p className="academy-modal-note">
                  Duration and syllabus are indicative and must be confirmed
                  with Skarvion before enrollment.
                </p>

                <form
                  className="academy-enrollment-form"
                  onSubmit={handleEnrollment}
                >
                  <label>
                    Full name
                    <input
                      required
                      autoComplete="name"
                      value={student.name}
                      onChange={(event) =>
                        setStudent({ ...student, name: event.target.value })
                      }
                      placeholder="Enter your full name"
                    />
                  </label>

                  <label>
                    Email address
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={student.email}
                      onChange={(event) =>
                        setStudent({ ...student, email: event.target.value })
                      }
                      placeholder="you@example.com"
                    />
                  </label>

                  <label>
                    Phone number
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+() -]{10,20}"
                      value={student.phone}
                      onChange={(event) =>
                        setStudent({ ...student, phone: event.target.value })
                      }
                      placeholder="Your contact number"
                    />
                  </label>

                  <button type="submit" className="academy-primary-btn">
                    Submit course enquiry <FaArrowRight />
                  </button>

                  <p className="academy-modal-note">
                    This form records no payment. Do not treat submission as
                    confirmed enrollment.
                  </p>
                </form>
              </>
            ) : (
              <div className="academy-enquiry-success">
                <FaCheckCircle />
                <h2>Enquiry details ready</h2>
                <p>
                  Your details have been validated in this page, but they have
                  not been sent to the server. Online enrollment and payment
                  will be enabled after backend integration.
                </p>
                <button
                  type="button"
                  className="academy-primary-btn"
                  onClick={() => setSelectedCourse(null)}
                >
                  Close
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
