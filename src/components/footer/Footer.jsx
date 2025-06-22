import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram}  from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Badrul Amin</a>

      <ul className='parmalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#abilities'>Abilities</a></li>
        <li><a href='#qualification'>Qualification</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="home__social">
        <span className='home__social-follow'>Follow me on</span>

        <div className="home__social-links">
          <a href="https://facebook.com" className='home__social-link'>
            <FaFacebookF/>
            <span>Like on Facebook</span>
          </a>

          <a href="https://instagram.com" className='home__social-link'>
            <FiInstagram/>
            <span>Like on Instagram</span>
          </a>

          <a href="https://https://twitter.com" className='home__social-link'>
            <IoLogoTwitter/>
            <span>Like on Twitter</span>
          </a>
        </div>
      </div>
    
      <div className="footer__copyright">
        <small>&copy; Badrul Amin. All right reserved 2025.</small>
      </div>
    </footer>
  )
}

export default Footer