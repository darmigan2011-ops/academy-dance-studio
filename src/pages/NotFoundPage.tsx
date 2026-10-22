import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="not-found page-transition">
      <p className="eyebrow eyebrow--gold">404 · Off the stage</p>
      <h1>This page hasn’t<br /><em>found its rhythm.</em></h1>
      <p>The address may be out of date. Return to the preview homepage to find your way around.</p>
      <Link className="button button--gold" to="/">Back to the homepage <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
