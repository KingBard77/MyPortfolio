import { useEffect, useState } from 'react';
import './aurora-background.css';

const stars = Array.from({ length: 45 }, (_, index) => ({
  left: `${(index * 37 + 7) % 100}%`,
  top: `${(index * 53 + 11) % 100}%`,
  animationDelay: `${-(index * 0.37) % 3}s`,
  width: index % 5 === 0 ? '3px' : '2px',
  height: index % 5 === 0 ? '3px' : '2px',
}));

/**
 * Renders a restrained aurora backdrop and pauses it while the page is hidden.
 *
 * @returns {React.ReactElement} The decorative background layers.
 */
const AuroraBackground = () => {
  const [paused, setPaused] = useState(() => document.hidden);

  useEffect(() => {
    const updateVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return (
    <div
      className={`aurora-background${paused ? ' aurora-background--paused' : ''}`}
      aria-hidden="true"
    >
      <div className="aurora-background__ribbon aurora-background__ribbon--teal" />
      <div className="aurora-background__ribbon aurora-background__ribbon--violet" />
      <div className="aurora-background__shade" />
      <div className="aurora-background__stars">
        {stars.map((style, index) => (
          <span key={index} style={style} />
        ))}
      </div>
    </div>
  );
};

export default AuroraBackground;
