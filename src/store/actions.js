import api from './../api'

export const actions = {
    FETCH_ALL_BEERS ({ commit }) {
        api.fetchBeers()
          .then(response => {
            commit('SET_ALL_BEERS', response)
          })
          .catch((error) => console.error(error))
    }
}