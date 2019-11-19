import Vue from 'vue'
import Vuex from 'vuex'
import api from './../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: []
  },
  mutations: {
    SET_BEERS (state, beers) {
      state.beers = beers
    }
  },
  actions: {
    FETCH_BEERS ({ commit }) {
      api.fetchBeers()
        .then(response => {
          commit('SET_BEERS', response)
        })
    }
  },
  modules: {
  }
})
