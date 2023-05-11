import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <React.Fragment>
    <div className="container">
        <div className="navbar-header tm-navbar-row">
          <button type="button" className="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar tm-icon-bar" />
            <span className="icon-bar tm-icon-bar" />
            <span className="icon-bar tm-icon-bar" />
          </button>
          <a className="navbar-left visible-xs" href="#"><img src="images/logo.png" alt="Pilates Anytime Logo" /></a>
          <a className="navbar-left hidden-md hidden-lg hidden-xs" href="#"><img className="logo-img  tm-logo-full-white js-logo-white" src="images/logo.png" alt="Pilates Anytime Logo" /><img className="tm-logo-full-color js-logo-color" src="images/logo.png" alt="Pilates Anytime Logo" /></a>
          <a className="navbar-left hidden-sm hidden-xs" href="#"><img className="logo-img tm-logo-img tm-logo-full-white js-logo-white" src="images/logo.png" alt="Logo" /><img className="tm-logo-img tm-logo-full-color js-logo-color" src="images/logo.png" alt="Logo" /></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="navbar-header"><NavLink className="tm-navbar-header" to="/">Home</NavLink></li>   
            <li className="navbar-header"><NavLink className="tm-navbar-header" to="/about" >About Us</NavLink></li>
            <li className="navbar-header"><NavLink className="tm-navbar-header" to="/products">Product</NavLink></li>
            <li className="navbar-header"><NavLink className="tm-navbar-header" to="/blog">Blog</NavLink></li>
            <li className="navbar-header"><NavLink className="tm-navbar-header" to="/contact">Contact</NavLink></li>
            <li className="navbar-header visible-xs"><NavLink className="tm-navbar-header" to="/login">Contact</NavLink></li>
            <li className="navbar-header">
              <a href="/login">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar