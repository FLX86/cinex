// omdb API
const API = {
  URL_SEARCH: 'https://flx-omdb-api.now.sh/?type=movie&s=',
  URL_ID: 'https://flx-omdb-api.now.sh/?i='
}

const form = document.querySelector('form');
const formInput = document.querySelector('input');
const loadingElement = document.querySelector('.loading');
const main = document.querySelector('main');

loadingElement.style.display = 'none';

form.addEventListener('submit' , onSubmit);


async function onSubmit(event){
  event.preventDefault();
  loadingElement.style.display = '';

  const data = await searchMovies (formInput.value); // searching movies from the api
  loadingElement.style.display = 'none'; // hide loading element

  if (data.response){
    main.innerText = data.movies;
  }else{
    main.innerText = data.error;
  }
}

async function searchMovies(title){
    const url =  `${API.URL_SEARCH}${title}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}



