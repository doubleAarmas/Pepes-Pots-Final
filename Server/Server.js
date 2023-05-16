const express = require("express");
const app = express();
var cors = require("cors");
const fs = require("fs");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.use(express.static("public"));
app.use(cors());
app.options("*", cors()); // Enable pre-flight request for all routes
app.use(express.json());

const productsList = fs.readFileSync("./Data/ProductData.json");
const parsedData = JSON.parse(productsList);

app.get("/products", (req, res) => {
  const products = parsedData;
  res.send(products);
});

app.post("/checkout", async (req, res) => {
  const { items } = req.body;

  if (items && Array.isArray(items) && items.length > 0) {
    const lineItems = items.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url }); // Send the session URL as a JSON response
  } else {
    res.status(400).send("Invalid request");
  }
});

app.listen(8080, () => console.log("Listening on port 8080"));
