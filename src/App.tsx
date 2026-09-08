import { useEffect } from 'react'
import portrait from './assets/portrait.png.png'
import accountsImage from "./assets/Accounts I've managed.png"
import designImage from './assets/Design Samples.jpg'
import myDesignOne from './assets/My Designs 1.png'
import myDesignTwo from './assets/My Designs 2.jpg'
import campaignsImage from './assets/Campaigns & Strategy.jpg'
import videoSampleOne from './assets/Video Sample 1.MP4?url'
import videoSampleTwo from './assets/Video Sample 2.MP4?url'
import cvPdf from './assets/Evelyn Andrew Social Media Portfolio (4)_.pdf'
import priorityGroupProfile from './assets/Priority Groups Services NJ.jpeg'
import pgnjPostOne from './assets/PGNJ post 1.jpeg'
import pgnjPostTwo from './assets/PGNJ Post 2.jpeg'
import pgnjPostThree from './assets/PGNJ post 3.jpeg'
import universityOfExcellenceProfile from './assets/University of Excellence.jpeg'
import uoeOne from './assets/UOE 1.jpeg'
import uoeTwo from './assets/UOE 2.jpeg'
import uoeThree from './assets/UOE 3.jpeg'
import kayganicsProfile from './assets/Kayganics.png'
import kayOne from './assets/Kay 1.jpeg'
import kayTwo from './assets/Kay 2.jpeg'
import kayThree from './assets/Kay 3.jpeg'
import sylvianCareProfile from './assets/Sylviancare.jpeg'
import slyOne from './assets/Sly 1.jpeg'
import slyTwo from './assets/Sly 2.jpeg'
import slyThree from './assets/Sly 3.jpeg'

const linkedinUrl = 'https://www.linkedin.com/in/evelyn-andrew-3190b6236'
const googleDriveUrl = 'https://drive.google.com/drive/folders/1ilnG84zrcumAx9FZSIEc8wOwrESxX6zJ?usp=sharing'

const categories = [
  { number: '01', label: 'Digital accounts', title: 'Accounts I’ve Managed', description: 'Social media & digital brand management', cta: 'Explore accounts', path: '/accounts', preview: 'accounts', image: accountsImage, alt: 'Evelyn Andrew managing social media and digital brand accounts' },
  { number: '02', label: 'Creative work', title: 'Creative Work', description: 'Design, video & visual storytelling', cta: 'Explore creative work ↗', path: '/creative-work', preview: 'design', image: designImage, alt: 'Design samples created by Evelyn Andrew for brand and digital marketing communication' },
  { number: '03', label: 'The thinking', title: 'Campaigns & Strategy', description: 'Strategy, campaigns & digital growth', cta: 'Explore campaigns', path: '/campaigns', preview: 'campaigns', image: campaignsImage, alt: 'A white king chess piece breaking apart beside a purple pawn chess piece on a light background' },
]
const campaignsContent = { title: 'Campaigns & Strategy', intro: 'A look at the thinking behind the work—from campaign concepts and content strategy to digital execution and performance-focused marketing.', description: 'Campaign strategy and digital marketing work by Evelyn Andrew.', label: 'Campaign case studies' }

const pageContent: Record<string, { title: string; intro: string; description: string; label: string }> = {
  '/accounts': { title: 'Accounts I’ve Managed', intro: 'A selection of brands and digital accounts I’ve helped manage, shape, and grow through strategy, content, and consistent digital execution.', description: 'Social media management and digital brand strategy by Evelyn Andrew.', label: 'Selected accounts' },
  '/campaigns': campaignsContent,
  '/campaigns-strategy': campaignsContent,
}

