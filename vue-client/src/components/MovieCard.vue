<template>
    <div class="card bg-primary text-white m-3 p-2">
        <img class="card-img-top" :src="movie.Poster" alt="Movie Poster">
        <div class="card-body">
            <h5 class="card-title">{{movie.Title}}</h5>
            <p></p>
            
                <router-link :to="'/movie/' + movie.imdbID">More Info</router-link>

        </div>
    </div>
</template>

<script>
    export default {
      name:'movie-card',
      props:{
          movie: Object,
      }
      
    }
</script>

<style scoped>
    .card{
        max-width: 320px;
        text-align: center;
    }
    img {
        width: 100%;
        height: auto;
    }

</style>

