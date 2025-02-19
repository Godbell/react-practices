import React, { useEffect, useState } from 'react';
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
export const Card = ({ no, title, description }) => {
  const [isOpen, setIsOpen] = useState(true);

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
          <TaskList initialCardNo={no} />
        </div>
      ) : null}
    </div>
  );
};
