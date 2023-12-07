import React from 'react';

const MovieCard = ({ movie, onAddToFavorite, onRemoveFromFavorite }) => {
  const { imdbID,  Poster, Title } = movie;

  return (
    <div className="movie" key={imdbID}>
      

      <div>
        <img
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
          alt={Title}
        />
      </div>

      <div>
       
        <h3>{Title}</h3>
        <button onClick={() => onAddToFavorite(movie)}>Add</button>
        
      </div>
    </div>
  );
};

export default MovieCard;
