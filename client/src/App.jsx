import React,{ useState } from 'react';
import "jquery-ui-dist/jquery-ui"; // jQuery UI
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Package from './pages/Package.jsx';
import Tour from './pages/Tour.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Footer from './components/Footer.jsx';
import  './components/Ultimate.jsx';
import './components/Whyus.jsx';
import './components/Enquiry.jsx';
import './components/Touch.jsx';
import  './components/Cont.jsx';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import "jquery-ui-dist/jquery-ui"; // loads JS
// import "jquery-ui-dist/jquery-ui.css";




function App() {

  return (
    <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/package" element={<Package />} />
            <Route path="/tour" element={<Tour />} />
          </Routes>
          <Footer />
         </BrowserRouter>
    </>
  )
}

export default App
