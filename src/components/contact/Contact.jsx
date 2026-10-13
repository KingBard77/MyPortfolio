import emailjs from 'emailjs-com';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FiArrowUpRight, FiArrowRight, FiMail } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';

import SectionHeading from '../shared/SectionHeading';
import './contact.css';

const contactOptions = [
  {
    title: 'Email',
    value: 'badamin771@gmail.com',
    href: 'mailto:badamin771@gmail.com',
    icon: <MdOutlineEmail />,
  },
  {
    title: 'WhatsApp',
    value: 'Request my number via email or Messenger',
    href: 'mailto:badamin771@gmail.com?subject=WhatsApp%20contact%20request',
    icon: <BsWhatsapp />,
  },
  {
    title: 'Messenger',
    value: 'Badrul Amin',
    href: 'https://m.me/badrula3',
    icon: <RiMessengerLine />,
  },
];

/**
 * Presents direct contact channels and an EmailJS form with visible status.
 *
 * @returns {React.ReactElement} The contact section and message form.
 */
const Contact = () => {
  const form = useRef(null);
  const pending = useRef(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const reducedMotion = useReducedMotion();

  const sendEmail = async (event) => {
    event.preventDefault();
    if (pending.current) {
      return;
    }
    const values = new FormData(form.current);
    if (
      ['name', 'email', 'phone', 'message'].some((field) => !String(values.get(field) || '').trim())
    ) {
      setStatus({ type: 'error', message: 'Please complete each field before sending.' });
      return;
    }
    pending.current = true;
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(
        'service_yzm2idi',
        'template_8higfss',
        form.current,
        'SUvFajLV8BFTM2MPu',
      );
      form.current.reset();
      setStatus({
        type: 'success',
        message: 'Your message has been sent. Thank you for reaching out.',
      });
    } catch {
      setStatus({
        type: 'error',
        message:
          'Your message could not be sent. Please try again or use one of the direct contact links.',
      });
    } finally {
      pending.current = false;
      setSending(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container contact__container">
        <div className="contact__heading">
          <SectionHeading
            id="contact-title"
            eyebrow="Let’s connect"
            title="Your next idea."
            accent="Let’s talk."
            description="Have a project, a technical challenge, or an opportunity in mind? Send me a message."
            icon={FiMail}
          />
        </div>
        <motion.div
          className="contact__intro"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact__options">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                className="contact__option"
                href={option.href}
                target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={option.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <span className="contact__option-icon" aria-hidden="true">
                  {option.icon}
                </span>
                <span>
                  <strong>{option.title}</strong>
                  <span>{option.value}</span>
                </span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          className="contact__form"
          ref={form}
          onSubmit={sendEmail}
          aria-labelledby="contact-form-title"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="contact__eyebrow">START A CONVERSATION</span>
          <h3 id="contact-form-title">Tell me what you have in mind.</h3>
          <div className="contact__fields">
            <div className="contact__field">
              <label htmlFor="contact-name">Full name</label>
              <input
                type="text"
                name="name"
                id="contact-name"
                autoComplete="name"
                maxLength={120}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                name="email"
                id="contact-email"
                autoComplete="email"
                maxLength={254}
                required
              />
            </div>
            <div className="contact__field contact__field--wide">
              <label htmlFor="contact-phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="contact-phone"
                autoComplete="tel"
                maxLength={40}
                required
              />
            </div>
            <div className="contact__field contact__field--wide">
              <label htmlFor="contact-message">Message</label>
              <textarea name="message" id="contact-message" rows={5} maxLength={5000} required />
            </div>
          </div>
          {status && (
            <p
              className={`contact__status contact__status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
            >
              {status.message}
            </p>
          )}
          <button className="contact__submit" type="submit" disabled={sending} aria-busy={sending}>
            {sending ? 'Sending…' : 'Send message'}
            <FiArrowRight aria-hidden="true" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
