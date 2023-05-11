import React from 'react'
import Chooseus from './Chooseus'
import ProducttsDisplay from './ProducttsDisplay'
import Membership from './Membership'
import Testimonial from './Testimonial'
import Gallery from './Gallery'
import QueryForm from './QueryForm'

function Home() {
  return (
    <React.Fragment>
    <Chooseus/>
    <ProducttsDisplay/>
    <Membership/>
    <Testimonial/>
    <Gallery/>
    <QueryForm/>
    </React.Fragment>
  )
}

export default Home