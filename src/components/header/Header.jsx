import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

function Header() {
  return (
    <React.Fragment>
    <Topbar/>
    <hr />
    <Navbar/>
    <HeroSection/>
    
    </React.Fragment>
  )
}

export default Header