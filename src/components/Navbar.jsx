import React from 'react'

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
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
              </ul>
              <button className="thm-btn donate-box-btn">Request a Quote</button>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Navbar