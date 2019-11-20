<template>
    <b-tabs v-model="activeIngredient" type="is-boxed" expanded>
        <b-tab-item v-for="(ingredient, index) in ingredients" :key="index" :label="index">
            <template slot="header">
                <span>{{index}} <b-tag rounded> {{ ingredient.length }} </b-tag> </span>
            </template>
            <p v-for="(item, i) in ingredient" :key="i">
                <strong>{{ item.name }}</strong>
                <ul v-if="item.amount">
                        <li>Value: {{ item.amount.value }}</li>
                        <li>Unit: {{ item.amount.unit }}</li>
                </ul>
            </p>
        </b-tab-item>
    </b-tabs>
</template>

<script>
export default {
    props: ['ingredients'],
    data: () => ({
        activeIngredient: 0
    })
}
</script>