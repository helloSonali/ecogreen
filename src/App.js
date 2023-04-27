
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import BorderBottom from './components/BorderBottom';
import CallOut from './components/CallOut';
import ChooseUs from './components/ChooseUs';
import Events from './components/Events';
import Footer from './components/Footer';
import Fundraising from './components/Fundraising';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Service from './components/Service';

function App() {
  return (
    <div>
    <Header/>
    <Service/>
    <About/>
    <ChooseUs/>
    <Gallery/>
    <Fundraising/>
    <Events/>
    <Blog/>
    <BorderBottom/>
    <CallOut/>
    <Footer/>
    
    </div>
  );
}

export default App;
