import React from 'react';
import { Tab } from './Tab';

/**
 * @param {{
 *  tabs: [{
 *    no: number;
 *    name: string;
 *    contents: string;
 *    active: boolean;
 *  }]
 * }} param
 * @returns {React.JSX.Element}
 */
export const TabBox = ({ tabs }) => {
  return (
    <div className="tab-box">
      <ul>
        {tabs
          .map((tab, index) => (
            <Tab key={index} name={tab.name} contents={tab.contents} />
          ))
          .reverse()}
      </ul>
      <div>탭뷰입니다.</div>
    </div>
  );
};
