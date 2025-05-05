import React from "react";
import './Accueil.css';
import photo_camion from "../../assets/accueil/photo_camion.jpg";

function Accueil() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={photo_camion} alt="Le Nord au Sud" className="image1" />
        <h1 className="title">Bienvenue chez "Le Nord au Sud"</h1>
      </div>
      <p className="text1">Retrouvez ici la convivialité des gens du nord, accompagnant à merveille la délicieuse <span className="style2">frite fraîche cuite au gras de bœuf.</span></p> 
      <p className="text2">Laissez-nous faire découvrir les légendaires <span className="style2">fricadelles, mexicanos, poulycroc,</span> seul, en sandwich ou en <u>"Américain"</u> (pain, sauce, viande, frites).</p>
      <p className="text3">Savourez chez nous de délicieuses <span className="style2">brochettes marinées "maison", nos sauces "maison", notre filet américain "maison"</span> et chaque semaine une recette différente des spécialités du nord, concoctée par nos soins.</p>
      <p className="text4">Notre pain, fabriqué par notre boulanger local, est certifié par le label <span className="style2">"NOU"</span>, issu d'un collectif 100% ariégeois.</p>
    </div>
  );
}

export default Accueil;