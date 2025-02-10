import React from 'react';

export const Tab = ({ name, active }) => {
  return <li className={active ? 'active' : null}>{name}</li>;
};
