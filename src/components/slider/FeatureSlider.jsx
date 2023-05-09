import React, { Component } from "react";
import Slider from "react-slick";
import './featureaslider.css'

export default class FeatureSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <section className=" features sec-padd-bottom  sec-padd-top">
        <div className="container ">
          <div className="section-title center">
            <h2 className='heading2'>Features</h2>
           
          </div>

          <Slider {...settings}>
            <div className="slide" >
              <img width="350px" height="200px" src="images/blog/10.jpg" alt="" />
            </div>
            <div className="slide">
              <img width="350px" height="200px" src="images/blog/4.jpg" alt="" />
            </div>
            <div className="slide" >
              <img width="350px" height="200px" src="images/blog/6.jpg" alt="" />
            </div>
            <div className="slide">
              <img width="350px" height="200px" src="images/blog/10.jpg" alt="" />
            </div>
            <div className="slide" >
              <img width="350px" height="200px" src="images/blog/4.jpg" alt="" />
            </div>
            <div className="slide">
              <img width="350px" height="200px" src="images/blog/6.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>

    );
  }
}