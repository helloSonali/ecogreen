import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import BlogBanner from './BlogBanner'
import BlogContent from './BlogContent'
import Footer from '../Footer'
import CallOut from '../CallOut'
function BlogSection() {
  return (
    <React.Fragment>
    <Navbar/>
    <Navbar2/>
    <BlogBanner/>
    <BlogContent/>
    <CallOut/>
    <Footer/>
    
    </React.Fragment>
  )
}

export default BlogSection