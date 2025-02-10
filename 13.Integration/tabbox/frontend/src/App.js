import React from 'react';
import './assets/css/styles.css';
import { TabBox } from './components/TabBox';
import data from './assets/json/data';

function App(props) {
  return (
    <>
      <div id={'App'}>
        Tabox 과제
        <TabBox tabs={data} />
      </div>
    </>
  );
}

export default App;
