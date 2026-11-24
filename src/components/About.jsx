import { PROCESS } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <p className="label reveal">( 01 ) &nbsp;About</p>
        <h2 className="statement reveal">
          Four decades of business expertise — serving Kerala and beyond with <em>high quality paper</em> for over 46 years.
        </h2>
        <div className="about-cols">
          <div className="about-img reveal">
            <img src="/images/paper_factory.png" alt="Converting line with operator" loading="lazy" />
          </div>
          <div className="about-text reveal">
            <p>
              Fathima Traders has had the honor and privilege of serving businesses all over Kerala and outside Kerala
              with high quality paper for over 46 years.
            </p>
            <p>
              With 46 years of experience in the paper industry, we are one of the leading paper converters in Kerala.
              We specialize in converting large paper rolls into customer specified sizes and formats using accurate
              reel to sheeting and cutting process.
            </p>
            <ol className="steps">
              {PROCESS.map(([n, t]) => <li key={n}><span>{n}</span>{t}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
