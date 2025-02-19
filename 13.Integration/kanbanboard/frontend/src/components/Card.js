import React, { useEffect, useState } from 'react';
import { TaskList } from './TaskList';
import {
  Card_Title,
  Card_Item,
  Card_Title_Open,
  Card_Details,
} from '../assets/scss/card.scss';
import axios from 'axios';

/**
 * @param {CardData} props
 * @returns {React.JSX.Element}
 */
export const Card = ({ no, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get('/kanbanboard/task', {
        params: {
          cardNo: no,
        },
      })
      .then((res) => setTasks(res.data?.data))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchTasks();
  }, [isOpen]);

  return (
    <div className={Card_Item}>
      <div
        className={`${Card_Title} ${isOpen ? Card_Title_Open : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </div>
      {isOpen ? (
        <div>
          {description}
          <TaskList tasks={tasks}></TaskList>
        </div>
      ) : null}
    </div>
  );
};
