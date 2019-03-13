<template>
    <form 
        id="search-movie"
        class="bg-primary text-white"
        @submit.prevent="onSubmit">
        <div class="form-group">
            <h3>Search a movie</h3>
            <input 
                type="text" 
                class="form-control" 
                id="movie" 
                placeholder="Enter a movie title"
                autocomplete="off"
                v-model="movieTitle"
            >
            <button 
                 type="submit" 
                 class="btn btn-success mt-2"
            >Search</button>
        </div>
    </form>

</template>

<script>

    export default {
        name:"search-movie",
        components:{

        },
        data(){
            return {
                movieTitle:''
            }
        },
        methods:{
            onSubmit(event){
                event.target.reset();
                this.searchMovie();
            },
            searchMovie(){
                this.$store.dispatch('searchMovie',{
                    movieTitle: this.movieTitle,
                });
            }
        }
}
</script>

<style>
    #search-movie{
        width: 55%;
        margin: 30px auto;
        border-radius: 8px;
        padding: 20px;
    }


</style>
