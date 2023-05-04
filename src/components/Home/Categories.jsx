import React from 'react'

function Categories() {
  return (
    <React.Fragment>
    <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column mb-4" style={{padding: '30px'}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="images/features/c1.png" alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Cooler</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column  mb-4" style={{padding: '30px'}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="images/features/c2.png" alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Cooler</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column  mb-4" style={{padding: '30px'}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="images/features/c3.png" alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Cooler</h5>
        </div>
      </div>
      
      
      
    </div>
  </div>
    </React.Fragment>
  )
}

export default Categories