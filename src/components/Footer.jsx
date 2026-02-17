import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <Link to="/" className="footer-brand">
            <img src="/logo-transparent.png" alt="Layali" className="footer-logo" />
            Layali
          </Link>

          <div className="footer-links">
            <a href="/#features">Features</a>
            <a href="/#premium">Premium</a>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Layali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
