import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Qualification from './components/qualification/Qualification'
import Abilities from './components/abilities/Abilities'
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio' 
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header/>
      <Nav/>
      <About/>
      <Qualification/>
      <Abilities/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </Router>
  )
}

export default App;