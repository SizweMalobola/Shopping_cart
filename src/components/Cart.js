import React, { Component } from "react";
import { FaShoppingCart, FaSkullCrossbones, FaTrashAlt } from "react-icons/fa";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.toggleClicked = this.toggleClicked.bind(this);
    this.isEmptyRef = null;
  }
  toggleClicked() {
    this.setState({ clicked: !this.state.clicked });
  }
  // Todo clearTimeout
  componentDidUpdate() {
    if (this.isEmptyRef) {
      let t = setTimeout(() => {
        clearTimeout(t);
        this.toggleClicked();
      }, 3000);
    }
  }
  render() {
    const { cartItems, removeItem } = this.props;
    return (
      <>
        <div id="cart" onClick={() => this.toggleClicked()}>
          <h1>
            <FaShoppingCart /> <span id="cart-span">0</span>
          </h1>
        </div>
        {this.state.clicked &&
          (cartItems.length > 0 ? (
            <div
              id="cart-container"
              onClick={(e) => {
                if (e.target.id === "cart-container") {
                  this.toggleClicked();
                }
              }}
            >
              <div id="cart-inner">
                <div id="cart-header">
                  <h1>Shopping Cart... Of DooM</h1>
                  <button
                    onClick={() => {
                      this.toggleClicked();
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
          ) : (
            <div
              id="cart-empty"
              ref={(div) => (this.isEmptyRef = div)}
              onClick={() => {
                this.toggleClicked();
              }}
            >
              <h3>Your Cart is Empty</h3>
            </div>
          ))}
      </>
    );
  }
}
