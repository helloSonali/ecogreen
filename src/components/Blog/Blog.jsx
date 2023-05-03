import React from 'react'
import Navbar from '../Header/Navbar'
import BlogBanner from './BlogBanner'
import Blogs from '../Home/Blogs'
import Footer from '../Footer/Footer'
import CallOut from '../Footer/CallOut'
import Gallery from '../Home/Gallery'

function Blog() {
  return (
    <React.Fragment>
    <Navbar/>
    <BlogBanner/>
    <Blogs/>
    <Gallery/>
    <CallOut/>
    <Footer/>
    </React.Fragment>
  )
}

export default Blog