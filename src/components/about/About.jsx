import { useRef } from 'react';
import { BsGraphUp, BsFillHandIndexThumbFill } from 'react-icons/bs';
import { FaRegPaperPlane, FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import profile from '../../assets/about/profile-badrulamin.jpeg';
import { useReveal } from '../../motion/useReveal';
import SectionHeading from '../shared/SectionHeading';

import './about.css';

/**
 * Presents the profile, professional background, and experience statistics.
 *
 * @returns {React.ReactElement} The animated About section.
 */
const About = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} aria-labelledby="about-title">
      <div className="container about__container">
        <div className="about__intro">
          <SectionHeading
            id="about-title"
            eyebrow="Get to know me"
            title="About"
            accent="Me"
            description="The person, curiosity, and drive behind the work."
            icon={FiUser}
          />
        </div>
        <div className="about__me">
          <div className="about__me-image" data-reveal="clip">
            <img src={profile} alt="Badrul Amin" loading="lazy" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards" data-reveal="stagger">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>9+ Completed</small>
            </article>
            <article className="about__card about__card--link">
              <a href="#abilities" className="about__link">
                <BsGraphUp className="about__icon" />
                <h5>Abilities</h5>
                <div className="touch-text">
                  Touch Me <BsFillHandIndexThumbFill className="touch-icon" />
                </div>
              </a>
            </article>
          </div>

          <h3 data-reveal="up">Hi, I'm Badrul Amin bin Hairul Kholidin, Based in Selangor</h3>

          <p data-reveal="up">
            Dedicated IT professional with hands-on experience across infrastructure engineering,
            cloud operations, virtualization, Linux administration, and blockchain technologies. I
            support production environments across TMCloud, Proxmox, Synology, Kubernetes, and Linux
            server platforms, with a focus on reliability, documentation, incident response, and
            secure operations. My background spans infrastructure delivery, observability, disaster
            recovery, vulnerability remediation, and Hyperledger Fabric development. I am committed
            to continuous learning, practical execution, and building resilient technology
            foundations that help teams move with confidence.
          </p>

          <div className="about__btn-wrapper" data-reveal="up">
            <a href="#contact" className="btn btn-primary">
              Let's Talk <FaRegPaperPlane />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
