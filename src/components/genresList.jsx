import React from 'react';
import { genres } from '../services/fakeGenreService';

const GenresList = ({changeGenre}) => {

  return (
    <ul className="list-group">
      <li className="list-group-item" 
      onClick={() => changeGenre('All')}>All Genres</li>
      {genres.map((genre, index) => (
        <li key={index} 
        className="list-group-item"
        onClick={() => changeGenre(genre.name)}
        >{genre.name}</li>
      ))}
    </ul>
  );
}
 
export default GenresList;