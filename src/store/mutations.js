export const mutations = {
    SET_ALL_BEERS (state, beers) {
        state.beers = beers
    },
    SET_BEERS_PAGE (state, beers, page) {
        state.beers = beers
        state.page = page
    }
}