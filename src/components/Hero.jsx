export default function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src="/images/hero_machine.jpeg" alt="" />
      <div className="hero-shade" />
      <div className="wrap hero-body">
        <p className="kicker rise" style={{ '--d': '.1s' }}>Paper Converters · Kerala</p>
        <h1 className="rise" style={{ '--d': '.25s' }}>
          Precision <em>newsprint</em> paper converting for every requirement.
        </h1>
        <div className="hero-row rise" style={{ '--d': '.5s' }}>
          <a href="#contact" className="cta">Request a quote <span>→</span></a>
          <a href="#products" className="link">Explore products</a>
        </div>
      </div>
      <div className="wrap hero-meta">
        <div><b>46</b><span>Years of experience</span></div>
        <div><b>Kerala</b><span>& beyond</span></div>
        <div className="scroll"><span>Scroll</span><i /></div>
      </div>
    </section>
  )
}
