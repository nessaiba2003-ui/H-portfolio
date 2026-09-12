'use client';
import { useState } from 'react';
import { ArrowUpRight, ArrowDown, Play, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { projects, certificates, observatory, profile } from './content';

const filters = [
  'All',
  'Photography',
  'Cinematography',
  'Astrophotography',
  'Portraits',
  'Landscapes',
  'Events',
  'Editing',
];
export function Work() {
  const [filter, setFilter] = useState('All');
  const shown = projects.filter(
    (p) => filter === 'All' || p.tags.includes(filter),
  );
  return (
    <section id="work" className="section work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / AN EXPLORATION IN IMAGES</p>
          <h2>
            Selected <em>visions.</em>
          </h2>
        </div>
        <p className="section-note">
          A curated selection from Hamza’s visual archive.
          <br />
          <span>
            The complete collection will connect to his photo database soon.
          </span>
        </p>
      </div>
      <div className="filters" aria-label="Filter projects">
        {filters.map((item) => (
          <Button
            key={item}
            variant="ghost"
            className={filter === item ? 'filter active' : 'filter'}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {shown.length} original projects
      </p>
      <div className="project-gallery">
        {shown.map((p) => (
          <article className="project-card" key={p.id}>
            <Dialog>
              <DialogTrigger
                className="project-open"
                aria-label={`View original project ${p.title}`}
              >
                <div className="project-image">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width="1600"
                    height="1100"
                  />
                  <span className="original-tag">ORIGINAL WORK</span>
                  <span className="image-arrow">
                    <ArrowUpRight size={24} />
                  </span>
                  {p.id === 'silence' && (
                    <span className="play-indicator">
                      <Play size={18} />
                    </span>
                  )}
                </div>
                <div className="project-meta">
                  <span>{p.category}</span>
                  <span>ORIGINAL SERIES</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="view-project">
                  VIEW PROJECT <ArrowUpRight size={13} />
                </span>
              </DialogTrigger>
              <DialogContent className="project-dialog">
                <DialogTitle className="modal-title">{p.title}</DialogTitle>
                <DialogDescription>
                  Original work by Hamza El Bahi · {p.category}
                </DialogDescription>
                <div className="case-copy">
                  <p className="eyebrow">THE IDEA / {p.category}</p>
                  <h4>{p.description}</h4>
                  <p>{p.approach}</p>
                  <div className="original-series">
                    {p.groups.map((group) => (
                      <section className="work-group" key={group.title}>
                        <h5>{group.title}</h5>
                        <div className="work-group-grid">
                          {group.items.map((item, i) =>
                            item.type === 'video' ? (
                              <video
                                key={item.src}
                                controls
                                playsInline
                                preload="metadata"
                                aria-label={`${group.title} — original video by Hamza El Bahi`}
                              >
                                <source src={item.src} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                key={item.src}
                                src={item.src}
                                alt={`${group.title} ${i + 1} — original work by Hamza El Bahi`}
                                loading="lazy"
                              />
                            ),
                          )}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </article>
        ))}
      </div>
      <div className="work-footnote">
        <span>LIGHT. TIME. PERSPECTIVE.</span>
        <span>Original work only.</span>
      </div>
    </section>
  );
}
export function Projects() {
  return (
    <section id="projects" className="section creative">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / THE CREATIVE NOTEBOOK</p>
          <h2>
            Ideas in <em>orbit.</em>
          </h2>
        </div>
        <p className="section-note">
          Four original series. One curious perspective.
        </p>
      </div>
      <div className="series-list">
        {projects.map((p, i) => (
          <a href="#work" key={p.id}>
            <span className="series-number">0{i + 1}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <span className="series-status">ORIGINAL WORK</span>
            <ArrowUpRight size={24} />
          </a>
        ))}
      </div>
    </section>
  );
}
export function Observatory() {
  const [index, setIndex] = useState(0);
  const current = observatory[index];
  return (
    <section className="observatory" id="observatory">
      <div className="observatory-title">
        <p className="eyebrow">A LITTLE CLOSER TO INFINITY</p>
        <h2>
          The <em>observatory.</em>
        </h2>
        <p>Where photography meets the universe.</p>
      </div>
      <div className="observatory-tabs" aria-label="Explore the observatory">
        {observatory.map((o, i) => (
          <Button
            key={o.name}
            variant="ghost"
            className={index === i ? 'active' : ''}
            aria-pressed={index === i}
            onClick={() => setIndex(i)}
          >
            {o.name}
          </Button>
        ))}
      </div>
      <div className="observatory-scene" aria-live="polite">
        <img
          key={current.name}
          src={current.image}
          alt={`${current.name} — original work by Hamza El Bahi`}
          loading="lazy"
        />
        <div className="scene-shade" />
        <span className="scene-index">OBSERVATION 0{index + 1} / 04</span>
        <div className="scene-copy">
          <p className="eyebrow">{current.label}</p>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
        <span className="scene-credit">ORIGINAL WORK · HAMZA EL BAHI</span>
      </div>
    </section>
  );
}
export function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / LEARNING & EXPLORATION</p>
          <h2>
            Beyond
            <br />
            the <em>frame.</em>
          </h2>
        </div>
        <p className="section-note">
          Certificates & participation
          <br />A journey through his work as an astronomer and entrepreneur.
        </p>
      </div>
      <div className="certificate-list">
        {certificates.map((c, i) => (
          <Dialog key={c.title}>
            <DialogTrigger className="certificate-row">
              <span className="certificate-number">0{i + 1}</span>
              <img
                src={c.image}
                alt=""
                loading="lazy"
                width="150"
                height="105"
              />
              <div>
                <h3>{c.title}</h3>
                <p>{c.organization}</p>
              </div>
              <span className="certificate-date">{c.date}</span>
              <Plus size={22} />
            </DialogTrigger>
            <DialogContent className="certificate-dialog">
              <DialogTitle>{c.title}</DialogTitle>
              <DialogDescription>
                {c.organization} · {c.date}. {c.description}
              </DialogDescription>
              <img
                src={c.image}
                alt={`${c.title} — certificate issued to Hamza El Bahi`}
              />
              <a className="text-link" href={c.image} download>
                <Download size={15} /> Download original certificate
              </a>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
export function Journal() {
  return (
    <section className="journal section">
      <p className="eyebrow">05 / NOTES FROM THE JOURNEY</p>
      <div className="journal-content">
        <span className="journal-label">
          THE JOURNAL
          <br />
          <small>A space for future stories</small>
        </span>
        <blockquote>
          “Every photograph begins with a question:
          <br />
          what happens when <em>light meets time?</em>”
        </blockquote>
        <ArrowDown size={26} />
      </div>
    </section>
  );
}
export function Contact() {
  const [saved, setSaved] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nProject: ${data.get('type')}\n\n${data.get('message')}`;
    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Project inquiry — ' + data.get('type'))}&body=${encodeURIComponent(text)}`;
    } else {
      const url = URL.createObjectURL(
        new Blob([text], { type: 'text/plain;charset=utf-8' }),
      );
      const a = document.createElement('a');
      a.href = url;
      a.download = 'project-brief.txt';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setSaved(true);
    }
  }
  return (
    <section id="contact" className="section contact">
      <div>
        <p className="eyebrow">06 / LET’S MAKE IT HAPPEN</p>
        <h2>
          Let’s create
          <br />
          <em>something.</em>
          <span className="contact-star">✦</span>
        </h2>
        <p className="contact-intro">Have a story worth capturing?</p>
        <p className="muted">
          A moment. A vision. A different perspective.
          <br />
          Every collaboration starts with a conversation.
        </p>
        <div className="contact-links">
          {profile.email && (
            <a href={`mailto:${profile.email}`}>
              Email Hamza <ArrowUpRight size={15} />
            </a>
          )}
          {profile.whatsapp && (
            <a href={`https://wa.me/${profile.whatsapp}`}>
              WhatsApp <ArrowUpRight size={15} />
            </a>
          )}
          {profile.instagram && (
            <a href={profile.instagram}>
              Instagram <ArrowUpRight size={15} />
            </a>
          )}
          {profile.socials.map((s) => (
            <a key={s.name} href={s.url}>
              {s.name}
              <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
        {!profile.email && (
          <p className="contact-notice">
            Contact details are coming soon.
            <br />
            You can prepare and save your project brief below.
          </p>
        )}
      </div>
      <form onSubmit={submit} className="contact-form">
        <div className="form-pair">
          <label htmlFor="name">
            YOUR NAME
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Alex Morgan"
              required
              maxLength={120}
            />
          </label>
          <label htmlFor="email">
            YOUR EMAIL
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
            />
          </label>
        </div>
        <label htmlFor="type">
          WHAT DO YOU HAVE IN MIND?
          <select id="type" name="type" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {[
              'Photography',
              'Video production',
              'Astrophotography',
              'Event',
              'Portrait',
              'Creative Project',
              'Other',
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label htmlFor="message">
          TELL ME YOUR STORY
          <Textarea
            id="message"
            name="message"
            placeholder="The idea, the atmosphere, the possibilities…"
            required
            minLength={10}
            maxLength={5000}
          />
        </label>
        <Button type="submit" className="brief-submit">
          {profile.email ? 'Prepare email' : 'Save my project brief'}
          <ArrowUpRight size={17} />
        </Button>
        <p className="form-note" role="status">
          {saved
            ? 'Your brief was saved to your device. It has not been sent.'
            : profile.email
              ? 'Opens your email app with your brief.'
              : 'Saved to your device only. No message is sent.'}
        </p>
      </form>
      {profile.toolkit.length > 0 && (
        <div className="toolkit">
          <h3>The toolkit</h3>
          {profile.toolkit.map((t) => (
            <p key={t.name}>
              {t.name} — {t.value}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
