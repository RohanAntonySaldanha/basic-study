import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { WishlistItem } from "./wishlist-item";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";

export const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="wishlist">
      <div>
        <h1>Wishlist Items</h1>
      </div>
      <div className="wishlist">
        {PRODUCTS.map((product) => {
          if (wishlistItems[product.id] !== 0) {
            return <WishlistItem data={product} />;
          }
        })}
      </div>
        <div className="continueShopping">
          <button onClick={() => navigate("/")}> Products </button>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </div>
    </div>
  );
};
