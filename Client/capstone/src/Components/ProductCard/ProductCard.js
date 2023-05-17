import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "../../Styling/ProductCard.scss";

function ProductCard(props) {
  //props.product is the product being sold
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <Card className="card__container">
      <Card.Body className="card__container-inside">
        <Card.Img
          src={product.image}
          alt={product.title}
          className="product_image"
        />
        <Card.Title className="card__title">{product.title}</Card.Title>
        <Card.Text className="card__text">{product.description}</Card.Text>
        <Card.Text className="card__price">${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                {" "}
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove From Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
