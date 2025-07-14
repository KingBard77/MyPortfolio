// Section Qualification
import React, { useState } from 'react'
import './qualification.css'

// Section Icon
import { AiOutlineCalendar, AiOutlineClose } from 'react-icons/ai'
import { GiGraduateCap } from 'react-icons/gi'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BiChevronRight } from 'react-icons/bi'
import { BsDashLg } from 'react-icons/bs'

// Section Conf
import data_experience from './conf/data_experience';
import data_education from './conf/data_education';

const Experience = () => {
    // An array of boolean values, all initially set to false, to control each modal's visibility
    const [activeModal, setActiveModal] = useState(data_experience.map(() => false));

    // Function clicking "View More"
    const handleModalToggle = index => {
      const newActiveModal = [...activeModal];
      newActiveModal[index] = !newActiveModal[index];
      setActiveModal(newActiveModal);
    };

    // Function clicking the "X" button
    const handleModalClose = index => {
      const newActiveModal = [...activeModal];
      newActiveModal[index] = false;
      setActiveModal(newActiveModal);
    };

    // An array of boolean values, all initially set to false, to control each modal's visibility
    const [activeEducationModal, setActiveEducationModal] = useState(data_education.map(() => false));

    // Function clicking "View More"
    const handleEducationModalToggle = index => {
      const newActiveEducationModal = [...activeEducationModal];
      newActiveEducationModal[index] = !newActiveEducationModal[index];
      setActiveEducationModal(newActiveEducationModal);
    }

    // Function clicking the "X" button
    const handleEducationModalClose = index => {
      const newActiveEducationModal = [...activeEducationModal];
      newActiveEducationModal[index] = false;
      setActiveEducationModal(newActiveEducationModal);
    };

    // Escape key closes any active modal
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                // Close all education modals
                setActiveEducationModal(data_education.map(() => false));
                // Close all experience modals
                setActiveModal(data_experience.map(() => false));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    return (
    <section id='qualification'>
      <h5>
        My Journey
      </h5>
      <h2> My Qualification</h2>

      <div className="container experience__container">
        {/* Section Education */}
        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <GiGraduateCap/>&nbsp;&nbsp;Education</h4>

          <div className="timeline">
            {
              data_education.map(({id, logo, courses, university, duration, description1, description2, description3, description4}, index) => {
                return(
                  <div key={id} className="timeline__item">
                    <div className="circle__dot"></div>
                    <h4 className='timeline__title'>{university}</h4>
                    <p className='timeline__text'>{courses}</p>
                    <span className='timeline__date'><AiOutlineCalendar/>
                    {duration}</span>

                    <span className='qualification__button' onClick={() => handleEducationModalToggle(index)}>
                      View More <BiChevronRight className='qualification__button-icon'/>
                    </span>

                    {/* Education Modal */}
                    <div className={`qualification__modal ${activeEducationModal[index] ? 'qualification__active-modal' : ''}`}>
                      <div className="qualification__modal-content">
                        <span className="qualification__modal-close" onClick={() => handleEducationModalClose(index)}>
                          <AiOutlineClose />
                        </span>

                          <div className="qualification__modal-header">
                              <div className="qualification__modal-title-container">
                                  <div className="qualification__modal-logo-wrapper">
                                      <img src={data_education[index].logo} alt={`${data_education[index].company} Logo`} className='qualification__modal-logo'/>
                                  </div>
                                  <h3 className='qualification__modal-title'>{university}</h3>
                              </div>
                          </div>

                          <p className='qualification__modal-subtitle'>
                              <b>{courses}</b><br />
                          </p>

                          <ul className='qualification__modal-qualifications grid'>
                              {data_education[index].descriptions.map((desc, i) => (
                                  <li key={i}>
                                      <BsDashLg className='qualification__modal-icon' />
                                      <p className='qualification__modal-info'>{desc}</p>
                                  </li>
                              ))}
                          </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Section Experience */}
        <div className="experience__frontend">
          <h4 className='qualification__title'>
            <BsFillBriefcaseFill/>&nbsp;&nbsp;Experience</h4>

          <div className="timeline">
          {
            data_experience.map(({id, company, title, duration, description1, description2, description3, description4}, index) => {
              return(
                <div key={id} className="timeline__item">
                  <div className="circle__dot"></div>
                  <h4 className='timeline__title'>{company}</h4>
                  <p className='timeline__text'>{title}</p>
                  <span className='timeline__date'><AiOutlineCalendar/>
                  {duration}</span>

                  <span className='qualification__button' onClick={() => handleModalToggle(index)}>
                      View More <BiChevronRight className='qualification__button-icon'/>
                    </span>

                  {/* Experience Modal */}
                  <div className={`qualification__modal ${activeModal[index] ? 'qualification__active-modal' : ''}`}>
                    <div className="qualification__modal-content">
                      <span className="qualification__modal-close" onClick={() => handleModalClose(index)}>
                        <AiOutlineClose />
                      </span>

                        <div className="qualification__modal-header">
                            <div className="qualification__modal-title-container">
                                <div className="qualification__modal-logo-wrapper">
                                    <img src={data_experience[index].logo} alt={`${data_experience[index].company} Logo`} className='qualification__modal-logo'/>
                                </div>
                                <h3 className='qualification__modal-title'>{company}</h3>
                            </div>
                        </div>

                        <p className='qualification__modal-subtitle'>
                            <b>{data_experience[index].title}</b><br />
                        </p>

                        <ul className='qualification__modal-qualifications grid'>
                            {data_experience[index].descriptions.map((desc, i) => (
                                <li key={i}>
                                    <BsDashLg className='qualification__modal-icon' />
                                    <p className='qualification__modal-info'>{desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience