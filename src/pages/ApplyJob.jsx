import { useParams } from "react-router-dom";
import "../css-modular/ApplyJob.css";

export default function ApplyJob() {
  // Get the job title from the URL
  const { jobTitle } = useParams();

  // Convert "frontend-developer" -> "Frontend Developer"
  const title = jobTitle
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Application Submitted Successfully!");
};

  return (
    <div className="apply-page">

      {/* Hero */}
      <section className="apply-hero">
        <div className="hero-content">
          <p className="hero-tag">CAREER OPPORTUNITIES</p>

          {/* Dynamic Job Title */}
          <h1>{title}</h1>

          <p className="hero-description">
            Join Skarvion Planning & Infrastructure and help us build
            innovative digital solutions for the construction industry.
          </p>

          <div className="job-info">
            <span>📍 Bhubaneswar</span>
            <span>💼 Full Time</span>
            <span>🕒 2+ Years</span>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-container">
        <div className="application-card">
          <h2>Apply for {title}</h2>

<form className="apply-form" onSubmit={handleSubmit}>

  {/* Personal Information */}
  <div className="form-row">
    <div className="form-group">
      <label>First Name</label>
      <input type="text" placeholder="Enter first name" required />
    </div>

    <div className="form-group">
      <label>Last Name</label>
      <input type="text" placeholder="Enter last name" required />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" required />
    </div>

    <div className="form-group">
      <label>Phone Number</label>
      <input type="tel" placeholder="Enter phone number" required />
    </div>
  </div>

  <div className="form-group">
    <label>Current Location</label>
    <input type="text" placeholder="Current Location" required />
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Highest Qualification</label>

      <select required>
        <option value="">Select Qualification</option>
        <option>B.Tech</option>
        <option>M.Tech</option>
        <option>BCA</option>
        <option>MCA</option>
        <option>Diploma</option>
        <option>Other</option>
      </select>
    </div>

    <div className="form-group">
      <label>Experience</label>

      <select required>
        <option value="">Select Experience</option>
        <option>Fresher</option>
        <option>0-1 Year</option>
        <option>1-2 Years</option>
        <option>2-5 Years</option>
        <option>5+ Years</option>
      </select>
    </div>
  </div>

  <div className="form-group">
    <label>Upload Resume (PDF)</label>

    <input
      type="file"
      accept=".pdf"
      required
    />
  </div>

  <div className="form-group">
    <label>Why do you want to join Skarvion?</label>

    <textarea
      rows="5"
      placeholder="Tell us about yourself..."
    />
  </div>

  <label className="checkbox">
    <input type="checkbox" required />
    I confirm the above information is correct.
  </label>

  <button
    type="submit"
    className="submit-btn"
  >
    Submit Application
  </button>

</form>
     
     
     
        </div>
      </section>

    </div>
  );
}