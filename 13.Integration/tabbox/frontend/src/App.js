import React from 'react';
import { TabBox } from './components/TabBox';
import data from './assets/json/data';
import './assets/scss/App.scss';

function App(props) {
  return (
    <>
      <div id="App">
        TabBox 과제
        <TabBox tabs={data} />
      </div>
    </>
  );
}

export default App;
