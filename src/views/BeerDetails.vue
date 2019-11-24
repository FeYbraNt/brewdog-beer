<template>
    <section class="section" v-if="beer">
        <div class="container">
            <b-notification :active.sync="error">{{ error }}</b-notification>
            <b-loading :active.sync="isLoading"></b-loading>
            <Beer :beer="beer" :key="beer.id" />
        </div>
        <br>
        <div class="container">
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
import Beer from "@/components/Beer"
import Ingredient from "@/components/Ingredient"
import Method from "@/components/Method"

export default {
    name: 'beerdetails',
    props: ['id'],
    components: { Beer, Ingredient, Method },
    data: () => ({
        beer: null,
        isLoading: true,
        error: null,
        activeIngredient: 0
    }),
    mounted () {
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