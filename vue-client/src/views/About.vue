<template>
    <div id="about">
        <div class="jumbotron bg-primary text-white">
            <h1 class="display-3">Vue Movie Finder!</h1>
            <p class="lead">This is a simple app for searching movies with 
                <a href="http://www.omdbapi.com/" target="_blank" class="text-warning"> omdb API </a> 
                and
                <a href="https://vuejs.org" target="_blank" class="text-success"> Vue.js </a> 
            </p>
            <p class="lead">
                <a class="btn btn-secondary " href="https://github.com/felixlopezq/cinex" role="button" target="_blank">GitHub</a>
                <router-link class="btn btn-link" :to="'/'">Go Back To Search</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .jumbotron{
        width: 70%;
        margin: 80px auto;
        border-radius: 8px;
        padding: 20px;


    }

</style>

