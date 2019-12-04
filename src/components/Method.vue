<template>
    <div class="media-content" v-if="method">
        <div class="box">
            <div class="columns is-mobile is-vcentered">
                <div class="column is-two-thirds">
                    <strong>{{ name }}</strong> 
                    <ul v-if="Array.isArray(method)">
                        <li>Temp: {{ method[0].temp.value }}</li>
                        <li>Unit: {{ method[0].temp.unit }}</li>
                        <li v-if="method[0].duration">Duration: {{ method[0].duration}}</li>
                    </ul>
                    <ul v-else-if="method.temp">
                        <li>Temp: {{ method.temp.value }}</li>
                        <li>Unit: {{ method.temp.unit }}</li>
                    </ul>
                    <p v-if="typeof method === 'string'">{{ method }}</p>
                </div>
                <div class="column">
                    <Button v-if="Array.isArray(method)" :duration="method[0].duration" />
                    <Button v-else-if="method.temp" />
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