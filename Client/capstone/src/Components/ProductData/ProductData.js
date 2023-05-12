function getProductData(id, products) {
  let productData = products.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    // adding the return statement here as well to make it easier to read
    return undefined;
  }

  return productData;
}

export { getProductData };
