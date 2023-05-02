import React from 'react'

function Events() {
  return (
    <React.Fragment>
    <section className="event-style1" style={{backgroundImage: 'url(images/background/3.jpg)'}} >
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-10 col-xs-12">
          <div className="section-title">
            <h2>UpComing Events</h2>
          </div>
        </div>
        <div className="col-md-3 col-sm-2 col-xs-12">
          <a href="#" className="thm-btn style-2 float_right">All Events</a>
        </div>
      </div>
      <div className="row">
        <article className="col-md-6 col-sm-12 col-xs-12">
          <div className="item style-1">
            <div className="img-column">
              <figure className="img-holder">
                <a href="single-event.html"><img src="images/resource/1.jpg" alt="" /></a>
                <div className="date">21 <br /><span>Mar</span></div>
              </figure>
            </div>
            <div className="text-column">
              <div className="lower-content">
                <p>Organizer: Tom Maddy</p>
                <a href="single-event.html"><h4>A Walk for Healthy Environment</h4></a>
                <div className="text">
                  <p>Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.| Sed <br />rutrum, libero non pretium tristique, arcu mi sollicitudin...</p>               
                </div>                            
              </div>
              <ul className="post-meta list_inline">
                <li><i className="fa fa-clock-o" />Started On: 11.00am </li> |&nbsp;&nbsp;&nbsp;
                <li><i className="fa fa-map-marker" /> New Grand Street, California</li>
              </ul>
            </div>      
          </div>
        </article>
        <article className="col-md-6 col-sm-12 col-xs-12">
          <div className="item style-2">
            <div className="clearfix">
              <div className="img-column">
                <figure className="img-holder">
                  <a href="single-event.html"><img src="images/resource/2.jpg" alt="" /></a>
                </figure>
              </div>
              <div className="text-column">
                <div className="lower-content">
                  <p>Organizer: Tom Maddy</p>
                  <a href="single-event.html"><h4>Recycling Plastic Bottle</h4></a>
                  <div className="text">
                    <p>Mauris tortor diam, laoreet quis commodo vitae, sodales vel augueed rutrum, libero non sed our pretium tristique, arcu mi sollicitudin...</p>               
                  </div>                            
                </div>
              </div> 
            </div>
            <ul className="post-meta list_inline">
              <li><i className="fa fa-clock-o" />Started On: 11.00am </li>  |&nbsp;&nbsp;&nbsp;
              <li><i className="fa fa-map-marker" /> New Grand Street, California</li>
            </ul>      
          </div>
          <div className="item style-2">
            <div className="clearfix">
              <div className="img-column">
                <figure className="img-holder">
                  <a href="single-event.html"><img src="images/resource/3.jpg" alt="" /></a>
                </figure>
              </div>
              <div className="text-column">
                <div className="lower-content">
                  <p>Organizer: Tom Maddy</p>
                  <a href="single-event.html"><h4>Green Construction Practice</h4></a>
                  <div className="text">
                    <p>Mauris tortor diam, laoreet quis commodo vitae, sodales vel augueed rutrum, libero non sed our pretium tristique, arcu mi sollicitudin...</p>               
                  </div>                            
                </div>
              </div> 
            </div> 
            <ul className="post-meta list_inline">
              <li><i className="fa fa-clock-o" />Started On: 11.00am </li> |&nbsp;&nbsp;&nbsp;
              <li><i className="fa fa-map-marker" /> New Grand Street, California</li>
            </ul>     
          </div>
        </article>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}

export default Events