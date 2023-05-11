import React from 'react'

function HeroSection() {
  return (
    <React.Fragment>
    <div>
    <div style={{backgroundColor: '#f0f0f0'}}>
      <div className="tm-video-background-header">
        <div className="jumbotron">
          <div className="tm-hero-marketing-video-background tm-hero-marketing975" style={{marginTop: '-100px'}}>
            <video playsInline autoPlay muted loop poster="images/2.jpg" id="video8671">
              <source src="https://media-cloudfront.pilatesanytime.com/2021/06/at-home-hero/7192_scissors_tv_marketing/video/h264-1080p.mp4?Expires=1683661415&Signature=C~N7DzqPbX3SeltpqEW6JQH~9EZQlOpzKf~9HNoQPeL9qFYsS7uH-TbKRMMMX3FnlyAeMjcDpZD79bQuyLOuBDakYtBgVZuKzABaIQ--TllmBo9r7wyMnaQ1p4bCfA4wXHd3ueKu0Ec5owdxD8z3gG2M1BoyOEUHsEZiNkh2tuw_&Key-Pair-Id=APKAJBYFNKEQXFATT2VQ" type="video/mp4" />
            </video>			
            <div className="tm-position-parent hidden-xs">
              <div className="jumbotron tm-hero-gradient-overlay-solid-dark ">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                      <div className="tm-marketing-slide-text ">
                        <h1 style={{marginTop: '100px', color: '#FFFFFF'}}>Practice Pilates Online, Anytime</h1>
                        <p style={{color: '#FFFFFF'}}>Thousands of streaming Pilates videos you can do anywhere</p>
                        <div><a className="btn btn-dark-terracotta btn-lg" href="#" role="button">Start Free 15-Day Trial</a></div>
                        <div className="tm-margin-top-15" style={{color: '#FFFFFF'}}><span className="js-sub-amount-monthly">$22</span> per month after trial. Cancel easily online anytime.</div>
                      </div>
                    </div> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
        </div>
      </div>
    </div>
    <div className="visible-xs tm-margin-top-30 tm-margin-bottom-30 text-center">
      <section className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 className="tm-no-top-margin">Practice Pilates Online, Anytime</h1>
            <h3 className="tm-no-top-margin">Thousands of streaming Pilates videos you can do anywhere</h3>
            <div>
              <a className="btn btn-dark-terracotta btn-lg" href="#" role="button">Start Free 15-Day Trial</a>
            </div>
            <div className="tm-margin-top-15"><span className="js-sub-amount-monthly">$22</span> per month after trial. Cancel easily online anytime.</div>
          </div>
        </div>
      </section>
    </div>
  </div>
    
    </React.Fragment>
  )
}

export default HeroSection