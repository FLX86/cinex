import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/Movie.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/movie/:id',
      name:'movie',
      component: Movie
    },
    {
      path:'/about',
      name:'about',
      component: About
    }
    
  ]
})
