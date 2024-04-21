<template>
    <headerComponent />

    <div class="bento-grid">
        <div v-for="business in businessList" :key="business.id" class="bento-item">
            <div class="business">
                <h3>{{ business.name }}</h3>
                <p>{{ business.email }}</p>
                <p>{{ business.document }}</p>
                <div class="actions">
                    <button class="btn-see">Go to Calendar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- <UserDatesView /> -->
</template>

<script>
import { RouterLink } from 'vue-router'
import headerComponent from '@/components/headerComponent.vue'
import { onMounted, ref } from 'vue';
import { axiosGetRequest } from '@/helpers/helpers';
// import UserDatesView from './userDatesView.vue'
export default {
    name: 'dashboardView',
    components: {
        headerComponent,
        // UserDatesView
    },
    setup() {
        const businessList = ref('');

        onMounted(async () => {
            businessList.value = await axiosGetRequest('/getBusinessList', {})
        });
        return {
            RouterLink,
            businessList
        }
    },
    methods: {}
}
</script>

<style scoped>
.bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 4 columnas en tamaño grande */
    gap: 20px;
    padding: 20px;
}

.bento-item {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.bento-item:hover {
    transform: translateY(-5px);
}

.business {
    color: #333333;
}

.business h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.business p {
    font-size: 14px;
    margin-bottom: 16px;
}

.actions {
    display: flex;
    justify-content: flex-end;
}

.btn-see {
    background-color: var(--second-complementary);
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-see:hover {
    background-color: #0056b3;
}
</style>
