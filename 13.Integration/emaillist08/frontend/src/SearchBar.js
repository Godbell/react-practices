import React from 'react';
import { Search_Bar } from './assets/scss/SearchBar.scss';

function SearchBar({ onSearch }) {
  return (
    <div className={Search_Bar}>
      <input
        type="text"
        placeholder="찾기"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
