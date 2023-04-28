import React from 'react'

import { NavLink ,} from 'react-router-dom'

function Navbar2() {
  return (
    <React.Fragment>
    <section className="theme_menu stricky">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main-logo">
                <a href="index-2.html"><img src="images/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-md-9 menu-column">
              <nav className="menuzord" id="main_menu">
                <ul className="menuzord-menu">
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/about'>About</NavLink>
                  
                  
                  <NavLink to='/blog'>blog</NavLink>

               
                  
                 
                  <NavLink to='/products'>Products
                    <ul className="dropdown">
                      <NavLink to='/cooler' >Cooler</NavLink>
                      <NavLink to='/freezer'>Freezer</NavLink>
                      
                    </ul>
                  </NavLink>
                  <NavLink to ='/contact'>contact us</NavLink>
                </ul>
              </nav> 
            </div>
            <div className="right-column">
              <div className="right-area">
                <div className="nav_side_content">
                  <div className="search_option">
                    <button className="search tran3s dropdown-toggle color1_bg" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search" aria-hidden="true" /></button>
                    <form action="#" className="dropdown-menu" aria-labelledby="searchDropdown">
                      <input type="text" placeholder="Search..." />
                      <button><i className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Navbar2