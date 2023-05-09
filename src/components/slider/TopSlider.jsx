import React from 'react'
import './TopSlider.css';
function TopSlider() {
  return (
    <React.Fragment>
    
    <div>
        <h2 className=' heading' style={{textAlign: 'center',}}> Gallery </h2>
        <div className="container">
          <div className="card-container">
          
           {/*Card 5*/}
           <div className="card mt-3">
             <div className="card-image" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfr97E4LiEvGty9eL8r4lFSZe_XCPkQb_0tw&usqp=CAU)'}} />

           </div>
           {/*Card 5*/}
           <div className="card mt-3">
             <div className="card-image" style={{backgroundImage: 'url(https://content.jdmagicbox.com/comp/bangalore/j6/080pxx80.xx80.200203160146.r7j6/catalogue/p-r-air-cooler-services-krishnarajapuram-bangalore-air-cooler-repair-and-services-86qmg55jlv.jpg)'}} />
           </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TopSlider
// <img  className='col-md-6sec-padd2 ' src="images/slider/b1.jpg" alt="Image 1" />