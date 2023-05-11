import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";
import axios from "axios";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const cart = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await axios
      .post("http://localhost:8080/checkout", {
        body: JSON.stringify({ items: cart.items }),
      })
      .then((response) => {
        if (response.url) {
          //double check if assign is needed
          window.location.assign(response.url); //forwards user to stripe
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}> Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                />
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <Button variant="success" onClick={checkout}>
                Purchase Items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
