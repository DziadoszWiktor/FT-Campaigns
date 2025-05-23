import { Link, useLocation } from "react-router-dom";
import logoPath from "../../public/cart.svg";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Zamyka menu po zmianie ścieżki (UX na mobile)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button
          className="navbar-burger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
        <ul className={`navbar-links${menuOpen ? " open" : ""}`}>
          <li>
            <Link to="/campaigns">Campaigns</Link>
          </li>
          <li>
            <Link to="/create">Create Campaign</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={logoPath} alt="Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
