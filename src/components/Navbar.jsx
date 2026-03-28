import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "pricing",
      "projects",
      "testimonials",
      "contact"
    ];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 150; // 🔥 better offset
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll function (no jump)
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
      top: section.offsetTop - 80,
    });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">SKARVION</div>

      <div className="nav-links">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className={active === "home" ? "active" : ""}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={(e) => handleClick(e, "about")}
          className={active === "about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#services"
          onClick={(e) => handleClick(e, "services")}
          className={active === "services" ? "active" : ""}
        >
          Services
        </a>

        <a
          href="#pricing"
          onClick={(e) => handleClick(e, "pricing")}
          className={active === "pricing" ? "active" : ""}
        >
          Pricing
        </a>

        <a
          href="#projects"
          onClick={(e) => handleClick(e, "projects")}
          className={active === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#testimonials"
          onClick={(e) => handleClick(e, "testimonials")}
          className={active === "testimonials" ? "active" : ""}
        >
          Reviews
        </a>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}