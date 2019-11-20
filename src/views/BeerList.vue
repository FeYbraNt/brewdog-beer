<template>
    <section class="section">
        <div class="container">
            <b-notification :active.sync="error">{{ error }}</b-notification>
            <b-loading :active.sync="isLoading"></b-loading>
            <Beer v-for="beer in beers" :beer="beer" :key="beer.id" />
        </div>
    </section>
</template>

<script>
import Beer from "@/components/Beer.vue"
import { mapState } from "vuex"

export default {
    name: "BeerList",
    components: { Beer },
    computed: mapState(["beers"]),
    data: () => ({
        isLoading: true,
        error: null
    }),
    mounted () {
        this.$store.dispatch('FETCH_ALL_BEERS')
            .then(() => this.isLoading = false)
            .catch((error) => {
                this.error = error
                this.isLoading = false
            })
    }
}
</script>