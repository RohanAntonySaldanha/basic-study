import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, addToWishlist } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Rs {price}</p>
      </div>
      <div>
        <button className="addbtn" onClick={() => addToCart(id)}>
          To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <button className="addbtn" onClick={() => addToWishlist(id)}>
          To Wishlist
        </button>
      </div>
    </div>
  );
};
