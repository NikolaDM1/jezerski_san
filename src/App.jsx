import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apartment from './pages/Apartment'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'
import Navbar from './layouts/Navbar'

function App () {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
    
   
    
   
}
export default App