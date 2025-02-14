import React from "react";
import "./Localisation.css";

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
            <td>Mardi midi</td>
            <td>Léran</td>
          </tr>
          <tr>
            <td>Mardi soir</td>
            <td>Castillanes de Laroque d'Olmes</td>
          </tr>
          <tr>
            <td>Mercredi midi **</td>
            <td>Parking AFPA - Zone du Pic Pamiers</td>
          </tr>
          <tr>
            <td>Mercredi soir</td>
            <td>Castillanes de Laroque d'Olmes</td>
          </tr>
          <tr>
            <td>Jeudi soir</td>
            <td>La Bastide sur l'Hers</td>
          </tr>
          <tr>
            <td>Vendredi midi</td>
            <td>Marché de Lavelanet</td>
          </tr>
          <tr>
            <td>Vendredi soir</td>
            <td>Castillanes de Laroque D'Olmes</td>
          </tr>
          <tr>
            <td>Samedi midi et soir</td>
            <td>Castillanes de Laroque d'Olmes</td>
          </tr>
        </tbody>
      </table>
      <h6>*midi : 11h30 à 13h30 & soir : 19h à 21h</h6>
      <h6>**mercredi midi : 11h30 à 14h</h6>
      
      
    </div>
  );
}

export default Localisation;
