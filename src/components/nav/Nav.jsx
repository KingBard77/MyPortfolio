import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiGrid,
  FiImage,
  FiMessageCircle,
  FiMail,
} from 'react-icons/fi';
import './nav.css';

const navigation = [
  { id: 'home', label: 'Home', icon: <FiHome /> },
  { id: 'about', label: 'About', icon: <FiUser /> },
  { id: 'qualification', label: 'Experience', icon: <FiBriefcase /> },
  { id: 'abilities', label: 'Skills', icon: <FiCode /> },
  { id: 'service', label: 'Services', icon: <FiLayers /> },
  { id: 'portfolio', label: 'Projects', icon: <FiGrid /> },
  { id: 'gallery', label: 'Gallery', icon: <FiImage /> },
  { id: 'testimonial', label: 'Testimonials', icon: <FiMessageCircle /> },
  { id: 'contact', label: 'Contact', icon: <FiMail /> },
];

const NavigationDock = React.forwardRef(({ children, ...props }, ref) => {
  const present = useIsPresent();
  return (
    <motion.nav
      ref={ref}
      {...props}
      aria-hidden={present ? undefined : true}
      inert={present ? undefined : ''}
    >
      {children}
    </motion.nav>
  );
});

NavigationDock.displayName = 'NavigationDock';

/**
 * Renders visible desktop section links and a compact mobile navigation menu.
 *
 * @returns {React.ReactElement} The header navigation and optional floating dock.
 */
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const shellRef = useRef(null);
  const toggleRef = useRef(null);
  const dockRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }
    const dismiss = (event) => {
      if (!shellRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current.focus();
      }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1100px)');
    const closeMobileMenu = () => {
      if (desktop.matches) {
        setMenuOpen(false);
      }
    };
    desktop.addEventListener('change', closeMobileMenu);
    return () => desktop.removeEventListener('change', closeMobileMenu);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      const section = document.getElementById(id);
      if (section) {
        section.tabIndex = -1;
        section.focus({ preventScroll: true });
      }
    });
  };

  const navigateIcons = (event) => {
    const controls = [...dockRef.current.querySelectorAll('a')];
    const current = controls.indexOf(document.activeElement);
    let next;
    if (event.key === 'ArrowRight') {
      next = (current + 1) % controls.length;
    } else if (event.key === 'ArrowLeft') {
      next = (current - 1 + controls.length) % controls.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = controls.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    controls[next].focus({ preventScroll: true });
    controls[next].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  return (
    <div className="navigation-shell" ref={shellRef}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a
          className="site-nav__brand"
          href="#home"
          onClick={() => navigate('home')}
          aria-label="Badrul Amin home"
        >
          <span className="site-nav__mark" aria-hidden="true">
            B
          </span>
          <span>
            Badrul<span className="site-nav__brand-dot">.</span>
          </span>
        </a>
        <ul className="site-nav__links">
          {navigation.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => navigate(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`site-nav__toggle${menuOpen ? ' site-nav__toggle--open' : ''}`}
          ref={toggleRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          <span>Menu</span>
        </button>
        <a className="site-nav__action" href="#contact" onClick={() => navigate('contact')}>
          Reach Out <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <NavigationDock
            className="site-nav__popup"
            id="primary-links"
            aria-label="Section navigation"
            ref={dockRef}
            initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 12, scale: reducedMotion ? 1 : 0.96 }}
            transition={{ duration: reducedMotion ? 0 : 0.22 }}
            onKeyDown={navigateIcons}
          >
            {navigation.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-label={label}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => navigate(id)}
              >
                <span aria-hidden="true">{icon}</span>
                <span className="site-nav__tooltip">{label}</span>
              </a>
            ))}
          </NavigationDock>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
