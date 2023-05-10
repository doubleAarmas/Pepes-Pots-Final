import { Row, Col } from "react-bootstrap";
import { products } from "../Components/ProductData/ProductData";
import ProductCard from "../Components/ProductCard/ProductCard";

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">
        {" "}
        Featured Items!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
