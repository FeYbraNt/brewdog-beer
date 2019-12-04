<template>
    <div class="container">
        <b-pagination
            order="is-centered"
            :total="total"
            :current.sync="current"
            aria-page-label="Page"
            aria-current-label="Current page"
            :change="changePage">
        </b-pagination>
    </div>
</template>

<script>
export default {
    data: () => ({
        total: 200,
        current: 1
    }),
    methods: {
        changePage(value) {
            console.log(value)
            return value
        }
    }
}
</script>