import React, { useState } from 'react';

/**
 * @param {TaskData & {onDelete: () => void}} props
 * @returns {React.JSX.Element}
 */
export const Task = ({ no, name, done, onDelete }) => {
  const [isDone, setIsDone] = useState(done);

  return (
    <li className="_Task">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => setIsDone((prev) => !prev)}
      />
      {name}
      <a href="#" className="Task_Remove" onClick={() => onDelete(no)}></a>
    </li>
  );
};
