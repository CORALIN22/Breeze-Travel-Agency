import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';  // Correct import path

function App() {
  return (
    <div className="App">
      <Header />  {/* Include the Header component */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;