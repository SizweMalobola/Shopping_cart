import React from "react";
import reactDom from "react-dom";
import { FaSkullCrossbones, FaTrashAlt } from "react-icons/fa";
import styles from "./modalPortalStyle.module.css";

function ModalPortal({ closeModal, cartItems, removeItem }) {
  return reactDom.createPortal(
    <>
      <div
        className={styles["container"]}
        onClick={(e) => {
          if (e.target.classList.contains(styles["container"])) {
            closeModal();
          }
        }}
      >
        <div className={styles["modal-inner"]}>
          <div className={styles["modal-header"]}>
            <h1>Shopping Cart... Of DooM</h1>
            <button
              onClick={() => {
                closeModal();
              }}
            >
              <FaSkullCrossbones />
            </button>
            <span>TOTAL ITEMS : {cartItems.length}</span>
          </div>
          <div className={styles["cart-items-container"]}>
            {cartItems.map((item, index) => {
              return (
                <div className={styles["cart-item"]} key={index}>
                  <div className={styles["cart-img-div"]}>
                    <img
                      src={process.env.PUBLIC_URL + item.image}
                      alt={`${item.title} img`}
                    />
                  </div>
                  <div className={styles["cart-item-title"]}>
                    <span className="cart-item-name">{item.title}</span>
                  </div>

                  <div className={styles["cart-item-details"]}>
                    <span className="cart-item-price">
                      PRICE : R {item.price}
                    </span>
                    <span className="cart-item-quantity">
                      QTY : {item.quantity}
                    </span>
                  </div>
                  <button
                    className={styles["cart-item-remove"]}
                    onClick={() => {
                      removeItem(index);
                    }}
                  >
                    Remove <FaTrashAlt />
                  </button>
                </div>
              );
            })}
          </div>
          <div className={styles["cart-footer"]}>
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
