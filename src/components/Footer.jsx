import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../css-modular/14-footer.css";

export default function Footer() {
  return (
    <footer className="skv-footer">
      {/* Premium Infinite Background Watermark Marquee */}
      <div className="footer-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>SKARVION</span>
          <span>SKARVION</span>
          <span>SKARVION</span>
          <span>SKARVION</span>
        </div>
        <div className="marquee-track" aria-hidden="true">
          <span>SKARVION</span>
          <span>SKARVION</span>
          <span>SKARVION</span>
          <span>SKARVION</span>
        </div>
      </div>

      <div className="footer-grid">
        {/* Column 1: Visit Us */}
        <div className="footer-column">
          <h3 className="footer-title">VISIT US</h3>

          <p className="company-title">Skarvion Infrastructure</p>

          <p className="address-text">
            <FaMapMarkerAlt className="pin-icon" />
            <span>
              Lane - 09, Chintamaniswar,
              <br />
              Bhubaneswar, Odisha – 751006
            </span>
          </p>

          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps?q=Skarvion+Planning+%26+Infrastructure,Chintamaniswar,Bhubaneswar&output=embed"
              title="Skarvion Location"
              loading="lazy"
            />
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column">
          <h3 className="footer-title">OUR SERVICES</h3>
          <ul className="footer-nav">
            <li><a href="#services"><span className="nav-arrow">›</span> Architectural Planning</a></li>
            <li><a href="#services"><span className="nav-arrow">›</span> Structural Design</a></li>
            <li><a href="#services"><span className="nav-arrow">›</span> 3D Elevation</a></li>
            <li><a href="#services"><span className="nav-arrow">›</span> Estimation</a></li>
            <li><a href="#services"><span className="nav-arrow">›</span> Additional Planning</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">QUICK LINKS</h3>
          <ul className="footer-nav">
            <li><a href="#about"><span className="nav-arrow">›</span> About Us</a></li>
            <li><a href="#projects"><span className="nav-arrow">›</span> Projects</a></li>
            <li><a href="#testimonials"><span className="nav-arrow">›</span> Testimonials</a></li>
            <li>
              {/* Navigates to the separate Careers / Apply Job page */}
              <Link to="/career">
                <span className="nav-arrow">›</span> Careers
              </Link>
            </li>
            <li><a href="#contact"><span className="nav-arrow">›</span> Contact Us</a></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-column">
          <h3 className="footer-title">CONNECT WITH US</h3>
          <p className="connect-tagline">
            Building lasting relationships with innovation and structural excellence.
          </p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61591298281834"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-link fb"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/skarvioninfra/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-link insta"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/135054025/admin/dashboard/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-link in"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/@SkarvionInfra"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="social-link yt"
            >
              <FaYoutube />
            </a>
          </div>

          <div className="footer-contact">
            <a href="tel:+917064949597" className="contact-item">
              <span className="contact-icon-box"><FaPhoneAlt className="contact-icon" /></span>
              <span>+91 7064949597 ,  +916372934049</span>
            </a>
            <a href="mailto:skarvion.infra@gmail.com" className="contact-item">
              <span className="contact-icon-box"><FaEnvelope className="contact-icon" /></span>
              <span>skarvion.infra@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

<div className="footer-bottom">
  <div className="footer-bottom-inner">

    <span>
      © {new Date().getFullYear()} Skarvion Infrastructure.
      All Rights Reserved.
    </span>

    <div className="footer-bottom-links">
      <Link to="/policies" className="footer-bottom-link">
        Privacy & Policies
      </Link>

      <button
        type="button"
        className="footer-cookie-settings"
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("skarvion:open-cookie-settings")
          );
        }}
      >
        Cookie Settings
      </button>
    </div>

  </div>
</div>  
    </footer>
  );
}