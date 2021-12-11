import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Home, Contents, Curation, Individualinfo, Posting } from './Pages';
import './App.css';

function App() {
  return (
    <div style = {{display: "flex", flexDirection: "column", alignItems : "center"}}>
      <div style={{ backgroundColor: "#000000", width: "1400px", height: "auto", paddingTop : "50px", paddingBottom: "100px", color: "#ff220c" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/curation" element={<Curation />} />
            <Route path="/individualinfo" element={<Individualinfo />} />
            <Route path="/posting" element={<Posting />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>


  );
}

export default App;
