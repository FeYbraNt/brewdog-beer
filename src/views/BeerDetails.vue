<template>
    <section class="section">
        <div class="container">
            <b-notification :active.sync="error">{{ error }}</b-notification>
            <b-loading :active.sync="isLoading"></b-loading>
            <article class="media" v-if="beer">
                <div class="media-left">
                    <figure class="image">
                        <img :src="beer.image_url" alt="beerImage">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ beer.name }}</p>
                    <p class="subtitle is-6">ABV: {{ beer.abv }}</p>
                    <p>{{ beer.description }}</p>
                    <Ingredients :ingredients="beer.ingredients" />
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import Ingredients from "@/components/Ingredients"

export default {
    name: 'BeerDetails',
    props: ['id'],
    components: { Ingredients },
    data: () => ({
        beer: null,
        isLoading: true,
        error: null
    }),
    created() {
        this.$store.getters.getBeerById(this.id)
            .then(response => {
                this.beer = response
                this.isLoading = false
            })
            .catch(error => {
                this.error = error
                this.isLoading = false
            })
    }
}
</script>