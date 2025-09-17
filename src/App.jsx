import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Catalog from './pages/catalog';
import Home from './pages/home';
import Contact from './pages/contact';
import Admin from './pages/admin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/catalog" element={<Catalog/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/admin" element={<Admin/>}>S</Route>
    </Routes>

    <Footer/>    
    </BrowserRouter>
  );
}

export default App;
