<template>
    <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="'/'">CINEX</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                         <router-link class="nav-link" :to="'/'">Home</router-link>
                    </li>
                    <li class="nav-item">
                         <router-link class="nav-link" :to="'/about'">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>


</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
