import React, { Component } from 'react';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const { title, price, imageUrl } = this.props.product;

    return (
      <div className='productCard'>
        <Image src={imageUrl} alt={title} width={100} height={100} />
        <TextBox>
          {title}
        </TextBox>
        <Price value={price} />
      </div>
    );
  }
}

export default ProductCard;
