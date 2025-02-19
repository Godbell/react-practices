import React, { useEffect, useState } from 'react';
import { Task_Item, Task_Remove } from '../assets/scss/task.scss';
import axios from 'axios';

/**
 * @param {TaskData & {onDelete: (taskNo: number) => void}} props
 * @returns {React.JSX.Element}
 */
export const Task = ({ no, name, done, onDelete }) => {
  const [isDone, setIsDone] = useState(done);

  const updateTask = async (taskNo, done) => {
    await axios.put(`/kanbanboard/task/${taskNo}`, null, {
      params: { done: done ? 'Y' : 'N' },
    });
  };

  useEffect(() => {
    updateTask(no, isDone);
  }, [isDone]);

  return (
    <li className={Task_Item}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          setIsDone(async (prev) => !prev);
        }}
      />
      {name}
      <a href="#" className={Task_Remove} onClick={onDelete}></a>
    </li>
  );
};
