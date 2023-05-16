import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";
import Logo from "../../Images/Branding.png";
import Cart from "../../Logos/icons8-add-shopping-cart-96.png";
import axios from "axios";
import "../../Styling/NavbarComponent.scss";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    try {
      const response = await axios.post("/checkout", {
        items: cart.items,
      });

      const data = response.data;

      if (data.url) {
        window.location.assign(data.url); // forwarding user to stripe
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div className="Navbar__Container">
        <Navbar expand="sm">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button href="/" className="nav_buttons">
              Home
            </Button>
            <Button href="/about" className="nav_buttons">
              About Us
            </Button>
            <Button href="/Contact" className="nav_buttons">
              Contact Us
            </Button>
            <Button onClick={handleShow} className="nav_buttons">
              {" "}
              Cart ({productsCount} Items)
            </Button>
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
      </div>
    </>
  );
}

export default NavbarComponent;
