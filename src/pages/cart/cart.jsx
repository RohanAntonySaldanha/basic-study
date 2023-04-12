import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <div className="checkout">
            <p> Subtotal: Rs {totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
          </div>
          <div>
            {/* <div className="checkout">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Checkout
              </button>
            </div> */}
            <div
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Checkout Details Required
                    </h5>
                    {/* <button
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button> */}
                  </div>
                  <div class="modal-body">
                    Would you like to continue as Guest?
                  </div>
                  <div className="checkout-prompt">
                    <button type="button" class="btn btn-primary" onClick={() => navigate("/checkout")}>
                      Guest
                    </button>
                    <button type="button" class="btn btn-primary" onClick={() => navigate("/login")}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="checkout">
          <h1>* Empty *</h1>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
      )}
    </div>
  );
};
