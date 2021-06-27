import React, { Component } from "react";
import ModalPortal from "./ModalPortal";
import styles from "./cartStyle.module.css";
import { FiShoppingCart } from "react-icons/all";
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

  //! fix
  componentDidUpdate() {
    if (this.isEmptyRef) {
      setTimeout(() => {
        this.toggleClicked();
      }, 1000);
    }
  }
  render() {
    const { cartItems, removeItem } = this.props;
    return (
      <>
        <div
          className={styles["container"]}
          id="cart"
          onClick={() => this.toggleClicked()}
        >
          <FiShoppingCart />
          <span id="cart-span">0</span>
        </div>
        {this.state.clicked &&
          (cartItems.length > 0 ? (
            <ModalPortal
              closeModal={this.toggleClicked}
              removeItem={removeItem}
              cartItems={cartItems}
            />
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
