import { Link } from 'react-router-dom';
import { DancePhoto } from '../components/DancePhoto';
import { photos, previewNote } from '../data';

export function HomePage() {
  return (
    <div className="page-transition">
      <section className="home-hero">
        <div className="home-hero__inner container">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--gold">
              <span className="eyebrow__dot" aria-hidden="true" /> A creative direction for review
            </p>
            <h1>
              Let tradition
              <br />
              <em>move forward.</em>
            </h1>
            <p className="home-hero__lede">
              A first look at a home for Indian classical dance, music and the stories held between them.
            </p>
            <div className="hero-actions">
              <Link className="button button--gold" to="/forms">
                Explore the art forms <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link text-link--light" to="/events">
                Event notes <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-signature">
              <span className="hero-signature__rule" aria-hidden="true" />
              <span>Bharatanatyam · Kuchipudi · Music</span>
            </div>
          </div>

          <div className="home-hero__visual" aria-label="Illustrative dance photography">
            <span className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit--two" aria-hidden="true" />
            <div className="hero-photo-frame">
              <DancePhoto photo={photos.classicalDance} className="dance-photo--hero" loading="eager" />
            </div>
            <div className="hero-inset">
              <img src={photos.gesture.src} alt="A woman in an orange sari performing a dance gesture." loading="eager" />
              <span>Gesture · rhythm · story</span>
            </div>
            <p className="hero-visual-note">Illustrative reference imagery · not Academy members</p>
          </div>
        </div>
      </section>

      <aside className="preview-ribbon" aria-label="Preview content note">
        <div className="container preview-ribbon__inner">
          <span className="preview-ribbon__label">Preview note</span>
          <p>{previewNote}</p>
        </div>
      </aside>

      <section className="intro-section section-pad container">
        <div className="intro-section__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">A possible point of view</p>
        <h2>Rooted in lineage.<br /><em>Made for the present.</em></h2>
        <p className="intro-section__text">
          This design puts the art forms first: their detail, their musicality, and the people who carry them forward.
          It leaves room for Academy’s own story to be told in the client’s words.
        </p>
      </section>

      <section className="forms-preview section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The movement</p>
              <h2>Two traditions.<br /><em>Worlds within them.</em></h2>
            </div>
            <p className="section-heading__note">
              An introduction to Bharatanatyam and Kuchipudi as art forms—not a confirmed class list. Images are independent stock references, not identified as either form or Academy artists.
            </p>
          </div>

          <div className="form-cards">
            <Link className="form-card form-card--bharatanatyam" to="/forms">
              <img src={photos.classicalDance.src} alt="A performer in traditional South Asian dance costume on stage, used as illustrative stock photography." loading="lazy" />
              <span className="form-card__index">01 / Tamil Nadu</span>
              <span className="form-card__title">Bharatanatyam</span>
              <span className="form-card__arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="form-card form-card--kuchipudi" to="/forms">
              <img src={photos.gesture.src} alt="A woman in an orange sari performing a graceful dance gesture, used as illustrative stock photography." loading="lazy" />
              <span className="form-card__index">02 / Andhra Pradesh</span>
              <span className="form-card__title">Kuchipudi</span>
              <span className="form-card__arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="form-preview-footer">
            <p>Each form carries its own history, repertoire and living lineages.</p>
            <Link className="text-link" to="/forms">Read about the forms <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="music-section">
        <div className="container music-section__inner">
          <div className="music-section__number" aria-hidden="true">♪</div>
          <div>
            <p className="eyebrow eyebrow--gold">Listening, as much as looking</p>
            <h2>When rhythm<br /><em>becomes language.</em></h2>
          </div>
          <p>
            The visual direction makes space for the music around dance: close listening, live accompaniment and the
            pulse that gives each gesture its place. Specific musicians and performances can be introduced when confirmed.
          </p>
        </div>
      </section>

      <section className="events-preview section-pad container">
        <div className="events-preview__date" aria-hidden="true">
          <span>On</span>
          <strong>stage</strong>
          <i />
        </div>
        <div className="events-preview__copy">
          <p className="eyebrow">Gatherings & performances</p>
          <h2>A calendar<br /><em>ready for its first note.</em></h2>
          <p>No Academy event details were included in the available materials. This space is reserved for verified dates, venues and ticket links.</p>
          <Link className="text-link" to="/events">Visit event notes <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-section__inner">
          <p className="eyebrow eyebrow--gold">A studio story, told with care</p>
          <h2>Let the art lead.<br /><em>Let the details be true.</em></h2>
          <p>See the proposed visual language, then shape it with Academy’s own people, programme and point of view.</p>
          <Link className="button button--outline" to="/about">About this preview <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
