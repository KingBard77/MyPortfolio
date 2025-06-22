import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineProfile } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from  'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-500} duration={500}><AiOutlineHome/></Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-500} duration={500}><AiOutlineUser/></Link>
      <Link activeClass="active" to="qualification" spy={true} smooth={true} offset={-500} duration={500}><BiBook/></Link>
      <Link activeClass="active" to="abilities" spy={true} smooth={true} offset={-500} duration={500}><AiOutlineCode/></Link>
      <Link activeClass="active" to="service" spy={true} smooth={true} offset={-500} duration={500}><RiServiceLine/></Link>
      <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-500} duration={500}><AiOutlineProfile/></Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500}><BiMessageSquareDetail/></Link>
    </nav>
  )
}

export default Nav;
