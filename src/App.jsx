import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/about';
import Catalog from './pages/catalog';
import Home from './pages/home';
import Contact from './pages/contact';
import Admin from './pages/admin';
import Todo from './pages/todo';
import Cart from './pages/cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalProvider from './state/globalProvider';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>

      <Footer/>    
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;


// run local host with "npm run dev -- --host" select Local from the top of the list