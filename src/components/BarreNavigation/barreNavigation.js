import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BarreNavigation.css";
import logo from "../../assets/barreNavigation/logo.png";

function BarreNavigation() {
 const [isOpen, setIsOpen] = useState(false);


 const toggleMenu = () => {
   setIsOpen(!isOpen);
 };

 const handleLinkClick = () => {
   setIsOpen(false);
 };

 return (
   <div className="barre-navigation">
     <img src={logo} alt="Le Nord au Sud" className="logo" />
     <button className="burger" onClick={toggleMenu}>
       <div className={`line ${isOpen ? "rotate1" : ""}`}></div>
       <div className={`line ${isOpen ? "hide" : ""}`}></div>
       <div className={`line ${isOpen ? "rotate2" : ""}`}></div>
     </button>

     <nav className={`nav ${isOpen ? "open" : ""}`}>
       <ul>
         <li><Link to="/" onClick={handleLinkClick}>Accueil</Link></li>
         <li><Link to="/carte" onClick={handleLinkClick}>Carte</Link></li>
         <li><Link to="/localisation" onClick={handleLinkClick}>Emplacements</Link></li>
         <li><Link to="/evenement" onClick={handleLinkClick}>Évènements</Link></li>
       </ul>
     </nav>
   </div>
 );
}

export default BarreNavigation;