import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
