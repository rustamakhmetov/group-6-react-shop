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
    this.getCountProducts = this.getCountProducts.bind(this);
  }

  getProducts() {
    return this.state.items;
  }

  getCountProducts() {
    return this.state.items.reduce(
      (previousValue, currentItem) => previousValue + currentItem.amount,
      0
    )
  }

  addToCart(product, amount) {
    const items = [...this.state.items];
    const elemId = items.findIndex((elem, index, arr) => elem.product.id === product.id);
    if (elemId === -1) {
      items.push({product, amount});
    }
    else {
      items[elemId].amount += amount;
    }
    this.setState({ items: items });
  }

  render() {
    const { children } = this.props;

    return (
      <CartContext.Provider value={
        {
          addToCart: this.addToCart,
          getProducts: this.getProducts,
          getCountProducts: this.getCountProducts
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
