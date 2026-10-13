import { useEffect, useState } from 'react';
import './greeting-intro.css';

const greetings = [
  { text: 'Hello', language: 'en' },
  { text: 'नमस्ते', language: 'hi' },
  { text: 'Hola', language: 'es' },
  { text: 'Bonjour', language: 'fr' },
  { text: 'Ciao', language: 'it' },
  { text: 'Olá', language: 'pt' },
  { text: 'こんにちは', language: 'ja' },
  { text: 'Merhaba', language: 'tr' },
  { text: 'Γειά', language: 'el' },
  { text: 'Hej', language: 'sv' },
  { text: 'Hallo', language: 'de' },
  { text: 'Salam', language: 'ms' },
];

/**
 * Plays a short multilingual welcome before revealing the portfolio.
 *
 * @param {Object} props Component properties.
 * @param {Function} props.onReveal Starts the hero entrance during the panel exit.
 * @param {Function} props.onComplete Removes the intro and restores page access.
 * @returns {React.ReactElement} The greeting overlay and skip control.
 */
const GreetingIntro = ({ onReveal, onComplete }) => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timers = greetings
      .slice(1)
      .map((greeting, index) =>
        window.setTimeout(() => setGreetingIndex(index + 1), (index + 1) * 180),
      );
    timers.push(
      window.setTimeout(() => {
        setExiting(true);
        onReveal();
      }, 2400),
    );
    timers.push(window.setTimeout(onComplete, 3100));

    const skipOnEscape = (event) => {
      if (event.key === 'Escape') {
        onReveal();
        onComplete();
      }
    };
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (event) => {
      if (event.matches) {
        onReveal();
        onComplete();
      }
    };
    window.addEventListener('keydown', skipOnEscape);
    motionPreference.addEventListener('change', handleMotionChange);

    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', skipOnEscape);
      motionPreference.removeEventListener('change', handleMotionChange);
    };
  }, [onReveal, onComplete]);

  const skipIntro = () => {
    onReveal();
    onComplete();
  };
  const greeting = greetings[greetingIndex];

  return (
    <div className={`greeting-intro${exiting ? ' greeting-intro--exiting' : ''}`}>
      <span className="greeting-intro__accessible">Welcome to Badrul Amin’s portfolio.</span>
      <span
        key={greetingIndex}
        className="greeting-intro__word"
        lang={greeting.language}
        aria-hidden="true"
      >
        {greeting.text}
      </span>
      <button className="greeting-intro__skip" type="button" onClick={skipIntro}>
        Skip intro <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
};

export default GreetingIntro;
