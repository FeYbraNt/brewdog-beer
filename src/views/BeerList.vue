<template>
    <section class="section">
        <div class="container">
            <div class="notification is-danger" v-if="error">{{ error }}</div>
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
        this.$store.dispatch('FETCH_BEERS')
            .then(() => this.isLoading = false)
            .catch((error) => this.error = error)
    }
}
</script>