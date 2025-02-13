import React from 'react';
import { TaskList } from './TaskList';
import {
  Card_Title,
  Card_Item,
  Card_Title_Open,
} from '../assets/scss/card.scss';

/**
 * @param {CardData} props
 * @returns {React.JSX.Element}
 */
export const Card = ({ no, title, description, tasks }) => {
  return (
    <div className={Card_Item}>
      <div className={`${Card_Title} ${Card_Title_Open}`}>{title}</div>
      <div className="Card_Details">
        {description}
        <TaskList tasks={tasks}></TaskList>
      </div>
    </div>
  );
};
