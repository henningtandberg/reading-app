import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Lese App</div>
        <div className="Timers">
          <Stopwatch/>
        </div>
      </header>
    </div>
  );
}

export default App;
