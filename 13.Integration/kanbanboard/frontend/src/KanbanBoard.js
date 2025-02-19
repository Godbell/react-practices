import React, { useState } from 'react';
import { CardList } from './components/CardList';
import './assets/scss/styles.scss';
import { Kanban_Board } from './assets/scss/kanbanBoard.scss';
import axios from 'axios';

function KanbanBoard() {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    axios
      .get('/kanbanboard/card')
      .then((res) => setCards([...res.data.data]))
      .catch((e) => console.error(e));
  };

  useState(() => {
    fetchCards();
  }, []);

  return (
    <>
      <h4>Kanbanboard 과제</h4>
      <div className={Kanban_Board}>
        <CardList
          key="ToDo"
          cards={cards
            .filter((card) => card.status === 'ToDo')
            .map(({ status, ...cardData }) => cardData)}
          status="ToDo"
        />
        <CardList
          key="Doing"
          cards={cards
            .filter((card) => card.status === 'Doing')
            .map(({ status, ...cardData }) => cardData)}
          status="Doing"
        />
        <CardList
          key="Done"
          cards={cards
            .filter((card) => card.status === 'Done')
            .map(({ status, ...cardData }) => cardData)}
          status="Done"
        />
      </div>
    </>
  );
}

export default KanbanBoard;
