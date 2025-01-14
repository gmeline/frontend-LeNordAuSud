import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import BarreNavigation from "./components/BarreNavigation/barreNavigation";
import Carte from "./components/Carte/Carte";
import Localisation from "./components/Localisation/Localisation";
import Evenement from "./components/Evenement/Evenement";

function App() {
  return (
    <Router>
      <div>
        <header>
           <BarreNavigation/>
        </header>
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/evenement" element={<Evenement/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
