import React from 'react'

function QueryForm() {
  return (
    <React.Fragment>
    <div className="tm-background-stripe-white">
    <section className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 visible-xs">
          <img src="images/c1.png" className="img-responsive tm-margin-bottom-30" />
        </div> 
        <div className="col-xs-12 col-sm-6">
          <div id="js-news-signup-area">
            <h2 className="tm-no-top-margin">Get Our Free Quote</h2>
            <p className="tm-body-longform">Add your email for new classes, challenges, tips, and more!</p>
            <div className="form-group">
              <input type="text" className="form-control" id="js-newsletter-name" placeholder="Your Name" onfocus="$('#js-news-error-area').hide(500);" />
            </div>
            <div className="form-group">
              <input validate="email" type="text" className="form-control" id="js-newsletter-email" placeholder="Email" onfocus="$('#js-news-error-area').hide(500);" />
            </div>
            <div className="form-group">
              <input validate="phone" type="text" className="form-control" id="js-newsletter-phone" placeholder="Phone" onfocus="$('#js-news-error-area').hide(500);" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" id="js-terms-ok" label="I have read and agree to the Terms of Use and Privacy Policy" required="yes" name="terms_ok" defaultValue="true" message="Please check box to indicate you agree to Terms of Use and Privacy Policy." /> I have read and agree to the <a target="termswindow" href="#">Terms of Use</a> and <a target="privacywindow" href="#">Privacy Policy</a>
              </label>
            </div>
            <div id="js-news-error-area" style={{display: 'none'}}>
              <div className="alert alert-danger" id="js-news-error-text">
              </div>
            </div>
            <p>
              <button id="js-newsletter-submit" className="btn btn-primary">Submit</button>
            </p>
          </div>
          <div id="js-news-success-area" style={{display: 'none'}}>
            <h2 className="tm-no-top-margin">Thank You!</h2>
            <p className="tm-body-longform">Thank you for signing up for our newsletter! Pilates updates, tips, and inspiration are coming to your inbox soon. 
              If you have any questions about this list, email support@pilatesanytime.com</p>
          </div>
        </div>  
        <div className="col-xs-12 col-sm-6 hidden-xs">
          <img src="images/c1.png" className="img-responsive" />
        </div> 
      </div> 
    </section>
  </div>
    </React.Fragment>
  )
}

export default QueryForm