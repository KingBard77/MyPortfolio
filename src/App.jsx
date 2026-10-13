import { useCallback, useEffect, useState } from 'react';

import Abilities from './components/abilities/Abilities';
import About from './components/about/About';
import AuroraBackground from './components/background/AuroraBackground';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import GreetingIntro from './components/intro/GreetingIntro';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Qualification from './components/qualification/Qualification';
import Service from './components/service/Service';
import Testimonial from './components/testimonial/Testimonial';

/**
 * Renders the portfolio with a skippable welcome for visitors allowing motion.
 *
 * @returns {React.ReactElement} The welcome and complete portfolio page.
 */
const App = () => {
  const [introActive, setIntroActive] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [heroReady, setHeroReady] = useState(!introActive);
  const revealHero = useCallback(() => setHeroReady(true), []);
  const completeIntro = useCallback(() => setIntroActive(false), []);

  useEffect(() => {
    if (introActive || !window.location.hash) {
      return undefined;
    }
    let targetId;
    try {
      targetId = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return undefined;
    }
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      target?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [introActive]);

  return (
    <>
      {introActive && <GreetingIntro onReveal={revealHero} onComplete={completeIntro} />}
      <div
        id="portfolio-site"
        inert={introActive ? '' : undefined}
        aria-hidden={introActive ? true : undefined}
      >
        <AuroraBackground />
        <Header ready={heroReady} />
        <Nav />
        <About />
        <Qualification />
        <Abilities />
        <Service />
        <Portfolio />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
