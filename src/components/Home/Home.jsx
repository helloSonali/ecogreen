import React from 'react'
import Header from '../Header/Header'
// import About from '../About/About'
import AboutContent from '../About/AboutContent'
import Service from './Service'
import ChooseUs from './ChooseUS'
import Gallery from './Gallery'
// import Events from './Events'
import Blogs from './Blogs'
import Footer from '../Footer/Footer'
import CallOut from '../Footer/CallOut'
import BrowseProduct from './BrowseProduct'
import Facts from './Facts'
function Home() {
  return (
    <React.Fragment>
    <Header/>
    <AboutContent/>
    <BrowseProduct/>
    <ChooseUs/>
    <Facts/>
    <Gallery/>
    <Blogs/>
    <CallOut/>
    <Footer/>
    </React.Fragment>
  )
}

export default Home
// <Events/>
// <Service/>
// 