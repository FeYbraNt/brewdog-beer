<template>
    <article class="media">
        <figure class="media-left">
            <p class="image" style="width: 64px;">
                <img :src="beer.image_url" alt="beerImage">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p><strong>{{ beer.name }}, ABV:</strong> {{ beer.abv }}</p>
                <p>{{ beer.description }}</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: "beer",
    props: ["beer"],
    data: () => ({
        
    })
}
</script>