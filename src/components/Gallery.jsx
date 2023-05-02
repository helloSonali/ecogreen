import React from 'react'

function Gallery() {
  return (
    <React.Fragment>
    <section className="gallery sec-padd3 style-2 default-gallery" style={{backgroundImage: 'url(images/background/8.jpg)'}} >
    <div className="container">
      <div className="section-title">
        <h2>Our Gallery</h2>
      </div>
      <ul className="post-filter style-3 list-inline float_right">
        <li className="active" data-filter=".filter-item">
          <span>View All</span>
        </li>
        <li data-filter=".Ecology">
          <span>Ecology</span>
        </li>
        <li data-filter=".Wild-Animals">
          <span>Wild Animals</span>
        </li>
        <li data-filter=".Recycling">
          <span>Recycling</span>
        </li>
        <li data-filter=".Water">
          <span>Water</span>
        </li>
        <li data-filter=".Pollution">
          <span>Pollution</span>
        </li>
      </ul>
      <div className="row filter-layout">
        <article className="col-md-3 col-sm-6 col-xs-12 filter-item Wild-Animals Pollution Water">
          <div className="item">
            <div className="img-box">
              <img src="images/project/1.jpg" alt="" />
              <div className="overlay">
                <div className="inner-box">
                  <div className="content-box">
                    <a data-group={1} href="images/project/1.jpg" className="img-popup"><i className="fa fa-search-plus" /></a>
                    <a href="single-gallery.html"><i className="fa fa-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content center">
              <h4>Environment</h4>
              <p>Pollution</p>
            </div>
          </div>
        </article> 
        <article className="col-md-3 col-sm-6 col-xs-12 filter-item Wild-Animals Pollution Ecology Recycling">
          <div className="item">
            <div className="img-box">
              <img src="images/project/2.jpg" alt="" />
              <div className="overlay">
                <div className="inner-box">
                  <div className="content-box">
                    <a data-group={1} href="images/project/2.jpg" className="img-popup"><i className="fa fa-search-plus" /></a>
                    <a href="single-gallery.html"><i className="fa fa-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content center">
              <h4>Windmill Power</h4>
              <p>Ecology, Recycling</p>
            </div>
          </div>
        </article> 
        <article className="col-md-3 col-sm-6 col-xs-12 filter-item Wild-Animals Pollution Ecology Recycling">
          <div className="item">
            <div className="img-box">
              <img src="images/project/3.jpg" alt="" />
              <div className="overlay">
                <div className="inner-box">
                  <div className="content-box">
                    <a data-group={1} href="images/project/3.jpg" className="img-popup"><i className="fa fa-search-plus" /></a>
                    <a href="single-gallery.html"><i className="fa fa-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content center">
              <h4>Save White Tiger</h4>
              <p>Wild Animals</p>
            </div>
          </div>
        </article>
        <article className="col-md-3 col-sm-6 col-xs-12 filter-item Wild-Animals Pollution Water">
          <div className="item">
            <div className="img-box">
              <img src="images/project/4.jpg" alt="" />
              <div className="overlay">
                <div className="inner-box">
                  <div className="content-box">
                    <a data-group={1} href="images/project/4.jpg" className="img-popup"><i className="fa fa-search-plus" /></a>
                    <a href="single-gallery.html"><i className="fa fa-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content center">
              <h4>Wiliwili Recycling</h4>
              <p>Recycling</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
    
    </React.Fragment>
  );
}

export default Gallery