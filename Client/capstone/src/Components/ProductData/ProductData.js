const products = [
  {
    id: 1,
    title: "Kale Bowls",
    image: "../../Images/Kale-bowl.jpeg",
    price: 15,
  },
  {
    id: 2,
    title: "Bok-Choy Bowls",
    image: "../../Images/bok-choy-bowl.jpg",
    price: 15,
  },
  {
    id: 3,
    title: "Lettuce Bowls",
    image: "../../Images/Lettuce-bowl.jpg",
    price: 15,
  },
  {
    id: 4,
    title: "Mint Bowls",
    image: "../../Images/Mint-bowl.jpg",
    price: 15,
  },
  {
    id: 5,
    title: "Basil Bowls",
    image: require("../../Images/Basil-Bowl.jpg"),
    price: 15,
  },
  {
    id: 6,
    title: "Growing Bowls",
    image: require("../../Images/wooden-bowl.png"),
    price: 15,
  },
  {
    id: 7,
    title: "Spinach Bowls",
    image: require("../../Images/spinach-bowl.jpg"),
    price: 15,
  },
];

function getProductData(id) {
  let productData = products.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    // adding the return statement here as well to make it easier to read
    return undefined;
  }

  return productData;
}

export { products, getProductData };
