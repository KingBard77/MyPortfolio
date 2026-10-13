import { motion, useReducedMotion } from 'framer-motion';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

import mascot from '../../assets/hero/mascot-robot.webp';
import coverLetter from '../../assets/resume/coverletter-badrulamin.pdf';
import resume from '../../assets/resume/resume-badrulamin.pdf';
import './header.css';

/**
 * Renders the portfolio introduction, mascot, and primary profile links.
 *
 * @param {Object} props Component properties.
 * @param {boolean} [props.ready=true] Whether to play the hero entrance.
 * @returns {React.ReactElement} The responsive portfolio hero.
 */
const Header = ({ ready = true }) => {
  const reducedMotion = useReducedMotion();
  const entrance = (delay) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 22 },
    animate: ready || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <header id="home" className="site-hero">
      <div className="container header__container">
        <div className="header__data">
          <motion.p className="home__eyebrow" {...entrance(0.1)}>
            Infrastructure Engineer
            <span className="home__cursor" aria-hidden="true">
              |
            </span>
          </motion.p>
          <motion.h1 className="home__title" {...entrance(0.2)}>
            <span>Hello, I’m</span>
            Badrul Amin
          </motion.h1>
          <motion.p className="home__description" {...entrance(0.3)}>
            I turn complex infrastructure into reliable platforms — building resilient Linux, cloud,
            and automation systems that keep businesses moving.
          </motion.p>

          <motion.div className="header__button" {...entrance(0.4)}>
            <a href="#portfolio" className="hero__button hero__button--primary">
              View My Work <FaArrowRight aria-hidden="true" />
            </a>
            <a
              href={resume}
              className="hero__button hero__button--resume"
              target="_blank"
              rel="noreferrer"
            >
              My Resume <FaDownload aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="header__social" aria-label="Social links" {...entrance(0.5)}>
            <a
              href="https://github.com/KingBard77"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/badrul-amin-762000225/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.instagram.com/bard_7/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (opens in a new tab)"
            >
              <BsInstagram />
            </a>
            <span className="header__social-divider" aria-hidden="true" />
            <a href={coverLetter} className="hero__cover-letter" target="_blank" rel="noreferrer">
              Cover letter <FaArrowRight aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div className="hero__character" {...entrance(0.25)}>
          <div className="hero__character-glow" aria-hidden="true" />
          <img
            className="hero__mascot"
            src={mascot}
            alt="A robot in a teal hoodie with glowing neon eyes"
            width="1122"
            height="1402"
            fetchPriority="high"
          />
          <span className="hero__character-caption">Built on curiosity. Powered by coffee.</span>
        </motion.div>
      </div>

      <a href="#about" className="scroll__down">
        <span>Scroll to explore</span>
        <span className="scroll__mouse" aria-hidden="true">
          <span className="scroll__wheel" />
        </span>
      </a>
      <span className="hero__signature" aria-hidden="true">
        LINUX / CLOUD / AUTOMATION
      </span>
    </header>
  );
};

export default Header;
