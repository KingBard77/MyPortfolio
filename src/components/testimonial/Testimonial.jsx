import { useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { ImQuotesLeft } from 'react-icons/im';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionHeading from '../shared/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';
import testimonials from './data/testimonials';
import './testimonial.css';

/**
 * Presents existing client reviews in an accessible, manually controlled slider.
 *
 * @param {Object} props Testimonial section properties.
 * @param {boolean} [props.embedded=false] Whether a parent owns the section landmark.
 * @returns {React.ReactElement} The testimonials section.
 */
const Testimonial = ({ embedded = false }) => {
  const Container = embedded ? 'div' : 'section';
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const navigate = (direction) => {
    sliderRef.current?.slideTo(
      (activeIndex + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <Container id={embedded ? undefined : 'testimonial'} aria-labelledby="testimonial-title">
      <div className="container testimonial__container">
        <div className="testimonial__heading">
          <SectionHeading
            id="testimonial-title"
            eyebrow="Review from clients"
            title="Good work."
            accent="Kind words."
            description="Feedback from the people I’ve worked with."
            icon={FiMessageCircle}
          />
        </div>
        <div className="testimonial__showcase">
          <Swiper
            modules={[A11y, Keyboard, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            speed={reducedMotion ? 0 : 500}
            keyboard={{ enabled: true, onlyInViewport: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            aria-label="Client testimonials"
          >
            {testimonials.map(({ avatar, name, detail, review }) => (
              <SwiperSlide key={name}>
                <figure className="testimonial__card">
                  <ImQuotesLeft className="testimonial__quote" aria-hidden="true" />
                  <blockquote>{review}</blockquote>
                  <figcaption>
                    <img src={avatar} alt={name} loading="lazy" />
                    <div>
                      <strong>{name}</strong>
                      <span>{detail}</span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial__controls">
            <span aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')}{' '}
              <span>/ {String(testimonials.length).padStart(2, '0')}</span>
            </span>
            <div>
              <button type="button" aria-label="Previous testimonial" onClick={() => navigate(-1)}>
                <AiOutlineLeft aria-hidden="true" />
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => navigate(1)}>
                <AiOutlineRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
