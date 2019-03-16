import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <div className="card bg-primary text-center text-white m-3 p-2">
        <img className="card-img-top" src={movie.Poster} alt="Movie Poster"/>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <button className="btn btn-link">More Info</button>  
        </div>
      </div>
    )
  }
}
