import React from "react";
import reactDom from "react-dom";
import { FaSkullCrossbones, FaTrashAlt } from "react-icons/fa";

function ModalPortal({ closeModal, cartItems, removeItem }) {
  return reactDom.createPortal(
    <>
      <div
        id="cart-container"
        onClick={(e) => {
          if (e.target.id === "cart-container") {
            closeModal();
          }
        }}
      >
        <div id="cart-inner">
          <div id="cart-header">
            <h1>Shopping Cart... Of DooM</h1>
            <button
              onClick={() => {
                closeModal();
              }}
            >
              <FaSkullCrossbones />
            </button>
          </div>
          <div id="cart-list">
            {cartItems.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <img
                    className="cart-item-image"
                    src={process.env.PUBLIC_URL + item.image}
                    alt={`${item.title} img`}
                  />
                  <div className="cart-item-title">
                    <span className="cart-item-name">{item.title}</span>
                  </div>

                  <div className="cart-item-details">
                    <span className="cart-item-price">
                      Price : R {item.price}
                    </span>
                    <span className="cart-item-quantity">
                      Qty : {item.quantity}
                    </span>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => {
                      console.log(index);
                      removeItem(index);
                    }}
                  >
                    Remove <FaTrashAlt />
                  </button>
                </div>
              );
            })}
          </div>
          <div id="cart-footer">
            <h1>
              Total{" "}
              <span>
                : R{" "}
                {cartItems.reduce((total, current) => {
                  return (total += current.quantity * current.price);
                }, 0)}
              </span>
            </h1>
            <button id="checkout-btn">proceed to checkout</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal-root")
  );
}

export default ModalPortal;
