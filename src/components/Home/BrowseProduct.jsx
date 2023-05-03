import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './BrowseProduct.css';

import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import { Link } from 'react-router-dom';


const BrowseProduct = () => {
  return (
<React.Fragment>
<div className='container-fluid'>
      
      <Row className="product-row">
      <h2 className="text-center  heading">Browse Products</h2>
        <Col>
         <Link> <Card className="product-card1">
         <Card.Img variant="top" src={product1} />
         <Card.Body className='cbody'>
           <Card.Title className='title'>COOLER</Card.Title>
           <Card.Text>The compact version of the powerful COOLBOY Personal cooler, the MINI series comes with all the features of its larger counterpart with the additional benefit of being compact and super portable. </Card.Text>
         </Card.Body>
       </Card></Link>
        </Col>
        <Col>
          <Link>
          <Card className="product-card2">
            <Card.Img variant="top" src={product2} />
            <Card.Body className='cbody'>
              <Card.Title className='title'>FREEZER</Card.Title>
              <Card.Text>A freezer allows us to take advantage and even overcome the seasonality of food. Seasonal fruits such as berries, pineapples, and so on, can be kept in the freezer to be enjoyed out of season</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>
      </div>
      </React.Fragment>
  );
};

export default BrowseProduct;
