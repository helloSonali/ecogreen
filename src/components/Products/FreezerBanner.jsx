import React from 'react'

function FreezerBanner() {
  return (
    <React.Fragment>
    <div className="inner-banner has-base-color-overlay text-center" style={{background: 'url(images/background/4.jpg)'}}>
    <div className="container">
      <div className="box">
        <h1>Freezer</h1>
      </div>
    </div>
  </div>
  <div className="breadcumb-wrapper">
    <div className="container">
      <div className="pull-left">
        <ul className="list-inline link-list">
          <li>
            <a href="index-2.html">Home</a>
          </li>                
          <li>
            Products
          </li>
        </ul>
      </div>
      <div className="pull-right">
        <a href="#" className="get-qoute"><i className="fa fa-arrow-circle-right" />Become a Volunteer</a>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}

export default FreezerBanner