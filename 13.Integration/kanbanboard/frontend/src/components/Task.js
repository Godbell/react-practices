import React from 'react';

/**
 * @param {TaskData} props
 * @returns {React.JSX.Element}
 */
export const Task = ({ no, name, done }) => {
  return (
    <li className="_Task">
      <input type="checkbox" checked={done} />
      {name}
      <a href="#" className="Task_Remove"></a>
    </li>
  );
};
