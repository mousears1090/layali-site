import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">
            <Moon size={18} />
          </div>
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
          <span className="navbar-cta coming-soon-nav">
            Coming Soon
          </span>
        </div>
      </div>
    </nav>
  );
}
