import api from './../api'

export const actions = {
    FETCH_ALL_BEERS ({ commit }) {
        api.fetchBeers()
          .then(response => {
            commit('SET_ALL_BEERS', response)
          })
          .catch((error) => console.error(error))
    },
    CHANGE_PAGE ({ commit }, page) {
      api.fetchBeersByPage(page)
        .then(response => {
            commit('SET_BEERS_PAGE', response, page)
        })
        .catch(error => console.error(error) )
    }
}