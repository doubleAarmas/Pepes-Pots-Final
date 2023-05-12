// Microgreens: price_1N6KEEJU04y3N9ID3fCihd2I
// Kale Bowl: price_1N6KFDJU04y3N9IDWxqQ4fF6
// Lettuce Bowl: price_1N6KIsJU04y3N9IDAna73HBp
const express = require("express");
const app = express();
var cors = require("cors");
const fs = require("fs");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

require("dotenv").config();

app.use(cors());
//double check if it should be public or src
app.use(express.static("public"));
app.use(express.json());

const productsList = fs.readFileSync("./Data/ProductData.json");
const parsedData = JSON.parse(productsList);

app.get("/products", (req, res) => {
  const products = parsedData;
  res.send(products);
});

app.post("/checkout", async (req, res) => {
  /*req.body.items
[
    {
        id:1,
        quantity:3
    }
]

stripe wants
[
    {
        price:1,
        quantity: 3
    }
]
make a new variable to hold what stripe wants
    */
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  //making a payment with the lineItems that Stripe wants
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  //sending the created session URL to the front end so the user can checkout with stripe
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(8080, () => console.log("Listening on port 8080"));
