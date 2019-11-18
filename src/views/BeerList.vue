<template>
    <section class="container">
        <Beer v-for="beer in beers" :beer="beer" :key="beer.id" />
    </section> 
</template>

<script>
import Beer from "@/components/Beer.vue"
import api from './../api'

export default {
    name: "BeerList",
    components: { Beer },
    data: () => ({
        beers: []
    }),
    mounted() {
        api.fetchBeers()
            .then(response => {
                this.beers = response
            })
            .catch(error => {
                this.error = error
            })
    }
}
</script>