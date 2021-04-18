import React, { Component } from "react";
import Card from "./Card";
import Cart from "./Cart";
import ShopGrid from "./ShopGrid";
import ShopNav from "./ShopNav";
import "./shopStyles.css";
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartArray: [],
      moviesArray: [
        {
          tag: ["gore"],
          price: 145,
          title: "Army Of Darkness",
          image: "/assets/army-of-darkness.jpeg",
        },
        {
          tag: [],
          price: 145,
          title: "Cabinet Of Dr Caligari",
          image: "/assets/cabinet-of-dr-caligari.jpeg",
        },
        {
          tag: [],
          price: 145,
          title: "Carrie",
          image: "/assets/carrie.jpeg",
        },
        {
          tag: ["slasher"],
          price: 145,
          title: "Childs Play",
          image: "/assets/childs-play.jpeg",
        },
        {
          tag: ["gore"],
          price: 145,
          title: "Evil Dead 2",
          image: "/assets/evil-dead-2.jpeg",
        },
        {
          tag: ["gore"],
          price: 145,
          title: "From Beyond",
          image: "/assets/from-beyond.png",
        },
        {
          tag: ["slasher"],
          price: 145,
          title: "Helloween",
          image: "/assets/helloween.jpeg",
        },
        {
          tag: ["gore"],
          price: 145,
          title: "Hellraiser",
          image: "/assets/hellraiser.jpeg",
        },
        {
          tag: [],
          price: 145,
          title: "I Spit On Your Grave",
          image: "/assets/i-spit-on-your-grave.jpeg",
        },
        {
          tag: [],
          price: 145,
          title: "The Blair Witch Project",
          image: "/assets/the-blair-witch-project.jpeg",
        },
        {
          tag: ["gore"],
          price: 145,
          title: "The Evil Dead",
          image: "/assets/the-evil-dead.jpeg",
        },
        {
          tag: ["gore"],
          price: 145,
          title: "The Hills Have Eyes",
          image: "/assets/the-hills-have-eyes.png",
        },
        {
          tag: [],
          price: 145,
          title: "The Texas Chainsaw Massacre",
          image: "/assets/the-texas-chainsaw-massacre.jpeg",
        },
      ],
    };
    this.getObj = this.getObj.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.activateShopNav = this.activateShopNav.bind(this);
  }
  // instance methods
  getObj(obj) {
    if (this.state.cartArray.length > 0) {
      this.state.cartArray.forEach((cartObj, index) => {
        if (cartObj.title === obj.title) {
          if (cartObj.quantity === 3) {
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
  updateCart() {
    const cartSpan = document.querySelector("#cart-span");
    cartSpan.innerText = this.state.cartArray.length;
    console.log(this.state.cartArray);
  }
  removeCartItem(index) {
    let items = this.state.cartArray;
    let removedItem = items.splice(index, 1);
    this.setState({ cartArray: items });
    console.log(`item ${removedItem.title} was removed`);
  }
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
    // return element innerText [gore,all,slasher...]
    return targetElement.innerText.toLowerCase();
  }
  // lifecyle methods
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.updateCart();
  }

  render() {
    return (
      <div id="shop-div">
        <h1 className="header">Shop here</h1>
        <Cart
          removeItem={this.removeCartItem}
          cartItems={this.state.cartArray}
        />
        <ShopNav activationHandler={this.activateShopNav} />
        <ShopGrid>
          {this.state.moviesArray.map((obj, index) => {
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
