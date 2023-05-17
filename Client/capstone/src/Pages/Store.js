import { Row, Col } from "react-bootstrap";
import { products } from "../Components/ProductData/ProductData";
import ProductCard from "../Components/ProductCard/ProductCard";
import MiniHero from "../Components/miniHero/miniHero";
import CustomBanner from "../Components/CustomBanner/CustomBanner";
import Newsletter from "../Components/Newsletter/Newsletter";
import "../Styling/Store.scss";

function Store() {
  return (
    <>
      <div className="featured__section">
        <h1 align="center" className="p-3">
          {" "}
          Featured Items!
        </h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product, idx) => (
            <Col align="center" key={idx}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <CustomBanner />
        <MiniHero />
        <Newsletter />
      </div>
    </>
  );
}

export default Store;
