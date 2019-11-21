<template>
    <div class="media-content">
       <div class="box">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-two-thirds">
                    <strong>{{ ingredient.name }}</strong> 
                    <ul v-if="ingredient.amount">
                        <li>Value: {{ ingredient.amount.value }}</li>
                        <li>Unit: {{ ingredient.amount.unit }}</li>
                    </ul>
                </div>
                <div class="column">
                    <Button />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button"

export default {
    name: 'ingredient',
    props: ['ingredient'],
    components: { Button }
}
</script>