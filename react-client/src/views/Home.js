import React, {Component} from 'react';
import SearchMovie  from '../components/SearchMovie';
import ReactLoading  from '../components/ReactLoading';
import MovieCard from '../components/MovieCard'


import API  from  '../API';

class Home extends Component {

  state ={
    movies:[],
    loading:false,
    movieSearched:'',
    response: Boolean,
  }

  searchMovie = async (movie) => {
    this.setState({loading:true});

    const url = `${API.URL_TITLE}${movie}`;
    const res = await fetch (url);
    const data = await res.json();

    this.setState({loading:false});

    if (!data.response){
      this.setState({movies:[]});
    }

    this.setState({...data}); 
  }

  render(){
    const {loading, response} = this.state;

    return (
      <React.Fragment>
        <SearchMovie searchMovie={this.searchMovie}/>

        {
          loading ? <ReactLoading/> : 
            <main style={movieContainer} className="card-columns">
              {
                this.state.movies.map((movie,key) => {
                  return ( <MovieCard key={key} movie={movie} />)
                })
              }
          </main>
        }

        {
          !response ?
            <section style={alertContainer} className="alert alert-danger">
              <strong>Oh snap! Movie Not Found! <span role="img" aria-label="sad">😞</span></strong>
            </section>
          :
            ''
        }

      </React.Fragment>
    )
  }
}
const movieContainer={width:'80%',margin:'0 auto', }
const alertContainer = {width: '20%',margin: '0 auto'}
export default Home
