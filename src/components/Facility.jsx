const WHY = [['46 years', 'of trust'], ['Cutting', 'accuracy'], ['Made', 'to your size'], ['Kerala', '& beyond']]

export default function Facility() {
  return (
    <section className="band">
      <img src="/images/paper_rolls.png" alt="Reel stock warehouse" />
      <div className="band-shade" />
      <div className="wrap band-in">
        <p className="label light reveal">Why Fathima Traders</p>
        <ul className="why reveal">
          {WHY.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
