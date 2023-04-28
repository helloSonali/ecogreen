import React from 'react'

function MapSection() {
  return (
    <React.Fragment>
    <section className="home-google-map">
    <div className="google-map" id="contact-google-map" data-map-lat="40.108833" data-map-lng="-74.782104" data-icon-path="images/logo/map-marker.png" data-map-title="Chester" data-map-zoom={11}>
    </div>
  </section>
    </React.Fragment>
  )
}

export default MapSection