import React from 'react';
import { Grocery } from './Grocery.jsx';

export const GroceryList = ({ groceries }) => {
  return (
    <ol className="grocery-list">
      {groceries.map((grocery, index) => (
        <Grocery
          key={index}
          name={grocery.name}
          quantity={grocery.quantity}
        ></Grocery>
      ))}
    </ol>
  );
};
