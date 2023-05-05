import React, { Component } from "react";
import Slider from "react-slick";

export default class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2 className=" text-lg-center mt-3 mb-3"> Top seller </h2>
        <Slider {...settings}>
          <div>
           <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
          <div>
          <img src="images/features/c1.jpg" alt="c1"/>
          </div>
        </Slider>
      </div>
    );
  }
}