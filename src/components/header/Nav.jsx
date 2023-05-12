import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'
function Nav() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const originalOffsetTop = navbar.offsetTop;
    
    function handleScroll() {
      if (window.pageYOffset >= originalOffsetTop) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className="bottom-navbar" ref={navbarRef}>
    <div class="container">
    <div class="navbar-header tm-navbar-row">
      <button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar tm-icon-bar"></span>
        <span class="icon-bar tm-icon-bar"></span>
        <span class="icon-bar tm-icon-bar"></span>
      </button>
      <a class="navbar-left visible-xs" href="#"><img src="images/logo.png" alt="Pilates Anytime Logo" /></a>
      <a class="navbar-left hidden-md hidden-lg hidden-xs" href="#"><img class="logo-img  tm-logo-full-white js-logo-white"  width="80px" src="images/logo.png" alt="Pilates Anytime Logo" /><img class="tm-logo-full-color js-logo-color" src="images/logo.png" alt="Pilates Anytime Logo" /></a>
      <a class="navbar-left hidden-sm hidden-xs" href="#"><img class="logo-img tm-logo-img tm-logo-full-white js-logo-white"  width="80px" src="images/logo.png" alt="Logo" /><img class="tm-logo-img tm-logo-full-color js-logo-color" src="images/logo.png" alt="Logo" /></a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><NavLink class="tm-navbar-header" to="/">Home</NavLink></li>   
        <li><NavLink class="tm-navbar-header" to="/about">About Us</NavLink></li>
        <li><NavLink class="tm-navbar-header" to="/products">Product</NavLink></li>
        <li><NavLink class="tm-navbar-header" to="/blog">Blog</NavLink></li>
        <li><NavLink class="tm-navbar-header" to="/contact">Contact</NavLink></li>
        <li class="visible-xs"><NavLink class="tm-navbar-header" to="/login">Contact</NavLink></li>
        <li><a href="/login">Log In</a></li>
      </ul>
    </div>
  </div>
    </nav>
  );
}

export default Nav;