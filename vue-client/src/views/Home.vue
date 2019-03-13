<template>
  <div class="home">
    <SearchMovie/>
    <VueLoading v-show="loading"/>
    <main class="movies card-columns" v-show="!loading">
      
      <MovieCard 
        v-for="movie in movies" 
        :key="movie.id"
        :movie="movie" 
      />
    </main>    
    
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
      movies : 'movies'
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

  

</style>
