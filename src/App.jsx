import React from 'react'
import { useState } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project/Project'

function App() {
  return (
    <>
    <div> className="container-fluid d-flex flex-row justify-content-start"
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<div className='col-lg-10 col-md-8'><Home /></div>} />
          <Route path="header" element={<div className='col-lg-10 col-md-8'><Header /></div>} /> 
          <Route path="contacts" element={<div className='col-lg-10 col-md-8'><Contact /></div>} />
          <Route path="project" element={<div className='col-lg-10 col-md-8'><Project /></div>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}








export default App
