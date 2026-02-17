import {
  BookOpen,
  Heart,
  Clock,
  Headphones,
  Repeat,
  Moon,
  Star,
  CheckCircle,
  Bell,
} from 'lucide-react';

const features = [
  {
    icon: <BookOpen size={24} />,
    color: 'emerald',
    title: 'Full Qur\'an Reader',
    description:
      'Read all 604 pages of the Madinah Mushaf with Arabic text, transliteration, and English translation. Bookmark pages and track your progress.',
  },
  {
    icon: <Heart size={24} />,
    color: 'emerald',
    title: 'Daily Duas',
    description:
      'Access a curated collection of authentic duas from the Qur\'an and Sunnah. A new daily dua greets you every day — completely free.',
  },
  {
    icon: <Clock size={24} />,
    color: 'emerald',
    title: 'Accurate Prayer Times',
    description:
      'Location-based prayer times with multiple calculation methods (ISNA, MWL, Umm Al-Qura, and more). Never miss a prayer with reminders.',
  },
  {
    icon: <Headphones size={24} />,
    color: 'emerald',
    title: 'Audio Recitation',
    description:
      'Listen to professional Qur\'an recitation from renowned reciters. Play page-by-page or verse-by-verse as you follow along.',
  },
  {
    icon: <Repeat size={24} />,
    color: 'emerald',
    title: 'Memorization Mode',
    description:
      'Loop specific ayahs at your own pace to build memorization. Set the number of repetitions and let Layali guide your hifdh journey.',
  },
  {
    icon: <Moon size={24} />,
    color: 'emerald',
    title: 'Ramadan Tools',
    description:
      'Track your fasting, log taraweeh, count dhikr, and follow your Ramadan progress with daily duas and tips.',
  },
];

const premiumFeatures = [
  'Audio recitation from world-class reciters',
  'Full dua library with 30+ duas by category',
  'Memorization mode with custom loop settings',
  'Priority support and future features',
];

export default function Features() {
  return (
    <>
      {/* Features grid */}
      <section className="features" id="features">
        <div className="container">
          <div className="features-header">
            <h2>Everything You Need</h2>
            <p>
              Built with care for Muslims who want a clean, reliable,
              and distraction-free spiritual companion.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="premium" id="premium">
        <div className="container">
          <div className="premium-card">
            <div className="premium-badge">
              <Star size={14} />
              Layali Pro
            </div>

            <h2>Unlock the Full Experience</h2>
            <p>
              Enjoy every feature Layali has to offer with a Layali Pro subscription.
              Start with a free 30-day trial — cancel anytime.
            </p>

            <div className="premium-features">
              {premiumFeatures.map((f) => (
                <div key={f} className="premium-feature">
                  <CheckCircle size={18} />
                  {f}
                </div>
              ))}
            </div>

            <div className="premium-price">
              <strong>$9.99</strong> / month after 30-day free trial
            </div>

            <div className="btn-primary coming-soon">
              <Bell size={18} />
              Coming Soon to the App Store
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
