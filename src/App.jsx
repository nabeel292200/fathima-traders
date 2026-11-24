import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Facility from './components/Facility.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Facility />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
