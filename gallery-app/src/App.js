import React, { useEffect, useState } from "react";
import apiKey from './config'
import logo from './logo.svg';
import './App.css';

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch();
  },[]);
  return (
    <div className="App">
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
