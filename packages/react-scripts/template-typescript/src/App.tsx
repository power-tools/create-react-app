import React from 'react';
import logo from './circular-saw.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/power-tools/hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn PowerTools
        </a>
      </header>
    </div>
  );
}

export default App;
