import React from 'react';
import { TaskList } from './TaskList';

/**
 * @param {CardData} props
 * @returns {React.JSX.Element}
 */
export const Card = ({ no, title, description, tasks }) => {
  return (
    <div className="_Card">
      <div className="Card_Title Card_Title_Open">{title}</div>
      <div className="Card_Details">
        {description}
        <TaskList tasks={tasks}></TaskList>
      </div>
    </div>
  );
};
