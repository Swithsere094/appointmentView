<template>
    <headerComponent />

    <button @click="logOut" style="width: 200px">LogOut</button>

    <FullCalendar :options='calendarOptions' />
</template>

<script>
import { RouterLink } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
import { axiosPostRequest } from '@/helpers/helpers'
import router from '@/router'
import { sweetMessage } from '@/helpers/alertsService'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
export default {
    name: 'dashboardView',
    components: {
        headerComponent,
        FullCalendar
    },
    setup() {
    const calendarOptions = {
            plugins: [dayGridPlugin, interactionPlugin],
            initialView: 'dayGridMonth',
            // weekends: false,
            events: [
                { title: 'Meeting', start: new Date() }
            ]
        }

        return {
            RouterLink,
            calendarOptions
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
