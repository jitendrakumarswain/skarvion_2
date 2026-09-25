import { useEffect, useState, useRef, useCallback } from "react";
import logo from "../assets/logo.png";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowRight,
  FaTimes,
  FaLock,
  FaChevronDown,
  FaVideo,
  FaUserFriends,
  FaFileAlt,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const DESIGN_COLUMNS = [
  {
    title: "Planning & Architecture",
    items: [
      "Architectural Planning",
      "Floor Plan Designs",
      "House Planning",
      "Space Planning",
      "Site Planning",
    ],
  },
  {
    title: "Exterior & 3D",
    items: [
      "3D Elevation Designs",
      "Front Elevation",
      "Modern Elevation",
      "Exterior Design",
      "Landscape Design",
    ],
  },
  {
    title: "Interior Design",
    items: [
      "Living Room Designs",
      "Bedroom Designs",
      "Kitchen Designs",
      "Bathroom Designs",
      "Office Interiors",
    ],
  },
  {
    title: "Special Designs",
    items: [
      "Staircase Designs",
      "False Ceiling Designs",
      "Wall Decor",
      "Lighting Designs",
      "Modular Designs",
    ],
  },
];

const MORE_LINKS = [
  {
    href: "/videos",
    label: "Skarvion Videos",
    icon: FaVideo,
  },
  {
    href: "/refer-a-friend",
    label: "Refer a Friend",
    icon: FaUserFriends,
  },
  {
    href: "/policies",
    label: "Policies",
    icon: FaFileAlt,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileDesignOpen, setMobileDesignOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastScrollY = useRef(0);
  const drawerRef = useRef(null);

  // Optimized Scroll & Active Tracker
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    const totalScrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    if (totalScrollable > 0) {
      setScrollProgress((scrollY / totalScrollable) * 100);
    }

    setIsScrolled(scrollY > 20);

    const delta = scrollY - lastScrollY.current;

    if (delta > 10 && scrollY > 120) {
      setIsHidden(true);
    } else if (delta < -10) {
      setIsHidden(false);
    }

    lastScrollY.current = scrollY;

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (!el) return;

      const top = el.offsetTop - 160;
      const bottom = top + el.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        setActive(id);
      }
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // Handle Escape key + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileMoreOpen(false);
        setMobileDesignOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setMobileMoreOpen(false);
    setMobileDesignOpen(false);
  };

  const handleNavigate = (e, id) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);

    if (targetElement) {
      const navOffset = 90;
      const elementPosition =
        targetElement.getBoundingClientRect().top;

      const offsetPosition =
        elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    closeAllMenus();
  };

  const handleDesignLink = () => {
    closeAllMenus();
  };

  return (
    <>
      {/* Top Thin Reading Progress Bar */}
      <div
        className="skv-progress-bar"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      />

      {/* Floating Header */}
      <header
        className={`skv-header ${
          isScrolled ? "is-scrolled" : ""
        } ${isHidden ? "is-hidden" : ""}`}
      >
        <div className="skv-navbar">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="skv-brand"
            onClick={(e) => handleNavigate(e, "home")}
          >
            <div className="skv-logo-wrapper">
              <img
                src={logo.src || logo}
                alt="Skarvion Logo"
                className="skv-logo"
              />
            </div>

            <div className="skv-brand-info">
              <span className="skv-brand-title">SKARVION</span>
              <span className="skv-brand-tag">Infrastructure</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="skv-desktop-menu">
            <ul className="skv-nav-list">
              {/* Home */}
              <li className="skv-nav-item">
                <a
                  href="#home"
                  onClick={(e) => handleNavigate(e, "home")}
                  className={`skv-nav-link ${
                    active === "home" ? "active" : ""
                  }`}
                >
                  Home
                  {active === "home" && (
                    <span className="skv-active-dot" />
                  )}
                </a>
              </li>

              {/* Design Ideas Mega Menu */}
              <li className="skv-nav-item skv-design-menu">
                <button
                  type="button"
                  className="skv-nav-link skv-design-trigger"
                  aria-haspopup="true"
                  aria-label="Open Design Ideas menu"
                >
                  <span>Design Ideas</span>
                  <FaChevronDown className="skv-design-chevron" />
                </button>

                <div className="skv-design-mega-menu">
                  {DESIGN_COLUMNS.map((column) => (
                    <div
                      className="skv-design-column"
                      key={column.title}
                    >
                      <h4>{column.title}</h4>

                      {column.items.map((item) => (
                        <a
                          href="#services"
                          key={item}
                          onClick={handleDesignLink}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </li>

              {/* Main Navigation */}
              {NAV_LINKS.slice(1, -1).map(({ id, label }) => {
                const isActive = active === id;

                return (
                  <li key={id} className="skv-nav-item">
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleNavigate(e, id)}
                      className={`skv-nav-link ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {label}

                      {isActive && (
                        <span className="skv-active-dot" />
                      )}
                    </a>
                  </li>
                );
              })}

              {/* More Dropdown */}
              <li className="skv-nav-item skv-more-menu">
                <button
                  type="button"
                  className="skv-nav-link skv-more-trigger"
                  aria-haspopup="true"
                  aria-label="Open More menu"
                >
                  <span>More</span>
                  <FaChevronDown className="skv-more-chevron" />
                </button>

                <div className="skv-more-dropdown">
                  {MORE_LINKS.map(({ href, label, icon: Icon }) => (
                    <a href={href} key={label}>
                      <span className="skv-more-icon">
                        <Icon />
                      </span>
                      <span>{label}</span>
                      <FaArrowRight className="skv-more-arrow" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          {/* Desktop Admin Button */}
          <a
            href="/admin-login"
            className="admin-nav-link admin-desktop-only"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "10px 16px",
              marginLeft: "8px",
              border: "1px solid rgba(108,189,255,0.22)",
              borderRadius: "10px",
              background: "rgba(108,189,255,0.05)",
              color: "#cfe9ff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            <FaLock size={13} />
            Admin
          </a>

          {/* Action CTAs & Mobile Toggle */}
          <div className="skv-actions">
            {/* Quick Call */}
            <a
              href="tel:+917064949597"
              className="skv-btn-icon"
              title="Quick Call"
            >
              <FaPhoneAlt />
              <span className="skv-btn-icon-text">Call Us</span>
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              onClick={(e) => handleNavigate(e, "contact")}
              className={`skv-btn-primary ${
                active === "contact" ? "active" : ""
              }`}
            >
              <span>Let's Talk</span>
              <FaArrowRight className="skv-btn-arrow" />
            </a>

            {/* Hamburger Button */}
            <button
              className="skv-menu-trigger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Slide-over Drawer Backdrop */}
      <div
        className={`skv-drawer-backdrop ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => closeAllMenus()}
      />

      {/* Modern Slide-over Drawer */}
      <aside
        ref={drawerRef}
        className={`skv-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Drawer Header */}
        <div className="skv-drawer-header">
          <div className="skv-brand-info">
            <span className="skv-brand-title">SKARVION</span>
            <span className="skv-brand-tag">Menu & Portal</span>
          </div>

          <button
            className="skv-drawer-close"
            onClick={() => closeAllMenus()}
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="skv-drawer-content">
          <p className="skv-drawer-label">Navigation</p>

          <ul className="skv-drawer-links">
            {/* Home */}
            <li>
              <a
                href="#home"
                onClick={(e) => handleNavigate(e, "home")}
                className={`skv-drawer-item ${
                  active === "home" ? "active" : ""
                }`}
              >
                <span className="skv-drawer-index">01</span>
                <span className="skv-drawer-text">Home</span>
                <FaArrowRight className="skv-drawer-icon" />
              </a>
            </li>

            {/* Design Ideas Accordion */}
            <li>
              <button
                type="button"
                className={`skv-drawer-item skv-mobile-dropdown-trigger ${
                  mobileDesignOpen ? "active" : ""
                }`}
                onClick={() => setMobileDesignOpen((v) => !v)}
              >
                <span className="skv-drawer-index">02</span>
                <span className="skv-drawer-text">Design Ideas</span>
                <FaChevronDown
                  className={`skv-drawer-icon skv-mobile-chevron ${
                    mobileDesignOpen ? "open" : ""
                  }`}
                />
              </button>

              <div
                className={`skv-mobile-submenu ${
                  mobileDesignOpen ? "open" : ""
                }`}
              >
                {DESIGN_COLUMNS.flatMap((column) => column.items).map(
                  (item) => (
                    <a
                      href="#services"
                      key={item}
                      onClick={handleDesignLink}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </li>

            {/* Main Mobile Links */}
            {NAV_LINKS.slice(1, -1).map(({ id, label }, idx) => {
              const isActive = active === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavigate(e, id)}
                    className={`skv-drawer-item ${
                      isActive ? "active" : ""
                    }`}
                    style={{
                      transitionDelay: `${(idx + 2) * 25}ms`,
                    }}
                  >
                    <span className="skv-drawer-index">
                      0{idx + 3}
                    </span>
                    <span className="skv-drawer-text">{label}</span>
                    <FaArrowRight className="skv-drawer-icon" />
                  </a>
                </li>
              );
            })}

            {/* More Accordion */}
            <li>
              <button
                type="button"
                className={`skv-drawer-item skv-mobile-dropdown-trigger ${
                  mobileMoreOpen ? "active" : ""
                }`}
                onClick={() => setMobileMoreOpen((v) => !v)}
              >
                <span className="skv-drawer-index">07</span>
                <span className="skv-drawer-text">More</span>
                <FaChevronDown
                  className={`skv-drawer-icon skv-mobile-chevron ${
                    mobileMoreOpen ? "open" : ""
                  }`}
                />
              </button>

              <div
                className={`skv-mobile-submenu ${
                  mobileMoreOpen ? "open" : ""
                }`}
              >
                {MORE_LINKS.map(({ href, label, icon: Icon }) => (
                  <a
                    href={href}
                    key={label}
                    onClick={closeAllMenus}
                  >
                    <span className="skv-mobile-submenu-left">
                      <Icon />
                      <span>{label}</span>
                    </span>
                    <FaArrowRight />
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* Mobile Admin */}
          <a
            href="/admin-login"
            className="skv-mobile-admin"
            onClick={() => closeAllMenus()}
          >
            <span className="skv-mobile-admin-left">
              <FaLock size={15} />
              <span>Admin Portal</span>
            </span>
            <FaArrowRight />
          </a>
        </div>

        {/* Drawer Footer */}
        <div className="skv-drawer-footer">
          <a
            href="#contact"
            onClick={(e) => handleNavigate(e, "contact")}
            className="skv-drawer-cta"
          >
            <span>Request a Free Quote</span>
            <FaArrowRight />
          </a>

          {/* Socials */}
          <div className="skv-drawer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61591298281834"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/skarvioninfra/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/135054025/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@SKARVIONINFRA-CONSTRUCTIONSCIV"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}