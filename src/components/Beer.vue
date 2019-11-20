<template>
    <article class="card">
        <div class="card-content" style="cursor: pointer" @click="getDetails(beer.id)">
            <article class="media">
                <div class="media-left">
                    <figure class="image" style="width: 48px;">
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
    </article>
</template>

<script>
export default {
    name: "beer",
    props: ["beer"],
    methods: {
        getDetails(id) {
            this.$router.push({ name: 'beerdetails', params: { id: id } })
        }
    }
}
</script>