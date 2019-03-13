<template>
  <div class="home">
    <SearchMovie/>
    <VueLoading v-show="loading"/>
    <main class="movies card-columns" v-show="!loading && moviesFound">
      
      <MovieCard 
        v-for="movie in movies" 
        :key="movie.id"
        :movie="movie" 
      />

    </main>    
    <div class="alert alert-danger"  v-show="!loading && !moviesFound">
      <strong>Oh snap! Movie Not Found!😞 </strong>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

  import SearchMovie from "@/components/SearchMovie.vue";
  import MovieCard from "@/components/MovieCard.vue";
  import VueLoading from "@/components/VueLoading.vue";
  import { mapState } from "vuex";

  export default {
    name: 'home',
    components: {
      SearchMovie,MovieCard,VueLoading
    },
    computed: mapState({
      loading : 'loading',
      movies : 'movies',
      moviesFound: 'moviesFound',
    }),
  }
</script>

<style scoped>

  .movies{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    column-gap: 0.025rem;
  }

  .alert{
    width: 25%;
    margin: 0 auto;
    text-align: center;
  }

  

</style>
