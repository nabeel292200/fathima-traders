import { useState } from 'react'
import { PRODUCTS } from '../data/content.js'

const PICS = ['/images/paper_roller.png', '/images/hero_machine.jpeg', '/images/paper_rolls.png', '/images/paper_factory.png']

export default function Products() {
  const [active, setActive] = useState(0)
  return (
    <section id="products" className="products">
      <div className="wrap">
        <p className="label reveal">( 02 ) &nbsp;Products</p>
        <h2 className="display reveal">Paper for every need, <em>cut to your size.</em></h2>
        <div className="prod-grid">
          <ul className="plist reveal">
            {PRODUCTS.map(([name, desc, , featured], i) => (
              <li key={name} className={`${i === active ? 'on' : ''} ${featured ? 'feat' : ''}`} onMouseEnter={() => setActive(i)}>
                <a href="#contact" onFocus={() => setActive(i)}>
                  <span className="pn">{featured ? '★' : String(i).padStart(2, '0')}</span>
                  <span className="pt">
                    {featured && <i className="ftag">Featured</i>}
                    <b>{name}</b><small>{desc}</small>
                  </span>
                  <span className="pa">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="pview reveal" aria-hidden="true">
            {PICS.map((p, i) => <img key={p} src={p} alt="" className={i === active % PICS.length ? 'on' : ''} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
