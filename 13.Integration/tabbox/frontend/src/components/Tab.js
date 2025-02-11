import React from 'react';
import { Tab_Item } from '../assets/scss/TabItem.scss';

export const Tab = ({ name, active }) => {
  return <li className={`${Tab_Item}${active ? ' active' : ''}`}>{name}</li>;
};
