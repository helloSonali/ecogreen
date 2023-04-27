import React from 'react'

function Navbar2() {
  return (
    <React.Fragment>
    <section className="theme_menu stricky">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main-logo">
                <a href="index-2.html"><img src="images/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-md-9 menu-column">
              <nav className="menuzord" id="main_menu">
                <ul className="menuzord-menu">
                  <li><a href="index-2.html">Home</a></li>
                  <li><a href="service.html">Service</a>
                    <ul className="dropdown">
                      <li><a href="service.html">All Services</a></li>
                      <li><a href="recycling.html">Recycling</a></li>
                      <li><a href="Eco-System.html">Eco System</a></li>
                      <li><a href="Save-Water.html">Save Water</a></li>
                      <li><a href="Save-Animals.html">Save Animals</a></li>
                      <li><a href="Organic-Living.html">Organic Living</a></li>
                      <li><a href="Good-Nature.html">Good Nature</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="Campaign-Grid-View.html">Campaign Grid View</a></li>
                      <li><a href="Campaign-List-View.html">Campaign List View</a></li>
                      <li><a href="Events.html">Events</a></li>
                      <li><a href="testimonial.html">Testimonials</a></li>
                      <li><a href="faq.html">FAQ’s</a></li>
                      <li><a href="error.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-1.html">blog</a>
                    <ul className="dropdown">
                      <li><a href="blog-1.html">Blog Grid View</a></li>
                      <li><a href="blog-large.html">Blog With Sidebar</a></li>
                      <li><a href="blog-details.html">Single Post</a></li>
                    </ul>
                  </li>
                  <li><a href="gallery-1.html">Gallery</a>
                    <ul className="dropdown">
                      <li><a href="gallery-1.html">gallery Grid View</a></li>
                      <li><a href="gallery-3.html">gallery manasory</a></li>
                      <li><a href="single-gallery.html">Single gallery</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Shop</a>
                    <ul className="dropdown">
                      <li><a href="shop.html">Shop Products</a></li>
                      <li><a href="shop-single.html">Single Shop</a></li>
                      <li><a href="shop-cart.html">Shopping Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="account.html">My Account</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">contact</a></li>
                </ul>
              </nav> 
            </div>
            <div className="right-column">
              <div className="right-area">
                <div className="nav_side_content">
                  <div className="search_option">
                    <button className="search tran3s dropdown-toggle color1_bg" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search" aria-hidden="true" /></button>
                    <form action="#" className="dropdown-menu" aria-labelledby="searchDropdown">
                      <input type="text" placeholder="Search..." />
                      <button><i className="fa fa-search" aria-hidden="true" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Navbar2