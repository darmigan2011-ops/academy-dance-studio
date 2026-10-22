import { Link } from 'react-router-dom';
import { DancePhoto } from '../components/DancePhoto';
import { PageIntro } from '../components/PageIntro';
import { photos } from '../data';

export function FormsPage() {
  return (
    <div className="page-transition">
      <PageIntro
        eyebrow="Art forms"
        title="Distinct forms. Deep histories."
        description="A short introduction to Bharatanatyam and Kuchipudi, offered as cultural context for this preview—not as a confirmed Academy programme."
      />

      <section className="forms-page section-pad container">
        <article className="form-detail" id="bharatanatyam">
          <div className="form-detail__copy">
            <p className="eyebrow">01 · Tamil Nadu</p>
            <h2>Bharatanatyam</h2>
            <p>
              A classical dance tradition associated with Tamil Nadu. Its movement brings together rhythmic footwork,
              expressive gesture and storytelling, composed in close relationship with music.
            </p>
            <p className="form-detail__note">
              Like every classical form, Bharatanatyam is carried through distinct teachers, lineages and evolving
              artistic practices.
            </p>
          </div>
          <DancePhoto
            photo={photos.classicalDance}
            className="dance-photo--detail"
            note="Illustrative image only—not verified as Bharatanatyam or an Academy artist."
          />
        </article>

        <div className="forms-divider" aria-hidden="true"><span /> <span /> <span /></div>

        <article className="form-detail form-detail--reverse" id="kuchipudi">
          <div className="form-detail__copy">
            <p className="eyebrow">02 · Andhra Pradesh</p>
            <h2>Kuchipudi</h2>
            <p>
              A classical dance-drama tradition from Andhra Pradesh. Its repertoire brings together expressive
              storytelling, rhythmic footwork and buoyant movement, shaped by music and theatricality.
            </p>
            <p className="form-detail__note">
              Kuchipudi has its own histories and vocabulary; it is not interchangeable with other Indian classical
              dance forms.
            </p>
          </div>
          <DancePhoto
            photo={photos.gesture}
            className="dance-photo--detail"
            note="Illustrative image only—not verified as Kuchipudi or an Academy artist."
          />
        </article>
      </section>

      <aside className="context-note">
        <div className="container context-note__inner">
          <span className="context-note__ornament" aria-hidden="true">✳</span>
          <p>
            These descriptions introduce the art forms only. The materials available do not confirm that Academy
            teaches, presents or represents either form. Photographs are independently sourced references, not Academy artists.
          </p>
          <Link className="text-link text-link--light" to="/faq">More preview notes <span aria-hidden="true">→</span></Link>
        </div>
      </aside>
    </div>
  );
}
