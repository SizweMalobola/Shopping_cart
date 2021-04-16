import React, { Component } from "react";
import Card from "./Card";
import Cart from "./Cart";
import ShopGrid from "./ShopGrid";
import ShopNav from "./ShopNav";
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
    // this.logCart = this.logCart.bind(this);
  }
  componentDidMount() {
    console.log("did mount");
    // set json data as state value
  }
  componentDidUpdate() {
    console.log("did update");
    // console.log(this.state.cartArray);
    // update cart
    this.updateCart();
  }
  updateCart() {
    const cartSpan = document.querySelector("#cart-span");
    cartSpan.innerText = this.state.cartArray.length;
    console.log(this.state.cartArray);
  }
  // logCart() {
  //   // function that will log out the contents of cart, when cart component is clicked
  //   console.log(this.state.cartArray);
  // }

  getObj(obj) {
    // I want to check if there is an object in cartArray with the same title as obj.
    //  if there is, take obj's quantity prop and add it to the existing quantity. note that quantity prop for each obj must not exceed 3.
    // else push obj to cartArray.
    if (this.state.cartArray.length > 0) {
      console.log("state isnt empty");
      this.state.cartArray.forEach((cartObj, index) => {
        console.log(cartObj.title, obj.title);
        if (cartObj.title === obj.title) {
          if (cartObj.quantity === 3) {
            console.log(`${cartObj.title} has reached max quantity`);
          } else if (cartObj.quantity + obj.quantity <= 3) {
            console.log("less than or equal to 3");
            let items = [...this.state.cartArray];
            let item = { ...items[index] };
            item.quantity += obj.quantity;
            items[index] = item;
            this.setState((state) => ({
              cartArray: items,
            }));
          } else if (cartObj.quantity + obj.quantity > 3) {
            console.log("greater than 3");
            this.setState((state) => {
              state.cartArray[index].quantity = 3;
            });
          }
        } else if (index === this.state.cartArray.length - 1) {
          console.log("there are no title matches");
          this.setState({
            cartArray: [...this.state.cartArray, obj],
          });
        }
      });
    } else {
      console.log("state was empty");
      this.setState({
        cartArray: [...this.state.cartArray, obj],
      });
      console.log(this.state.cartArray);
    }
  }

  render() {
    return (
      <div id="shop-div">
        <h1 className="header">Shop here</h1>
        <Cart cartItems={this.state.cartArray} />
        <ShopNav />
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
