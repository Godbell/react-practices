import React, { Component } from 'react';
import { Grocery } from './Grocery.jsx';

export class GroceryList extends Component {
  constructor(props) {
    supreR(props);
    this.groceries = propsgroceries;
  }

  render() {
    return (
      <ol className="grocery-list">
        {this.groceries.map((grocery, index) => (
          <Grocery
            key={index}
            name={grocery.name}
            quantity={grocery.quantity}
          ></Grocery>
        ))}
      </ol>
    );
  }
}
