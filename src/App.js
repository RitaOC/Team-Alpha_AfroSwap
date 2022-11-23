import './App.css';
import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import { Landing } from '../src/components/Landing'
import SwapPage from './SwapPage';

function App() {
  return (
    <Routes>
      <Route path="/swap" element={<SwapPage />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}



export default App;