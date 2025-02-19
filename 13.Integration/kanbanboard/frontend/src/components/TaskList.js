import React, { useEffect, useState } from 'react';
import { Task } from './Task';
import { InputAddTask } from './InputAddTask';
import { Task_List } from '../assets/scss/taskList.scss';
import axios from 'axios';

const MOCK_ID_MODIFIER = 100;

/**
 * @param {{
 *   cardId: number
 * }} props
 * @returns {React.JSX.Element}
 */
export const TaskList = ({ initialCardNo }) => {
  const [cardNo, setCardNo] = useState(initialCardNo);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    axios
      .get('/kanbanboard/task', {
        params: {
          cardNo: cardNo,
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data?.data ?? []));
        setTasks(res.data?.data ?? []);
      })
      .catch((e) => console.error(e));
  };

  const addTask = async (title) => {
    await axios.post(
      '/kanbanboard/task',
      { no: null, name: title, done: 'N', cardNo },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    await fetchTasks();
  };

  const deleteTask = async (taskNo) => {
    await axios.delete(`/kanbanboard/task/${taskNo}`);
    await fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, [cardNo]);

  return (
    <div className={Task_List}>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.no}
            no={task.no}
            name={task.name}
            done={task.done === 'Y'}
            onDelete={() => {
              deleteTask(task.no);
            }}
          />
        ))}
      </ul>
      <InputAddTask onAdd={(title) => addTask(title)} />
    </div>
  );
};
