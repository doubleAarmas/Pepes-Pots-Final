import React from "react";
import "../../Styling/FeaturedItems.scss";
import Shopping from "../../Logos/icons8-add-shopping-cart-96.png";
import { products } from "../ProductData/ProductData";

function FeaturedItems() {
  return (
    <section id="product1">
      <h2>Featured Items</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="description">
              <span>Branding</span>
              <h5>{product.title}</h5>
              <h4>{product.price}</h4>
            </div>
            <button type="submit">
              <img src={Shopping} alt="Add to cart" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedItems;
