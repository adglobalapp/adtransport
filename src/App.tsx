import { useEffect } from 'react';
import { About } from './components/About';
import { Cards } from './components/Cards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Privacy } from './components/Privacy';
import { ProfileHero } from './components/ProfileHero';
import { Timeline } from './components/Timeline';
import { useI18n } from './i18n';
import { initReveal } from './utils/reveal';

export function App() {
  const { lang, t } = useI18n();

  // Nyelvváltáskor újrarenderelt elemek is kapjanak reveal-t
  useEffect(() => initReveal(), [lang]);

  // Egyetlen aloldal: /privacy (az nginx minden ismeretlen útvonalra az index.html-t adja)
  if (window.location.pathname.replace(/\/$/, '') === '/privacy') {
    return (
      <>
        <Header />
        <main>
          <Privacy />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <ProfileHero hero={t.hero} stats={t.stats} />
        <About about={t.about} />
        <Cards id="services" data={t.services} />
        <Gallery id="fleet" data={t.fleet} />
        <Timeline id="experience" data={t.experience} />
        <Contact contact={t.contact} />
      </main>
      <Footer />
    </>
  );
}
