import React from "react";
import './Accueil.css';
import photo_camion from "../assets/photo_camion.jpg";

function Accueil() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={photo_camion} alt="Le Nord au Sud" className="image1" />
        <h1 className="title">Bienvenue chez Le Nord au Sud</h1>
      </div>
      <p className="text1">Prouvez ici la convivialité des gens du nord, accompagnant à merveille la délicieuse <span className="style1">frite fraîche cuite au gras de bœuf</span>.</p>
      <p className="text2">Laissez-vous faire découvrir les légendaires <span className="style2">fricadelles, mexicanos, poulycroc,</span> seul ou en <u>"Américain"</u>.</p>
      <p className="text3">Savourez chez nous de délicieuses <span className="style2">brochettes marinées "maison", nos sauces "maison"</span> et chaque semaine une recette différente des spécialités du nord, concoctée par nos soins.</p>
      <p className="text4">Notre pain, fabriqué par notre boulanger local, est certifié par le label <span className="style2">"NOU"</span>, issu d'un collectif 100% ariégeois.</p>
    </div>
  );
}

export default Accueil;
