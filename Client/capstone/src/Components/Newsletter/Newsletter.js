import React from "react";
import "../../Styling/Newsletter.scss";

function Newsletter() {
  return (
    <>
      <section className="newsletter">
        <div>
          <h4 className="newsletter__header">Sign Up For Newsletters</h4>
          <p className="newsletter__text">
            Get E-mail updates about our latest shop and{" "}
            <span>newest additions</span>
          </p>
        </div>
        <div className="form">
          <input
            className="newsletter__email"
            type="email"
            placeholder="Your email address"
          />
          <button className="newsletter__button">Sign up</button>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
