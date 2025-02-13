import React, { useState } from 'react';

/**
 * @param {TaskData} props
 * @returns {React.JSX.Element}
 */
export const Task = ({ no, name, done }) => {
  const [isDone, setIsDone] = useState(done);

  return (
    <li className="_Task">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => setIsDone((prev) => !prev)}
      />
      {name}
      <a href="#" className="Task_Remove"></a>
    </li>
  );
};
