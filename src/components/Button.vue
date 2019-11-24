<template>
    <b-button :type="(status == 'DONE') ? 'is-success' : 'is-info'" 
        :disabled="isDisabled" @click="run">
        {{ status }}
    </b-button>
</template>

<script>
export default {
    name: 'buttonIM',
    data: () => ({
        status: "IDLE"
    }),
    computed: { 
        isDisabled() { return (this.status == "DONE") }
    },
    methods: {
        run() { this.status = "DONE" }
    }
}
</script>