import Vue from 'vue'
import Vuex from 'vuex'

import API from '@/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:[],
    loading:false,
  },
  mutations: {
    

  },
  actions: {
     async searchMovie ( context, payload){

        context.state.loading = true
      
        const response = await fetch(API.URL_TITLE+payload.movieTitle);
        const json = await response.json();
        const movies = json.Search;

        context.state.movies = movies;
        context.state.loading = false; 
     }

  }
})
