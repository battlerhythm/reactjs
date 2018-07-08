import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    return(
      <div>
        <MoviePoster />
        <h1>Hello this is a movie</h1>
      </div>  
    )
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src="https://cdn.namuwikiusercontent.com/s/bb8ac0b78d3cfb5a369e1089bd02ff248cc93a6ba174a3f2fabf715fed7e9501b21b09919ae47dd8abd661b3daafdb70aea9587845b611e276e7a56df44905c4aaf9246a219446522aa6ce16c01cdcea?e=1531598756&k=lyb_2uc1Ol56su18WUPKmw" />
    )
  }
}

export default Movie;
