import React from "react";
import "./Carte.css";
import carte from "../../assets/carte/carte.jpg";

function Carte() {
 return (
   <div className="carte-container">
     <img src={carte} alt="Le Nord au Sud" className="image" />
   </div>
 );
}

export default Carte;