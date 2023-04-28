import React from 'react'

function FormSection() {
  return (
    <React.Fragment>
    <section className="contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="default-form-area">
                <form id="contact-form" name="contact_form" className="default-form" action="http://st.ourhtmldemo.com/new/Ecogreen_Template/inc/sendmail.php" method="post">
                  <div className="row clearfix">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="text" name="form_name" className="form-control"  placeholder="Your Name " required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="email" name="form_email" className="form-control required email"  placeholder="Your Mail *" required />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="text" name="form_phone" className="form-control"  placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input type="text" name="form_subject" className="form-control"  placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <textarea name="form_message" className="form-control textarea required" placeholder="Your Message...." defaultValue={""} />
                      </div>
                    </div>   
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group center">
                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" defaultValue />
                        <button className="thm-btn style-2" type="submit" data-loading-text="Please wait...">send message</button>
                      </div>
                    </div>   
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-right-box text-center">
                <div className="img-box">
                  <img src="images/resource/contact-form-right.png" alt="Awesome Image" />
                </div>
                <h4>Brown Angelino</h4>
                <span>Hr Manager</span>
                <p>How all this mistaken idea of denouncing <br />pleasure and praising pain was born and I will <br />complete account of the system.</p>
                <div className="border" />
                <ul className="social-links">
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                </ul>   
              </div>    
            </div>
          </div>
        </div></section>
    
    </React.Fragment>
  )
}

export default FormSection