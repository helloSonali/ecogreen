import React from 'react'
import Navbar from '../Header/Navbar'
import ContactBanner from './ContactBanner'
import GetTouchWithUs from './GetTouchWithUs'
import FormSection from './FormSection'
import MapSection from './MapSection'
import CallOut from '../Footer/CallOut'
import Footer from '../Footer/Footer'

function Contact() {
  return (
   <React.Fragment>
   <Navbar/>
   <ContactBanner/>
   <GetTouchWithUs/>
   <FormSection/>
   <MapSection/>
   <CallOut/>
   <Footer/>


  
   </React.Fragment>
  )
}

export default Contact