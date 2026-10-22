import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';

const details = [
  'An Academy-approved email address or contact form destination',
  'Official social profiles and the preferred account to feature',
  'Confirmed studio location, access notes and service area',
  'Approved classes, performance dates, and official RSVP links',
];

export function ConnectPage() {
  return (
    <div className="page-transition">
      <PageIntro
        eyebrow="Connect"
        title="The right details make the welcome."
        description="No official Academy contact information or social links were supplied, so this preview does not publish or invent them."
      />
      <section className="connect-section section-pad container">
        <div className="connect-panel">
          <div className="connect-panel__intro">
            <p className="eyebrow eyebrow--gold">Ready when you are</p>
            <h2>Bring the<br /><em>real-world details.</em></h2>
            <p>
              Once verified, these essentials can turn a visual concept into a useful place to find the studio, meet its
              artists and join its programme.
            </p>
          </div>
          <ul className="connect-checklist">
            {details.map((detail, index) => (
              <li key={detail}>
                <span className="connect-checklist__number">0{index + 1}</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="connect-bottom">
          <p>There is no placeholder form here: messages should go only to an approved destination.</p>
          <Link className="text-link" to="/about">Return to the story <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </div>
  );
}
