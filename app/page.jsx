import Logo from "../components/Logo";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-card">
          <Logo className="hero-logo" />
          <div className="hero-text">
            <p className="eyebrow">Corporate Identity Concept</p>
            <h1>Sentinel Agent Advisory</h1>
            <p className="body">
              A professional and trustworthy brand mark depicting an abstract
              business agent carrying a briefcase, crafted with a refined blue
              and silver palette for modern corporate teams.
            </p>
            <div className="swatches" aria-label="Brand colors">
              <div className="swatch swatch-primary">
                <span>#2C66C5</span>
              </div>
              <div className="swatch swatch-secondary">
                <span>#132D5C</span>
              </div>
              <div className="swatch swatch-accent">
                <span>#A1ADBF</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid">
        <article className="panel">
          <h2>Design Rationale</h2>
          <p>
            The shield silhouette frames the figure to establish confidence and
            security, while the smooth gradient evokes forward momentum. Layered
            shapes imply motion and capability, balancing authority with
            approachability.
          </p>
        </article>
        <article className="panel">
          <h2>Usage Guidelines</h2>
          <ul>
            <li>Maintain clear space equal to half the emblem height.</li>
            <li>Use RGB gradients for digital contexts and flat tones in print.</li>
            <li>Scale freely—vector construction keeps edges crisp.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Typography Pairing</h2>
          <p>
            Pair the mark with clean neo-grotesk fonts such as Manrope or
            Inter, using medium weights for headings and regular for body
            copy. Keep typographic hierarchy minimal to support the logo&apos;s
            minimalist expression.
          </p>
        </article>
      </section>
    </main>
  );
}
