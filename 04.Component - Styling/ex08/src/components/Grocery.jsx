import React from 'react';
import { Grocery_Item } from '../assets/scss/GroceryItem.scss';

export const Grocery = ({ name, quantity }) => {
  return (
    <li className={Grocery_Item}>
      <strong>{name}</strong>
      <span>{quantity}</span>
    </li>
  );
};
