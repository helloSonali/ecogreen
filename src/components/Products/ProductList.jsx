import React from 'react'

function ProductList() {
  return (
    <React.Fragment>
    <div className="row">
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-shop-item">
        <div className="img-box">
          <a href="shop-cart.html"><img src="images/shop/1.jpg" alt="Awesome Image" /></a>
          <figcaption className="overlay">
            <div className="box">
              <div className="content">
                <a href="shop-single.html"><i className="fa fa-link" aria-hidden="true" /></a>
              </div>
            </div>
          </figcaption>
        </div>{/* /.img-box */}
        <div className="content-box">  
          <div className="inner-box">
            <h4><a href="shop-cart.html">The Innovators</a></h4>
            <div className="item-price">$34.99</div>
          </div> 
          <div className="price-box">
            <div className="clearfix">
              <div className="float_left">
                <a href="shop-cart.html" className="cart-btn"><i className="fa fa-shopping-cart" />Add To Cart</a>
              </div>
              <div className="float_right">
                <div className="rating">
                  <span className="fa fa-star" /> 
                  <span className="fa fa-star" /> 
                  <span className="fa fa-star" /> 
                  <span className="fa fa-star" /> 
                  <span className="fa fa-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </React.Fragment>
  )
}

export default ProductList