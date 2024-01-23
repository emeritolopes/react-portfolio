import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Project />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App;
