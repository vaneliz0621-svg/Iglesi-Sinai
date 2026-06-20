import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Horarios from './components/Horarios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Horarios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
