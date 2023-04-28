import React from 'react'
import Navbar from '../../Navbar'
import Navbar2 from '../../Navbar2'
import CallOut from '../../CallOut'
import Footer from '../../Footer'
import CoolerBanner from './CoolerBanner'
import CoolerProducts from './CoolerProducts'

function Cooler() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <CoolerBanner/>
    <CoolerProducts/>
    <CallOut/>
    <Footer/>
    </React.Fragment>
  )
}

export default Cooler