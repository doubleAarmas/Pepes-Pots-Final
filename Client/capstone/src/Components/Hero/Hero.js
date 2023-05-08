import React from "react";
import "../../Styling/hero.scss";
import Kale from "../../Images/Kale-bowl.jpeg";
import Basil from "../../Images/Basil-Bowl.jpg";
import Lettuce from "../../Images/Lettuce-bowl.jpg";
import Bok from "../../Images/bok-choy-bowl.jpg";
import Mint from "../../Images/Mint-bowl.jpg";
import Spinach from "../../Images/spinach-bowl.jpg";
import WoodenBowl from "../../Images/wooden-bowl.png";
import Shopping from "../../Logos/icons8-add-shopping-cart-96.png";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section id="product1" class="section-p1">
      <h2>New Arrivals</h2>
      <p>Shiping available to any location in Florida</p>
      <div class="product-container">
        <div class="product">
          <img src={Kale} alt="Kale bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Kale Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>
        </div>
        <div class="product">
          <img src={Bok} alt="bok-choy-bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Bok-Choy Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
        <div class="product">
          <img src={Lettuce} alt="Lettuce-bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Lettuce Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
        <div class="product">
          <img src={Mint} alt="Mint bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Mint Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
        <div class="product">
          <img src={Basil} alt="Basil bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Basil Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
        <div class="product">
          <img src={WoodenBowl} alt="Growing-Bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Growing Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
        <div class="product">
          <img src={Spinach} alt="Spinach-Bowl" />
          <div class="description">
            <span>Branding</span>
            <h5>Spinach Bowls</h5>

            <h4>$15</h4>
          </div>
          <button type="submit">
            {" "}
            <img src={Shopping} />{" "}
          </button>{" "}
        </div>
      </div>
    </section>
  );
}

export default Hero;
