
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contactus from './components/contact/Contactus';
import Footer from './components/footer/Footer';
import Product from './components/products/Product';
import Login from './components/login/Login';
import Registration from './components/login/Registration';
function App() {
  return (
    <React.Fragment>
    <Router basename={'/'}>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route parh='/registration' element={<Registration/>}/>
   </Routes>
    <Footer/>
    </Router>
   
    </React.Fragment>
  );
}

export default App;
