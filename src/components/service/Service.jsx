import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { FiLayers } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import SectionHeading from '../shared/SectionHeading';
import { useDialog } from '../shared/useDialog';

import services from './data/services';
import './service.css';

const ServiceDetails = ({ service, onClose }) => {
  const dialogProps = useDialog({ onClose });

  return createPortal(
    <dialog {...dialogProps} className="service__modal" aria-labelledby="service-details-title">
      <button
        className="service__modal-close"
        type="button"
        onClick={onClose}
        aria-label="Close service details"
        autoFocus
      >
        <AiOutlineClose aria-hidden="true" />
      </button>
      <span className="service__icon" aria-hidden="true">
        {service.icon}
      </span>
      <span className="service__eyebrow">WHAT I OFFER</span>
      <h2 id="service-details-title">{service.title}</h2>
      <ul className="service__details-list">
        {service.descriptions.map((description) => (
          <li key={description}>
            <IoMdCheckmarkCircleOutline aria-hidden="true" />
            <span>{description}</span>
          </li>
        ))}
      </ul>
      <a className="service__contact" href="#contact" onClick={onClose}>
        Discuss a project <AiOutlineArrowRight aria-hidden="true" />
      </a>
    </dialog>,
    document.body,
  );
};

/**
 * Presents the available services with animated cards and complete details.
 *
 * @returns {React.ReactElement} The services section and selected service dialog.
 */
const Service = () => {
  const [activeModal, setActiveModal] = useState(null);
  const reducedMotion = useReducedMotion();

  return (
    <section id="service" aria-labelledby="service-title">
      <div className="container service__container">
        <div className="service__heading">
          <SectionHeading
            id="service-title"
            eyebrow="What I offer"
            title="Professional"
            accent="Services"
            description="Design, development, and the details that bring a product together."
            icon={FiLayers}
          />
        </div>
        <div className="service__grid">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="service__content"
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : index * 0.1 }}
            >
              <div className="service__card-top">
                <span className="service__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="service__number">0{index + 1}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.descriptions[0]}</p>
              <button
                type="button"
                className="service__button"
                onClick={() => setActiveModal(service)}
                aria-label={`Explore ${service.title}`}
              >
                Explore service <AiOutlineArrowRight aria-hidden="true" />
              </button>
            </motion.article>
          ))}
        </div>
        <div className="service__footer">
          <span>Have a project in mind?</span>
          <a href="#contact">
            Let’s build it together <AiOutlineArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
      {activeModal && <ServiceDetails service={activeModal} onClose={() => setActiveModal(null)} />}
    </section>
  );
};

export default Service;
