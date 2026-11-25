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
  const close = () => setOpen(false)
  return (
    <>
      <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="wrap nav-in">
          <a href="#home" className="logo" onClick={close}>Fathima <em>Traders</em></a>
          <nav className="links">
            {LINKS.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a className="enq" href="#contact">Enquire</a>
          </nav>
          <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </header>
      {/* Mobile menu lives outside the header so it is never clipped by the header's blur layer */}
      <div className={`mmenu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav className="wrap">
          {LINKS.map(([l, h], i) => (
            <a key={h} href={h} onClick={close} tabIndex={open ? 0 : -1} style={{ '--i': i }}>{l}</a>
          ))}
          <a className="enq" href="#contact" onClick={close} tabIndex={open ? 0 : -1}>Enquire</a>
        </nav>
      </div>
    </>
  )
}
