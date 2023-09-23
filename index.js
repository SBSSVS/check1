// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack Web App</h1>
        <p>Data from the backend:</p>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack Web App</h1>
        <p>Data from the backend:</p>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
