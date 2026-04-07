import React from "react";

export default function Careers() {
  return (
    <section className="careers">

      {/* HERO */}
      <div className="career-hero">
        <h1>Join Our Team</h1>
        <p>Build your future with Skarvion</p>
      </div>

      {/* WHY US */}
      <div className="career-why">
        <h2>Why Work With Us?</h2>
        <div className="career-grid">
          <div className="card">🚀 Growth Opportunities</div>
          <div className="card">💰 Competitive Salary</div>
          <div className="card">🏗️ Real Projects</div>
        </div>
      </div>

      {/* JOBS */}
      <div className="career-jobs">
        <h2>Open Positions</h2>

        <div className="job-card">
          <h3>Site Engineer</h3>
          <p>Location: Odisha</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>Architect</h3>
          <p>Location: Remote</p>
          <button>Apply Now</button>
        </div>

      </div>

      {/* FORM */}
      <div className="career-form">
        <h2>Apply Now</h2>

        <form>
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <textarea placeholder="Your Experience"></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </div>

    </section>
  );
}