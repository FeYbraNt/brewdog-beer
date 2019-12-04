import axios from 'axios'

const api_url = 'https://api.punkapi.com/v2/'
const per_page = 5

export default {

    // Returns beer list 
    fetchBeers () {
        return axios.get(api_url + 'beers')
            .then(response => response.data)
    },

    // Return beers by page
    fetchBeersByPage (page) {
        return axios.get(api_url + 'beers', { params: { page: page, per_page: per_page } })
            .then(response => response.data)
    },

    // Returns single beer
    fetchBeer (id) {
        return axios.get(api_url + 'beers/' + id)
            .then(response => response.data)
    }

}