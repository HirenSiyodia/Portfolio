import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

function App() {

  return (
    <div className='relative min-h-screen gradient text-white bg-gray-950'>
    <ParticlesBackground/>
    <div className='relative z-10'>
      <Navbar/>
      <Home/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
 