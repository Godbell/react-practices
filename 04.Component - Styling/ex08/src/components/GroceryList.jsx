import React from 'react';
import { Grocery } from './Grocery.jsx';
import { styled } from 'styled-components';

const styledOl = styled.ol`
  padding-left: 50px;
`;

export const GroceryList = ({ groceries }) => {
  return (
    <ol className={styledOl}>
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
