<template>
    <main>
        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
    </main>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
    name: 'userDatesView',
    components: {
        FullCalendar
    },
    setup() {
        const calendarOptions = {
            plugins: [timeGridPlugin, interactionPlugin],
            initialView: 'timeGridWeek',
            height: '400px',
            weekends: false,
            headerToolbar: {
                start: '',
                center: '',
                end: ''
            },
            businessHours: {
                startTime: '8:00',
                endTime: '17:00'
            },
            events: [
                {
                    // start: '2024-04-24T10:00:00',
                    // end: '2014-04-24T12:00:00'
                    // display: 'background'
                }
            ]
        }
        return {
            calendarOptions
        }
    },
    mounted: function () {
        this.nextWeek()
    },
    methods: {
        nextWeek() {
            let calendarApi = this.$refs.fullCalendar.getApi()
            calendarApi.next()
        }
    }
}
</script>

<style scoped></style>
