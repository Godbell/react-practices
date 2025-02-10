import React from 'react';
import { GroceryList } from './components/GroceryList.jsx';

function App(props) {
  const groceries = [
    { name: 'Bread', quantity: 10 },
    { name: 'Milk', quantity: 20 },
    { name: 'Egg', quantity: 30 },
  ];

  return (
    <div id="App">
      <h1>Grocery List</h1>
      <p>GroceryList 컴포넌트 작성하기</p>
      <GroceryList groceries={groceries}></GroceryList>
    </div>
  );
}

export default App;
