import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/about', label: 'The story' },
  { to: '/forms', label: 'Art forms' },
  { to: '/events', label: 'Events' },
  { to: '/faq', label: 'FAQ' },
  { to: '/connect', label: 'Connect' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="wordmark" to="/" aria-label="Academy Dance Studio home">
            <span className="wordmark__name">Academy</span>
            <span className="wordmark__descriptor">Dance Studio</span>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`primary-navigation${menuOpen ? ' primary-navigation--open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <NavLink to="/" end className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`}>
              Home
            </NavLink>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navigation-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link className="navigation-cta" to="/forms">
              Discover the forms <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
