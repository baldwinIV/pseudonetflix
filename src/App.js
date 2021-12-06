import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, Contents, Curation, Individualinfo, Recommendation } from './Pages';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/curation" element={<Curation />} />
          <Route path="/individualinfo" element={<Individualinfo />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
