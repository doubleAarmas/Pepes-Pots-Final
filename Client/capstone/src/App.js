import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../src/Components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
// bootstrap items below
import NavbarComponent from "./Components/Header/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import Store from "./Pages/Store";
import CartProvider from "./CartContext";

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
          <Container>
            <NavbarComponent></NavbarComponent>
          </Container>
          <Header />
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />

            {/* <Route exact path="/" element={<Navigate to="/Pepe's_Home" />} />
          <Route path="/Pepe's_Home" element={<Home />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
