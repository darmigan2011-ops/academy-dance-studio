import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-intro">
          <Link className="wordmark wordmark--footer" to="/" aria-label="Academy Dance Studio home">
            <span className="wordmark__name">Academy</span>
            <span className="wordmark__descriptor">Dance Studio</span>
          </Link>
          <p>A first look at a home for dance, music and living traditions.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/about">The story</Link>
          <Link to="/forms">Art forms</Link>
          <Link to="/events">Events</Link>
          <Link to="/connect">Connect</Link>
        </nav>
      </div>

      <div className="footer-credits container">
        <p>
          Preview only · Academy-specific details are pending client confirmation. Photographs are illustrative and
          do not imply an Academy affiliation or endorsement.
        </p>
        <p className="footer-credit-links">
          Photo credits:{' '}
          <a href="https://www.pexels.com/photo/young-dancer-performing-traditional-indian-dance-30481580/" target="_blank" rel="noreferrer">
            Krishna Photography
          </a>{' '}
          <span aria-hidden="true">·</span>{' '}
          <a href="https://www.pexels.com/photo/woman-in-orange-and-yellow-sari-8489689/" target="_blank" rel="noreferrer">
            Thirdman
          </a>
          {' · '}
          <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">
            Pexels License
          </a>
        </p>
      </div>
    </footer>
  );
}
