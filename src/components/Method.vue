<template>
    <div class="media-content" v-if="method">
        <div class="box">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-two-thirds">
                    <strong>{{ name }}</strong> 
                    <ul v-if="method.temp">
                        <li>Temp: {{ method.temp.value }}</li>
                        <li>Unit: {{ method.temp.unit }}</li>
                        <li v-if="method.duration">Duration: {{ method.duration}}</li>
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
    name: 'method',
    components: { Button },
    props: ['method', 'name']
}
</script>