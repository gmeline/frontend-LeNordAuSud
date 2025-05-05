import React from "react";
import "./Evenement.css";
import marche_noel from "../../assets/evenement/marche_noel/marche_noel.jpg";

function Evenement() {
  return (
    <div>
      <h2>Nos évènements</h2>
      <h4 className="date">Du 18 décembre au 24 décembre 2024</h4>
      <h4>Le marché de noêl de Laroque d'Olmes avec nos churros maison</h4>
        <img src={marche_noel} alt="Le Nord au Sud" className="image" />
    </div>
  );
}

export default Evenement;