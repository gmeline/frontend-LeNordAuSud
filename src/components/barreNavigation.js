import React from "react";
import { Link } from "react-router-dom";
import "./BarreNavigation.css";

function BarreNavigation() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
         
        </li>
      </ul>
    </nav>
  );
}

export default BarreNavigation;