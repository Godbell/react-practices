import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

import data from './assets/json/data.js';

function App() {
  const [emails, setEmails] = useState(data);

  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar
        onSearch={(q) => {
          const lowercasedQuery = q?.toLowerCase() ?? '';

          setEmails(
            data.filter((e) => {
              const fullName = `${e.firstName.toLowerCase()} ${e.lastName.toLowerCase()}`;
              return (
                fullName.includes(lowercasedQuery) ||
                e.email.toLowerCase().includes(lowercasedQuery)
              );
            }),
          );
        }}
      />
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;
