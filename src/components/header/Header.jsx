// Section Header
import React from 'react';
import './header.css';

// Section Button
import resume from '../../assets/resume/v.5/resume_Badrul-Amin-Hairul-Kholidin.pdf';
import coverletter from '../../assets/resume/v.5/cover-letter_Badrul-Amin-Hairul-Kholidin.pdf';

// Section Icon
import { FaDownload, FaUser, FaRegFileAlt, FaLongArrowAltRight } from 'react-icons/fa';

// Section Social Media
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

// Section TypeWriter
import { Typewriter } from 'react-simple-typewriter';

// Section Scroll
import { Link } from 'react-scroll';

// Framer Motion
import { motion } from 'framer-motion';

const Header = () => {
  return (
      <header id="home">
        <div className="container header__container">
          {/* Text Section */}
          <div className="header__data">
            <motion.h5
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
                className="home__title"
            >
              Hello, I'm Badrul Amin
            </motion.h5>

            <span className="home__subtitle">
              Bachelor of Information Technology (Hons.) in Software Engineering
            </span>
            <br />
            and I'm a{' '}
            <span style={{ color: '#00a78e', fontWeight: 'bold' }}>
              <Typewriter
                  words={[
                    'Infra Architecture',
                    'Cloud Administrator',
                    'Backend Developer',
                    'DevOps Specialist',
                    'Frontend Developer',
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={100}
              />
            </span>

            <p className="home__description">
              I help our clients create <span>brands</span>, build digital{' '}
              <span>products</span> and <span>services</span>, innovate, find
              opportunities, and validate ideas.
            </p>

            {/* Button Section */}
            <div className="header__button">
              <a href={resume} className="btn btn-primary" target="_blank" rel="noreferrer">
                Resume <FaDownload className="header__socials-icon" />
              </a>
              <a href={coverletter} className="btn btn-primary" target="_blank" rel="noreferrer">
                Cover Letter <FaRegFileAlt className="header__socials-icon" />
              </a>
              <a href="#about" className="btn">
                About Me <FaUser />
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="header__social">
            <a href="https://www.linkedin.com/in/badrul-amin-762000225/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            <a href="https://github.com/KingBard77" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/bard_7/" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
          </div>

          {/* Scroll Indicator */}
          <span className="scroll__down">
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            Scroll Down <FaLongArrowAltRight className="scroll__down-icon" />
          </Link>
        </span>
        </div>
      </header>
  );
};

export default Header;
