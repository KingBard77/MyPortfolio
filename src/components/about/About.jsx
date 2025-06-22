// Section About
import React from 'react';
import './about.css';

// Section Image
import profile from '../../assets/about/img-profile.jpeg';

// Section Icon
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { BsFillHandIndexThumbFill } from 'react-icons/bs';

// Framer Motion
import { motion } from 'framer-motion';

const About = () => {
  return (
      <section id="about">
        <div className="container about__container">
          <div className="about__intro">
            <h5>Get To Know</h5>
            <motion.h2
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
            >
              About Me
            </motion.h2>
          </div>

          {/* Left: Image + Title */}
          <div className="about__me">
            <div className="about__me-image">
              <img src={profile} alt="About Me" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content">
            <div className="about__cards">

              {/*Section Column Right*/}
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              {/*Section Project*/}
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Project</h5>
                <small>9+ Completed</small>
              </article>

              {/*Section Abilities*/}
              <article className='about__card about__card--link'>
                <a href="#abilities" className="about__link">
                  <BsGraphUp className='about__icon' />
                  <h5>Abilities</h5>
                  <div className="touch-text">
                    Touch Me <BsFillHandIndexThumbFill className="touch-icon" />
                  </div>
                </a>
              </article>
            </div>

            <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            >
              Hi, I'm Badrul Amin bin Hairul Kholidin, Based in Selangor
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
            >
              Enthusiastic and detail-oriented Software Engineer with a strong academic background and less than one year of professional experience.
              I possess a passion for creating and implementing innovative software solutions, developed through rigorous studies and hands-on projects.
              My understanding of the software development lifecycle and commitment to delivering high-quality products make me a valuable asset to any software engineering team.
              I am eager to leverage my programming skills and contribute to a full-time position in the field of Software Engineering, supporting a company's future growth and success.
            </motion.p>

            <div className="about__btn-wrapper">
              <a href="#contact" className="btn btn-primary">Let's Talk <FaRegPaperPlane /></a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;