import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <React.Fragment>
    <div className="top-bar">
        <div className="container">
          <div className="clearfix">
            <ul className="float_left top-bar-info">
              <li><i className="icon-phone-call" />Phone: (123) 0200 12345</li>
              <li><i className="icon-e-mail-envelope" />Supportus@Ecogreen.com</li>
            </ul>
            <div className="right-column float_right">
              <div id="polyglotLanguageSwitcher" className>
                <form action="#">
                  <select id="polyglot-language-options">
                    <option id="en" value="en" selected>Eng</option>
                    <option id="fr" value="fr">Fre</option>
                    <option id="de" value="de">Ger</option>
                    <option id="it" value="it">Ita</option>
                    <option id="es" value="es">Spa</option>
                  </select>
                </form>
              </div>
              <ul className="social list_inline">
                <li><Link><i className="fa fa-facebook" /></Link></li>
                <li><Link><i className="fa fa-linkedin" /></Link></li>
                <li><Link><i className="fa fa-twitter" /></Link></li>
              </ul>
              <button className="thm-btn donate-box-btn">Request a Quote</button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="theme_menu stricky">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main-logo">
                <a href="index-2.html"><img src="images/logo/logo.png" alt="" width="122px"/></a>
              </div>
            </div>
            <div className="col-md-9 menu-column">
              <nav className="menuzord" id="main_menu">
                <ul className="menuzord-menu">
               <li>  <Link to='/'>Home</Link></li> 
               <li>  <Link to='/about'>About</Link></li>                 
               <li>  <Link to='/blog'>Blog</Link></li> 
                  <li><Link to='/products'>Products
                  <ul className="dropdown">
                    <Link to='/products/cooler' >Cooler</Link>
                    <Link to='/products/freezer'>Freezer</Link>                      
                  </ul>
                </Link></li>
                <li> <Link to ='/contact'>contact us</Link></li>
                 
                </ul>
              </nav> 
            </div>
            <div className="right-column">
              <div className="right-area">
                <div className="nav_side_content">
                  <div className="search_option">
                    <button className="search tran3s dropdown-toggle color1_bg my-auto" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search" aria-hidden="true" /></button>
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

export default Navbar