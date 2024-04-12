<template>
    <headerComponent />

    <button @click="logOut" style="width: 200px">LogOut</button>
</template>

<script>
import { RouterLink } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
import { axiosPostRequest } from '@/helpers/helpers'
import router from '@/router'
import { sweetMessage } from '@/helpers/alertsService'
export default {
    name: 'dashboardView',
    components: {
        headerComponent
    },
    setup() {
        return {
            RouterLink
        }
    },
    methods: {
        async logOut() {
            await axiosPostRequest('/logout', {}, {})
            await sweetMessage('Logging Out...', '', 'info', 1500)
            localStorage.removeItem('token')
            router.go()
        }
    }
}
</script>

<style scoped></style>
