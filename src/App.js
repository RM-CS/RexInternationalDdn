import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';
import Contact from './pages/contactus/Contact';
import Faq from './pages/faq/Faq';
import Kitchencarepage from './pages/kitchencare/Kitchencarepage';
import Kitchencaredetails from './components/kitchencare/Kitchencaredetails';

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<Aboutus />}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route exact path='/faq' element={<Faq />}/>
      <Route exact path='/shopbyproducts/ktichencare' element={<Kitchencarepage />}/>
      <Route exact path='/kitchendetail' element={<Kitchencaredetails />}/>
    </Routes>
    <Footer />

   </Router>
   </>
  );
}

export default App;
