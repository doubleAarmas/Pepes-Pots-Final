// const express = require("express");
// const app = express();
// app.use(express.static("public"));
// var cors = require("cors");
// const fs = require("fs");

// require("dotenv").config();
// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// app.use(cors());
// app.use(express.json());

// const productsList = fs.readFileSync("./Data/ProductData.json");
// const parsedData = JSON.parse(productsList);

// app.get("/products", (req, res) => {
//   const products = parsedData;
//   res.send(products);
// });

// app.post("/checkout", async (req, res) => {
//   /*req.body.items
// [
//     {
//         id:1,
//         quantity:3
//     }
// ]

// stripe wants
// [
//     {
//         price:1,
//         quantity: 3
//     }
// ]
// make a new variable to hold what stripe wants
//     */
//   console.log(req.body);
//   const items = req.body.items;
//   if (items && Array.isArray(items)) {
//     let lineItems = [];
//     items.forEach((item) => {
//       lineItems.push({
//         price: item.id,
//         quantity: 1,

//         // quantity: item.quantity,
//       });
//     });

//     //making a payment with the lineItems that Stripe wants
//     const session = await stripe.checkout.sessions.create({
//       // payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       automatic_tax: { enabled: true },
//     });

//     //sending the created session URL to the front end so the user can checkout with stripe
//     res.send(
//       JSON.stringify({
//         url: session.url,
//       })
//     );
//   } else {
//     res.status(400).send("Invalid request");
//   }
// });

// app.listen(8080, () => console.log("Listening on port 8080"));

const express = require("express");
const app = express();
app.use(express.static("public"));
var cors = require("cors");
const fs = require("fs");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.use(cors());
app.use(express.json());

const productsList = fs.readFileSync("./Data/ProductData.json");
const parsedData = JSON.parse(productsList);

app.get("/products", (req, res) => {
  const products = parsedData;
  res.send(products);
});

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1N6KFDJU04y3N9IDWxqQ4fF6",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.redirect(303, session.url);
});

app.listen(8080, () => console.log("Listening on port 8080"));
