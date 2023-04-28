import React from 'react'

import Navbar from '../../Navbar'
import Navbar2 from '../../Navbar2'
import CallOut from '../../CallOut'
import Footer from '../../Footer'
import FreezerBanner from './FreezerBanner'
import FreezerProducts from './FreezerProducts'

function Freezer() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <FreezerBanner/>
    <FreezerProducts/>
    <CallOut/>
    <Footer/>
    </React.Fragment>
  )
}

export default Freezer