import React from 'react'
import Navbar from '../Header/Navbar';
import AboutBanner from './AboutBanner';
import AboutContent from './AboutContent';
import Footer from '../Footer/Footer';

function About() {
  return (
    <React.Fragment>
    <Navbar/>
    <AboutBanner/>
    <AboutContent/>
    <Footer/>
    </React.Fragment>
  );
}

export default About