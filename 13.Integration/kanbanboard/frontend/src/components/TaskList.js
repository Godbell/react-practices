import React from 'react';
import { Task } from './Task';

/**
 * @param {{
 *   tasks: TaskData[]
 * }} props
 * @returns {React.JSX.Element}
 */
export const TaskList = ({ tasks }) => {
  return (
    <div className="Task_List">
      <ul>
        {tasks.map((task) => (
          <Task key={task.no} no={task.no} name={task.name} done={task.done} />
        ))}
      </ul>
      <input className="Input_Add_Task" type="text" placeholder="태스크 추가" />
    </div>
  );
};
