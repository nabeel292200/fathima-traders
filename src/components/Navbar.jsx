import { useEffect, useState } from 'react'

const LINKS = [['About', '#about'], ['Products', '#products'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu' : ''}`}>
      <div className="wrap nav-in">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>Fathima <em>Traders</em></a>
        <nav className={`links ${open ? 'open' : ''}`}>
          {LINKS.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="enq" href="#contact" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
        <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
