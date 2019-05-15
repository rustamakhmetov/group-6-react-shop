import React, { Component } from 'react';

import CartContext from '../contexts/CartContext';

class AddToCartButton extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {
          ({addToCart}) => {
            return (
              <button
                onClick={() => addToCart(this.props.product)}
              >
                Add to cart
              </button>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default AddToCartButton;
