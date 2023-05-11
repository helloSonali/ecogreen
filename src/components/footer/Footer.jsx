import React from 'react'

function Footer() {
  return (
    <React.Fragment>
    <div id="tm-footer">
        <div className="container">
          <div className="row">
            <div id="tm-footer-social-icons" className="col-sm-12 col-md-4 tm-text-md-left">
              <table id="tm-social-icon-table" className="tm-inline-block">
                <tbody><tr>
                    <td>
                      <a target="facebook" href="https://www.facebook.com/PilatesAnytime"><i className="fab fa-facebook" /></a>
                    </td>
                    <td>
                      <a target="instagram" href="https://instagram.com/pilatesanytimeus"><i className="fab fa-instagram" /></a>
                    </td>
                    <td>
                      <a target="youtube" href="https://www.youtube.com/PilatesAnytime"><i className="fab fa-youtube" /></a>
                    </td>
                  </tr>
                </tbody></table>
            </div>
            <div id="tm-footer-links" className="col-sm-12 col-md-4">
              <ul className="list-inline">
                <li>
                  <a href="#"><i className="far fa-question-circle" /> Help</a>
                </li>
                <li>
                  <a href="#"><i className="far fa-envelope" /> Contact</a>
                </li>
                <li>
                  <a href="#"><i className="far fa-book-open" /> Blog</a>
                </li>
                <li>
                  <a href="#"><i className="far fa-newspaper" /> Press</a>
                </li>
              </ul>
              <ul className="list-inline">
                <li>
                  <a href="#">Gift Certificates</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#" data-cc="c-settings">Do Not Sell or Share My Personal Information</a>
                </li>
                <li>
                  <a href="#" onclick="ResetADApterWidget()">ADApter Widget</a>
                </li>
              </ul>
            </div>
            <div className="clearfix hidden-md hidden-lg" />
            <div className="tm-vertical-spacer hidden-md hidden-lg" />
            <div className="col-sm-12 col-md-4" id="tm-appstore-links">
              <div className="row">
                <div className="col-sm-3 col-md-6">
                  <a target="itunes" href="#e"><img className="tm-margin-right-15 tm-margin-bottom-15" src="images/badge-ios-app-store-dark.png" height={35} alt="Available on the iOS App Store" /></a>
                </div>
                <div className="col-sm-3 col-md-6">
                  <a target="googleplay" href="#"><img className="tm-margin-right-15 tm-margin-bottom-15" src="images/google_play_white.png" height={35} alt="Available on the Google Play store" /></a>
                </div>
              </div> 
            </div>
          </div> 
          <div className="tm-vertical-spacer" />
          <div className="row">
            <div className="col-xs-12 col-md-4 tm-text-md-left">
              <div className="dropup tm-inline-block tm-footer-dropup">
                <button className="btn btn-white dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Currency: ($) USD <i className="far fa-angle-up" />
                </button>
                <ul className="dropdown-menu tm-dropdown-menu-centered" aria-labelledby="dropdownMenu1">
                  <li className>
                    <a rel="nofollow" href="#">Australia Dollar (AUD $)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">Canada Dollar (CAD $)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">Euro (EUR €)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">Israeli New Shekel (ILS ₪)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">Japan Yen (JPY ¥)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">New Zealand Dollar (NZD $)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">South African Rand (ZAR R)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">South Korean Won (KRW ₩)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">Turkish Lira (TRY ₺)</a>
                  </li>
                  <li className>
                    <a rel="nofollow" href="#">United Kingdom Pound (GBP £)</a>
                  </li>
                  <li className="active">
                    <a rel="nofollow" href="#">United States Dollar (USD $)</a>
                  </li>
                </ul>
              </div>
            </div> 
            <div className="col-xs-12 col-md-4">
              <a href="#" target="_blank"><img src="images/w-logo.png" alt="ADA Site Compliance-Accessibility Policy" style={{width: '120px', padding: '10px'}} /></a>
            </div>
            <div id="tm-copyright" className="col-xs-12 col-md-4 tm-text-md-right">
              <p>© 2023 Greentek, Inc. dba Pilates Anytime - All rights reserved</p>
            </div>
          </div> 
          <div className="tm-vertical-spacer" />
        </div> 
      </div>
    
    
    </React.Fragment>
  )
}

export default Footer