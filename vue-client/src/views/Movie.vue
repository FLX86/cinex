<template>
    <div id="movie">

        <div class="loading-container text-center" v-show="loading">
            <img 
                v-if="true"
                class="lading-gif" 
                src="https://media.giphy.com/media/10kTz4r3ishQwU/giphy-downsized.gif"
                alt="loading gif"
            >
        </div>
        <div class="movie-container bg-light" v-show="!loading">
            
            <main>
                <section class="poster">
                    <img :src="movie.Poster" alt=""> 
                </section>
                <section class="details m-3">
                    <h4 class="mb-3">{{movie.Title}}</h4>
                    <ul class="list-group">
                            <li class="list-group-item"><strong>Genre:</strong> {{movie.Genre}}</li>
                            <li class="list-group-item"><strong>Released:</strong> {{movie.Released}}</li>
                            <li class="list-group-item"><strong>Rated:</strong> {{movie.Rated}}</li>
                            <li class="list-group-item"><strong>IMDB Rating:</strong> {{movie.imdbRating}}</li>
                            <li class="list-group-item"><strong>Director:</strong> {{movie.Director}}</li>
                            <li class="list-group-item"><strong>Writer:</strong> {{movie.Writer}}</li>
                            <li class="list-group-item"><strong>Actors:</strong> {{movie.Actors}}</li>
                        </ul>
                </section>
            </main>    
            <footer>
                <div>
                    <h4 class="">Plot</h4>
                    {{movie.Plot}}
                    <hr>
                    <a :href="'http://imdb.com/title/'+ movie.imdbID" target="_blank" class="btn btn-primary">View IMDB</a>
                    <router-link class="btn btn-default" :to="'/'">Go Back To Search</router-link>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>

    import API from '@/API'

    export default {
        data(){
            return{
                movie:Object,
                loading:null
            }
        },
       async mounted(){
           this.loading = true;
           const movieID = this.$route.params.id;
           const response = await fetch (API.URL_ID+movieID);
           this.movie = await response.json();
           this.loading = false;           
       }
    }
</script>

<style scoped>
   

    .movie-container , .loading-container {
        width: 70%;
        margin: 80px auto;
        border-radius: 8px;
        padding: 20px;
    }

    main{
        display: flex;
        justify-content: center;
    }
    .poster img{
        border-radius: 8px;
    }



</style>
