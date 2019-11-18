import Vue from 'vue'
import VueRouter from 'vue-router'
import BeerList from '../views/BeerList.vue'
import BeerDetails from '../views/BeerDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beerlist',
    component: BeerList
  },
  {
    path: '/:name',
    name: 'BeerDetails',
    component: BeerDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
