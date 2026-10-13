import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import './footer.css';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'qualification'],
  ['Skills', 'abilities'],
  ['Services', 'service'],
  ['Work', 'portfolio'],
  ['Gallery', 'gallery'],
  ['Testimonials', 'testimonial'],
  ['Contact', 'contact'],
];

/**
 * Renders portfolio navigation, existing social profiles, and copyright details.
 *
 * @returns {React.ReactElement} The site footer.
 */
const Footer = () => (
  <footer className="site-footer">
    <div className="container footer__container">
      <div className="footer__top">
        <div>
          <a href="#home" className="footer__logo">
            <span className="footer__brand-mark" aria-hidden="true">
              B.
            </span>
            Badrul Amin<span>.</span>
          </a>
          <p>Infrastructure. Automation. Thoughtful engineering.</p>
        </div>
        <a href="#home" className="footer__back-top">
          <span>Back to top</span>
          <span className="scroll__mouse" aria-hidden="true">
            <span className="scroll__wheel" />
          </span>
        </a>
      </div>
      <div className="footer__middle">
        <nav aria-label="Footer navigation">
          <ul>
            {links.map(([label, target]) => (
              <li key={target}>
                <a href={`#${target}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__socials" aria-label="Social profiles">
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
        </div>
      </div>
      <div className="footer__copyright">
        <small>© {new Date().getFullYear()} Badrul Amin. All rights reserved.</small>
        <a href="mailto:badamin771@gmail.com">badamin771@gmail.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
