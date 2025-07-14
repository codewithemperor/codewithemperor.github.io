import React from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { Navbar } from '../components/Navbar'
import { Herosection } from '../components/Sections/Herosection'
import SkillsSection from '../components/Sections/SkillsSection'
import ProjectsSection from '../components/Sections/ProjectsSection'
import AboutSection from '../components/Sections/AboutSection'
import ContactSection from '../components/Sections/ContactSection'
import Footer from '../components/Sections/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Herosection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App