import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Header.css";

export default function Header({ isHomePage }: { isHomePage: boolean }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = [
    { name: "головна", path: "/" },
    { name: "для школярів", path: "/forSchoolchildren" },
    { name: "для дорослих", path: "/forAdults" },
    { name: "підготовка до cambridge exams", path: "/prepareForExams" },
    { name: "розмовні клуби", path: "/ourClubs" },
    { name: "контакти", path: "/contacts" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.querySelector(".header-links");
      const hamburger = document.querySelector(".hamburger");
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        !hamburger?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`header-container ${isHomePage ? "header-transparent" : ""}`}
    >
      <img
        src="public/assets/logo.png"
        alt="Logo"
        className="header-logo"
        onClick={() => navigate("/")}
      />

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src="public/assets/elements/menu.png" alt="Меню" />
      </div>

      <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
        {headerLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="header-btn">ЗАПИСАТИСЯ</div>
    </div>
  );
}
