import Vue from 'vue'
import Vuex from 'vuex'
import api from './../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    SET_ALL_BEERS (state, beers) {
      state.beers = beers
    }
  },
  actions: {
    FETCH_ALL_BEERS ({ commit }) {
      api.fetchBeers()
        .then(response => {
          commit('SET_ALL_BEERS', response)
        })
        .catch((error) => console.error(error))
    }
  },
  getters: {
    getBeerById: () => (id) => {
      return api.fetchBeer(id)
        .then(response => response[0])
        .catch(error => console.error(error))
    }
  }
})
