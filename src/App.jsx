import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Set default theme on <html> so Navbar toggle can override it
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const sections = document.querySelectorAll('.section-enter')
    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
