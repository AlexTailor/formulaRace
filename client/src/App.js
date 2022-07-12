import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Drivers } from "./pages/Drivers";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="drivers" element={<Drivers />} />
      </Routes>
    </div>
  );
}

export default App;
