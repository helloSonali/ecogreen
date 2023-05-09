import React from 'react'
import { Carousel, CarouselItem, Col, Row } from 'react-bootstrap';
function Banner() {
  return (
    <React.Fragment>
      
        <Row >
          <Col>
            <Carousel >
              <CarouselItem>
                <img className='slider_img' src='images/slider/ban1.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>First Image</h1>
                  <p>Description of first image</p>
                </Carousel.Caption> */}
              </CarouselItem>
              <CarouselItem>
                <img className='slider_img' src='images/slider/ban2.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>Second Image</h1>
                  <p>Description of second image</p>
                </Carousel.Caption> */}
              </CarouselItem>
              <CarouselItem>
                <img className='slider_img' src='images/slider/ban1.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>Third Image</h1>
                  <p>Description of third image</p>
                </Carousel.Caption> */}
              </CarouselItem>


            </Carousel>
          </Col>

        </Row>
   
    </React.Fragment>
  )
}

export default Banner