const campaignCaseStudies = [
  {
    number: '01',
    title: 'KAYGANICS',
    descriptor: 'NATURAL SKINCARE BRAND',
    objective: 'Build a consistent, engaging, and product-focused social media presence for Kayganics, a natural skincare brand targeting health-conscious Nigerian women, men, and children.',
    strategy: [
      { title: 'CONTENT PLANNING', text: 'Developed a weekly content calendar built around educational reels, brand storytelling, product tutorials, and testimonials.' },
      { title: 'AUDIENCE & POSITIONING', text: 'Conducted audience research to align the brand voice with customer expectations.' },
      { title: 'DISCOVERABILITY', text: 'Introduced hashtag and engagement strategies to improve discoverability.' },
      { title: 'OPTIMIZATION', text: 'Used weekly insights to refine posting times and content types.' },
      { title: 'CAMPAIGN ALIGNMENT', text: 'Coordinated content with the CEO\'s marketing and promotional campaigns.' },
    ],
    executionHighlights: [
      { value: '60+', label: 'BRANDED POSTS', text: 'Created carousels, reels, and stories across the campaign.' },
      { value: '3', label: 'PRODUCT LAUNCHES', text: 'Managed content for 3 new skincare products.' },
      { value: 'CREATIVE', label: 'PRODUCTION', text: 'Designed branded visuals using Canva and CapCut.' },
    ],
    results: [
      { value: '+1,200', label: 'NEW FOLLOWERS', text: 'in 3 months through organic growth' },
      { value: '65%', label: 'ENGAGEMENT INCREASE', text: '' },
      { value: '2×', label: 'HIGHER SAVES & SHARES', text: 'on product-related posts' },
      { value: '20%', label: 'INCREASE IN PRODUCT-ORDER DMs', text: '' },
    ],
    tools: 'Canva · Photoshop · CapCut · Meta Business Suite · Instagram Insights · Google Sheets',
    visual: kayganicsProfile,
    visualAlt: 'Kayganics profile and brand visual managed by Evelyn Andrew',
    secondaryVisual: kayOne,
    secondaryAlt: 'Kayganics social media content example managed by Evelyn Andrew',
  },
  {
    number: '02',
    title: 'UNIVERSITY OF EXCELLENCE',
    descriptor: 'AI WEBINAR CAMPAIGN',
    objective: 'Increase awareness and drive registrations for an AI webinar while positioning the University of Excellence as a trusted platform for professionals, business owners, entrepreneurs, and ministry leaders seeking practical AI skills.',
    strategy: [
      { title: 'CAMPAIGN PLANNING', text: 'Developed a content calendar leading up to the webinar.' },
      { title: 'EDUCATIONAL CONTENT', text: 'Created educational posts, countdown graphics, and promotional videos.' },
      { title: 'STORYTELLING', text: 'Used storytelling and value-driven content to build interest.' },
      { title: 'PAID DISTRIBUTION', text: 'Launched targeted Meta Ads to reach professionals, entrepreneurs, and AI enthusiasts.' },
      { title: 'OPTIMIZATION', text: 'Optimized content based on audience engagement and campaign performance.' },
    ],
    executionHighlights: [
      { value: 'CREATIVE', label: 'DESIGN', text: 'Designed webinar flyers and promotional creatives using Canva.' },
      { value: 'COPY', label: 'WRITING', text: 'Wrote captions and promotional copy across social media platforms.' },
      { value: 'VIDEO', label: 'CONTENT', text: 'Created short-form videos explaining the value of attending the webinar.' },
      { value: 'PAID ADS', label: 'MANAGEMENT', text: 'Set up and monitored Meta Ads to drive registrations.' },
      { value: 'COMMUNITY', label: 'ENGAGEMENT', text: 'Responded to enquiries and encouraged sign-ups through comments and direct messages.' },
      { value: 'CAMPAIGN', label: 'OPTIMIZATION', text: 'Tracked campaign performance and adjusted creatives and messaging where needed.' },
    ],
    results: [
      { value: 'STRONG', label: 'REGISTRATIONS', text: 'Generated a strong number of webinar registrations through organic content and Meta Ads.' },
      { value: 'HIGH', label: 'ATTENDANCE', text: 'Achieved an impressive attendance rate on the webinar day.' },
      { value: '+', label: 'ENGAGEMENT', text: 'Increased engagement across social media leading up to the event.' },
      { value: 'TRUSTED', label: 'POSITIONING', text: 'Helped position the University of Excellence as a trusted AI learning platform.' },
    ],
    tools: 'Canva · Meta Ads Manager · Meta Business Suite · CapCut · ChatGPT · Google Forms · Instagram Insights · Facebook Insights',
    visual: universityOfExcellenceProfile,
    visualAlt: 'University of Excellence campaign and brand visual managed by Evelyn Andrew',
    secondaryVisual: uoeOne,
    secondaryAlt: 'University of Excellence webinar promotional content managed by Evelyn Andrew',
  },
]

