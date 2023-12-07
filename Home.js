import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import MovieCard from "./MovieCard";


import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6477a6cc";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavoriteList = (title) => {
    setFavoriteMovies([...favoriteMovies, title]);
  };

  const removeFromFavoriteList = (movies) => {
    const updatedFavoriteMovies = favoriteMovies.filter(
      (favoriteMovie) => favoriteMovie.imdbID !== movies.imdbID
    );
    setFavoriteMovies(updatedFavoriteMovies);
  };


  
  return (
    
    <div className="app">
<div className="over">
<div className="search">
<h1>MovieLand</h1>
  <input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for movies"
  />
  <button  onClick={() => searchMovies(searchTerm)}>Search</button>
  
</div>

{movies?.length > 0 ? (
  <div className="container">
    {movies.map((movie) => (
      <MovieCard movie={movie} 
      key={movies.imdbID}
      onAddToFavorite={addToFavoriteList}
      onRemoveFromFavorite={removeFromFavoriteList}
      />
    ))}
  </div>
) : (
  <div className="empty">
    <h2> </h2>
  </div>
)}
</div>
  <div className="right">
  <h2>Favorite Movies</h2>
{favoriteMovies.length === 0 ? (
  <p>No favorite movies selected.</p>
) : (
  <ul>
    {favoriteMovies.map((movie) => (
      <li key={movie.imdbID}>
      {movie.Title}{" "} <button onClick={() => removeFromFavoriteList(movie)}>delete</button></li>
      
    ))}
   <button>basket</button>
  </ul>
)}
    </div>
</div>
);
};

export default Home;