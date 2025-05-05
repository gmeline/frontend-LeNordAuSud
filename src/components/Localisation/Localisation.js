import React from "react";
import "./Localisation.css";

const horaires = [
  { jour: "Mardi midi", lieu: "Léran" },
  { jour: "Mercredi midi **", lieu: "Parking AFPA - Zone du Pic Pamiers" },
  { jour: "Mercredi soir", lieu: "Castillanes de Laroque d'Olmes" },
  { jour: "Jeudi soir", lieu: "La Bastide sur l'Hers" },
  { jour: "Vendredi midi", lieu: "Marché de Lavelanet" },
  { jour: "Vendredi soir", lieu: "Castillanes de Laroque D'Olmes" },
  { jour: "Samedi midi et soir", lieu: "Castillanes de Laroque d'Olmes" },
];

function Localisation() {
  return (
    <section className="localisation">
      <h1>Nos emplacements</h1>
      <table className="location-table">
        <thead>
          <tr>
            <th>Jour</th>
            <th>Lieu</th>
          </tr>
        </thead>
        <tbody>
          {horaires.map(({ jour, lieu }) => (
            <tr key={jour}>
              <td>{jour}</td>
              <td>{lieu}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="remarques">
        <p>* midi : 11h30 à 13h30 & soir : 19h à 21h</p>
        <p>** mercredi midi : 11h30 à 14h</p>
      </footer>
    </section>
  );
}

export default Localisation;