const clientWins = [
  { value: '3×', label: 'ENGAGEMENT', text: 'Managed a 30-day campaign that outperformed the previous quarter\'s engagement metrics by 3×.' },
  { value: '20K+', label: 'ORGANIC VIEWS', text: 'Created content that led to a viral reel with over 20,000 views organically.' },
  { value: '50%', label: 'BRAND AWARENESS', text: 'Boosted brand awareness by 50% through collaboration with local micro-influencers.' },
  { value: '40%', label: 'FASTER CONTENT TURNAROUND', text: 'Reduced content turnaround time by 40% using streamlined content planning and design workflows.' },
]

const creativeWorkSamples = {
  design: [
    { id: 'design-1', label: 'My Design 1', src: myDesignOne, alt: 'My Design 1 — social media design by Evelyn Andrew' },
    { id: 'design-2', label: 'My Design 2', src: myDesignTwo, alt: 'My Design 2 — social media design by Evelyn Andrew' },
  ],
  video: [
    { id: 'video-1', label: 'Video sample 1', src: videoSampleOne, alt: 'Video sample 1 — creative work by Evelyn Andrew' },
    { id: 'video-2', label: 'Video sample 2', src: videoSampleTwo, alt: 'Video sample 2 — creative work by Evelyn Andrew' },
  ],
}

