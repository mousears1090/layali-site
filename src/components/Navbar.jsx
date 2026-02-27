import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src="/logo-transparent.png" alt="Layali" className="navbar-logo" />
          Layali
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#premium" onClick={() => setOpen(false)}>Premium</a>
          <Link to="/privacy" onClick={() => setOpen(false)}>Privacy</Link>
          <a
            href="https://apps.apple.com/us/app/layali-quran-duas/id6759272609"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            onClick={() => setOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
