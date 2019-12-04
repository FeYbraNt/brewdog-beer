<template>
    <b-button :type="(status == 'DONE') ? 'is-success' : 'is-info'"
        :disabled="isDisabled" :loading="isLoading" @click="run">
        {{ status }}
    </b-button>
</template>

<script>
export default {
    name: 'buttonIM',
    props: ["duration"],
    data: () => ({
        status: "IDLE",
        intervalTimer: 0
    }),
    computed: { 
        isDisabled() { return (this.status == "DONE") },
        isLoading() { return (this.status == "RUNNING") }
    },
    methods: {
        run() {
            if (this.duration) {
                clearInterval(this.intervalTimer)
                this.countdown(this.duration)
            } else {
                this.status = "DONE"
            }
        },
        countdown(seconds) {
            let secondsLeft = seconds
            this.intervalTimer = setInterval(() => {
                secondsLeft--
                if (secondsLeft <= 0) { 
                    clearInterval(this.intervalTimer)
                    this.status = 'DONE'
                    return 
                }
                this.status = 'RUNNING'
            }, 1000)
        }
    }
}
</script>