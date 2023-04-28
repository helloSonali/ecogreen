
import React from 'react';
import './App.css';
import Home from './components/Home';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './components/About/AboutSection';
import Blog from './components/Blog/BlogSection';
import ProductSection from './components/Products/ProductSection';
import ContactSection from './components/ContactUs/ContactSection';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<AboutSection />} />
          <Route path='blog' element={<Blog />} />
          <Route path='products' element={<ProductSection />} />
          <Route path='contact' element={<ContactSection />} />
        </Routes>

      </Router>
    </React.Fragment>
  );
}

export default App;


