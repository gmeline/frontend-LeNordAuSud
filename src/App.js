// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import EventForm from "./components/EventForm";

function App() {
  return (
    <Router>
      <div>
        <header style={{ backgroundColor: "#333", color: "#FFD700", padding: "10px" }}>
          <h1>Le Nord au Sud - Food Truck</h1>
        </header>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/event-request" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
