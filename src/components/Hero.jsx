import { ArrowRight } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const APP_STORE_URL = 'https://apps.apple.com/us/app/layali-quran-duas/id6759272609';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src="/logo-transparent.png" alt="Layali" className="hero-logo" />

        <div className="hero-badge">
          Available on the App Store
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
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaApple size={20} />
            Download for iOS
          </a>
          <span className="btn-android-soon">
            <FaGooglePlay size={18} />
            Android Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
}
