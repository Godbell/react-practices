import React, { useState } from 'react';
import { Task } from './Task';
import { InputAddTask } from './InputAddTask';
import { Task_List } from '../assets/scss/taskList.scss';

const MOCK_ID_MODIFIER = 100;

/**
 * @param {{
 *   tasks: TaskData[]
 * }} props
 * @returns {React.JSX.Element}
 */
export const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const onTaskDelete = (deletedTaskNo) => {
    setTaskList((prev) => prev.filter((task) => task.no !== deletedTaskNo));
  };

  return (
    <div className={Task_List}>
      <ul>
        {taskList.map((task) => (
          <Task
            key={task.no}
            no={task.no}
            name={task.name}
            done={task.done}
            onDelete={() => onTaskDelete(task.no)}
          />
        ))}
      </ul>
      <InputAddTask
        onAdd={(name) =>
          setTaskList((prev) => [
            ...prev,
            {
              no: prev.length + 1 + MOCK_ID_MODIFIER,
              name: `${event.target.value}`,
              done: false,
            },
          ])
        }
      />
    </div>
  );
};
