import axios from 'axios'

const api_url = 'https://api.punkapi.com/v2/'

export default {

    // Returns beer list 
    fetchBeers () {
        return axios.get(api_url + 'beers')
            .then(response => response.data)
    }

}