import React from 'react'
import { Carousel, CarouselItem, Col, Container, Row } from 'react-bootstrap';
function HomeSlider() {
  return (
    <React.Fragment>
      
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img src='images/slider/1.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>First Image</h1>
                  <p>Description of first image</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img src='images/slider/2.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>Second Image</h1>
                  <p>Description of second image</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img src='images/slider/3.jpg' alt='slider1' />
                {/* <Carousel.Caption>
                  <h1>Third Image</h1>
                  <p>Description of third image</p>
                </Carousel.Caption> */}
              </Carousel.Item>


            </Carousel>
          </Col>

        </Row>
    
    </React.Fragment>
  )
}

export default HomeSlider