import { useEffect, useState, useRef } from "react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 150;
          if (window.scrollY >= top && window.scrollY < top + el.offsetHeight) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .skv-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.3s ease;
          padding: 0 24px;
        }
        .skv-nav.scrolled {
          background: rgba(8, 13, 20, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(99,182,255,0.1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .skv-inner {
          max-width: 1300px;   /* increased width */
          margin: 0 auto;
          height: 70px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px; /* add spacing control */
        }

        /* LOGO */
        .skv-logo {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 22px; letter-spacing: 0.12em;
          color: #fff; text-decoration: none; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          user-select: none;
        }
        .skv-logo-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #6cbdff;
          box-shadow: 0 0 8px rgba(99,182,255,0.8);
        }

        /* DESKTOP LINKS */
        .skv-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .skv-links a {
          position: relative;
          padding: 7px 14px; border-radius: 8px;
          font-size: 13.5px; font-weight: 500; letter-spacing: 0.02em;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .skv-links a::after {
          content: '';
          position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px; border-radius: 2px;
          background: #6cbdff;
          transition: width 0.25s ease;
        }
        .skv-links a:hover { color: rgba(255,255,255,0.9); background: rgba(255,255,255,0.05); }
        .skv-links a.active { color: #fff; }
        .skv-links a.active::after { width: 20px; }

        /* CTA BUTTON */
        .skv-cta {
          padding: 9px 22px; border-radius: 9px;
          background: rgba(99,182,255,0.12);
          border: 1px solid rgba(99,182,255,0.35);
          color: #6cbdff !important; font-size: 13px !important; font-weight: 500 !important;
          cursor: pointer; text-decoration: none;
          transition: all 0.2s !important;
        }
        .skv-cta::after { display: none !important; }
        .skv-cta:hover {
          background: rgba(99,182,255,0.2) !important;
          box-shadow: 0 4px 20px rgba(99,182,255,0.2);
          transform: translateY(-1px);
          color: #6cbdff !important;
        }

        /* HAMBURGER */
        .skv-burger {
          display: none; flex-direction: column; justify-content: center; align-items: center;
          width: 40px; height: 40px; gap: 5px; cursor: pointer;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px; padding: 0;
        }
        .skv-burger span {
          display: block; height: 1.5px; border-radius: 2px; background: #fff;
          transition: all 0.3s ease; transform-origin: center;
        }
        .skv-burger span:nth-child(1) { width: 18px; }
        .skv-burger span:nth-child(2) { width: 14px; }
        .skv-burger span:nth-child(3) { width: 18px; }
        .skv-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); width: 18px; }
        .skv-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .skv-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); width: 18px; }

        /* MOBILE DRAWER */
        .skv-drawer {
          display: none;
          position: fixed; top: 70px; left: 0; right: 0; bottom: 0;
          background: rgba(6, 10, 18, 0.97);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          flex-direction: column; align-items: center; justify-content: center;
          gap: 8px; z-index: 999;
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .skv-drawer.open { opacity: 1; pointer-events: all; }
        .skv-drawer a {
          font-size: 24px; font-weight: 500; font-family: 'Syne', sans-serif;
          color: rgba(255,255,255,0.5); text-decoration: none; padding: 12px 32px;
          border-radius: 12px; width: 260px; text-align: center;
          transition: color 0.2s, background 0.2s;
        }
        .skv-drawer a:hover, .skv-drawer a.active {
          color: #fff; background: rgba(99,182,255,0.08);
        }
        .skv-drawer a.active { color: #6cbdff; }

        @media (max-width: 820px) {
          .skv-links { display: none; }
          .skv-burger { display: flex; }
          .skv-drawer { display: flex; }
        }
      `}</style>

      <nav className={`skv-nav${scrolled ? " scrolled" : ""}`} ref={menuRef}>
        <div className="skv-inner">
          {/* Logo */}
          <a className="skv-logo" href="#home" onClick={(e) => handleClick(e, "home")}>
            <span className="skv-logo-dot" />
            SKARVION
          </a>

          {/* Desktop links */}
          <ul className="skv-links">
            {NAV_LINKS.slice(0, -1).map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "active" : ""}
                  onClick={(e) => handleClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`skv-cta${active === "contact" ? " active" : ""}`}
                onClick={(e) => handleClick(e, "contact")}
              >
                Let's Talk →
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`skv-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`skv-drawer${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={(e) => handleClick(e, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}