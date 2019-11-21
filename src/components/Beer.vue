<template>
    <article class="card">
        <div class="card-content">
            <article class="media">
                <div class="media-left">
                    <figure class="image" style="width: 48px;">
                        <img :src="beer.image_url" alt="beerImage">
                    </figure>
                </div>
                <div class="media-content">
                    <b-button :type="isCurrentRouteDetails ? 'is-dark' : 'is-info'" 
                        class="is-pulled-right move-right" @click="goToDetails(beer.id)">
                        {{ isCurrentRouteDetails ? 'Back' : 'More'  }}
                    </b-button>
                    <p class="title is-4">{{ beer.name }}</p>
                    <p class="subtitle is-6">ABV: {{ beer.abv }}</p>
                    <p>{{ beer.description }}</p>
                </div>
            </article>
        </div>
    </article>
</template>

<script>
export default {
    name: "beer",
    props: ["beer"],
    computed: { 
        isCurrentRouteDetails() { return (this.$route.name == 'beerdetails') }
    },
    methods: {
        goToDetails(id) {
            if (this.isCurrentRouteDetails) {
                this.$router.push({ name: 'beerlist' })
            } else {
                this.$router.push({ name: 'beerdetails', params: { id: id } })
            } 
        }
    }
}
</script>