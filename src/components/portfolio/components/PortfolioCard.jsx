import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion';
import { AiOutlineArrowRight, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FiMaximize2, FiTerminal } from 'react-icons/fi';

const ProjectFrame = ({ children, ...props }) => {
  const present = useIsPresent();
  return (
    <motion.article
      {...props}
      style={{ zIndex: present ? 2 : 1 }}
      aria-hidden={present ? undefined : true}
      inert={present ? undefined : ''}
      data-active={present}
    >
      {children}
    </motion.article>
  );
};

/**
 * Displays one project with an animated replacement transition.
 *
 * @param {Object} props Component properties.
 * @param {Object[]} props.item The active project in an array.
 * @param {Function} props.setCurrentItem Selects the project for its detail panel.
 * @param {Function} props.setIsPopupOpen Opens the project detail panel.
 * @param {number} props.direction Slide direction, either -1 or 1.
 * @param {Function} props.onNavigate Moves to the adjacent project.
 * @param {boolean} props.canNavigate Whether another project or page is available.
 * @param {boolean} [props.compact=false] Whether to show the current page of small cards.
 * @returns {React.ReactElement} The active project card or an empty state.
 */
const PortfolioCard = ({
  item,
  setCurrentItem,
  setIsPopupOpen,
  direction,
  onNavigate,
  canNavigate,
  compact = false,
}) => {
  const reducedMotion = useReducedMotion();
  const project = Array.isArray(item) ? item[0] : null;

  if (!project) {
    return <p className="portfolio__empty">No projects in this category yet.</p>;
  }

  const openDetails = () => {
    setCurrentItem(project);
    setIsPopupOpen(true);
  };

  const arrows = canNavigate && (
    <div className="portfolio__preview-controls">
      <button type="button" aria-label="Previous project" onClick={() => onNavigate(-1)}>
        <AiOutlineLeft aria-hidden="true" />
      </button>
      <button type="button" aria-label="Next project" onClick={() => onNavigate(1)}>
        <AiOutlineRight aria-hidden="true" />
      </button>
    </div>
  );

  if (compact) {
    return (
      <div className="portfolio__category-stage">
        <motion.div
          className="portfolio__category-grid"
          key={project.id}
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={(event, info) => {
            if (Math.abs(info.offset.x) > 55) {
              onNavigate(info.offset.x < 0 ? 1 : -1);
            }
          }}
        >
          {item.map((entry) => (
            <article key={entry.id} className="portfolio__small-card">
              <button
                className="portfolio__small-preview"
                type="button"
                onClick={() => {
                  setCurrentItem(entry);
                  setIsPopupOpen(true);
                }}
                aria-label={`View project ${entry.title}`}
              >
                {entry.category === 'Infra' && entry.previewType !== 'image' ? (
                  <span className="portfolio__small-terminal">
                    <FiTerminal aria-hidden="true" />
                    <strong>{entry.title.replace(/^\[[^\]]+\]\s*/, '')}</strong>
                    <span>Bash / Infrastructure automation</span>
                  </span>
                ) : (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    draggable="false"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </button>
              <div className="portfolio__small-copy">
                <span>{entry.category}</span>
                <h3>{entry.title.replace(/^\[[^\]]+\]\s*/, '')}</h3>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentItem(entry);
                    setIsPopupOpen(true);
                  }}
                >
                  View project <AiOutlineArrowRight aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </motion.div>
        {arrows}
      </div>
    );
  }

  return (
    <div className="portfolio__stage">
      <AnimatePresence initial={false} custom={direction}>
        <ProjectFrame
          key={project.id}
          className="portfolio__feature"
          custom={direction}
          variants={{ enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={(event, info) => {
            if (Math.abs(info.offset.x) > 55) {
              onNavigate(info.offset.x < 0 ? 1 : -1);
            }
          }}
          aria-labelledby={`portfolio-project-${project.id}`}
        >
          <motion.div
            className="portfolio__visual"
            custom={direction}
            variants={{
              enter: (slideDirection) => ({
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : `${slideDirection * 65}%`,
                rotateX: reducedMotion ? 0 : slideDirection * 28,
                scale: reducedMotion ? 1 : 0.78,
              }),
              center: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
              exit: (slideDirection) => ({
                opacity: 0,
                y: reducedMotion ? 0 : `${slideDirection * -70}%`,
                rotateX: reducedMotion ? 0 : slideDirection * -24,
                scale: reducedMotion ? 1 : 0.83,
              }),
            }}
            transition={{ duration: reducedMotion ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portfolio__window-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>
                {project.category === 'Infra' ? 'infrastructure / automation' : 'project / preview'}
              </p>
            </div>
            {project.category === 'Infra' && project.previewType !== 'image' ? (
              <div className="portfolio__terminal">
                <FiTerminal className="portfolio__terminal-icon" aria-hidden="true" />
                <span>BASH / INFRASTRUCTURE</span>
                <strong>{project.title.replace(/^\[[^\]]+\]\s*/, '')}</strong>
                <p>
                  <span aria-hidden="true">$ </span>bash{' '}
                  {project.title.replace(/^\[[^\]]+\]\s*/, '')}
                </p>
                <div>
                  <span>Language</span>
                  <span>{project.language}</span>
                </div>
                <div>
                  <span>Scope</span>
                  <span>{project.role}</span>
                </div>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                draggable="false"
                loading="lazy"
                decoding="async"
              />
            )}
            <button
              className="portfolio__preview-button"
              type="button"
              onClick={openDetails}
              aria-label={`View preview of ${project.title}`}
            >
              <FiMaximize2 aria-hidden="true" />
            </button>
          </motion.div>
          <div className="portfolio__caption">
            <div>
              <span>{project.category}</span>
              <h3 id={`portfolio-project-${project.id}`}>
                {project.title.replace(/^\[[^\]]+\]\s*/, '')}
              </h3>
            </div>
            <button type="button" onClick={openDetails}>
              View project <AiOutlineArrowRight aria-hidden="true" />
            </button>
          </div>
        </ProjectFrame>
      </AnimatePresence>
      {arrows}
    </div>
  );
};

export default PortfolioCard;
