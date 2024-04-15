<template>
    <headerComponent />

    <UserDatesView />
</template>

<script>
import { RouterLink } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
import UserDatesView from './userDatesView.vue'
export default {
    name: 'dashboardView',
    components: {
        headerComponent,
        UserDatesView
    },
    setup() {
        return {
            RouterLink
        }
    },
    methods: {}
}
</script>

<style scoped></style>
