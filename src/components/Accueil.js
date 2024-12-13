import React from "react";
import carte from "../assets/carte.jpg";
import './Accueil.css';

function Accueil() {
  return (
    <div className="container">
      <h1 className="title">Bienvenue chez Le Nord au Sud</h1>
      <h3 className="title2">Notre carte :</h3>
      <img
        src={carte}
        alt="Le Nord au Sud"
        className="image"
      />
      <p className="text">
        Découvrez les meilleures frites artisanales du food truck "Le Nord au Sud". Nous apportons
        une expérience unique, mêlant saveurs du Nord et ambiance chaleureuse.
      </p>
      <h3 className="title2">Localisation :</h3>
      <ul className="list">
        <li>Mardi soir : ???</li>
        <li>Mercredi soir : Castillanes de Laroque d'Olmes</li>
        <li>Jeudi soir : Bastide sur l'Hers</li>
        <li>Vendredi midi et soir : Castillanes de Laroque D'Olmes</li>
        <li>Samedi soir : ???</li>
        <li>Dimanche soir : Parking du Castel d'Olmes</li>
      </ul>
    </div>
  );
}

export default Accueil;
