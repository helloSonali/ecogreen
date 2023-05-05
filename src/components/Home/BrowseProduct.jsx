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
      
      <Row className="product-row mb-5 row">
      <h2 className="text-center  heading">Browse Products</h2>
        <Col className='col-md-6'>
         <Link> <Card className="product-card1">
         <Card.Img variant="top" src={product1} />
         <Card.Body className='cbody'>
           <Card.Title className='title'>COOLER</Card.Title>
           <Card.Text>The compact version of the powerful COOLBOY Personal cooler, the MINI series comes with all the features of its larger counterpart with the additional benefit of being compact and super portable. </Card.Text>
         </Card.Body>
       </Card></Link>
        </Col>
        <Col className='col-md-6'>
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

// import React from 'react'

// function BrowseProduct() {
//   return (
//     <React.Fragment>
//     <div className="container-fluid offer pt-5">
//     <div className="row px-xl-5">
//     <h2 className="text-center  heading">Browse Products</h2>
//       <div className="col-md-6 pb-4 ban">
//         <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
       
//           <div className="position-relative" style={{zIndex: 1}}>
//             <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
//             <h1 className="mb-4 font-weight-semi-bold">Cooler Collection</h1>
//             <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6 pb-4">
//         <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
          
//           <div className="position-relative" style={{zIndex: 1}}>
//             <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
//             <h1 className="mb-4 font-weight-semi-bold">Freezer Collection</h1>
//             <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </React.Fragment>
//   )
// }

// export default BrowseProduct
// // 