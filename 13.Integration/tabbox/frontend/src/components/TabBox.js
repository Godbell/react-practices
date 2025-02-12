import React, { useEffect, useState } from 'react';
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
  const [tabViewIndex, setTabViewIndex] = useState(-1);

  if (tabViewIndex != -1) {
    tabs = tabs.map((tab, index) => {
      const { active, ...tabData } = tab;

      return {
        active: tabViewIndex === index,
        ...tabData,
      };
    });

    tabs[tabViewIndex].active = true;
  }

  return (
    <div className={Tab_Box}>
      <ul className={_Tabs}>
        {tabs
          .map((tab, index) => (
            <Tab
              key={tab.no}
              name={tab.name}
              contents={tab.contents}
              onClick={() => {
                setTabViewIndex(index);
              }}
              active={tab.active}
            />
          ))
          .reverse()}
      </ul>
      <div className={Tab_View}>
        {tabs[tabViewIndex]?.contents ?? '탭뷰입니다.'}
      </div>
    </div>
  );
};
