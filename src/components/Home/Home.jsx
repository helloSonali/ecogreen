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
import FormSection from '../contact/FormSection'
import TopSlider from '../slider/TopSlider'
import ContactFrom from './ContactFrom'
function Home() {
  return (
    <React.Fragment>
      <Banner/>
    <ChooseUs/>
    <AboutContent/>
    <TopSeller/>
    <BrowseProduct/>  
    <TopSlider/>
    <Blogs/>
<ContactFrom/>
    <CallOut/>
    </React.Fragment>
  )
}

export default Home
// <Events/>
// <Service/>
// <BrowseProduct/>
// <Categories/>
// <Gallery/>
// <FormSection/>