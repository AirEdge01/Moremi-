import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import ScrollToTop from './assets/components/ScrollToTop'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Services from './assets/pages/Services'
import Contact from './assets/pages/Contact'

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f6fbff' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App