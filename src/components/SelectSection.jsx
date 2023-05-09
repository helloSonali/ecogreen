import React from 'react'
import './Selectionsection.css'

function SelectSection() {
  return (
    <React.Fragment>
      <section className="products sec-padd2 sec-padd-bottom mb-60  ">
        <div className="container">
          <div className="section-title center">
            <h2 className='heading2'>Product</h2>
         
          </div>

          <div className='row'>
            <div className=" col-md-6 clickable-div">
              <a href="#">
                <img src="images/features/product1.jpg" alt="Image 1" />
                <h2>Cooler</h2>
              </a>
            </div>
            <div className="col-md-6 clickable-div t-mar">
              <a href="#">
                <img src="images/features/product2.jpg" alt="Image 2" />
                <h2>Freezer</h2>
              </a>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}

export default SelectSection