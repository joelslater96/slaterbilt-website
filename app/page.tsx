const builds = [
  {
    title: "2013 Focus ST",
    subtitle: "Street build. Honest ownership. Real mod results.",
    points: [
      "Full mod list and install content",
      "Ownership lessons and common issues",
      "Real-world driving impressions",
    ],
  },
  {
    title: "2014 Gen 1 Raptor",
    subtitle: "Truck content without the fake hype.",
    points: [
      "Buying guides and ownership breakdowns",
      "Build plans, reviews, and upgrades",
      "Daily use, quirks, and long-form video content",
    ],
  },
];

const stats = [
  { label: "YouTube", value: "1k+" },
  { label: "TikTok", value: "3k+" },
  { label: "Instagram", value: "1.6k+" },
  { label: "Monthly Views", value: "300k+" },
];

const socials = [
  { name: "YouTube", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Contact", href: "mailto:partnerships@slaterbilt.com" },
];

const sponsorItems = [
  "Build integrations with real install and usage footage",
  "Short-form clips for TikTok, Reels, and Shorts",
  "Professional photos for product and brand usage",
  "Long-form YouTube content with direct product callouts",
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="brand">SLATERBILT</div>
            <div className="brand-sub">Builds • Reviews • Content</div>
          </div>

          <nav className="nav">
            <a href="#builds">Builds</a>
            <a href="#media">Media Kit</a>
            <a href="#partners">Sponsors</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero container">
        <div>
          <div className="pill">Automotive content brand</div>
          <h1 className="hero-title">
            Real builds.
            <span>No fake hype.</span>
          </h1>
          <p className="hero-copy">
            SlaterBilt is built around honest car and truck ownership, real-world
            parts testing, and content that feels like it came from the garage
            instead of a corporate ad campaign.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#builds">
              Explore Builds
            </a>
            <a className="btn btn-secondary" href="#partners">
              Partner With SlaterBilt
            </a>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="builds" className="section container">
        <div className="section-head">
          <div>
            <p className="section-kicker">Featured builds</p>
            <h2>The current fleet.</h2>
          </div>
          <p className="section-copy">
            Built for real content, real testing, and the kind of opinions that get
            comments moving.
          </p>
        </div>

        <div className="build-grid">
          {builds.map((build) => (
            <div key={build.title} className="build-card">
              <div className="build-image" />
              <h3>{build.title}</h3>
              <p className="muted">{build.subtitle}</p>

              <div className="point-list">
                {build.points.map((point) => (
                  <div key={point} className="point-item">
                    <span className="dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <button className="mini-btn">Build Page Coming Soon</button>
            </div>
          ))}
        </div>
      </section>

      <section id="media" className="section container media-grid">
        <div className="panel">
          <p className="section-kicker">Media kit</p>
          <h2>Why brands work with SlaterBilt.</h2>
          <p className="muted lead">
            The goal is simple: make product integrations feel native to the build,
            keep the content honest, and create assets that brands can actually use
            across multiple platforms.
          </p>

          <div className="media-items">
            {sponsorItems.map((item) => (
              <div key={item} className="media-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel panel-accent">
          <p className="section-kicker">Quick pitch</p>
          <h3>Built for sponsor credibility.</h3>
          <p className="muted">
            This site gives potential partners one clean place to see the builds,
            the content style, the audience, and how to get in touch.
          </p>

          <div className="stack-list">
            <div>Authentic install and ownership content</div>
            <div>Cross-platform content repurposing</div>
            <div>Real enthusiast audience and direct niche fit</div>
          </div>
        </div>
      </section>

      <section id="partners" className="section container">
        <div className="panel sponsor-panel">
          <div>
            <p className="section-kicker">Sponsors</p>
            <h2>Want your brand on the next build?</h2>
            <p className="muted lead">
              Sponsorships can include product installs, dedicated videos,
              recurring build appearances, short-form content, and polished photo
              assets for brand use.
            </p>
          </div>

          <div className="logo-grid">
            {["Your Logo", "Your Logo", "Your Logo", "Your Logo", "Your Logo", "Your Logo"].map(
              (logo, index) => (
                <div key={`${logo}-${index}`} className="logo-box">
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="section container contact-grid">
        <div className="panel">
          <p className="section-kicker">Contact</p>
          <h2>Let’s build something.</h2>
          <p className="muted lead">
            For sponsorships, collaborations, and media inquiries, reach out directly.
          </p>

          <a className="btn btn-light" href="mailto:partnerships@slaterbilt.com">
            partnerships@slaterbilt.com
          </a>
        </div>

        <div className="panel dark-panel">
          <div className="social-grid">
            {socials.map((social) => (
              <a key={social.name} href={social.href} className="social-card">
                <div className="social-label">Link</div>
                <div className="social-name">{social.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
