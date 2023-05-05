import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseURL = 'https://api.greentexpanel.com/wp-json/wc/v3/products?consumer_key=ck_9a9335e667a5caacc400aac2733c69686299cad9&consumer_secret=cs_ec9737b7d27c2906e48102080379242cf734a3b7';
console.log(baseURL);
function ProductList() {

    const [my_data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        })
    },[]);

  return (
    <React.Fragment>
          <div className='data'>
          <div className='container '>
            <div className="row">
            {my_data.map((item) =>  {
               const {id, name} = item;
              return (
              <div className="col-md-4 col-sm-6 col-xs-12 sec-padd-top">
                <div className="single-shop-item">
                   <div className="img-box">
                     <a href="shop-cart.html"><img src="images/shop/1.jpg" alt="Awesome Image" /></a>
                     <figcaption className="overlay">
                        <div className="box">
                          <div className="content">
                            <a href="shop-single.html"><i className="fa fa-link" aria-hidden="true" /></a>
                          </div>
                        </div>
                     </figcaption>
                   </div>
                   <div className="content-box">  
                      <div className="inner-box">
                        <h4><a href="shop-cart.html">{name}</a></h4>
                        <div className="item-price">{id}</div>
                      </div> 
                      <div className="price-box">
                        <div className="clearfix">
                          <div className="float_left">
                            <a href="shop-cart.html" className="cart-btn"><i className="fa fa-shopping-cart" />Add To Cart</a>
                          </div>
                          <div className="float_right">
                            <div className="rating">
                              <span className="fa fa-star" /> 
                              <span className="fa fa-star" /> 
                              <span className="fa fa-star" /> 
                              <span className="fa fa-star" /> 
                              <span className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                 </div>
               </div>
                )})}
              </div>
            </div>
          </div>
    
    </React.Fragment>
  )
}

export default ProductList
        // <h1>{id}</h1>
    //       <h2>{slug}</h2>
    //       <h3>{name}</h3>
        // {/* <h1>{my_data.id}</h1>
        // <h2>{my_data.title}</h2>
        // <h3>{my_data.body}</h3> */}



// <div className='container '>
// <div className="row">
// <div className="col-md-4 col-sm-6 col-xs-12 sec-padd-top">
//   <div className="single-shop-item">
//     <div className="img-box">
//       <a href="shop-cart.html"><img src="images/shop/1.jpg" alt="Awesome Image" /></a>
//       <figcaption className="overlay">
//         <div className="box">
//           <div className="content">
//             <a href="shop-single.html"><i className="fa fa-link" aria-hidden="true" /></a>
//           </div>
//         </div>
//       </figcaption>
//     </div>{/* /.img-box */}
//     <div className="content-box">  
//       <div className="inner-box">
//         <h4><a href="shop-cart.html">The Innovators</a></h4>
//         <div className="item-price">$34.99</div>
//       </div> 
//       <div className="price-box">
//         <div className="clearfix">
//           <div className="float_left">
//             <a href="shop-cart.html" className="cart-btn"><i className="fa fa-shopping-cart" />Add To Cart</a>
//           </div>
//           <div className="float_right">
//             <div className="rating">
//               <span className="fa fa-star" /> 
//               <span className="fa fa-star" /> 
//               <span className="fa fa-star" /> 
//               <span className="fa fa-star" /> 
//               <span className="fa fa-star" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// </div>