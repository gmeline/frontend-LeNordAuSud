import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BarreNavigation.css"; 

function BarreNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="barre-navigation">
      <button className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`line ${isOpen ? "hide" : ""}`}></div>
        <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
      </button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/carte">Carte</Link></li>
          <li><Link to="/localisation">Localisation</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default BarreNavigation;
