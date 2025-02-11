import React from 'react';

export const Grocery = ({ name, quantity }) => {
  return (
    <li>
      <strong>{name}</strong>
      <span>{quantity}</span>
    </li>
  );
};
