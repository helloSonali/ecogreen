import About from './About';
import Blog from './Blog';
import BorderBottom from './BorderBottom';
import CallOut from './CallOut';
import ChooseUs from './ChooseUs';
import Events from './Events';
import Footer from './Footer';
import Fundraising from './Fundraising';
import Gallery from './Gallery';
import Header from './Header';
import Service from './Service';
import React from 'react';
function Home() {
    return (
     <React.Fragment>
      <Header/>
      <Service/>
      <About/>
      <ChooseUs/>
      <Gallery/>
      <Fundraising/>
      <Events/>
      <Blog/>
      <BorderBottom/>
      <CallOut/>
      <Footer/>
      </React.Fragment>
      
    );
  }
  export default Home;