import React from 'react';
import './ProductFeatures.css';

const ProductFeatures = () => {
  return (
    <React.Fragment>
    <div className="fashion_section">
    <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <h1 className="fashion_taital">Electronic</h1>
            <div className="fashion_section_2">
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="box_main">
                    <h4 className="shirt_text">Cooler</h4>
                    <p className="price_text">Start Price  <span style={{color: '#262626'}}>$ 100</span></p>
                    <div className="electronic_img"><img src="images/features/cooler1.jpg" /></div>
                    <div className="btn_main">
                      <div className="buy_bt"><a href="#">Enquire Now</a></div>
                      <div className="seemore_bt"><a href="#">See More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="box_main">
                    <h4 className="shirt_text">Cooler</h4>
                    <p className="price_text">Start Price  <span style={{color: '#262626'}}>$ 100</span></p>
                    <div className="electronic_img"><img src="images/features/cooler2.jpg" /></div>
                    <div className="btn_main">
                      <div className="buy_bt"><a href="#">Enquire Now</a></div>
                      <div className="seemore_bt"><a href="#">See More</a></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="box_main">
                    <h4 className="shirt_text">Cooler</h4>
                    <p className="price_text">Start Price  <span style={{color: '#262626'}}>$ 100</span></p>
                    <div className="electronic_img"><img src="images/features/cooler3.jpg" /></div>
                    <div className="btn_main">
                      <div className="buy_bt"><a href="#">Enquire Now</a></div>
                      <div className="seemore_bt"><a href="#">See More</a></div>
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
    </React.Fragment>
  );
};

export default ProductFeatures;
