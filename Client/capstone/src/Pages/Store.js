import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { products } from "../Components/ProductData/ProductData";
import ProductCard from "../Components/ProductCard/ProductCard";
import CustomBanner from "../Components/CustomBanner/CustomBanner";
import MiniHero from "../Components/miniHero/miniHero";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

function Store() {
  const [backendData, setBackendData] = useState([]);

  const products = async () => {
    await axios.get("/products").then((response) => {
      console.log(response);
      setBackendData(response.data);
    });
  };

  useEffect(() => {
    products();
  }, []);

  return (
    <>
      <h1 align="center" className="p-3">
        {" "}
        Featured Items!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {backendData &&
          backendData.map((product, idx) => (
            <Col align="center" key={idx}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
      <CustomBanner />
      <MiniHero />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Store;
