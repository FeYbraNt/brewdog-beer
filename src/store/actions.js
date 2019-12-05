import api from './../api'

export const actions = {
    CHANGE_PAGE ({ commit }, page) {
      api.fetchBeersByPage(page)
        .then(response => {
            commit('SET_ALL_BEERS', response)
        })
        .catch(error => console.error(error) )
    }
}