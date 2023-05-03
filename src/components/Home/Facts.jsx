import React from 'react'

function Facts() {
  return (
    <React.Fragment>
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

export default Facts