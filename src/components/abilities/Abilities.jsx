import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { BsDatabase, BsStars } from 'react-icons/bs';
import { FaTools, FaNetworkWired, FaServer } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import { HiOutlineCloud } from 'react-icons/hi';
import { VscServerProcess } from 'react-icons/vsc';

import SectionHeading from '../shared/SectionHeading';

import abilityGroups from './data/abilities';
import './abilities.css';

const tabIcons = {
  frontend: <BiCodeCurly />,
  backend: <VscServerProcess />,
  infrastructure: <FaServer />,
  cloud: <HiOutlineCloud />,
  network: <FaNetworkWired />,
  database: <BsDatabase />,
  ai: <BsStars />,
  tools: <FaTools />,
};

/**
 * Presents skill categories and proficiency tiles with accessible tab navigation.
 *
 * @param {Object} props Skills section properties.
 * @param {boolean} [props.embedded=false] Whether a parent owns the section landmark.
 * @returns {React.ReactElement} The responsive skills browser.
 */
const Abilities = ({ embedded = false }) => {
  const Container = embedded ? 'div' : 'section';
  const [activeTab, setActiveTab] = useState(abilityGroups[0].id);
  const tabRefs = useRef([]);
  const reducedMotion = useReducedMotion();
  const activeGroup = abilityGroups.find((group) => group.id === activeTab);
  const skillCount = abilityGroups.reduce((count, group) => count + group.skills.length, 0);

  const navigateTabs = (event, index) => {
    let nextIndex;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % abilityGroups.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + abilityGroups.length) % abilityGroups.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = abilityGroups.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    setActiveTab(abilityGroups[nextIndex].id);
    tabRefs.current[nextIndex].focus({ preventScroll: true });
    tabRefs.current[nextIndex].scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <Container id={embedded ? undefined : 'abilities'} aria-labelledby="abilities-title">
      <div className="container abilities__container">
        <div className="abilities__heading">
          <SectionHeading
            id="abilities-title"
            eyebrow="My abilities"
            title="Skills &"
            accent="Technologies"
            description="A toolkit for building, operating, and improving reliable systems."
            icon={FiCode}
          />
          <div className="abilities__summary">
            <span>{abilityGroups.length} disciplines</span>
            <span>{skillCount} skills & tools</span>
          </div>
        </div>

        <div className="abilities__browser">
          <div className="skills__tabs" role="tablist" aria-label="Skill categories">
            {abilityGroups.map((group, index) => (
              <button
                key={group.id}
                id={`skills-tab-${group.id}`}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                className={`skills__header${activeTab === group.id ? ' skills__active' : ''}`}
                type="button"
                role="tab"
                aria-selected={activeTab === group.id}
                aria-controls={`skills-panel-${group.id}`}
                tabIndex={activeTab === group.id ? 0 : -1}
                onClick={() => setActiveTab(group.id)}
                onKeyDown={(event) => navigateTabs(event, index)}
              >
                <span className="skills__icon" aria-hidden="true">
                  {tabIcons[group.id]}
                </span>
                <span className="skills__category-copy">
                  <span className="skills__title">{group.title}</span>
                  <span className="skills__subtitle">{group.subtitle}</span>
                </span>
                <span className="skills__category-count">{group.skills.length}</span>
              </button>
            ))}
          </div>

          <div className="skills__content">
            {abilityGroups
              .filter((group) => group.id !== activeTab)
              .map((group) => (
                <div
                  key={group.id}
                  id={`skills-panel-${group.id}`}
                  role="tabpanel"
                  aria-labelledby={`skills-tab-${group.id}`}
                  hidden={activeTab !== group.id}
                />
              ))}
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                className="skills__group"
                id={`skills-panel-${activeGroup.id}`}
                key={activeGroup.id}
                initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
                role="tabpanel"
                aria-labelledby={`skills-tab-${activeGroup.id}`}
                tabIndex={0}
              >
                <div className="skills__panel-heading">
                  <div>
                    <span className="skills__panel-eyebrow">EXPLORE THE TOOLKIT</span>
                    <h3>{activeGroup.title}</h3>
                    <p>{activeGroup.subtitle}</p>
                  </div>
                  <span className="skills__panel-icon" aria-hidden="true">
                    {tabIcons[activeGroup.id]}
                  </span>
                </div>
                <div className="skills__list">
                  {activeGroup.skills.map((skill, index) => (
                    <motion.article
                      className="skills__tile"
                      key={skill.name}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.04 }}
                    >
                      <span className="skills__data-icon" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <h4>{skill.name}</h4>
                      <div className="skills__tile-footer">
                        <span
                          className={`skills__level skills__level--${skill.level.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {skill.level}
                        </span>
                        {Number.isFinite(skill.percentage) && (
                          <span
                            className="skills__meter"
                            role="meter"
                            aria-label={`${skill.name} proficiency`}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={skill.percentage}
                            aria-valuetext={skill.level}
                          >
                            {[25, 50, 75, 100].map((threshold) => (
                              <span
                                key={threshold}
                                className={
                                  skill.percentage >= threshold ? 'skills__meter-filled' : ''
                                }
                              />
                            ))}
                          </span>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Abilities;
