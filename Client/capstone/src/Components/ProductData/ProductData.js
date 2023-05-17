const products = [
  {
    id: "price_1N6KFDJU04y3N9IDWxqQ4fF6",
    title: "Kale Bowls",
    image: "../../Images/Kale-bowl.jpeg",
    description:
      "Introducing our Kale Bowl - a simple yet sensational creation that celebrates the essence of kale in all its glory. Grown under optimal conditions, our kale is packed with vitamins, minerals, and antioxidants, making it a true nutritional powerhouse. Embrace the vibrant world of kale with our Kale Bowl, where simplicity meets nutrition.",

    price: 15,
  },
  {
    id: "price_1N6KEEJU04y3N9ID3fCihd2I",
    title: "Microgreens",
    image: "../../Images/Microgreens.jpg",
    description:
      "Microgreens are renowned for their exceptional nutritional value. Despite their small size, they are packed with a wide range of vitamins, minerals, and antioxidants. These nutrient-dense greens offer a concentrated dose of goodness, supporting your overall well-being and adding a healthy boost to your diet.",
    price: 15,
  },
  {
    id: "price_1N83j5JU04y3N9IDwh2j5lnX",
    title: "Bok-Choy Bowls",
    image: "../../Images/bok-choy-bowl.jpg",
    description:
      "Our Bok Choy Bowl features hand-selected bok choy, carefully cultivated and harvested at the peak of freshness. At the heart of our Bok Choy Bowl lies the commitment to purity and simplicity. We believe in letting the natural qualities of bok choy shine through, which is why our bowl contains only the finest bok choy leaves. No added ingredients or distractions—just the pure essence of bok choy. ",

    price: 15,
  },
  {
    id: "price_1N6KIsJU04y3N9IDAna73HBp",
    title: "Lettuce Bowls",
    image: "../../Images/Lettuce-bowl.jpg",
    description:
      "This bowl is a tribute to lettuce enthusiasts who appreciate the simple yet refreshing flavors that this leafy green offers. Its delicate leaves offer a satisfying crispness, creating a delightful texture that invigorates the senses and is a perfect choice for those seeking a light and healthy lunch or a vibrant side dish that complements any main course.",

    price: 15,
  },
  {
    id: "price_1N83kWJU04y3N9IDw2uEJspm",
    title: "Mint Bowls",
    image: "../../Images/Mint-bowl.jpg",
    description:
      "Introducing our Mint Bowl - a delightful fusion of flavors and textures that will tantalize your taste buds and invigorate your senses. The fragrant mint leaves that infuse each bite with a cool and revitalizing essence are a perfect choice for those seeking a light and healthy lunch or a vibrant side dish that complements any main course.",

    price: 15,
  },
  {
    id: "price_1N83luJU04y3N9IDuipF3H2V",
    title: "Basil Bowls",
    image: require("../../Images/Basil-Bowl.jpg"),
    description:
      "Crafted with passion and dedication, our Basil Bowl showcases the versatility of this remarkable herb. Its leaves, deeply infused with flavor, add a tantalizing touch to a variety of dishes. From salads and sandwiches to pasta and sauces, our Basil Bowl provides a burst of freshness that transforms any recipe into a culinary masterpiece.",

    price: 15,
  },
  {
    id: "price_1N83mwJU04y3N9IDvAqRSFqq",
    title: "Growing Bowls",
    image: require("../../Images/wooden-bowl.png"),
    description:
      "Experience the joy of nurturing and witnessing the growth of your favorite herbs, plants, or flowers with our Growing Bowl. Its sleek and modern design effortlessly blends into any living space, adding a touch of greenery and serenity to your home or office. Our Growing Bowl makes it easy to indulge in the wonders of gardening without the need for a large outdoor space.",

    price: 8,
  },
  {
    id: "price_1N83oFJU04y3N9IDSevDN2QL",
    title: "Spinach Bowls",
    image: require("../../Images/spinach-bowl.jpg"),
    description:
      "Embrace the health-conscious lifestyle with our Spinach Bowl. Its exceptional quality and convenience make it an ideal choice for those seeking to incorporate more nutrient-rich greens into their daily routine. Whether you're a fitness enthusiast, a health-conscious individual, or simply someone who appreciates the goodness of fresh spinach, our bowl is the perfect companion on your journey to wellness.",

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
