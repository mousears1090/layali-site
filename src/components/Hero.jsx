import { ArrowRight, Bell } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src="/logo-transparent.png" alt="Layali" className="hero-logo" />

        <div className="hero-badge">
          Coming Soon on iOS
        </div>

        <h1>
          Your Companion for<br />
          <span className="highlight">Qur'an, Duas & Prayer</span>
        </h1>

        <p>
          Layali brings together beautiful Qur'an reading, authentic duas,
          accurate prayer times, and Ramadan tools — all in one
          thoughtfully designed app.
        </p>

        <div className="hero-actions">
          <div className="btn-primary coming-soon">
            <Bell size={18} />
            Coming Soon
          </div>
          <a href="#features" className="btn-secondary">
            Learn More
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
