import { CONTACT } from '../data/content.js'

export default function MobileBar() {
  return (
    <div className="mbar">
      <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>Call</a>
      <a className="wa" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  )
}
