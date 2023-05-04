import React from 'react'
import Header from '../Header/Header'
import AboutContent from '../About/AboutContent'
import ChooseUs from './ChooseUS'
import Gallery from './Gallery'
import Blogs from './Blogs'
import Footer from '../Footer/Footer'
import CallOut from '../Footer/CallOut'
import Facts from './Facts'
import TopSeller from './TopSeller'
import BrowseProduct from './BrowseProduct'
function Home() {
  return (
    <React.Fragment>
    <Header/>
    <ChooseUs/>
    <AboutContent/>
    <TopSeller/>
    <BrowseProduct/>
    
   
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
// <BrowseProduct/>
// <Categories/>