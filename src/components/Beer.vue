<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png" alt="beerImage">
            </p>
        </figure>
        <p>
            <strong>{{ beer.name }}</strong>
        </p>
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