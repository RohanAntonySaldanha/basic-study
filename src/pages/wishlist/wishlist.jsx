import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./wishlist-item";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  const { cartItems, checkout } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Wishlist Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
        <div className="continueShopping">
          <button onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
    </div>
  );
};
