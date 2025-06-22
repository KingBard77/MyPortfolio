// Section Testimonial
import React from 'react'
import './testimonial.css'

// Section Icon
import { ImQuotesLeft } from 'react-icons/im'

// import Swiper Core Module
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Section Conf
import data_testimonial from './conf/data_testimonial';

const Testimonial = () => {
  return (
      <section id='testimonial'>
        <h5>Review from clients</h5>
        <h2>Testimonial</h2>

        <Swiper
            className="container testimonial__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
          {
            data_testimonial.map(({ avatar, name, detail, review }, index) => (
                <SwiperSlide key={index} className='testimonial'>
                  <div className="testimonial__quote">
                    <ImQuotesLeft />
                  </div>
                  <div className="client__avatar">
                    <img src={avatar} alt={`Avatar of ${name}`} />
                  </div>

                  <h5 className='client__name'>{name}</h5>
                  <h3 className='client__detail'>{detail}</h3>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
  )
}

export default Testimonial
