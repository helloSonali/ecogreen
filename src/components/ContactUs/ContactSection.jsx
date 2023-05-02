import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import CallOut from '../CallOut'
import Footer from '../Footer'
import ContactBanner from './ContactBanner'
import GetTouchWithUs from './GetTouchWithUs'
import FormSection from './FormSection'
import MapSection from './MapSection'

function ContactSection() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <ContactBanner/>
    <GetTouchWithUs/>
    <FormSection/>
    <MapSection/>
    <CallOut/>
    <Footer/>
    </React.Fragment>
  )
}

export default ContactSection