import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AiOutlineCalendar,
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';

import { gsap, useGSAP, MOTION_OK } from '../../motion/gsap';
import SectionHeading from '../shared/SectionHeading';
import { useDialog } from '../shared/useDialog';

import educationEntries from './data/education';
import experienceEntries from './data/experience';
import './qualification.css';

const CompanyLogo = ({ logo, company }) => (
  <span className="career__logo-3d">
    <img src={logo} alt={`${company} logo`} loading="lazy" decoding="async" />
  </span>
);

const DetailPanel = ({ entry, onClose }) => {
  const dialogProps = useDialog({ onClose });

  return createPortal(
    <dialog
      {...dialogProps}
      className="career-dialog"
      aria-labelledby="career-dialog-title"
      aria-describedby="career-dialog-description"
    >
      <div className="career-dialog__header">
        <div className="career-dialog__identity">
          <CompanyLogo logo={entry.logo} company={entry.company} />
          <div>
            <span className="career-dialog__eyebrow">
              {entry.kind === 'education' ? 'Education' : 'Career overview'}
            </span>
            <h2 id="career-dialog-title">{entry.title}</h2>
            <p>{entry.company}</p>
          </div>
        </div>
        <button
          className="career-dialog__close"
          type="button"
          onClick={onClose}
          aria-label="Close details"
          autoFocus
        >
          <AiOutlineClose aria-hidden="true" />
        </button>
        <span className="career-dialog__date">
          <AiOutlineCalendar aria-hidden="true" />
          {entry.duration}
          {entry.scopes && (
            <span className="career-dialog__total">
              {entry.descriptions.length} responsibilities
            </span>
          )}
        </span>
      </div>
      <div className="career-dialog__body" tabIndex={0} role="region" aria-label="Complete details">
        {!entry.scopes && (
          <div className="career-dialog__section-heading">
            <h3>{entry.kind === 'education' ? 'Programme details' : 'Full responsibilities'}</h3>
            <span>{entry.descriptions.length} details</span>
          </div>
        )}
        <p
          id="career-dialog-description"
          className={entry.scopes ? 'career__sr-only' : 'career-dialog__description'}
        >
          {entry.kind === 'education'
            ? 'Academic achievements and programme overview.'
            : 'The complete scope of my work in this role.'}
        </p>
        {entry.scopes ? (
          <ScopeCarousel entry={entry} />
        ) : (
          <ol className="career-dialog__list">
            {entry.descriptions.map((description, index) => (
              <li key={description}>
                <span className="career-dialog__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className="career-dialog__footer">
        <span>{entry.company}</span>
        <button type="button" onClick={onClose}>
          Back to my journey <AiOutlineArrowRight aria-hidden="true" />
        </button>
      </div>
    </dialog>,
    document.body,
  );
};

const ScopeCarousel = ({ entry }) => {
  const menuRef = useRef(null);
  const windowRef = useRef(null);
  const [{ index, direction }, setSlide] = useState({ index: 0, direction: 1 });
  const reducedMotion = useReducedMotion();
  const scope = entry.scopes[index];

  useEffect(() => {
    const menu = menuRef.current;
    const activeButton = menu.querySelector('[aria-current]');
    const horizontal = window.matchMedia('(max-width: 700px)').matches;
    menu.scrollTo({
      left: horizontal
        ? activeButton.offsetLeft - (menu.clientWidth - activeButton.clientWidth) / 2
        : 0,
      top: horizontal
        ? 0
        : activeButton.offsetTop - (menu.clientHeight - activeButton.clientHeight) / 2,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
    windowRef.current.scrollTop = 0;
  }, [index, reducedMotion]);
  const changeScope = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= entry.scopes.length || nextIndex === index) {
      return;
    }
    setSlide({ index: nextIndex, direction: nextIndex > index ? 1 : -1 });
  };

  return (
    <div
      className="career__scope-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${entry.title} responsibility scopes`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          changeScope(index + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}
    >
      <div className="career__scope-toolbar">
        <span>RESPONSIBILITY SCOPES</span>
        <span aria-live="polite" aria-atomic="true">
          {index + 1} / {entry.scopes.length}
        </span>
      </div>
      <div className="career__scope-menu" ref={menuRef}>
        {entry.scopes.map((item, scopeIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title} for ${entry.title}`}
            aria-current={scopeIndex === index ? 'true' : undefined}
            onClick={() => changeScope(scopeIndex)}
          >
            <span className="career__scope-menu-index">
              {String(scopeIndex + 1).padStart(2, '0')}
            </span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="career__scope-window" ref={windowRef}>
        <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
          <motion.div
            className="career__scope-slide"
            key={scope.title}
            custom={direction}
            variants={{
              enter: (slideDirection) => ({
                x: reducedMotion ? 0 : slideDirection * 45,
                opacity: reducedMotion ? 1 : 0,
              }),
              center: { x: 0, opacity: 1 },
              exit: (slideDirection) => ({
                x: reducedMotion ? 0 : slideDirection * -45,
                opacity: reducedMotion ? 1 : 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(event, info) => {
              if (Math.abs(info.offset.x) > 45) {
                changeScope(index + (info.offset.x < 0 ? 1 : -1));
              }
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${entry.scopes.length}: ${scope.title}`}
          >
            <span className="career__scope-overline">
              SCOPE {String(index + 1).padStart(2, '0')}
            </span>
            <h4>{scope.title}</h4>
            {scope.subtitle && <p className="career__scope-subtitle">{scope.subtitle}</p>}
            <ul className="career__bullets">
              {scope.descriptions.map((description, itemIndex) => (
                <li key={description}>
                  <span className="career__responsibility-index" aria-hidden="true">
                    {String(itemIndex + 1).padStart(2, '0')}
                  </span>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="career__scope-navigation">
        <button
          type="button"
          aria-label={`Previous scope for ${entry.title}`}
          disabled={index === 0}
          onClick={() => changeScope(index - 1)}
        >
          <AiOutlineLeft aria-hidden="true" /> Previous
        </button>
        <span>{scope.descriptions.length} responsibilities</span>
        <button
          type="button"
          aria-label={`Next scope for ${entry.title}`}
          disabled={index === entry.scopes.length - 1}
          onClick={() => changeScope(index + 1)}
        >
          Next <AiOutlineRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

/**
 * Renders animated career and education timelines with complete detail dialogs.
 *
 * @returns {React.ReactElement} The qualification section and active detail panel.
 */
const Qualification = () => {
  const sectionRef = useRef(null);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(MOTION_OK, () => {
        gsap.fromTo(
          '.career__progress',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.career__timeline',
              start: 'top 70%',
              end: 'bottom 65%',
              scrub: 0.8,
            },
          },
        );
      });
      return () => media.revert();
    },
    { scope: sectionRef },
  );

  const reveal = (direction = 1, delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, x: direction * 28, y: 16 },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="qualification" className="career" ref={sectionRef} aria-labelledby="career-title">
      <div className="container career__container">
        <div className="career__heading">
          <SectionHeading
            id="career-title"
            eyebrow="My career overview"
            title="Professional"
            accent="Experience"
            description="The platforms, people, and projects behind my journey."
            icon={FiBriefcase}
          />
        </div>

        <div className="career__timeline">
          <div className="career__track" aria-hidden="true">
            <div className="career__progress" />
          </div>
          {experienceEntries.map((entry, index) => (
            <article
              className="career__row"
              key={entry.id}
              aria-labelledby={`career-role-${entry.id}`}
            >
              <motion.div className="career__company" {...reveal(-1)}>
                <span className="career__chapter">
                  EXPERIENCE / {String(index + 1).padStart(2, '0')}
                </span>
                <div className="career__company-identity">
                  <CompanyLogo logo={entry.logo} company={entry.company} />
                  <h3>{entry.company}</h3>
                </div>
                <p>{entry.title}</p>
                <span className="career__company-date">{entry.duration}</span>
                <div className="career__company-footer">
                  <span>{index === 0 ? 'Current chapter' : 'Previous chapter'}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </motion.div>

              <div className="career__node" aria-hidden="true">
                <BsFillBriefcaseFill className="career__bag-icon" />
              </div>

              <motion.div className="career__details" {...reveal(1, 0.1)}>
                <h3 id={`career-role-${entry.id}`}>{entry.title}</h3>
                <span className="career__date">
                  <AiOutlineCalendar aria-hidden="true" />
                  {entry.duration}
                </span>
                <h4>Responsibilities</h4>
                <ul className="career__bullets">
                  {entry.descriptions.slice(0, 5).map((description, bulletIndex) => (
                    <motion.li key={description} {...reveal(0, bulletIndex * 0.06)}>
                      {description}
                    </motion.li>
                  ))}
                </ul>
                <button
                  className="career__more"
                  type="button"
                  onClick={() => setSelectedEntry({ ...entry, kind: 'experience' })}
                >
                  See more <span>All {entry.descriptions.length} responsibilities</span>
                  <AiOutlineArrowRight aria-hidden="true" />
                  <span className="career__sr-only">
                    for {entry.title} at {entry.company}
                  </span>
                </button>
              </motion.div>
            </article>
          ))}
        </div>

        <div id="education" className="career__education" aria-labelledby="career-education-title">
          <div className="career__education-heading">
            <SectionHeading
              id="career-education-title"
              eyebrow="The foundation"
              title="My"
              accent="Education"
              description="The learning and qualifications that shaped my journey."
              icon={FiBookOpen}
            />
          </div>
          <div className="career__education-grid">
            {educationEntries.map((entry, index) => (
              <motion.article
                className="career__education-card"
                key={entry.id}
                {...reveal(0, index * 0.08)}
              >
                <div className="career__education-logo">
                  <span className="career__education-step">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <img src={entry.logo} alt={`${entry.university} logo`} loading="lazy" />
                </div>
                <div className="career__education-copy">
                  <span className="career__date">{entry.duration}</span>
                  <h3>{entry.courses}</h3>
                  <p>{entry.university}</p>
                  <span className="career__education-honours">{entry.descriptions[0]}</span>
                </div>
                <div className="career__education-result">
                  <span>CGPA</span>
                  <strong>
                    {entry.descriptions
                      .find((description) => description.startsWith('CGPA:'))
                      ?.replace('CGPA:', '')
                      .trim() || '—'}
                  </strong>
                </div>
                <button
                  type="button"
                  className="career__education-more"
                  onClick={() =>
                    setSelectedEntry({
                      ...entry,
                      company: entry.university,
                      title: entry.courses,
                      kind: 'education',
                    })
                  }
                >
                  View details <AiOutlineArrowRight aria-hidden="true" />
                  <span className="career__sr-only">for {entry.courses}</span>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      {selectedEntry && (
        <DetailPanel entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
      )}
    </section>
  );
};

export default Qualification;
