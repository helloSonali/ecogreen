import React from 'react'

function AboutContent() {
  return (
    <React.Fragment>
    <section className="about sec-padd2">
    <div className="container">
      <div className="section-title center">
        <h2>Words About Us</h2>
        <p>Every voice counts! Choose campaign, donate and help us change the world</p>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <figure className="img-box">
            <img src="images/resource/8.jpg" alt="" />
          </figure>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="content">
            <h2>Together we can make a difference</h2>
            <div className="text">
              <p>When you give to Our Ecogreen, you know your donation is making a difference. Whether you are supporting one of our Signature Programs or our carefully curated list of Gifts That Give More, our professional staff works hard every day <br />to ensure every dollar has impact for the cause of your choice. </p>
            </div>
            <h4>Our Partner</h4>
            <div className="text">
              <p>We partner with over 320 amazing projects worldwide, and have given over $150 million in cash and product grants to other groups since 2011. We also operate our own dynamic suite of Signature Programs.</p>
            </div>
            <div className="link"><a href="#" className="thm-btn style-2">Join With Us</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}

export default AboutContent