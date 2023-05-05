import React from 'react'

function ContactFrom() {
  return (
    <React.Fragment>
    <section className="contact-form-area">
    <div className="container">
      <div className="row">
      <h1 className='text-center mb-4 section-title'>Contact us</h1>
        <div className="offset-2 col-md-8 sec-padd2">
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
        
      </div>
    </div></section>

    
    </React.Fragment>
  )
}

export default ContactFrom