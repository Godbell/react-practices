import React, { useState } from 'react';
import { Task } from './Task';

/**
 * @param {{
 *   tasks: TaskData[]
 * }} props
 * @returns {React.JSX.Element}
 */
export const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  return (
    <div className="Task_List">
      <ul>
        {taskList.map((task) => (
          <Task
            key={task.no}
            no={task.no}
            name={task.name}
            done={task.done}
            onDelete={(deletedTaskNo) => {
              setTaskList((prev) =>
                prev.filter((task) => task.no !== deletedTaskNo),
              );
            }}
          />
        ))}
      </ul>
      <input className="Input_Add_Task" type="text" placeholder="태스크 추가" />
    </div>
  );
};
