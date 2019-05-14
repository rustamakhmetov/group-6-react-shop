import React, {Component, Fragment} from 'react';

import CartContext from '../contexts/CartContext';

class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <Fragment>
        <CartContext.Consumer>
          {
            productsInCart => console.log(productsInCart)
          }
        </CartContext.Consumer>

        <button>{this.state.count}</button>
      </Fragment>
    )
  }
}

export default CartButton;
