import Vue from 'vue'
import Vuex from 'vuex'

import API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:[],
    loading:false,
    moviesFound:true
  },
  mutations: {
    

  },
  actions: {
     async searchMovie ( context, payload){

        context.state.loading = true
      
        const url = API.URL_TITLE + payload.movieTitle;
        const res = await fetch(url);
        const {response, movies} = await res.json();
      
        context.state.moviesFound = response
        context.state.movies = movies;
        context.state.loading = false; 
     }

  }
})
