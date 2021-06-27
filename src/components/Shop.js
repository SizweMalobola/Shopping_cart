import React, { Component } from "react";
import Card from "./Card";
import Cart from "./Cart";
import ShopGrid from "./ShopGrid";
import ShopNav from "./ShopNav";
import styles from "./shopStyle.module.css";
import data from "../data.json";
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartArray: [],
      tag: "all",
      moviesArray: data,
    };
    this.getObj = this.getObj.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.activateShopNav = this.activateShopNav.bind(this);
    this.cartLocalStorage = this.cartLocalStorage.bind(this);
  }
  // instance methods
  // movie objects are saved to cartArray
  getObj(obj) {
    if (this.state.cartArray.length > 0) {
      this.state.cartArray.forEach((cartObj, index) => {
        if (cartObj.title === obj.title) {
          if (cartObj.quantity === 3) {
            return;
          } else if (cartObj.quantity + obj.quantity <= 3) {
            let items = [...this.state.cartArray];
            let item = { ...items[index] };
            item.quantity += obj.quantity;
            items[index] = item;
            this.setState((state) => ({
              cartArray: items,
            }));
          } else if (cartObj.quantity + obj.quantity > 3) {
            this.setState((state) => {
              state.cartArray[index].quantity = 3;
            });
          }
        } else if (index === this.state.cartArray.length - 1) {
          this.setState({
            cartArray: [...this.state.cartArray, obj],
          });
        }
      });
    } else {
      this.setState({
        cartArray: [...this.state.cartArray, obj],
      });
    }
  }
  // cartArray is stringified and save to local storage
  cartLocalStorage() {
    const state = this.state.cartArray;
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
    const cartContent = JSON.stringify(state, getCircularReplacer());
    localStorage.setItem("cart", cartContent);
  }
  // number of items in cartArray is dispayed on #cart-span
  updateCart() {
    const cartSpan = document.querySelector("#cart-span");
    cartSpan.innerText = this.state.cartArray.length;
  }
  // removes item inside cartArray based on its index
  removeCartItem(index) {
    let items = this.state.cartArray;
    let removedItem = items.splice(index, 1);
    this.setState({ cartArray: items });
  }
  // sets tag state
  activateShopNav(targetElement) {
    let shopNavDiv = document.querySelector("#shop-nav-div");
    let navBtns = shopNavDiv.querySelectorAll("button");
    // first remove current acive stat
    navBtns.forEach((btn) => {
      if (btn.matches("#nav-btn-active")) {
        btn.removeAttribute("id");
      }
      //  set new active link
      targetElement.setAttribute("id", "nav-btn-active");
    });
    // set tag state
    let chosenTag = targetElement.innerText.toLowerCase();
    this.setState({ tag: chosenTag });
  }

  // lifecyle methods
  componentDidMount() {
    // cart data is retrieved from local storage
    let cart = localStorage.getItem("cart");
    this.setState({ cartArray: JSON.parse(cart) });
  }
  componentDidUpdate() {
    // number of items in cart is updated on every update
    this.updateCart();
  }
  componentWillUnmount() {
    // before shop route is unmounted cartArray state is saved to local storage
    this.cartLocalStorage();
  }

  render() {
    return (
      <div className={styles["container"]}>
        <Cart
          removeItem={this.removeCartItem}
          cartItems={this.state.cartArray}
        />

        <ShopNav activationHandler={this.activateShopNav} />

        <ShopGrid>
          {this.state.moviesArray
            .filter((obj) => {
              if (this.state.tag === "all") {
                return obj;
              } else {
                return !obj.tag.indexOf(this.state.tag);
              }
            })
            .map((obj, index) => {
              return (
                <Card
                  handler={this.getObj}
                  key={index}
                  title={obj.title}
                  image={obj.image}
                />
              );
            })}
        </ShopGrid>
      </div>
    );
  }
}
