import React from 'react'

function Blogs() {
  return (
    <React.Fragment>
    <section className="blog-section sec-padd2">
        <div className="container">
          <div className="section-title center">
            <h2>latest news</h2>
          </div>
          <div className="row">
            <article className="col-md-3 col-sm-6 col-xs-12">
              <div className="default-blog-news wow fadeInUp animated animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <figure className="img-holder">
                  <a href="blog-details.html"><img src="images/blog/1.jpg" alt="News" /></a>
                  <figcaption className="overlay">
                    <div className="box">
                      <div className="content">
                        <a href="blog-details.html"><i className="fa fa-link" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="lower-content">
                  <div className="date">March 02, 2017</div>
                  <div className="post-meta">by fletcher  |  14 Comments</div>
                  <a href="blog-details.html"><h4>Steps for Save Animals</h4></a>
                  <div className="text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis sed praesentium voluptatum...</p>               
                  </div>                        
                </div>
              </div>
            </article>
            <article className="col-md-3 col-sm-6 col-xs-12">
              <div className="default-blog-news wow fadeInUp animated animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <figure className="img-holder">
                  <a href="blog-details.html"><img src="images/blog/2.jpg" alt="News" /></a>
                  <figcaption className="overlay">
                    <div className="box">
                      <div className="content">
                        <a href="blog-details.html"><i className="fa fa-link" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="lower-content">
                  <div className="date">January 14, 2017</div>
                  <div className="post-meta">by stephen  |  22 Comments</div>
                  <a href="blog-details.html"><h4>The Ozone Layer</h4></a>
                  <div className="text">
                    <p>How all this mistaken idea denouncing pleasure &amp; praising pain was born and  will give you a complete...</p>               
                  </div>                        
                </div>
              </div>
            </article>
            <article className="col-md-3 col-sm-6 col-xs-12">
              <div className="default-blog-news wow fadeInUp animated animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <figure className="img-holder">
                  <a href="blog-details.html"><img src="images/blog/3.jpg" alt="News" /></a>
                  <figcaption className="overlay">
                    <div className="box">
                      <div className="content">
                        <a href="blog-details.html"><i className="fa fa-link" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="lower-content">
                  <div className="date">August 21, 2016</div>
                  <div className="post-meta">by Vincent  |  03 Comments</div>
                  <a href="blog-details.html"><h4>Dispose Plastic Products</h4></a>
                  <div className="text">
                    <p>The great explorer of the truth master builder of human happinessone rejects, dislikes, or avoids pleasure...</p>               
                  </div>                        
                </div>
              </div>
            </article>
            <article className="col-md-3 col-sm-6 col-xs-12">
              <div className="default-blog-news wow fadeInUp animated animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
                <figure className="img-holder">
                  <a href="blog-details.html"><img src="images/blog/4.jpg" alt="News" /></a>
                  <figcaption className="overlay">
                    <div className="box">
                      <div className="content">
                        <a href="blog-details.html"><i className="fa fa-link" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </figcaption>
                </figure>
                <div className="lower-content">
                  <div className="date">July 15, 2016</div>
                  <div className="post-meta">by fletcher  |  14 Comments</div>
                  <a href="blog-details.html"><h4>Ideas for Save Energy</h4></a>
                  <div className="text">
                    <p>Know how to pursue pleasure rationally encounter consequences that extremely painful rationally encounter... </p>               
                  </div>                        
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Blogs