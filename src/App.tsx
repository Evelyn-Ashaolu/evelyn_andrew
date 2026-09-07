import portrait from './assets/portrait.png.png'

const projects = [
  {
    number: '01',
    type: 'Brand launch / Social',
    title: 'Making room for\nbetter mornings.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85',
    result: '+184% reach',
  },
  {
    number: '02',
    type: 'Performance / E-commerce',
    title: 'A quieter route to\nmore conversions.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85',
    result: '3.8x ROAS',
  },
  {
    number: '03',
    type: 'Content / Strategy',
    title: 'Small rituals,\nbigger following.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=85',
    result: '+62k community',
  },
]

function App() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top">EA<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:hello@evelynandrew.com">Let's talk <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Digital Brand Marketing Officer / remote</p>
          <h1>Good ideas deserve<br /><em>great momentum.</em></h1>
          <p className="hero-intro">I build thoughtful campaigns that turn attention into action, and action into lasting growth.</p>
          <a className="button button-dark" href="#work">See selected work <span>↓</span></a>
        </div>
        <div className="hero-art">
          <div className="portrait-stage">
            <img className="portrait-image" src={portrait} alt="Evelyn Andrew smiling in a black blazer" />
          </div>
          <div className="art-sticker">Strategy<br />with feeling</div>
          <div className="art-note">01 — 05</div>
        </div>
        <div className="hero-footer">
          <span>Scroll to explore</span>
          <span className="line" />
          <span>Independent since 2018</span>
        </div>
      </section>

      <section className="statement shell" id="about">
        <p className="section-kicker">The approach</p>
        <div>
          <h2>Less noise.<br /><span>More meaning.</span></h2>
          <p className="statement-copy">From first thought to final report, I bring strategy, creative direction, and performance thinking into the same room. The result is work people notice and businesses can measure.</p>
          <a className="text-link" href="mailto:hello@evelynandrew.com">More about my practice <span>↗</span></a>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2>Proof, not promises.</h2>
          <span className="project-count">(03)</span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="project-number">{project.number}</span>
                <span className="project-result">{project.result}</span>
              </div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3>
              <a className="project-link" href="#contact" aria-label={`Discuss ${project.title.replace('\n', ' ')}`}>View case study <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-kicker">Have a good one?</p>
        <h2>Let's make it!<br /><em>go somewhere.</em></h2>
        <a className="contact-email" href="mailto:hello@evelynandrew.com">hello@evelynandrew-vercel.app.com <span>↗</span></a>
      </section>

      <footer className="footer shell">
        <span>© 2026 Evelyn Andrew</span>
        <div><a href="#top">Back to top ↑</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </footer>
    </main>
  )
}

export default App
