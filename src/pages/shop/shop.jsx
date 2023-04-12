import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { useNavigate } from "react-router-dom";

export const Shop = () => {
  const navigate=useNavigate();
  const gotoWishList=(e)=>{
    navigate("/wishlist");
  }
  const gotoCart=(e)=>{
    navigate("/cart");
  }
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PRODUCTS</h1>
      </div>
      <div className="toprightbtn">
        <button onClick={gotoCart}>Cart</button>
        <button onClick={gotoWishList}>Wishlist</button>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};