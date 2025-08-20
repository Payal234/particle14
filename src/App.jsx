import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import ServiceDetails from "./pages/ServiceDetails";
import React from "react";
import Navbar from "./component/Navbar";
import About  from "./component/About";
import LoginPage from "./component/Login";
import RegisterPage from "./component/Register";
import HomePage from "./pages/HomePage";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
function App() {
 
  return (
    <>
   
      <Navbar />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
       <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />

      </Routes> 
      <Footer/>
    </>
  );
}

export default App;
