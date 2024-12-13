// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import BarreNavigation from "./components/barreNavigation";

function App() {
  return (
    <Router>
      <div>
        <header style={{ backgroundColor: "#333", color: "#FFD700", padding: "10px" }}>
          <h1>Le Nord au Sud</h1>
           
        </header>
        
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
