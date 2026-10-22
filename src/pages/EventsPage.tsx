import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';

export function EventsPage() {
  return (
    <div className="page-transition">
      <PageIntro
        eyebrow="Events & performances"
        title="A calendar ready for its first note."
        description="A considered event page starts with confirmed information. Nothing has been announced here on Academy’s behalf."
      />

      <section className="event-state-section section-pad container">
        <div className="event-card-empty">
          <div className="event-card-empty__symbol" aria-hidden="true">
            <span>—</span>
            <span>—</span>
            <span>—</span>
          </div>
          <div className="event-card-empty__copy">
            <p className="eyebrow">Programme details to come</p>
            <h2>No confirmed dates<br /><em>to share yet.</em></h2>
            <p>
              No Academy event dates, venues, performers, ticket details or past-event materials were included in the
              references available for this preview. We have left those details out rather than fill the calendar with
              assumptions.
            </p>
            <p className="event-card-empty__next">
              When approved details are available, this page can bring together performances, workshops and ways to attend.
            </p>
            <div className="hero-actions">
              <Link className="button button--ink" to="/connect">What details are needed? <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" to="/faq">Read the FAQs <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="event-card-empty__footnote">
            <span aria-hidden="true">01</span>
            <span>Verified event information only</span>
          </div>
        </div>
      </section>
    </div>
  );
}
