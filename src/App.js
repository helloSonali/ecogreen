
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Products from './components/Products/Products';
import Contact from './components/contact/Contact';
function App() {
  return (
  <React.Fragment>
  <Router>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
  
  </Router>
  </React.Fragment>
  );
}

export default App;
