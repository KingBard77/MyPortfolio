import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlineRight,
  AiFillYoutube,
  AiFillGithub,
} from 'react-icons/ai';
import { FiGrid, FiMaximize2, FiArrowUpRight } from 'react-icons/fi';

import SectionHeading from '../shared/SectionHeading';
import { useDialog } from '../shared/useDialog';

import PortfolioButton from './components/PortfolioButton';
import PortfolioCard from './components/PortfolioCard';
import portfolioProjects from './data/portfolio';
import './portfolio.css';

const ProjectDetails = ({ project, onClose, onNavigate, count, index }) => {
  const [expanded, setExpanded] = useState(false);
  const dialogProps = useDialog({
    onClose,
    fallbackFocusSelector: '.portfolio__carousel',
    onCancel: () => {
      if (expanded) {
        setExpanded(false);
      } else {
        onClose();
      }
    },
  });

  return createPortal(
    <dialog
      {...dialogProps}
      className={`portfolio-dialog${expanded ? ' portfolio-dialog--expanded' : ''}`}
      aria-labelledby="portfolio-dialog-title"
    >
      <div className="portfolio-dialog__header">
        <span>
          {project.category} / PROJECT {String(index + 1).padStart(2, '0')}
        </span>
        <button type="button" onClick={onClose} aria-label="Close project details" autoFocus>
          <AiOutlineClose aria-hidden="true" />
        </button>
      </div>
      <div className="portfolio-dialog__body">
        <button
          className="portfolio-dialog__image"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Return to project information' : 'Enlarge project image'}
        >
          <img src={project.image} alt={project.title} />
          <span>
            <FiMaximize2 aria-hidden="true" /> {expanded ? 'Back to project' : 'Enlarge image'}
          </span>
        </button>
        <div className="portfolio-dialog__copy" hidden={expanded}>
          <h2 id="portfolio-dialog-title">{project.title}</h2>
          <div className="portfolio-dialog__summary">
            {[
              ['Objective', project.objective],
              ['Scope', project.scope],
              ['Outcome', project.outcome],
            ].map(([label, content]) => (
              <div className="portfolio-dialog__summary-item" key={label}>
                <h3>{label}</h3>
                <p>{content}</p>
              </div>
            ))}
          </div>
          <dl>
            <div>
              <dt>Created</dt>
              <dd>{project.created}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Technologies</dt>
              <dd>{project.language}</dd>
            </div>
          </dl>
          <div className="portfolio-dialog__links">
            {/^https?:\/\//.test(project.github || '') && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <AiFillGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            {/^https?:\/\//.test(project.youtube || '') && (
              <a href={project.youtube} target="_blank" rel="noreferrer">
                <AiFillYoutube aria-hidden="true" /> Watch demo{' '}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="portfolio-dialog__navigation">
        <button
          type="button"
          onClick={() => {
            setExpanded(false);
            onNavigate(-1);
          }}
          disabled={count < 2}
        >
          <AiOutlineLeft aria-hidden="true" /> Previous
        </button>
        <span aria-live="polite">
          {index + 1} / {count}
        </span>
        <button
          type="button"
          onClick={() => {
            setExpanded(false);
            onNavigate(1);
          }}
          disabled={count < 2}
        >
          Next <AiOutlineRight aria-hidden="true" />
        </button>
      </div>
    </dialog>,
    document.body,
  );
};

/**
 * Renders a filterable project showcase with animated card navigation.
 *
 * @returns {React.ReactElement} The portfolio carousel and project detail dialog.
 */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [pageSize, setPageSize] = useState(4);
  const [{ index, direction }, setSlide] = useState({ index: 0, direction: 1 });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [detailIndex, setDetailIndex] = useState(0);
  const categories = useMemo(
    () => ['All', ...new Set(portfolioProjects.map((project) => project.category))],
    [],
  );
  const projects = useMemo(
    () =>
      activeCategory === 'All'
        ? portfolioProjects
        : portfolioProjects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );
  const currentProject = projects[index] || projects[0];

  const grouped = activeCategory !== 'All';
  const pageCount = grouped ? Math.ceil(projects.length / pageSize) : projects.length;
  const visibleProjects = grouped
    ? projects.slice(index, index + pageSize)
    : currentProject
      ? [currentProject]
      : [];

  const navigate = (step) => {
    if (pageCount < 2) {
      return;
    }
    setSlide((previous) => {
      const page = grouped ? Math.floor(previous.index / pageSize) : previous.index;
      const nextPage = (page + step + pageCount) % pageCount;
      return { index: grouped ? nextPage * pageSize : nextPage, direction: step > 0 ? 1 : -1 };
    });
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSlide({ index: 0, direction: 1 });
  };

  return (
    <section id="portfolio" aria-labelledby="portfolio-title">
      <div className="container portfolio__container">
        <div className="portfolio__heading">
          <SectionHeading
            id="portfolio-title"
            eyebrow="My recent works"
            title="Featured"
            accent="Work"
            description="From web applications to infrastructure automation."
            icon={FiGrid}
          />
        </div>
        <PortfolioButton
          onCategoryChange={handleCategoryChange}
          menuItems={categories}
          activeCategory={activeCategory}
        />
        {grouped && (
          <div className="portfolio__page-size" role="group" aria-label="Cards per page">
            <span>Cards per page</span>
            {[2, 4, 6, 8].map((size) => (
              <button
                key={size}
                type="button"
                aria-pressed={pageSize === size}
                onClick={() => {
                  setPageSize(size);
                  setSlide({ index: 0, direction: 1 });
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        <div
          className="portfolio__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target.closest('select, input, textarea')) {
              return;
            }
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              navigate(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
        >
          <div className="portfolio__carousel-toolbar">
            <span>
              {grouped ? 'PROJECTS' : 'PROJECT'} {String(index + 1).padStart(2, '0')}
              {grouped &&
                `–${String(Math.min(index + pageSize, projects.length)).padStart(2, '0')}`}{' '}
              <span>/ {String(projects.length).padStart(2, '0')}</span>
            </span>
            <span>{pageCount > 1 ? 'Swipe or use the arrows' : activeCategory}</span>
          </div>
          <PortfolioCard
            item={visibleProjects}
            setCurrentItem={(project) =>
              setDetailIndex(projects.findIndex((candidate) => candidate.id === project.id))
            }
            setIsPopupOpen={setIsPopupOpen}
            direction={direction}
            onNavigate={navigate}
            canNavigate={pageCount > 1}
            compact={grouped}
          />
          <span
            className="portfolio__announcement"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {grouped
              ? `Showing projects ${index + 1} through ${Math.min(index + pageSize, projects.length)} of ${projects.length}`
              : `${index + 1} of ${projects.length}: ${currentProject?.title || ''}`}
          </span>
        </div>
      </div>
      {isPopupOpen && projects[detailIndex] && (
        <ProjectDetails
          project={projects[detailIndex]}
          index={detailIndex}
          count={projects.length}
          onClose={() => setIsPopupOpen(false)}
          onNavigate={(step) =>
            setDetailIndex((previous) => (previous + step + projects.length) % projects.length)
          }
        />
      )}
    </section>
  );
};

export default Portfolio;
