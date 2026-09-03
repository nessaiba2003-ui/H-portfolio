'use client';
import { ArrowUpRight, ArrowDown, Aperture, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './theme-toggle';
import {
  Work,
  Projects,
  Observatory,
  Certificates,
  Journal,
  Contact,
} from './sections';
const navigation = [
  'Home',
  'About',
  'Work',
  'Projects',
  'Certificates',
  'Contact',
];
export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="navigation">
        <a href="#home" className="brand" aria-label="Hamza El Bahi home">
          HE<span>✦</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={menu ? 'nav-links is-open' : 'nav-links'}
        >
          {navigation.map((item) => (
            <a
              key={item}
              onClick={() => setMenu(false)}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={14} />
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            className="mobile-toggle"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero">
          <div className="hero-photo">
            <img
              src="/images/portrait.webp"
              alt="Hamza El Bahi seated on stage during a conversation"
              fetchPriority="high"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="tiny-line" />A VISUAL UNIVERSE
            </p>
            <h1>
              Hamza
              <br />
              <em>El Bahi</em>
              <span className="title-star" aria-hidden="true">
                ✦
              </span>
            </h1>
            <p className="hero-disciplines">
              PHOTOGRAPHER <i /> VIDEOGRAPHER <i /> ASTRONOMY
            </p>
            <p className="hero-statement">
              Through a lens, I capture moments.
              <br />
              Through the sky, I capture stories.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                Let’s work together <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-side">LIGHT · TIME · PERSPECTIVE</div>
          <div className="hero-bottom">
            <a href="#about">
              <ArrowDown size={15} /> SCROLL TO EXPLORE
            </a>
            <span>CAPTURING EARTH. EXPLORING THE SKY.</span>
            <span>01 — 06</span>
          </div>
        </section>
        <div className="discipline-strip">
          <span>PHOTOGRAPHY</span>
          <b>✦</b>
          <span>VISUAL STORYTELLING</span>
          <b>✦</b>
          <span>CINEMATOGRAPHY</span>
          <b>✦</b>
          <span>ASTRONOMY</span>
          <b>✦</b>
        </div>
        <section id="about" className="section about">
          <div>
            <p className="eyebrow">01 / THE PERSON BEHIND THE FRAME</p>
            <h2>
              Behind
              <br />
              the <em>lens.</em>
            </h2>
          </div>
          <div className="about-copy">
            <Aperture className="about-icon" size={32} />
            <p className="large-copy">
              A curious eye.
              <br />
              An infinite canvas.
            </p>
            <p>
              Photography, moving images, and a fascination with the night sky.
              Hamza El Bahi explores the connection between light, emotion, and
              visual storytelling.
            </p>
            <p className="muted">
              From the world around us to the universe above, there is always
              another story waiting to be seen.
            </p>
            <div className="specialties">
              <span>01 — Photography</span>
              <span>02 — Videography</span>
              <span>03 — Astrophotography</span>
              <span>04 — Visual editing</span>
            </div>
          </div>
        </section>
        <Work />
        <Projects />
        <Observatory />
        <Certificates />
        <Journal />
        <Contact />
      </main>
      <footer className="footer">
        <div>
          <span>HAMZA EL BAHI</span>
          <p>Photographer · Videographer · Astronomy</p>
          <p>Capturing Earth. Exploring the sky.</p>
        </div>
        <span>© 2026 Hamza El Bahi. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
