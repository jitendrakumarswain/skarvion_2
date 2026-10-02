import "../css-modular/PrivacyPolicy.css";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy-page">
      <section className="privacy-policy-container">
        <div className="privacy-policy-header">
          <p className="privacy-policy-label">SKARVION INFRASTRUCTURE</p>

          <h1>Privacy Policy</h1>

          <p className="privacy-policy-updated">
            Last Updated: 1 October 2026
          </p>
        </div>

        <div className="privacy-policy-content">
          <p>
            Skarvion Infrastructure (“Skarvion”, “we”, “us”, or “our”)
            respects your privacy. This Privacy Policy explains how we
            collect, use, store, and protect information provided through
            <strong> skarvioninfra.com</strong>.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            When you contact us or submit an enquiry, we may collect:
          </p>

          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project requirements</li>
            <li>Messages or other information you voluntarily provide</li>
          </ul>

          <p>
            We may also collect basic technical information such as IP
            address, browser type, device information, and Website usage data.
          </p>

          <h2>2. How We Use Your Information</h2>

          <p>We use collected information to:</p>

          <ul>
            <li>Respond to enquiries and requests</li>
            <li>Discuss projects and provide quotations</li>
            <li>Manage customer enquiries and leads</li>
            <li>Send enquiry confirmations and service-related communications</li>
            <li>Improve and secure our Website and services</li>
            <li>Meet applicable legal requirements</li>
          </ul>

          <h2>3. Information Sharing</h2>

          <p>
            <strong>Skarvion Infrastructure does not sell your personal
            information.</strong>
          </p>

          <p>
            Information may be shared with authorized personnel and trusted
            service providers required for Website hosting, email delivery,
            security, or other necessary business operations. We may also
            disclose information when required by applicable law.
          </p>

          <h2>4. Data Security</h2>

          <p>
            We use reasonable technical and organizational measures to protect
            your information against unauthorized access, misuse, loss, or
            disclosure. Our Website uses HTTPS encryption for data transmitted
            through the Website.
          </p>

          <p>
            No online system can, however, be guaranteed to be completely
            secure.
          </p>

          <h2>5. Data Retention</h2>

          <p>
            We retain personal information only for as long as reasonably
            necessary to respond to enquiries, provide services, maintain
            business records, comply with legal obligations, and protect our
            systems.
          </p>

          <h2>6. Your Rights</h2>

          <p>
            Subject to applicable law, you may request access to, correction
            of, or deletion of your personal information, and may raise
            concerns regarding its processing.
          </p>

          <h2>7. Third-Party Services</h2>

          <p>
            Our Website may use third-party services for functions such as
            email delivery, hosting, analytics, security, or external links.
            These services may have their own privacy policies and terms.
          </p>

          <h2>8. Updates</h2>

          <p>
            We may update this Privacy Policy when our services, technology,
            or applicable legal requirements change. The latest version will
            always be published on this page.
          </p>

          <h2>9. Contact Us</h2>

          <p>
            For privacy-related questions or requests, contact:
          </p>

          <div className="privacy-contact">
            <strong>Skarvion Infrastructure</strong>

            <a href="tel:+917064949597">
              +91 70649 49597
            </a>

            <a href="tel:+916372934049">
              +91 63729 34049
            </a>

            <a href="mailto:skarvion.infra@gmail.com">
              skarvion.infra@gmail.com
            </a>

            <a
              href="https://skarvioninfra.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              skarvioninfra.com
            </a>
          </div>

          <div className="privacy-footer">
            <strong>Skarvion Infrastructure</strong>
            <span>Smart Planning for Strong Infrastructure</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;