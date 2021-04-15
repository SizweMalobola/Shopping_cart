import React, { Component } from "react";
import Card from "./Card";
import Cart from "./Cart";
import ShopGrid from "./ShopGrid";
import ShopNav from "./ShopNav";
export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartObj: [],
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
  }
  componentDidMount() {
    console.log("did mount");
    console.log(this.state.cartObj);
    // set json data as state value
  }
  componentDidUpdate() {}
  getObj(obj) {
    // this.setState({ cartObj: obj });
    // console.log(this.state.cartObj);
    console.log(obj);
  }

  render() {
    return (
      <div id="shop-div">
        <h1 className="header">Shop here</h1>
        <Cart />
        <ShopNav />
        <ShopGrid>
          {this.state.moviesArray.map((obj, index) => {
            return (
              <Card
                cState={this.state.cartObj}
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
