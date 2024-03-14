import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
   <>
   <Router>
   <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    <Footer />

   </Router>
   </>
  );
}

export default App;
