import React from 'react'
import './Topbarcss.css'

function Topbar() {
  return (
    <React.Fragment>
    <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="text-center top-bar">
              <span className="tm-signup-bar-text"><span className="hidden-xs">Trial Offer</span></span>
              <a role="button" id="js-top-cta" className="btn btn-primary-ghost btn-xs" href="#">15 Days Free <i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Topbar