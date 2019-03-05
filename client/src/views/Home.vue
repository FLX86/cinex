<template>
  <div class="home">
    <SearchMovie/>
    <section>
      <img 
        v-if="loading"
        class="lading-gif" 
        src="https://media.giphy.com/media/10kTz4r3ishQwU/giphy-downsized.gif"
        alt="loading gif"
      >
    </section>
    
    <main class="movies card-columns" v-if="!loading">
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
  import { mapState } from "vuex";

  export default {
    name: 'home',
    components: {
      SearchMovie,MovieCard
    },
    computed: mapState({
      loading : 'loading',
      movies : 'movies'
    })

  }
</script>

<style scoped>

  section{
    text-align: center;
  }

  .movies{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    column-gap: 0.025rem;
  
  }

  

</style>
