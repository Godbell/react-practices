import React from 'react';
import data from './assets/json/data';
import { CardList } from './components/CardList';

function KanbanBoard() {
  return (
    <>
      <h4>Kanbanboard 과제</h4>
      <CardList
        key="ToDo"
        cards={data
          .filter((card) => card.status === 'ToDo')
          .map(({ status, ...cardData }) => cardData)}
        status="ToDo"
      />
      <CardList
        key="Doing"
        cards={data
          .filter((card) => card.status === 'Doing')
          .map(({ status, ...cardData }) => cardData)}
        status="Doing"
      />
      <CardList
        key="Done"
        cards={data
          .filter((card) => card.status === 'Done')
          .map(({ status, ...cardData }) => cardData)}
        status="Done"
      />
    </>
  );
}

export default KanbanBoard;
