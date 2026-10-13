import { motion, useReducedMotion } from 'framer-motion';
import './section-heading.css';

/**
 * Renders a consistent, accessible heading for a portfolio section.
 *
 * @param {Object} props - Section heading content.
 * @param {string} props.id - Heading identifier used by the section landmark.
 * @param {string} props.eyebrow - Short subtitle displayed in the outlined pill.
 * @param {string} props.title - Primary heading text.
 * @param {string} props.accent - Heading text highlighted in teal.
 * @param {string} props.description - Supporting section description.
 * @param {React.ElementType} props.icon - Decorative subtitle icon.
 * @returns {React.ReactElement} The animated section heading.
 */
const SectionHeading = ({ id, eyebrow, title, accent, description, icon: Icon }) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="section-heading"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.6 }}
    >
      <span className="section-heading__eyebrow">
        <Icon aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 id={id} className="section-heading__title">
        {title} <span>{accent}</span>
      </h2>
      <p className="section-heading__description">{description}</p>
    </motion.div>
  );
};

export default SectionHeading;
