import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { name, imageUrl, quantity, price } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'></img>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem
