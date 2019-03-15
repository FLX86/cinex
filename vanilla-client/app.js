// omdb API
const API = {
  URL_SEARCH: 'https://flx-omdb-api.now.sh/?type=movie&s=',
  URL_ID: 'https://flx-omdb-api.now.sh/?i='
}

const form = document.querySelector('form');
const formInputElement = document.querySelector('input');
const app = document.querySelector('#app');

// State
let state = { 
  movies: [],
  movie: Object,
  loading: false,
  movieSearched: '',
  formInput: '',
  response: Boolean,
}

function setState(newState){
  state = {...state, ...newState};
  render();
}

// onLoad actions
render();

// Event Listeners
form.addEventListener('submit' , onSubmit);
formInputElement.addEventListener('keyup', onFormInputElementChange);

// Functions
function render (){
  app.innerHTML =
   `
   <section class="loading-container">
      ${ state.loading ? getJsLoadingTemplate() : '' }
   </section>
    <section class="movies-container card-columns">
      ${
        state.movies.reduce((html, movie) => {
          return html + getMovieCardTemplate(movie);
        },'')
      }
    </section>
    <section class = alert-container >
      ${
        !state.response ?
          `<section class="alert alert-danger">
            <strong>Oh snap! Movie Not Found!😞 </strong>
          </section>`
        :
          ''
      }
    </section >
  `
}

async function onSubmit(event){
  event.preventDefault();

  setLoading(true);
  const data = await searchMoviesByTitle(state.formInput); // searching movies from the api
  setLoading(false);

  setState(handleData(data));
}

async function searchMoviesByTitle(title){
  const url =  `${API.URL_SEARCH}${title}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function getMovieCardTemplate(movie){
  return `
    <div class="card bg-dark text-center text-white m-3 p-2">
        <img class="card-img-top" src="${movie.Poster}" alt="Movie Poster">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
          <button class="btn btn-link">More Info</button>  
        </div>
    </div>
  `;
}
function getJsLoadingTemplate(){
  return `
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="js logo">
    <img src="https://craigshelly.com/skin/frontend/puro/default/images/AjaxLoader.gif" alt="loading gif">
  `;
}


function onFormInputElementChange (){
  state.formInput = formInputElement.value;  
}

function handleData(data){
  if (data.response){
    return {
      movies: data.movies,
      movieSearched: state.formInput,
      response: data.response,
    } 
    
  }else{
    return {
      movies: [],
      movieSearched: state.formInput,
      response: data.response,
    }
  }
}

function setLoading(bool){
  setState({loading:bool});
}