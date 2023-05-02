import React from 'react'

import Navbar2 from './components/Navbar2'

function SingleProduct() {
  return (
    <React.Fragment>
   
    <div className="col-md-9 col-sm-12 col-xs-12">
        <div className="single-products-details">       
          <div className="product-content-box">
            <div className="row">
              <div className="col-md-6 img-box">
                <div className="img-box">
                  <img src="images/shop/10.jpg" alt="" data-imagezoom="true" className="img-responsive" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="content-box">
                  <h3>Flying Ninja</h3>
                  <div className="review-box">
                    <ul>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star-half-o" /></li>
                    </ul>
                  </div>
                  <span className="price">$29.99</span>
                  <div className="text">
                    <p>Working from home meant we couldsnack and coffee our breaks change our desks or view, good, drink on the job, even spend the weather started getting roughday in pajamas consequences.</p>
                  </div>
                  <div className="location-box">
                    <p>Check Delivery Option at Your Location:</p>
                    <form action="#">
                      <input type="text" placeholder="Pincode" />
                      <button type="submit">Check</button><br />
                      <span>Expected Delivery in 4-10 Days</span>
                    </form>
                  </div>
                  <div className="addto-cart-box">
                    <input className="quantity-spinner" type="text" defaultValue={2} name="quantity" />
                    <a href="shop-cart.html" className="thm-btn">Get Customize Quote</a>
                  </div>    
                </div>
              </div>
            </div>   
          </div>
          <div className="product-tab-box">
            <ul className="nav nav-tabs tab-menu">
              <li><a href="#desc" data-toggle="tab">Descriprion</a></li>
              <li className="active"><a href="#review" data-toggle="tab">Reviews (2)</a></li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane" id="desc">
                <div className="product-details-content">
                  <div className="desc-content-box">
                    <p>Bedroom lamps reflects the design philosophy of form following function prevalent in modernism. These designs represent the ideals of cutting excess, practicality and an absence of decoration. These forms of lamps are visually light and follow minimalist principles of design which are influenced by architectural concepts like the cantilever. Modern lamps fits best in open floor plans with clean lines that thrive in the absence of clutter. A one stop shop for home decor and furniture, Interior sells a home product every 30 seconds.</p>
                    <p>Bedroom lamps let you fine-tune the atmosphere of a room in more ways than one. They give you additional light where you need it while also adding a bit of personality. Ours are available in a wide selection of styles to add a little extra color, texture and light to your home.</p>
                  </div>
                </div>    
              </div>
              <div className="tab-pane active" id="review">
                <div className="review-box">
                  <div className="tab-title-h4">
                    <h4>2 Reviews For Bedroom Lamp</h4>
                  </div>
                  <div className="single-review-box">
                    <div className="img-holder">
                      <img src="images/shop/thumb1.jpg" alt="Awesome Image" />
                    </div>
                    <div className="text-holder">
                      <div className="top">
                        <div className="name pull-left">
                          <h4>Steven Rich – Sep 17, 2016:</h4>
                        </div>
                        <div className="review-box pull-right">
                          <ul>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="text">
                        <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                      </div>
                    </div>
                  </div>
                  {/*End single review box*/}
                  {/*Start single review box*/}
                  <div className="single-review-box">
                    <div className="img-holder">
                      <img src="images/shop/thumb2.jpg" alt="Awesome Image" />
                    </div>
                    <div className="text-holder">
                      <div className="top">
                        <div className="name pull-left">
                          <h4>William Cobus – Aug 21, 2016:</h4>
                        </div>
                        <div className="review-box pull-right">
                          <ul>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="text">
                        <p>there anyone who loves or pursues or desires to obtain pain itself, because it is pain, but because occasionally circumstances occur some great pleasure.</p>
                      </div>
                    </div>
                  </div>
                  {/*End single review box*/}   
                </div>
                <div className="review-form">
                  <div className="tab-title-h4">
                    <h4>Add Your Review</h4>
                  </div>
                  <div className="add-rating-box">
                    <div className="add-rating-title">
                      <h4>Your Rating</h4>    
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />   
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="field-label">
                          <p>First Name*</p>
                          <input type="text" name="fname" placeholder />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="field-label">
                          <p>Last Name*</p>
                          <input type="text" name="lname" placeholder />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="field-label">
                          <p>Email*</p>
                          <input type="text" name="email" placeholder />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="field-label">
                          <p>Your Review*</p>
                          <textarea name="review" placeholder defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="thm-btn bg-cl-1" type="submit">Submit Now</button>
                      </div>
                    </div>
                  </form>  
                </div>
              </div>
            </div>      
          </div>
        </div></div>
    </React.Fragment>
  )
}

export default SingleProduct