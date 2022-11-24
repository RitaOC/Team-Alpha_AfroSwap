import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Landing } from './Landing';
import { Contact } from './Contact';
import SwapPage from './SwapPage';

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