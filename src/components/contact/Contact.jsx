import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sb4ia1s', 'template_8higfss', form.current, 'SUvFajLV8BFTM2MPu');
    e.target.reset(); // Optional: clears the form after submit
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focus');
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove('focus');
    }
  };

  return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__options-icon" />
              <h4>Email</h4>
              <h5>badamin771@gmail.com</h5>
              <span className='contact__button'>
              <a href="mailto:badamin771@gmail.com" target="_blank" rel="noreferrer" className='contact__button'>
                Send a Message
              </a>
              <BiChevronRight className='contact__button-icon' />
            </span>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__options-icon" />
              <h4>Messenger</h4>
              <h5>Badrul Amin</h5>
              <span className='contact__button'>
              <a href="https://m.me/badrula3" target="_blank" rel="noreferrer" className='contact__button'>
                Send a Message
              </a>
              <BiChevronRight className='contact__button-icon' />
            </span>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__options-icon" />
              <h4>WhatsApp</h4>
              <h5>+6 018 - 9139569</h5>
              <span className='contact__button'>
              <a href="https://wa.me/+60189139569" target="_blank" rel="noreferrer" className='contact__button'>
                Send a Message
              </a>
              <BiChevronRight className='contact__button-icon' />
            </span>
            </article>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="input__container">
              <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
              />
              <label htmlFor="name">Full Name</label>
              <span>Full Name</span>
            </div>

            <div className="input__container">
              <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
              />
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>

            <div className="input__container">
              <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="input"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
              />
              <label htmlFor="phone">Phone</label>
              <span>Phone</span>
            </div>

            <div className="input__container">
            <textarea
                name="message"
                id="message"
                className="input"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
            ></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>

            <button type="submit" className='btn btn-primary'>
              Send Message <FaRegPaperPlane />
            </button>
          </form>
        </div>
      </section>
  );
};

export default Contact;
