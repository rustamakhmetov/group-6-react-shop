import React, { Component } from 'react';

import CartContext from '../contexts/CartContext';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 1
    };

    this.changeAmount = this.changeAmount.bind(this);
  }

  changeAmount(e) {
    const amount = parseInt(e.target.value);
    if (amount>0) {
      this.setState({amount: amount});
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({addToCart}) => {

            return (
              <div>
                <input
                  id="cart-amount"
                  value={this.state.amount}
                  onChange={this.changeAmount}
                />
                <button
                  onClick={() => addToCart(this.props.product, this.state.amount)}
                >
                  Add to cart
                </button>
              </div>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

// AddToCartButton.defaultProps = {
//   amount: 1
// };

export default AddToCartButton;
