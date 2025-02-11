import React from 'react';
import { Tab } from './Tab';
import { Tab_Box } from '../assets/scss/TabBox.scss';
import { Tab_View } from '../assets/scss/TabView.scss';
import { _Tabs } from '../assets/scss/Tabs.scss';

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
    <div className={Tab_Box}>
      <ul className={_Tabs}>
        {tabs
          .map((tab) => (
            <Tab key={tab.no} name={tab.name} contents={tab.contents} />
          ))
          .reverse()}
      </ul>
      <div className={Tab_View}>탭뷰입니다.</div>
    </div>
  );
};
