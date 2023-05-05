import React from 'react'

function GetTouchWithUs() {
  return (
    <React.Fragment>
    <section className="get-touch-area">
        <div className="container">
          <div className="sec-title text-center">
            <h1>Get Touch With Us</h1>
            <span className="border" />
            <p>We recently helped a small business grow from break-even to over $1m profit in less than 2 years.
              Please find below contact details and contact us today!</p>
          </div>
          <div className="row">
            {/*Start single item*/}
            <div className="col-md-4">
              <div className="single-item hvr-grow-shadow text-center">
                <div className="icon-holder">
                  <span className="icon-signs2" />    
                </div> 
                <div className="text-holder">
                  <h3>Come to See Us</h3>
                  <span className="border" />
                  <p>241/84 Theme Name Discover Street <br />New York, NY 10012, USA</p>
                </div>  
              </div>
            </div>
            {/*End single item*/}
            {/*Start single item*/}
            <div className="col-md-4">
              <div className="single-item hvr-grow-shadow text-center">
                <div className="icon-holder">
                  <span className="icon-technology" />    
                </div> 
                <div className="text-holder">
                  <h3>Quick Contact</h3>
                  <span className="border" />
                  <p>Ph: +321 456 78 9012 <br />Email: <a href="#">Info@Wesupportyou.com</a></p>
                </div>  
              </div>
            </div>
            {/*End single item*/}
            {/*Start single item*/}
            <div className="col-md-4">
              <div className="single-item hvr-grow-shadow text-center">
                <div className="icon-holder">
                  <span className="icon-clock" />    
                </div> 
                <div className="text-holder">
                  <h3>Office Schedule</h3>
                  <span className="border" />
                  <p>Monday to Saturday: 09.00am to 18.00pm <br />Sunday <a href="#">: Closed</a></p>
                </div>  
              </div>
            </div>
            {/*End single item*/}           
          </div>
        </div>
      </section>
    
    </React.Fragment>
  )
}

export default GetTouchWithUs