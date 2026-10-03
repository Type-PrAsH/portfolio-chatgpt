import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, Play, Video, PanelsTopLeft, Code2, Github, Linkedin, Mail, Menu, X, Sparkles } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Prashant Agrawal',
  shortName: 'Prash',
  role: 'Video Editor · Web Designer · CSE Student',
  email: 'hello@yourdomain.com', // Replace with your preferred contact email
  linkedin: 'https://www.linkedin.com/in/prashforwork',
  github: 'https://github.com/Type-PrAsH',
  location: 'India',
};

const projects = [
  {
    number: '01', type: 'WEB DESIGN', title: 'Wedding Invitation',
    description: 'A digital invitation experience designed to make a special day feel personal, elegant and easy to share.',
    tags: ['React', 'Web Design', 'Responsive'], visual: 'wedding', link: 'https://ayush-kavya.vercel.app/'
  },
  {
    number: '02', type: 'PRODUCT DESIGN', title: 'SchedWise',
    description: 'A focused time-management concept built around clear priorities, thoughtful structure and a calmer workflow.',
    tags: ['UI Design', 'Product Thinking'], visual: 'schedwise', link: '#contact'
  },
  {
    number: '03', type: 'CREATIVE', title: 'Video & Motion Work',
    description: 'Short-form edits and visual storytelling crafted to hold attention and communicate an idea with clarity.',
    tags: ['Video Editing', 'Short-form', 'Storytelling'], visual: 'motion', link: '#contact'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P.</span><span>PRASH<span className="muted">ANT</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Selected work</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-line"/></div>
          <h1>Ideas into<br/><span className="gradient-text">experiences.</span></h1>
          <p className="hero-sub">I'm <strong>Prashant</strong> — a creative problem-solver blending thoughtful web design with engaging video storytelling.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#about">A little about me <ArrowDown size={15}/></a></div>
          <div className="hero-meta"><span>BASED IN {profile.location.toUpperCase()}</span><span className="meta-divider"/><span>DESIGNING · EDITING · BUILDING</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract purple 3D artwork">
          <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/>
          <div className="art-core"><span>p.</span></div><div className="art-glow"/>
          <div className="floating-card card-top"><Sparkles size={14}/><span>Curiosity-led<br/>creativity</span></div>
          <div className="floating-card card-bottom"><span className="card-bars"><i/><i/><i/><i/></span><span>DETAIL<br/>MATTERS</span></div>
          <div className="art-caption">FIG. 01 — THE CREATIVE PROCESS</div>
        </div>
        <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro-section section container" id="about">
        <div className="section-kicker">01 / THE PERSON</div>
        <div className="intro-grid"><h2>Curious by nature.<br/><span className="muted-heading">Intentional by design.</span></h2>
          <div className="intro-copy"><p>I enjoy turning rough ideas into polished digital experiences. From shaping a visual story in an edit to building a website that feels effortless to use, I care about the details that make work memorable.</p><p>I'm also a Computer Science student, constantly exploring how design and technology can work better together.</p><a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer">More about me on LinkedIn <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section className="services-section section" id="services"><div className="container">
        <div className="section-heading"><div><div className="section-kicker">02 / WHAT I DO</div><h2>Skills with <span className="gradient-text">purpose.</span></h2></div><p>Two creative disciplines.<br/>One detail-first mindset.</p></div>
        <div className="service-grid">
          <article className="service-card"><div className="service-top"><span>01</span><Video size={22}/></div><div><h3>Video Editing</h3><p>Edits that make people stop scrolling. I shape pacing, sound and visuals into short-form content with a clear point of view.</p></div><div className="service-tags"><span>Reels & Shorts</span><span>Storytelling</span><span>Motion</span></div></article>
          <article className="service-card"><div className="service-top"><span>02</span><PanelsTopLeft size={22}/></div><div><h3>Web Designing</h3><p>Clean, responsive websites that balance visual character with intuitive navigation and purposeful interactions.</p></div><div className="service-tags"><span>Landing Pages</span><span>UI Design</span><span>Responsive</span></div></article>
        </div>
      </div></section>

      <section className="work-section section container" id="work">
        <div className="section-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>A few things I've <span className="gradient-text">made.</span></h2></div><span className="work-count">2025 — 2026 / 03 PROJECTS</span></div>
        <div className="project-list">{projects.map(p => <a className="project-row" href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={p.number}>
          <div className={`project-visual ${p.visual}`}><div className="visual-noise"/>{p.visual === 'wedding' ? <div className="wedding-preview"><span>THE WEDDING OF</span><b>A <em>&</em> K</b><small>AYUSH + KAVYA</small></div> : p.visual === 'schedwise' ? <div className="schedule-preview"><div className="preview-top">schedwise <span>✳</span></div><div className="preview-line"/><div className="preview-block"/><div className="preview-block short"/></div> : <div className="motion-preview"><span>FRAME</span><b>IN<br/>MOTION<span>.</span></b><i/></div>}</div>
          <div className="project-info"><div className="project-type">{p.number} / {p.type}</div><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="project-arrow"><ArrowUpRight/></div>
        </a>)}</div>
        <p className="project-note">A selection of concepts and projects. More work can be shared on request.</p>
      </section>

      <section className="contact-section section" id="contact"><div className="container contact-inner">
        <div className="section-kicker">04 / YOUR TURN</div><p className="contact-overline">HAVE A PROJECT IN MIND?</p><h2>Let's make<br/><span className="gradient-text">something matter.</span></h2>
        <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={18}/></a>
        <div className="contact-bottom"><span>GOOD WORK STARTS WITH A HELLO.</span><span>{profile.location.toUpperCase()}</span></div>
      </div></section>
    </main>
    <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>PRASH<span className="muted">ANT</span></span></a><span>© {new Date().getFullYear()} PRASHANT AGRAWAL</span><div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
