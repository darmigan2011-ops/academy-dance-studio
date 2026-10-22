import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';

const contentToConfirm = [
  {
    number: '01',
    title: 'People & practice',
    body: 'Academy-approved biographies, teaching artists and the perspectives they want to share.',
  },
  {
    number: '02',
    title: 'Programme & place',
    body: 'Confirmed art forms, classes or performances, plus the location and access information audiences need.',
  },
  {
    number: '03',
    title: 'A voice of its own',
    body: 'The studio’s own history, values and language—shared by the people who make it what it is.',
  },
];

export function AboutPage() {
  return (
    <div className="page-transition">
      <PageIntro
        eyebrow="The story"
        title="An identity, still taking shape."
        description="An honest beginning for Academy Dance Studio: a strong visual direction, with room for a real story to arrive."
      />
      <section className="about-statement section-pad container">
        <p className="eyebrow">A proposed foundation</p>
        <div className="about-statement__grid">
          <h2>Tradition deserves<br /><em>context and care.</em></h2>
          <div>
            <p>
              This preview imagines an editorial home for Indian classical dance and music—one that treats each form
              distinctly and gives audiences a thoughtful way into its movement, sound and history.
            </p>
            <p>
              It is a design proposition, not an approved Academy biography. No founders, teaching artists, address,
              operating history or official mission were included in the Academy materials available for this preview.
            </p>
          </div>
        </div>
      </section>

      <section className="confirmation-section section-pad">
        <div className="container">
          <p className="eyebrow eyebrow--gold">What can make this story yours</p>
          <h2>Real details.<br /><em>In the right hands.</em></h2>
          <div className="confirmation-list">
            {contentToConfirm.map((item) => (
              <article className="confirmation-item" key={item.number}>
                <span className="confirmation-item__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-next container section-pad">
        <p className="eyebrow">Begin with the art</p>
        <h2>Explore the forms<br /><em>at the heart of this direction.</em></h2>
        <Link className="button button--ink" to="/forms">Discover Bharatanatyam & Kuchipudi <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
