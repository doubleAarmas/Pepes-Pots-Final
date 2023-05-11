import React from "react";
import "../../Styling/Footer.scss";
import Logo from "../../Images/Branding.png";
import Discover from "../../Logos/icons8-discover-card-67.png";
import Visa from "../../Logos/icons8-visa-67.png";
import American from "../../Logos/icons8-american-express-squared-67.png";
// adding social media once they have created their accounts
// import Facebook from "../../Logos/icons8-facebook-circled.gif";
// import Instagram from "../../Logos/icons8-instagram.gif";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__column--container">
          <img className="logo" src={Logo} alt="logo" />
          {/* going to add social media once created
          <h4 className="footer__subheader footer__subheader--contact">
            Contact
          </h4>
          <p className="footer__text">
            <strong>Phone: </strong>to be determined
          </p>
          <p className="footer__text">
            <strong>Hours: </strong>to be determined
          </p>
          <div className="follow">
            <h4 className="footer__subheader">Follow us</h4>
            <div className="icon">
              <img src={Facebook} className="facebook" alt="facebook logo" />

              <img src={Instagram} className="instagram" alt="instagram logo" />
            </div>
          </div> */}
        </div>

        <div className="column">
          <h4 className="footer__subheader">About</h4>
          <p className="footer__text">About Us</p>
          <p className="footer__text">Delivery Information</p>
          <p className="footer__text">Privacy Policy</p>
          <p className="footer__text">Terms and Conditions</p>
          <p className="footer__text">Contact Us</p>
        </div>

        <div className="column">
          <h4 className="footer__subheader">My Account</h4>
          <p className="footer__text">Sign In</p>
          <p className="footer__text">View Cart</p>
          <p className="footer__text">Track My Order</p>
          <p className="footer__text">Help/FAQ</p>
        </div>

        <div className="column payments">
          <h4 className="footer__subheader">Secured Payment Gateways</h4>
          <div className="payments_row">
            <img
              src={Discover}
              alt="Discover card"
              className="footer__payments "
            />
            <img
              src={Visa}
              alt="Visa credit card"
              className="footer__payments "
            />
            <img
              src={American}
              alt="American Express card"
              className=" footer__payments "
            />
          </div>
        </div>

        <div className="copyright">
          <p className="footer__text">
            <span>&copy;</span> 2023, Pepe's Pots
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
