// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import BarreNavigation from "./components/barreNavigation";

function App() {
  return (
    <Router>
      <div>
        <header>
           <BarreNavigation/>
        </header>
        
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
