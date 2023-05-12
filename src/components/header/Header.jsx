import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Nav from './Nav'

function Header() {
  return (
    <React.Fragment>
    <Topbar/>
    <hr />
   <Nav/>
    <HeroSection/>
    
    </React.Fragment>
  )
}

export default Header
// <Navbar/>