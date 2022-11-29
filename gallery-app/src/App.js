import React, { useEffect, useState } from "react";
import axios from "axios"
import apiKey from './config'
import logo from './logo.svg';
import './App.css';

function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        setPhoto(response.data.data)

      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
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
