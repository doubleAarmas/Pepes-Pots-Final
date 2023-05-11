import "../Styling/Contact.scss";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xrgvezyo");
  if (state.succeeded) {
    return <p>Thank you for your email!</p>;
  }

  return (
    <section class="contact" id="contact">
      <h2>Get In Touch With Us</h2>
      <div class="contact-form-container">
        <div class="contact-form">
          <form onSubmit={handleSubmit}>
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>

            <div class="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                name="message"
                placeholder="Enter Your Message"
                class="input-field"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              id="submit-btn"
              class="submit-btn"
            >
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
