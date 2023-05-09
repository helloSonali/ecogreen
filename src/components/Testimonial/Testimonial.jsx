import React from 'react'
import './Testimonial.css';

import Slider from "react-slick";


const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur ac sapien eget scelerisque.",
      imgSrc: "images/blog/author2.jpg",
    },
    {
      name: "Jane Smith",
      quote:
        "Vestibulum quis nulla vel ipsum dignissim rutrum. Sed ullamcorper, neque auctor porttitor euismod.",
      imgSrc: "images/blog/author2.jpg",
    },
    {
      name: "Bob Johnson",
      quote:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      imgSrc: "images/blog/author2.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className=" testimonal sec-padd-bottom sec-padd-top mt-50 mb-50 ">
        <div className="container ">
          <div className="section-title center">
            <h2 className='heading2'>Testimonial</h2>
           
          </div>
    <div className="testimonial-section  text-center">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <img src={testimonial.imgSrc} alt={`Testimonial from ${testimonial.name}`} />
            <p>{testimonial.quote}</p>
            <span>{testimonial.name}</span>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </section>
  );
};

export default Testimonial;
