import React, { Component } from 'react';
import CartButton from "../components/CartButton";
import CartContext from '../contexts/CartContext';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  getProducts() {
    return this.state.items;
  }

  addToCart(product) {
    const { items } = this.state;
    const elemId = items.findIndex((elem, index, arr) => elem.id === product.id);
    if (elemId === -1) {
      items.push(product);
    }
    this.setState({ items: items })
  }

  render() {
    const { children } = this.props;

    return (
      <CartContext.Provider value={
        {
          addToCart: this.addToCart,
          getProducts: this.getProducts
        }
      }
      >
        <CartButton />
        {children}
      </CartContext.Provider>
    );
  }
}

export default CartContainer;
