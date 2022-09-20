import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import { data } from "./data";
import Products from "./Products";
import Buttons from "./Buttons";
import Home from "./Home";
import About from "./About";
import ContactForm from "./ContactForm";
import "./App.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav>
      <Link to="/" className="link">Shop</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactForm/>} />
    </Routes>
    </Router>
  )
  
}

export default App;