const accountEntries = [
  {
    number: '01',
    brand: 'Priority Group Services NJ',
    intro: 'A selection of brands I’ve supported through social media management, content creation, strategy, and digital brand communication.',
    description: 'Managed the brand’s social media presence across Instagram, Facebook, and LinkedIn, with a focus on consistent content, audience engagement, visual communication, and strategic brand storytelling.',
    instagramUrl: 'https://www.instagram.com/prioritygroupservicesnj/',
    ctaText: 'Visit Instagram ↗',
    ctaLabel: 'Visit Priority Group Services NJ on Instagram',
    roles: ['Social Media Management', 'Content Strategy', 'Content Creation'],
    platforms: ['Instagram', 'Facebook', 'LinkedIn'],
    profileImage: priorityGroupProfile,
    profileAlt: 'Priority Group Services NJ Instagram profile managed by Evelyn Andrew',
    posts: [
      { src: pgnjPostOne, alt: 'Priority Group Services NJ social media post example one managed by Evelyn Andrew' },
      { src: pgnjPostTwo, alt: 'Priority Group Services NJ social media post example two managed by Evelyn Andrew' },
      { src: pgnjPostThree, alt: 'Priority Group Services NJ social media post example three managed by Evelyn Andrew' },
    ],
    workAreas: [
      {
        title: 'Social Media Management',
        text: 'Content planning, publishing, and maintaining a consistent digital presence.',
      },
      {
        title: 'Content Creation',
        text: 'Developing branded social content designed to inform, engage, and communicate clearly.',
      },
      {
        title: 'Content Strategy',
        text: 'Planning content around audience needs, brand messaging, and business goals.',
      },
      {
        title: 'Creative Direction',
        text: 'Guiding the visual direction and presentation of social media content.',
      },
    ],
  },
  {
    number: '02',
    brand: 'University of Excellence',
    intro: 'A selection of brands I’ve supported through social media management, content creation, strategy, and digital brand communication.',
    description: 'Managed the brand’s social media presence across Instagram and Facebook, developing educational content, promotional campaigns, visual storytelling, and digital communication designed to engage leaders, entrepreneurs, and learners.',
    instagramUrl: 'https://www.instagram.com/university_of_excellence/',
    ctaText: 'Visit Instagram ↗',
    ctaLabel: 'Visit University of Excellence on Instagram',
    roles: ['Social Media Management', 'Content Creation', 'Content Strategy', 'Creative Direction', 'Video Editing'],
    platforms: ['Instagram', 'Facebook'],
    profileImage: universityOfExcellenceProfile,
    profileAlt: 'University of Excellence Instagram profile managed by Evelyn Andrew',
    posts: [
      { src: uoeOne, alt: 'University of Excellence social media post example one managed by Evelyn Andrew' },
      { src: uoeTwo, alt: 'University of Excellence social media post example two managed by Evelyn Andrew' },
      { src: uoeThree, alt: 'University of Excellence social media post example three managed by Evelyn Andrew' },
    ],
    workAreas: [
      {
        title: 'Social Media Management',
        text: 'Managing and maintaining the brand’s social presence across Instagram and Facebook.',
      },
      {
        title: 'Content Creation',
        text: 'Creating educational, promotional, and brand-focused content for the audience.',
      },
      {
        title: 'Content Strategy',
        text: 'Planning content around audience interests, brand messaging, education, and business goals.',
      },
      {
        title: 'Creative Direction',
        text: 'Guiding the visual direction and overall presentation of social content.',
      },
      {
        title: 'Video Editing',
        text: 'Editing short-form video content for social media communication and engagement.',
      },
    ],
  },
  {
    number: '03',
    brand: 'Kayganics',
    intro: 'A selection of brands I’ve supported through social media management, content creation, strategy, and digital brand communication.',
    description: 'Managed the brand’s social media presence across Instagram and Facebook, developing branded content, visual storytelling, and audience-focused communication designed to strengthen its digital presence.',
    instagramUrl: 'https://www.instagram.com/kayganics/',
    ctaText: 'Visit Instagram ↗',
    ctaLabel: 'Visit Kayganics on Instagram',
    roles: ['Social Media Management', 'Content Creation', 'Content Strategy', 'Creative Direction', 'Video Editing'],
    platforms: ['Instagram', 'Facebook'],
    profileImage: kayganicsProfile,
    profileAlt: 'Kayganics Instagram profile managed by Evelyn Andrew',
    posts: [
      { src: kayOne, alt: 'Kayganics social media post example one managed by Evelyn Andrew' },
      { src: kayTwo, alt: 'Kayganics social media post example two managed by Evelyn Andrew' },
      { src: kayThree, alt: 'Kayganics social media post example three managed by Evelyn Andrew' },
    ],
    workAreas: [
      {
        title: 'Social Media Management',
        text: 'Managing and maintaining the brand’s social presence across Instagram and Facebook.',
      },
      {
        title: 'Content Creation',
        text: 'Creating branded social content designed to communicate the brand clearly and engage its audience.',
      },
      {
        title: 'Content Strategy',
        text: 'Planning content around audience interests, brand messaging, and business goals.',
      },
      {
        title: 'Creative Direction',
        text: 'Guiding the visual direction and presentation of social media content.',
      },
      {
        title: 'Video Editing',
        text: 'Editing short-form video content for social media communication.',
      },
    ],
  },
  {
    number: '04',
    brand: 'SylvianCare Wolverhampton',
    intro: 'A selection of brands I’ve supported through social media management, content creation, strategy, and digital brand communication.',
    description: 'Managed the brand’s Facebook presence through strategic content planning, branded social media content, audience-focused communication, and creative storytelling.',
    instagramUrl: 'https://www.facebook.com/sylviancarewolverhampton',
    ctaText: 'Visit Facebook ↗',
    ctaLabel: 'Visit SylvianCare Wolverhampton on Facebook',
    roles: ['Social Media Management', 'Content Creation', 'Content Strategy', 'Creative Direction', 'Video Editing'],
    platforms: ['Facebook'],
    profileImage: sylvianCareProfile,
    profileAlt: 'SylvianCare Wolverhampton Facebook page managed by Evelyn Andrew',
    posts: [
      { src: slyOne, alt: 'SylvianCare Wolverhampton social media post example one managed by Evelyn Andrew' },
      { src: slyTwo, alt: 'SylvianCare Wolverhampton social media post example two managed by Evelyn Andrew' },
      { src: slyThree, alt: 'SylvianCare Wolverhampton social media post example three managed by Evelyn Andrew' },
    ],
    workAreas: [
      {
        title: 'Social Media Management',
        text: 'Managing and maintaining the brand’s Facebook presence.',
      },
      {
        title: 'Content Creation',
        text: 'Creating branded social content designed to communicate the brand clearly and engage its audience.',
      },
      {
        title: 'Content Strategy',
        text: 'Planning content around audience needs, brand messaging, and business goals.',
      },
      {
        title: 'Creative Direction',
        text: 'Guiding the visual direction and presentation of social media content.',
      },
      {
        title: 'Video Editing',
        text: 'Editing short-form video content for social media communication.',
      },
    ],
  },
]

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
function Footer() { return <footer className="footer shell"><span>© 2026 Evelyn Andrew</span><div><a href="#top">Back to top ↑</a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Evelyn Andrew on LinkedIn">LinkedIn ↗</a></div></footer> }

function Home() { return <main><Seo title="Branding & Digital Marketing Strategist" description="Evelyn Andrew is a Branding & Digital Marketing Strategist creating brand strategy, content, social media, and creative direction that move businesses forward." /><Nav />
  <section className="hero shell" id="top"><div className="hero-copy"><p className="hero-name">Evelyn Andrew</p><p className="eyebrow">Digital Brand Marketing Officer / remote</p><h1>Good ideas<br />deserve<br /><em>great<br />momentum.</em></h1><p className="hero-intro">“I turn strategy, creativity, and storytelling into digital experiences that make brands seen, remembered, and chosen.”</p><a className="button button-dark" href="#work">Explore my work <span>↘</span></a></div><div className="hero-art"><div className="portrait-stage"><img className="portrait-image" src={portrait} alt="Evelyn Andrew smiling in a black blazer" /></div><div className="art-sticker">Strategy<br />with feeling</div><div className="art-note">01 — 05</div></div><div className="hero-footer"><span>Scroll to explore</span><span className="line" /><span>Independent since 2018</span></div></section>
  <section className="statement shell" id="about"><p className="section-kicker">The approach</p><div><h2>Less noise.<br /><span>More meaning.</span></h2><div className="statement-copy"><p>“I’m Evelyn — a Branding &amp; Digital Marketing Strategist with 5+ years of experience turning ideas into brands people notice, remember, and trust.</p><p>I’ve worked with businesses across the UK, US, and Nigeria, helping brands in industries ranging from AI and healthcare to recruitment, renewable energy, and lifestyle build stronger digital presences.</p><p>From brand strategy and social media to content, campaigns, and creative direction, I bring strategy and creativity together to create work that connects with the right audience—and moves businesses forward.”</p></div><a className="text-link" href="mailto:hello@evelynandrew.com">More about my practice <span>↗</span></a></div></section>
  <section className="explore shell" id="work" aria-labelledby="explore-title"><div className="explore-heading"><p className="section-kicker">The work</p><h2 id="explore-title">Different skills.<br /><span>One strategic mind.</span></h2><p>From managing digital accounts to creating campaigns, designing visual stories, and producing content, here’s a look at the work behind the strategy.</p></div><div className="category-grid">{categories.map((category) => <article className="category-card" key={category.path}><a href={category.path} aria-label={`${category.cta}: ${category.title}`}><div className={`category-preview ${category.preview}${category.image ? ' has-image' : ''}`}>{category.image && <img src={category.image} alt={category.alt} />}<span className="category-number">{category.number}</span><span className="category-label">{category.label}</span><i /></div><p className="project-type">{category.label}</p><h3>{category.title}</h3><p className="category-description">{category.description}</p><span className="project-link category-cta">{category.cta} <b>↗</b></span></a></article>)}</div></section>
  <section className="contact shell" id="contact"><div className="contact-inner"><p className="section-kicker">Have an idea?</p><h2>Let’s give it momentum.</h2><a className="contact-email" href="mailto:evelynashaolu@gmail.com" aria-label="Email Evelyn Andrew">evelynashaolu@gmail.com <span>↗</span></a><p className="contact-note">Available for remote opportunities worldwide.</p><dl className="contact-details"><div className="contact-detail"><dt>Email</dt><dd><a href="mailto:evelynashaolu@gmail.com">evelynashaolu@gmail.com ↗</a></dd></div><div className="contact-detail"><dt>Phone</dt><dd><a href="tel:+2348106690051">+234 810 669 0051 ↗</a></dd></div><div className="contact-detail"><dt>LinkedIn</dt><dd><a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Evelyn Andrew on LinkedIn">LinkedIn ↗</a></dd></div><div className="contact-detail"><dt>CV</dt><dd><a href={cvPdf} download aria-label="Download Evelyn Andrew Digital CV">Download CV ↗</a></dd></div></dl></div></section><Footer />
</main> }
function PortfolioPage({ content }: { content: (typeof pageContent)[string] }) { return <main><Seo title={content.title} description={content.description} /><Nav innerPage /><section className="portfolio-page shell" id="top"><p className="section-kicker">The work</p><h1>{content.title}</h1><p className="portfolio-intro">{content.intro}</p><a className="text-link" href="/#work">← Back to work</a><section className="portfolio-placeholder" aria-labelledby="portfolio-label"><h2 id="portfolio-label">{content.label}</h2><div className="placeholder-grid" aria-label={`${content.label} portfolio area`}><div /><div /><div /></div><p>Portfolio work will be added here.</p></section></section><Footer /></main> }

function CampaignsPage() {
  return <main><Seo title="Campaigns & Strategy | Evelyn Andrew" description="Explore Evelyn Andrew’s digital marketing strategy, campaign strategy, social media strategy, content strategy, and campaign management work across selected case studies." /><Nav innerPage />
    <section className="portfolio-page shell campaigns-page" id="top">
      <p className="section-kicker">Campaigns &amp; Strategy</p>
      <h1>STRATEGY THAT GIVES GOOD IDEAS MOMENTUM.</h1>
      <p className="portfolio-intro campaigns-intro-text">A closer look at selected campaigns, the thinking behind them, and the work that turned strategy into execution.</p>
      <a className="text-link" href="/#work">← Back to work</a>

      <section className="campaigns-intro" aria-labelledby="campaigns-intro-title">
        <p className="section-kicker">SELECTED CASE STUDIES</p>
        <h2 id="campaigns-intro-title">FROM OBJECTIVE TO EXECUTION.</h2>
        <p>A selection of campaigns where strategy, content, creative direction, and digital execution worked together to support a clear marketing objective.</p>
      </section>

      {campaignCaseStudies.map((study) => (
        <article className="campaign-case" key={study.title}>
          <div className="campaign-case-header">
            <p className="campaign-number">{study.number}</p>
            <div className="campaign-case-title-block">
              <h2>{study.title}</h2>
              <p>{study.descriptor}</p>
            </div>
          </div>

          <div className="campaign-overview">
            <div className="campaign-subsection">
              <p className="campaign-subhead">PROJECT OBJECTIVE</p>
              <p className="campaign-copy">{study.objective}</p>
            </div>
          </div>

          <div className="campaign-subsection">
            <p className="campaign-subhead">THE STRATEGY</p>
            <ul className="campaign-list">
              {study.strategy.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="campaign-subsection">
            <p className="campaign-subhead">THE EXECUTION</p>
            <div className="campaign-execution-grid">
              {study.executionHighlights.map((item) => (
                <div className="campaign-execution-item" key={`${study.title}-${item.label}`}>
                  <p className="campaign-execution-value">{item.value}</p>
                  <p className="campaign-execution-label">{item.label}</p>
                  <p className="campaign-execution-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="campaign-subsection">
            <p className="campaign-subhead">THE RESULTS</p>
            <div className="campaign-result-grid">
              {study.results.map((item) => (
                <div className="campaign-result-item" key={`${study.title}-${item.label}`}>
                  <p className="campaign-result-value">{item.value}</p>
                  <p className="campaign-result-label">{item.label}</p>
                  {item.text && <p className="campaign-result-text">{item.text}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="campaign-subsection campaign-tools-wrap">
            <p className="campaign-subhead">TOOLS USED</p>
            <p className="campaign-tools-text">{study.tools}</p>
          </div>
        </article>
      ))}

      <section className="campaign-client-wins" aria-labelledby="client-wins-title">
        <p className="section-kicker">CLIENT WINS</p>
        <h2 id="client-wins-title">THE WORK SHOULD MOVE SOMETHING.</h2>
        <p className="campaign-intro">Selected outcomes from campaigns, content, collaborations, and workflow improvements.</p>
        <div className="client-win-grid">
          {clientWins.map((win) => (
            <div className="client-win-item" key={win.label}>
              <p className="client-win-value">{win.value}</p>
              <div className="client-win-copy">
                <p className="client-win-label">{win.label}</p>
                <p>{win.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="campaigns-end-cta" aria-labelledby="campaigns-cta-title">
        <h2 id="campaigns-cta-title">HAVE A CAMPAIGN IN MIND?</h2>
        <p>Let&apos;s turn the idea into something people notice, remember, and act on.</p>
        <a className="button button-dark" href="/#contact">LET&apos;S TALK <span>↗</span></a>
      </section>
    </section>
    <Footer />
  </main>
}

function AccountsPage() {
  return <main><Seo title="Accounts I’ve Managed | Evelyn Andrew" description="Explore Evelyn Andrew’s social media management, content creation, content strategy, and digital marketing portfolio, including Priority Group Services NJ and University of Excellence." /><Nav innerPage />
    <section className="portfolio-page shell account-page" id="top">
      <p className="section-kicker">Accounts I’ve Managed</p>
      <h1>Accounts I’ve Managed</h1>
      <p className="portfolio-intro">{accountEntries[0].intro}</p>
      <a className="text-link" href="/#work">← Back to work</a>

      {accountEntries.map((account) => {
        const titleId = `${account.brand.toLowerCase().replace(/\s+/g, '-')}-title`

        return (
          <section className="account-showcase" key={account.brand} aria-labelledby={titleId}>
            <div className="account-header">
              <p className="account-number">{account.number}</p>
              <h2 id={titleId}>{account.brand}</h2>
              <p className="account-roles">{account.roles.join(' · ')}</p>
              <p className="account-platforms"><span>Platforms:</span> {account.platforms.join(' · ')}</p>
            </div>

            <figure className="account-visual">
              <img src={account.profileImage} alt={account.profileAlt} />
            </figure>

            <section className="account-section" aria-labelledby={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-work-title`}>
              <p className="section-kicker">The work</p>
              <h3 id={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-work-title`}>The work</h3>
              <p className="account-description">{account.description}</p>

              <div className="account-gallery" aria-label={`${account.brand} social media work samples`}>
                {account.posts.map((post) => (
                  <figure className="account-post" key={`${account.brand}-${post.alt}`}>
                    <img src={post.src} alt={post.alt} />
                  </figure>
                ))}
              </div>
            </section>

            <section className="account-section account-managed" aria-labelledby={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-managed-title`}>
              <p className="section-kicker">What I managed</p>
              <h3 id={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-managed-title`}>What I managed</h3>
              <div className="managed-grid">
                {account.workAreas.map((item) => (
                  <div className="managed-item" key={`${account.brand}-${item.title}`}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="account-section account-meta" aria-labelledby={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-platforms-title`}>
              <p className="section-kicker">Platforms</p>
              <h3 id={`${account.brand.toLowerCase().replace(/\s+/g, '-')}-platforms-title`}>Platforms</h3>
              <ul className="platform-list">
                {account.platforms.map((platform) => <li key={`${account.brand}-${platform}`}>{platform}</li>)}
              </ul>

              <div className="account-cta-wrap">
                <a className="account-cta" href={account.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={account.ctaLabel}>{account.ctaText}</a>
              </div>
            </section>
          </section>
        )
      })}

      <section className="accounts-end-cta" aria-labelledby="accounts-end-cta-title">
        <h2 id="accounts-end-cta-title">EXPLORE MORE OF MY WORK</h2>
        <p>Want to see more of my creative work? Explore additional social media designs, campaigns, content, and creative projects in my portfolio collection.</p>

        <div className="account-cta-wrap accounts-end-cta-link">
          <a
            className="account-cta"
            href={googleDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my full portfolio on Google Drive (opens in a new tab)"
          >
            VIEW MY FULL PORTFOLIO ↗
          </a>
        </div>
      </section>
    </section>
    <Footer />
  </main>
}

function CreativeWorkPage() {
  return <main><Seo title="Creative Work | Evelyn Andrew" description="Evelyn Andrew’s creative work, social media content, graphic design, video editing, visual storytelling, and digital marketing." /><Nav innerPage />
    <section className="portfolio-page shell creative-work-page" id="top">
      <p className="section-kicker">Creative Work</p>
      <h1>Creative Work</h1>
      <p className="portfolio-intro">“A curated selection of visual content created to help brands communicate clearly, connect with their audiences, and show up consistently across digital platforms.”</p>
      <a className="text-link" href="/#work">← Back to work</a>

      <section className="creative-work-groups" aria-label="Creative work samples">
        <div className="creative-work-group">
          <p className="section-kicker">Design</p>
          <h2>Design</h2>
          <p className="creative-work-description">Selected examples of social media graphics, promotional content, and visual communication created for different brand audiences.</p>
          <div className="creative-work-grid">
            {creativeWorkSamples.design.map((sample) => (
              <figure className="creative-work-card" key={sample.id}>
                <img src={sample.src} alt={sample.alt} />
              </figure>
            ))}
          </div>
          <div className="account-cta-wrap creative-work-inline-cta">
            <a
              className="account-cta"
              href="https://drive.google.com/drive/folders/1ksdWaqn4TIYtKADkxXAJTwsgSofaZQqc?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See more of Evelyn Andrew's designs on Google Drive (opens in a new tab)"
            >
              SEE MORE OF MY DESIGNS ↗
            </a>
          </div>
        </div>

        <div className="creative-work-group">
          <p className="section-kicker">Video</p>
          <h2>Video</h2>
          <p className="creative-work-description">Selected video content created and edited to communicate ideas, strengthen brand presence, and engage audiences across digital platforms.</p>
          <div className="creative-work-grid">
            {creativeWorkSamples.video.map((sample) => (
              <figure className="creative-work-card" key={sample.id}>
                <video className="creative-work-video" controls preload="metadata" playsInline aria-label={sample.alt}>
                  <source src={sample.src} />
                </video>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="accounts-end-cta creative-work-cta" aria-labelledby="creative-work-cta-title">
        <h2 id="creative-work-cta-title">WANT TO SEE MORE?</h2>
        <p>Explore more of my designs, videos, campaigns, and creative projects in my full portfolio collection.</p>

        <div className="account-cta-wrap accounts-end-cta-link">
          <a
            className="account-cta"
            href={googleDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore my full creative portfolio on Google Drive (opens in a new tab)"
          >
            EXPLORE FULL CREATIVE PORTFOLIO ↗
          </a>
        </div>
      </section>
    </section>
    <Footer />
  </main>
}

function App() {
  const pathname = window.location.pathname

  if (pathname === '/accounts') {
    return <AccountsPage />
  }

  if (pathname === '/creative-work') {
    return <CreativeWorkPage />
  }

  if (pathname === '/campaigns' || pathname === '/campaigns-strategy') {
    return <CampaignsPage />
  }

  const content = pageContent[pathname]
  return content ? <PortfolioPage content={content} /> : <Home />
}
export default App
