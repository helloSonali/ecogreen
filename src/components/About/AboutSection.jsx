import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import AboutBanner from './AboutBanner'
import About from '../About'
import CallOut from '../CallOut'
import Footer from '../Footer'

function AboutSection() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <AboutBanner/>
    <About/>
    <CallOut/>
    <Footer/>


    </React.Fragment>
  )
}

export default AboutSection