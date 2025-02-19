import React, { useState } from 'react';
import { Task_Item, Task_Remove } from '../assets/scss/task.scss';

/**
 * @param {TaskData & {onDelete: (taskNo: number) => void}} props
 * @returns {React.JSX.Element}
 */
export const Task = ({ no, name, done, onDelete }) => {
  const [isDone, setIsDone] = useState(done);

  return (
    <li className={Task_Item}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => setIsDone((prev) => !prev)}
      />
      {name}
      <a href="#" className={Task_Remove} onClick={onDelete}></a>
    </li>
  );
};
