import { createContext, useState } from "react";
import { getProductData } from "./Components/ProductData/ProductData";

export const CartContext = createContext({
  items: [],
  //reason for the empty below is more saying that there is room for items
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ products }, { children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // stored in the cart is {id:1, quantity: 2}

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  //adding items to the cart
  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      //product is not in the cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      //product is in the cart
      // stored in the cart is {id:1, quantity: 2}, {id:2, quantity: 1} add to product id of 2

      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id //if condition
              ? { ...product, quantity: product.quantity + 1 } //if statement is true
              : product // if statement is false
        )
      );
    }
  }
  //removes just one from the cart
  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id //if condition
              ? { ...product, quantity: product.quantity - 1 } //if statement is true
              : product // if statement is false
        )
      );
    }
  }

  //deleting everything from the cart
  function deleteFromCart(id) {
    //[] if an object meets a condition add the object to array (filtering basics)

    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id, products);
      return (totalCost += productData.price * cartItem.quantity);
    });
    // return totalCost; not needed due to the return line
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue} products={products}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
// Context (cart, addToCart, removeCart)
//Provider -> gives your react app access to all things in your context
