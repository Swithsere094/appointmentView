<template>
    <headerComponent />
</template>

<script>
import { RouterLink } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
export default {
    name: 'dashboardView',
    components: {
        headerComponent
    },
    setup() {
        return {
            RouterLink
        }
    }
}
</script>

<style scoped></style>
