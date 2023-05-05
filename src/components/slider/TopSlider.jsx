import React from 'react'
import './TopSlider.css';
function TopSlider() {
  return (
    <React.Fragment>
    
    <div>
        <h2 className=' heading' style={{textAlign: 'center',}}> Gallery </h2>
        <div className="container">
          <div className="card-container">
            {/*Card 1*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://media.croma.com/image/upload/v1645798775/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/248811_umy1bw.png)'}} />
            </div>
            {/*Card 2*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://surya.co.in/wp-content/uploads/2022/03/Glacia.png)'}} />
            </div>
            {/*Card 3*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://m.media-amazon.com/images/I/51uAJgx279L._SL1000_.jpg)'}} />
            </div>
            {/*Card 4*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlb-mDrGCeKFpaSNCePRJeq1MXzP614gI02w&usqp=CAU)'}} />
            </div>
            {/*Card 5*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://media.croma.com/image/upload/v1674204797/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/267941_p8tdeb.png)'}} />
            </div>
            {/*Card 6*/}
            <div className="card">
              <div className="card-image" style={{backgroundImage: 'url(https://www.sunflame.com/media/catalog/product/cache/1/image/946x946/9df78eab33525d08d6e5fb8d27136e95/s/c/screenshot_2021-03-01_at_7.07.35_pm_1_1.png)'}} />
              
            </div>
             {/*Card 4*/}
             <div className="card">
             <div className="card-image" style={{backgroundImage: 'url(https://media.croma.com/image/upload/v1674204797/Croma%20Assets/Large%20Appliances/Air%20Cooler/Images/267941_p8tdeb.png)'}} />
           </div>
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