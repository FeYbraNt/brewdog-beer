<template>
    <section class="section">
        <div class="container">
            <b-notification :active.sync="error">{{ error }}</b-notification>
            <b-loading :active.sync="isLoading"></b-loading>
            <article class="media" v-if="beer">
                <div class="media-left">
                    <figure class="image" style="width: 64px">
                        <img :src="beer.image_url" alt="beerImage">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ beer.name }}</p>
                    <p class="subtitle is-6">ABV: {{ beer.abv }}</p>
                    <p>{{ beer.description }}</p>
                </div>
            </article>
        </div>
        <br>
        <div class="container" v-if="beer">
            <b-tabs v-model="activeIngredient" type="is-boxed" expanded>
                <b-tab-item v-for="(ingredient, index) in Object.values(beer.ingredients).slice(0,-1)" :key="index">
                    <template slot="header">
                        <span>{{ Object.keys(beer.ingredients)[index] }} <b-tag rounded> {{ ingredient.length }} </b-tag> </span>
                    </template>
                    <div class="container">
                        <article class="media" v-for="(item, i) in ingredient" :key="i">
                            <Ingredient :ingredient="item" />
                        </article>
                    </div>
                </b-tab-item>
                <b-tab-item label="Method">
                    <template slot="header">
                        <span>Method <b-tag rounded> {{ Object.keys(beer.method).length - 1 }} </b-tag> </span>
                    </template>
                    <div class="container">
                        <article class="media" v-for="(method, i) in beer.method" :key="i">
                            <Method :method="method" :name="i" />
                        </article>
                    </div>
                </b-tab-item>
            </b-tabs>
        </div>
    </section>
</template>

<script>
import Ingredient from "@/components/Ingredient"
import Method from "@/components/Method"

export default {
    name: 'BeerDetails',
    props: ['id'],
    components: { Ingredient, Method },
    data: () => ({
        beer: null,
        isLoading: true,
        error: null,
        activeIngredient: 0
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