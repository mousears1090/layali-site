import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">
          Available on iOS
        </div>

        <h1>
          Your Companion for<br />
          <span className="highlight">Qur'an, Duas & Prayer</span>
        </h1>

        <p>
          Layali brings together beautiful Qur'an reading, authentic duas,
          accurate prayer times, and Qibla direction — all in one
          thoughtfully designed app.
        </p>

        <div className="hero-actions">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Download size={18} />
            Download Free
          </a>
          <a href="#features" className="btn-secondary">
            Learn More
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
