// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import BarreNavigation from "./components/barreNavigation";
import Carte from "./components/Carte";
import Localisation from "./components/Localisation";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
