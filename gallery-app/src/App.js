//Required Dependencies
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import axios from "axios"
import apiKey from './config'

//App Components
import SearchForm from "./components/SearchForm";
import Navigation from "./components/Navigation";
import PhotoContainer from "./components/PhotoContainer"
import NotFound from "./components/NotFound";


//Main App Component
const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [bunny, setBunny] = useState([]);
  const [kitten, setKitten] = useState([]);
  const [llama, setLlama] = useState([]);

//Perform a search depending on the state called
  useEffect(() => {
    performSearch();
    performSearch("bunny");
    performSearch("kitten");
    performSearch("llama");
  },[]);

//using Axios, the function fetches the API
  const performSearch = (keyword = 'bunny') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
        // handle success
      if (keyword === "bunny") {
        setBunny(response.data.photos.photo);
      } else if (keyword === "kitten") {
        setKitten(response.data.photos.photo);
      } else if (keyword === "llama") {
        setLlama(response.data.photos.photo);
      } else {
        setPhotos(response.data.photos.photo)
      }
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      });
};
 


  return (
    <div className="container">
      <SearchForm onSearch={performSearch} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/bunny" />} />
        <Route path="/bunny" element={<PhotoContainer data={bunny} />} />
        <Route path="/kitten" element={<PhotoContainer data={kitten} />} />
        <Route path="/llama" element={<PhotoContainer data={llama} />} />
        <Route path="/search/:keyword" element={<PhotoContainer data={photos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
