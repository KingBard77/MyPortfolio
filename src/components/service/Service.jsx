// Section Service
import React, { useState } from 'react';
import './service.css';

// Section Icon
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BiChevronRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

// Section Conf
import data_service from './conf/data_service';

const Service = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (index) => {
    setActiveModal(index);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
      <section id='service'>
        <h5>What I Offer</h5>
        <h2>Service</h2>

        <div className="container service__container">
            {/*Section Service*/}
          {data_service.map(({ id, icon, title, descriptions }, index) => (
              <div key={id} className="service__content">
                  <div>
                      <div className="service__icon">{icon}</div>
                      <h3 className='service__title'>{title}</h3>
                  </div>
                  <span className='service__button' onClick={() => handleOpenModal(index)}>
                      View More <BiChevronRight className='service__button-icon' />
                  </span>

                  {/* Modal */}
                  <div className={`service__modal ${activeModal === index ? 'active-modal' : ''}`}>
                      <div className="service__modal-content">
                          <span className="service__modal-close" onClick={handleCloseModal}>
                              <AiOutlineClose />
                          </span>

                          <h3 className='service__modal-title'>{title}</h3>
                          <p className='service__modal-description'>{descriptions[0]}</p>

                          <ul className='service__modal-service grid'>
                              {descriptions.map((desc, i) => (
                                  <li key={i}>
                                      <IoMdCheckmarkCircleOutline className='service__modal-icon' />
                                      <p className='service__modal-info'>{desc}</p>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Service;
