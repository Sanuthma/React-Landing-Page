import React, { useState } from "react";

import "./App.css";
import NavBar from './NavBar';
import Footer from './Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {createContext} from "react";

function App() {  
  return (
    <div className="App" >
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
          <Footer/>
        </Router>
    </div>
   
  );
}

export default App;
