import React, { useState } from 'react';
import { Tab_Item } from '../assets/scss/TabItem.scss';

export const Tab = ({ name, active, onClick }) => {
  return (
    <li className={`${Tab_Item}${active ? ' active' : ''}`} onClick={onClick}>
      {name}
    </li>
  );
};
