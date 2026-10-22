import { useEffect } from 'react';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { ConnectPage } from './pages/ConnectPage';
import { EventsPage } from './pages/EventsPage';
import { FaqPage } from './pages/FaqPage';
import { FormsPage } from './pages/FormsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SiteRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default function App() {
  return <SiteRoutes />;
}
