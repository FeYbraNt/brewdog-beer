<template>
    <section class="section">
        <div class="container">
            <b-notification :active.sync="error">{{ error }}</b-notification>
            <b-loading :active.sync="isLoading"></b-loading>
            <Beer v-for="beer in beers" :beer="beer" :key="beer.id" />
        </div>
        <hr>
        <Pagination />
    </section>
</template>

<script>
import Beer from "@/components/Beer.vue"
import Pagination from "@/components/Pagination.vue"
import { mapState } from "vuex"

export default {
    name: "BeerList",
    components: { Beer, Pagination },
    computed: mapState(["beers"]),
    data: () => ({
        isLoading: true,
        error: null
    }),
    mounted () {
        this.$store.dispatch('CHANGE_PAGE', 1)
            .then(() => this.isLoading = false)
            .catch((error) => {
                this.error = error
                this.isLoading = false
            })
        /*
        this.$store.dispatch('FETCH_ALL_BEERS')
            .then(() => this.isLoading = false)
            .catch((error) => {
                this.error = error
                this.isLoading = false
            })
        */
    }
}
</script>