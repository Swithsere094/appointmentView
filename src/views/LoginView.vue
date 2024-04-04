<template>
    <main>
        <button @click="goToDashboard">Go to Dashboard</button>
    </main>
</template>

<script>
import router from '@/router'

export default {
    name: 'loginView',
    setup() {
        return {}
    },
    methods: {
        goToDashboard() {
            router.push('/dashboard')
        }
    }
}
</script>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
