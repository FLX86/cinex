import React, { Component } from 'react'

export class SearchMovie extends Component {

  state ={
    movie:''
  }

  onChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovie(this.state.movie);
    this.setState({movie:''});
  }
  render() {
    return (
      <div className="search-movie-container bg-light">
        <h3>Search a Movie</h3>
        <form className="form-group" onSubmit={this.onSubmit}>
          <input  
            className="form-control" type="text" name="movie" placeholder="Enter a movie title..."
            autoComplete="off"
            onChange={this.onChange} value={this.state.movie}
          />
          <button className="btn btn-info mt-2" type="submit" >Search</button>
        </form>
      </div>
    )
  }
}

export default SearchMovie
