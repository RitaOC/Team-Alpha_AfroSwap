import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Contact from "./components/Contact";
import SwapPage from "./SwapPage";

function App() {
  return (
    <Routes>
      <Route path="/swap" element={<SwapPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
