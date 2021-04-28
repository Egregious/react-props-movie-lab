import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    { return movieData.map(movieObj => <MovieCard 
        key={movieObj.title} 
        title={movieObj.title} 
        genres={movieObj.genres} 
        IMDBRating={movieObj.IMDBRating} 
        poster={movieObj.poster} 
    />) }
  }

  render() {
    console.log(movieData)
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
