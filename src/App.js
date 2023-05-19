import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import HomePage from './Pages/HomePage/HomePage.jsx'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
