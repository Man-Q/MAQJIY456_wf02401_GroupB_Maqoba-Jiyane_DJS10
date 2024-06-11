import React, { useState } from 'react';
import './App.css';
import FetchData from './components/FetchData';

const App = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="App">
      {!hasError && (
        <header>
          <h1>Posts</h1>
        </header>
      )}
      <FetchData setHasError={setHasError} />
    </div>
  );
};

export default App;
