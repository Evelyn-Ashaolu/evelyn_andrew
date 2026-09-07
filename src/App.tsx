import { useEffect } from 'react'
import portrait from './assets/portrait.png.png'
import accountsImage from "./assets/Accounts I've managed.png"

const categories = [
  { number: '01', label: 'Digital accounts', title: 'Accounts I’ve Managed', description: 'Social media & digital brand management', cta: 'Explore accounts', path: '/accounts', preview: 'accounts', image: accountsImage, alt: 'Evelyn Andrew managing social media and digital brand accounts' },
  { number: '02', label: 'Visual communication', title: 'Design Samples', description: 'Visual campaigns & brand communication', cta: 'Explore designs', path: '/design', preview: 'design', image: undefined, alt: '' },
  { number: '03', label: 'Moving image', title: 'Video Samples', description: 'Short-form content & creative storytelling', cta: 'Explore videos', path: '/video', preview: 'video', image: undefined, alt: '' },
  { number: '04', label: 'The thinking', title: 'Campaigns & Strategy', description: 'Strategy, campaigns & digital growth', cta: 'Explore campaigns', path: '/campaigns', preview: 'campaigns', image: undefined, alt: '' },
]
const pageContent: Record<string, { title: string; intro: string; description: string; label: string }> = {
  '/accounts': { title: 'Accounts I’ve Managed', intro: 'A selection of brands and digital accounts I’ve helped manage, shape, and grow through strategy, content, and consistent digital execution.', description: 'Social media management and digital brand strategy by Evelyn Andrew.', label: 'Selected accounts' },
  '/design': { title: 'Design Samples', intro: 'A collection of visual work created to communicate ideas clearly, strengthen brand presence, and make content worth stopping for.', description: 'Design samples and digital branding work by Evelyn Andrew.', label: 'Visual work' },
  '/video': { title: 'Video Samples', intro: 'Short-form content and visual storytelling created to capture attention, communicate ideas, and keep audiences engaged.', description: 'Video content creation and creative direction by Evelyn Andrew.', label: 'Video work' },
  '/campaigns': { title: 'Campaigns & Strategy', intro: 'A look at the thinking behind the work—from campaign concepts and content strategy to digital execution and performance-focused marketing.', description: 'Campaign strategy and digital marketing work by Evelyn Andrew.', label: 'Campaign case studies' },
}

function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | Evelyn Andrew`
    const setMeta = (property: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${property.includes('og:') ? 'property' : 'name'}="${property}"]`)
      if (!element) { element = document.createElement('meta'); element.setAttribute(property.includes('og:') ? 'property' : 'name', property); document.head.appendChild(element) }
      element.content = content
    }
    setMeta('description', description); setMeta('og:title', `${title} | Evelyn Andrew`); setMeta('og:description', description)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = `${window.location.origin}${window.location.pathname}`
  }, [title, description])
  return null
}
function Nav({ innerPage = false }: { innerPage?: boolean }) { const home = innerPage ? '/' : ''; return <nav className="nav shell" aria-label="Main navigation"><a className="wordmark" href={`${home}#top`} aria-label="Evelyn Andrew home">EA<span>.</span></a><div className="nav-links"><a href={`${home}#about`}>About</a><a href={`${home}#work`}>Work</a><a href={`${home}#contact`}>Contact</a></div><a className="nav-cta" href={`${home}#contact`}>Let's talk <span>↗</span></a></nav> }
function Footer() { return <footer className="footer shell"><span>© 2026 Evelyn Andrew</span><div><a href="#top">Back to top ↑</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer> }

function Home() { return <main><Seo title="Branding & Digital Marketing Strategist" description="Evelyn Andrew is a Branding & Digital Marketing Strategist creating brand strategy, content, social media, and creative direction that move businesses forward." /><Nav />
  <section className="hero shell" id="top"><div className="hero-copy"><p className="hero-name">Evelyn Andrew</p><p className="eyebrow">Digital Brand Marketing Officer / remote</p><h1>Good ideas<br />deserve<br /><em>great<br />momentum.</em></h1><p className="hero-intro">“I turn strategy, creativity, and storytelling into digital experiences that make brands seen, remembered, and chosen.”</p><a className="button button-dark" href="#work">Explore my work <span>↘</span></a></div><div className="hero-art"><div className="portrait-stage"><img className="portrait-image" src={portrait} alt="Evelyn Andrew smiling in a black blazer" /></div><div className="art-sticker">Strategy<br />with feeling</div><div className="art-note">01 — 05</div></div><div className="hero-footer"><span>Scroll to explore</span><span className="line" /><span>Independent since 2018</span></div></section>
  <section className="statement shell" id="about"><p className="section-kicker">The approach</p><div><h2>Less noise.<br /><span>More meaning.</span></h2><div className="statement-copy"><p>“I’m Evelyn — a Branding &amp; Digital Marketing Strategist with 5+ years of experience turning ideas into brands people notice, remember, and trust.</p><p>I’ve worked with businesses across the UK, US, and Nigeria, helping brands in industries ranging from AI and healthcare to recruitment, renewable energy, and lifestyle build stronger digital presences.</p><p>From brand strategy and social media to content, campaigns, and creative direction, I bring strategy and creativity together to create work that connects with the right audience—and moves businesses forward.”</p></div><a className="text-link" href="mailto:hello@evelynandrew.com">More about my practice <span>↗</span></a></div></section>
  <section className="explore shell" id="work" aria-labelledby="explore-title"><div className="explore-heading"><p className="section-kicker">The work</p><h2 id="explore-title">Different skills.<br /><span>One strategic mind.</span></h2><p>From managing digital accounts to creating campaigns, designing visual stories, and producing content, here’s a look at the work behind the strategy.</p></div><div className="category-grid">{categories.map((category) => <article className="category-card" key={category.path}><a href={category.path} aria-label={`${category.cta}: ${category.title}`}><div className={`category-preview ${category.preview}${category.image ? ' has-image' : ''}`}>{category.image && <img src={category.image} alt={category.alt} />}<span className="category-number">{category.number}</span><span className="category-label">{category.label}</span><i /></div><p className="project-type">{category.label}</p><h3>{category.title}</h3><p className="category-description">{category.description}</p><span className="project-link category-cta">{category.cta} <b>↗</b></span></a></article>)}</div></section>
  <section className="contact shell" id="contact"><p className="section-kicker">Have a good one?</p><h2>Let's make it!<br /><em>go somewhere.</em></h2><a className="contact-email" href="mailto:hello@evelynandrew.com">hello@evelynandrew-vercel.app.com <span>↗</span></a></section><Footer />
</main> }
function PortfolioPage({ content }: { content: (typeof pageContent)[string] }) { return <main><Seo title={content.title} description={content.description} /><Nav innerPage /><section className="portfolio-page shell" id="top"><p className="section-kicker">The work</p><h1>{content.title}</h1><p className="portfolio-intro">{content.intro}</p><a className="text-link" href="/#work">← Back to work</a><section className="portfolio-placeholder" aria-labelledby="portfolio-label"><h2 id="portfolio-label">{content.label}</h2><div className="placeholder-grid" aria-label={`${content.label} portfolio area`}><div /><div /><div /></div><p>Portfolio work will be added here.</p></section></section><Footer /></main> }
function App() { const content = pageContent[window.location.pathname]; return content ? <PortfolioPage content={content} /> : <Home /> }
export default App
