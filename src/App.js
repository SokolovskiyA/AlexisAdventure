import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import HomePage from './Pages/HomePage/HomePage.jsx'
import Store from './Pages/Store/Store.jsx';
import ContactPage from './Pages/ContactPage/ContactPage.jsx';
import Rent from './Pages/Rent/Rent.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/store" element={<Store/>} />
          <Route path="/rent" element={<Rent/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
