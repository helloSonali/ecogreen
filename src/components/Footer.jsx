import React from 'react'

function Footer() {
  return (
    <React.Fragment>
    <footer className="main-footer">
    {/*Widgets Section*/}
    <div className="widgets-section">
      <div className="container">
        <div className="row">
          {/*Big Column*/}
          <div className="big-column col-md-6 col-sm-12 col-xs-12">
            <div className="row clearfix">
              {/*Footer Column*/}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget about-column">
                  <figure className="footer-logo"><a href="index-2.html"><img src="images/logo/logo2.png" alt="" /></a></figure>
                  <div className="text"><p>When you give to us you know your donation is making a diffe. </p> </div>
                  <ul className="contact-info">
                    <li><span className="icon-signs" />22/121 Apple Street, New York, <br />NY 10012, USA</li>
                    <li><span className="icon-phone-call" /> Phone: +123-456-7890</li>
                    <li><span className="icon-note" />Supportus@Eco greenteam.com</li>
                  </ul>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget link-column">
                  <div className="section-title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="widget-content">
                    <ul className="list">
                      <li><a href="about.html">About Our Eco green</a></li>
                      <li><a href="Eco-System.html">Eco System</a></li>
                      <li><a href="Organic-Living.html">Organic Living</a></li>
                      <li><a href="Good-Nature-2.html">Good Nature</a></li>
                      <li><a href="testimonial-2.html">Testimonials</a></li>
                      <li><a href="Events.html">Upcoming Events</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Big Column*/} 
          <div className="big-column col-md-6 col-sm-12 col-xs-12">
            <div className="row clearfix">
              {/*Footer Column*/}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget post-column">
                  <div className="section-title">
                    <h4>Upcoming Events</h4>
                  </div>
                  <div className="post-list">
                    <div className="post">
                      <div className="post-thumb"><a href="#"><img src="images/blog/thumb1.jpg" alt="" /></a></div>
                      <a href="#"><h5>Marathon 2017: <br />Run for Cancer People</h5></a>
                      <div className="post-info"><i className="fa fa-calendar" />  15 Mar, 2017</div>
                    </div>
                    <div className="post">
                      <div className="post-thumb"><a href="#"><img src="images/blog/thumb2.jpg" alt="" /></a></div>
                      <a href="#"><h5>Let’s walk to the poor <br />children edu...</h5></a>
                      <div className="post-info"><i className="fa fa-calendar" /> 21 Apr, 2017</div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget contact-column">
                  <div className="section-title">
                    <h4>Subscribe Us</h4>
                  </div>
                  <h5>Subscribe to our newsletter!</h5>
                  <form action="#">
                    <input type="email" placeholder="Email address...." />
                    <button type="submit"><i className="fa fa-paper-plane" /></button>
                  </form>
                  <p>We don’t do mail to spam &amp; your mail <br />id is confidential.</p>
                  <ul className="social-icon">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-feed" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*Footer Bottom*/}
  <section className="footer-bottom">
    <div className="container">
      <div className="pull-left copy-text">
        <p><a href="#">Copyrights © 2017</a> All Rights Reserved. Powered by <a href="#">Eco green.</a></p>
      </div>{/* /.pull-right */}
      <div className="pull-right get-text">
        <a href="#">Join Us Now!</a>
      </div>{/* /.pull-left */}
    </div>{/* /.container */}
  </section>
    </React.Fragment>
  )
}

export default Footer