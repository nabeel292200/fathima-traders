import { CONTACT, PRODUCTS } from '../data/content.js'

export default function Contact() {
  const send = (e) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const msg = `Hello Fathima Traders,\nName: ${d.name}\nPhone: ${d.phone}\nProduct: ${d.product}\n${d.message || ''}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <p className="label light">( 03 ) &nbsp;Contact</p>
          <h2 className="display">Let's convert <em>your requirement.</em></h2>
          <dl className="info">
            <div><dt>Phone</dt><dd className="phones">{CONTACT.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>)}</dd></div>
            <div><dt>WhatsApp</dt><dd><a href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.waText)}`} target="_blank" rel="noreferrer">+91 97464 04048 · Chat now →</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd></div>
            <div><dt>Address</dt><dd>{CONTACT.address}</dd></div>
          </dl>
        </div>
        <form className="reveal" onSubmit={send}>
          <label>Name<input name="name" required placeholder="Your name" autoComplete="name" /></label>
          <label>Phone<input name="phone" type="tel" required placeholder="Phone number" autoComplete="tel" /></label>
          <label>Product
            <select name="product">{PRODUCTS.map(([n]) => <option key={n}>{n}</option>)}</select>
          </label>
          <label>Requirement<textarea name="message" placeholder="Size, quantity, GSM…" /></label>
          <button className="cta solid" type="submit">Send via WhatsApp <span>→</span></button>
        </form>
      </div>
    </section>
  )
}
