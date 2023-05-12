// Microgreens: price_1N6KEEJU04y3N9ID3fCihd2I
// Kale Bowl: price_1N6KFDJU04y3N9IDWxqQ4fF6
// Lettuce Bowl: price_1N6KIsJU04y3N9IDAna73HBp

// import getProducts from "../../Pages/Store";

function getProductData(id, productArray) {
  console.log("PA: ", productArray);
  let productData = productArray.find((product) => product.id === id);
  console.log(productData);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    // adding the return statement here as well to make it easier to read
    return undefined;
  }

  return productData;
}

export { getProductData };
