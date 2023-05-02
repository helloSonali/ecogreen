import React from 'react'

function Service() {
  return (
    <React.Fragment>
    <section className="service sec-padd3">
    <div className="container">
      <div className="section-title center">
        <h2>We are ECO Green, Our Mission is <span className="thm-color">save water, animals and environment</span>our activities are taken around the world.</h2>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-x-12">
          <div className="service-item center">
            <div className="icon-box">
              <span className="icon-can" />
            </div>
            <h4>Recycling</h4>
            <p>Praising pain was born &amp; I will give  you a complete ac of the all systems, expound the actual great.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-x-12">
          <div className="service-item center">
            <div className="icon-box">
              <span className="icon-tool" />
            </div>
            <h4>Eco System</h4>
            <p>Praising pain was born &amp; I will give  you a complete ac of the all systems, expound the actual great.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-x-12">
          <div className="service-item center">
            <div className="icon-box">
              <span className="icon-nature-1" />
            </div>
            <h4>Save Water</h4>
            <p>Praising pain was born &amp; I will give  you a complete ac of the all systems, expound the actual great.</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-x-12">
          <div className="service-item center">
            <div className="icon-box">
              <span className="icon-deer" />
            </div>
            <h4>Save Animals</h4>
            <p>Praising pain was born &amp; I will give  you a complete ac of the all systems, expound the actual great.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="fact-counter style-2 sec-padd" style={{backgroundImage: 'url(images/background/5.jpg)'}}>
    <div className="container">
      <div className="section-title center">
        <h2>Some Interesting Facts</h2>
      </div>
      <div className="row clearfix">
        <div className="counter-outer clearfix">
          {/*Column*/}
          <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
            <div className="item">
              <div className="icon"><i className="icon-heart2" /></div>
              <div className="count-outer"><span className="count-text" data-speed={3000} data-stop={30}>0</span>+</div>
              <h4 className="counter-title">Year Of Experience</h4>
            </div>
          </article>
          {/*Column*/}
          <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
            <div className="item">
              <div className="icon"><i className="icon-money" /></div>
              <div className="count-outer">$<span className="count-text" data-speed={3000} data-stop={34500}>0</span></div>
              <h4 className="counter-title">Funds Collected</h4>
            </div>
          </article>
          {/*Column*/}
          <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
            <div className="item">
              <div className="icon"><i className="icon-people3" /></div>
              <div className="count-outer"><span className="count-text" data-speed={3000} data-stop={347}>0</span></div>
              <h4 className="counter-title">Volunteers Involved</h4>
            </div>
          </article>
          {/*Column*/}
          <article className="column counter-column col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-duration="0ms">
            <div className="item">
              <div className="icon"><i className="icon-animals" /></div>
              <div className="count-outer"><span className="count-text" data-speed={3000} data-stop={485}>0</span>%</div>
              <h4 className="counter-title">Animals Saved</h4>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}

export default Service