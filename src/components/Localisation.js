import React from "react";
import "./Localisation.css";
import marche_noel from "../assets/marche_noel/marche_noel.jpg";

function Localisation() {
  return (
    <div>
      <h2>Nos emplacements</h2>
      <table className="location-table">
        <thead>
          <tr>
            <th>Jour</th>
            <th>Lieu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mardi soir</td>
            <td>Léran</td>
          </tr>
          <tr>
            <td>Mercredi soir</td>
            <td>Castillanes de Laroque d'Olmes</td>
          </tr>
          <tr>
            <td>Jeudi soir</td>
            <td>Bastide sur l'Hers</td>
          </tr>
          <tr>
            <td>Vendredi midi et soir</td>
            <td>Castillanes de Laroque D'Olmes</td>
          </tr>
          <tr>
            <td>Samedi midi et soir</td>
            <td>Castillanes de Laroque d'Olmes</td>
          </tr>
          <tr>
            <td>Dimanche soir</td>
            <td>Parking du Castel d'Olmes</td>
          </tr>
        </tbody>
      </table>
      <h6>*midi : 11h à 13h & soir : 19h à 21h</h6>
      
      <h2>Nos évènements</h2>
      <h4 className="date">Du 18 décembre au 24 décembre 2024</h4>
      <h4>Le marché de noêl de Laroque d'Olmes avec nos churros maison</h4>
        <img src={marche_noel} alt="Le Nord au Sud" className="image" />
    </div>
  );
}

export default Localisation;
