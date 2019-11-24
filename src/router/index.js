import Vue from 'vue'
import VueRouter from 'vue-router'
import BeerList from '../views/BeerList.vue'
import BeerDetails from '../views/BeerDetails.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/beers',
    name: 'beerlist',
    component: BeerList
  },
  {
    path: '/beers/:id',
    name: 'beerdetails',
    component: BeerDetails,
    props: true
  },
  {
    path: '*',
    redirect: '/beers'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
