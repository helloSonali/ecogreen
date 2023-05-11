import React from 'react'

function Membership() {
  return (
    <React.Fragment>
    <div> 
    <div className="tm-background-stripe-primary tm-inverse tm-no-padding-bottom tm-bg-geo">
      <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="text-center">
              <h2 className="tm-no-top-margin">Your Pilates Anytime Membership Benefits</h2>
            </div>
          </div>
        </div> 
        <div className="row">
          <div className="col-sm-5 col-sm-push-7 col-md-6 col-md-push-6">
            <img className="img-responsive" src="images/c1.png" />
            <h4 className="tm-no-top-margin">
              <div className="text-center">
              </div>
            </h4>
            <div className="row">
              <div className="col-xs-4">
                <div className="text-center">
                  Computer
                </div>
              </div>
              <div className="col-xs-4">
                <div className="text-center">
                  Tablet
                </div>
              </div>
              <div className="col-xs-4">
                <div className="text-center">
                  Phone
                </div>
              </div>
              <div className="col-xs-4">
                <div className="text-center">
                  Roku
                </div>
              </div>
              <div className="col-xs-4">
                <div className="text-center">
                  Chromecast
                </div>
              </div>
              <div className="col-xs-4">
                <div className="text-center">
                  Apple TV
                </div>
              </div>
            </div>
          </div> 
          <div className="visible-xs tm-margin-top-30" />
          <div className="col-sm-7 col-sm-pull-5 col-md-6 col-md-pull-6">
            <div className="tm-membership-details-inverse ">
              <div id="tm-details-box" className="text-left">
                <ul>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> 15-Day Free Trial 
                  </li>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> Unlimited Access to Thousands of Classes 
                  </li>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> 95+ Pilates Programs and Challenges 
                  </li>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> No Ads 
                  </li>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> New Videos Weekly 
                  </li>
                  <li><i className="fa fa-play tm-membership-detail-bullet" /> Available on All Your Favorite Devices 
                  </li>
                </ul>
              </div>
            </div>
            <div className="tm-margin-top-30">
              <div className="text-center">
                <a className="btn btn-dark-terracotta btn-lg" href="#" role="button">Start Free 15-Day Trial</a>
                <p className="tm-margin-top-15" />
              </div>
            </div>
          </div> 
        </div> 
      </section> {/* /container */}
      {/* Membership Details : END */}
      <div className="tm-divider" />
    </div> 
  </div>
    </React.Fragment>
  )
}

export default Membership