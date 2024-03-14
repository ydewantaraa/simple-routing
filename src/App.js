// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes, Route as RouteV6 } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <RouteV6 path="/about" element={<About />} />
          <RouteV6 path="/contact" element={<Contact />} />
          <RouteV6 path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
