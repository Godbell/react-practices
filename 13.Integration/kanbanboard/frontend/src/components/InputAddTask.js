import React from 'react';
import { useState } from 'react';
import { Input_Add_Task } from '../assets/scss/inputAddTask.scss';

export const InputAddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  return (
    <input
      className={Input_Add_Task}
      type="text"
      placeholder="태스크 추가"
      value={text}
      onKeyDown={(event) => {
        if (event.key !== 'Enter') return;

        onAdd(event.target.value);
        setText('');
      }}
      onChange={(event) => setText(event.target.value)}
    />
  );
};
