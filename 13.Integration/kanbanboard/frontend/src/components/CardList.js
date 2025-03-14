import React from 'react';
import { Card } from './Card';
import { Card_List } from '../assets/scss/cardList.scss';

/**
 * @param {{cards: CardData[]}} props
 * @returns {React.JSX.Element}
 */
export const CardList = ({ cards, status }) => {
  return (
    <div className={Card_List}>
      <h1>{status}</h1>
      {cards.map((card) => (
        <Card
          key={card.no}
          no={card.no}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};
