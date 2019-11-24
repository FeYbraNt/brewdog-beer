import api from './../api'

export const getters = {
    getBeerById: () => (id) => {
        return api.fetchBeer(id)
          .then(response => response[0])
          .catch(error => console.error(error))
    }
}