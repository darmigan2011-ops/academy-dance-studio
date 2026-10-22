import { PageIntro } from '../components/PageIntro';

const questions = [
  {
    question: 'Is this the final Academy Dance Studio website?',
    answer:
      'No. This is an independent client-preview concept created under the requested Academy Dance Studio name. Its visual direction is ready for review; Academy-specific copy and details still need confirmation.',
  },
  {
    question: 'Are Bharatanatyam and Kuchipudi confirmed Academy classes?',
    answer:
      'No class list or schedule was provided. The forms page offers brief cultural context because these forms were named in the creative brief; it does not claim Academy teaches or presents them.',
  },
  {
    question: 'Are there events or tickets available?',
    answer:
      'No Academy event dates, venue, ticketing or registration links were supplied, so this preview does not list or sell tickets.',
  },
  {
    question: 'Who are the teachers or founders?',
    answer:
      'No Academy biographies were provided for this preview, so no founders or teachers are named. Approved biographies can be added when supplied.',
  },
  {
    question: 'Who is shown in the photographs?',
    answer:
      'The photographs are independent Pexels stock references. Photographer and license credits are displayed with the images. They are not Academy members and do not imply endorsement.',
  },
  {
    question: 'How can I contact Academy Dance Studio?',
    answer:
      'No official Academy email, telephone number or social account was included in the materials available. The Connect page notes which details can be added once confirmed.',
  },
];

export function FaqPage() {
  return (
    <div className="page-transition">
      <PageIntro
        eyebrow="Frequently asked"
        title="Clear answers, no guesswork."
        description="What this preview represents—and what still needs Academy’s confirmation."
      />
      <section className="faq-section section-pad container">
        <div className="faq-intro">
          <p className="eyebrow">Preview guide</p>
          <h2>Start with<br /><em>what we know.</em></h2>
          <p>Open a question to see the detail currently available.</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-item__index">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.question}</span>
                <span className="faq-item__toggle" aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
