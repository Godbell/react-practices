import React from 'react';
import { GroceryList } from './components/GroceryList.jsx';
import { title } from './assets/scss/App.scss';

function App(props) {
  const groceries = [
    { name: 'Bread', quantity: 10 },
    { name: 'Milk', quantity: 20 },
    { name: 'Egg', quantity: 30 },
  ];

  return (
    <div id="App">
      <h1 className={title}>Grocery List</h1>
      <p>GroceryList 컴포넌트 작성하기</p>
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
