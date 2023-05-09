import React from 'react'
import BlogBanner from './BlogBanner'
import Blogs from '../Home/Blogs'
import CallOut from '../Footer/CallOut'
import Gallery from '../Home/Gallery'

function Blog() {
  return (
    <React.Fragment>
    <BlogBanner/>
    <Blogs/>
    <Gallery/>
    <CallOut/>
    </React.Fragment>
  )
}

export default Blog