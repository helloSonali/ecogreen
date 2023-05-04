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
import Banner from '../Header/Banner'
function Home() {
  return (
    <React.Fragment>
      <Banner/>
    <ChooseUs/>
    <AboutContent/>
    <TopSeller/>
    <BrowseProduct/>  
    <Gallery/>
    <Blogs/>
    <CallOut/>
    </React.Fragment>
  )
}

export default Home
// <Events/>
// <Service/>
// <BrowseProduct/>
// <Categories/>