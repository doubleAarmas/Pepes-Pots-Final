import "./Styling/App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// bootstrap items below
import NavbarComponent from "./Components/Header/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import Store from "./Pages/Store";
import CartProvider from "./CartContext";
import Contact from "./Pages/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios
      .get(" http://localhost:3000/products")
      .then((response) => {
        setBackendData(response.data); // Use response.data directly
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // localhost:3000 -> Home
  // localhost:3000/success -> success
  return (
    <CartProvider>
      <div>
        <BrowserRouter>
          {/* bootstrap stuff */}
          <NavbarComponent></NavbarComponent>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="Contact" element={<Contact />} />

            {/* <Route exact path="/" element={<Navigate to="/Pepe's_Home" />} />
          <Route path="/Pepe's_Home" element={<Home />} /> */}
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
