import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const WishlistItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { removeFromWishlist, addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="wishlistItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: Rs {price}</p>

        <div className="countHandler">
          <button onClick={() => removeFromWishlist(id)}> Remove Item </button>
          <button onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
