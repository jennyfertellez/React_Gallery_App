//Required Dependencies
import React, { useEffect, useState } from "react";
import axios from "axios"
import apiKey from './config'

//Components
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Navigation";
import PhotoContainer from "./components/PhotoContainer"
import NotFound from "./components/NotFound";


//Main App Component
function App = (props) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        // handle success
        setPhotos(response.data.data)

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
