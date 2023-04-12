import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

// logic to set cart item to zero
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// logic to set wishlist item to zero
const getDefaultWishlist = () => {
  let wishlist = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    wishlist[i] = 0;
  }
  return wishlist;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

  // logic to count total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // logic to clear cart of all products
  const clearCart = () => {
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        setCartItems((prev) => ({ ...prev, [item]: 0 }));
      }
    }
  };

  // logic for adding same product and increasing quantity one by one
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // logic for removing same product and decreasing quantity one by one
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //logic to update product quantity from user input
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // logic to add item to wishlist
  const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: 1 }));
  };

  // logic to remove item from wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const contextValue = {
    cartItems,
    wishlistItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    addToWishlist,
    removeFromWishlist,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
