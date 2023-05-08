import "../../Styling/header.scss";
import React from "react";
import Branding from "../../Images/Branding.png";
import { NavLink } from "react-router-dom";
import Cart from "../../Logos/icons8-add-shopping-cart-96.png";

function Header() {
  return (
    <header className="header">
      <div className="main__navbar">
        <div className="header__watermark">
          <NavLink
            className="header__watermark--link"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <img className="header__logo" src={Branding} alt="Company Logo" />
          </NavLink>
        </div>
        <div className="header__links">
          <div className="header__buttons--container">
            <NavLink className="header__links header__links--Home" to="/">
              <button className={`header__buttons--home`}>
                <p>Home</p>
              </button>
            </NavLink>
          </div>
          <div className="header__buttons--container">
            <NavLink
              className="header__buttons header__buttons--About"
              to="/About-Us"
            >
              <button className={`header__buttons--About--wrapper`}>
                <p> About Us</p>
              </button>
            </NavLink>
          </div>
          <div className="header__buttons--container">
            <NavLink
              className="header__buttons header__buttons--Contact"
              to="/Contact"
            >
              <button className={`header__buttons--Contact--wrapper`}>
                <p> Contact Us</p>
              </button>
            </NavLink>
          </div>
          <div className="header__buttons--container">
            <NavLink
              className="header__buttons header__buttons--Cart"
              to="/Cart"
            >
              <button className={`header__buttons--About--wrapper`}>
                <img className="header__Cart" src={Cart} alt="Cart Icon" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
