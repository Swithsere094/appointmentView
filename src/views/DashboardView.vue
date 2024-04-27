<template>
    <headerComponent />

    <div class="search-container">
        <input v-model="filter" class="search-input" type="text" v-on:input="search()" />
    </div>

    <label class="switch">
        <input type="checkbox" v-model="showList" />
        <span class="slider"></span>
    </label>

    <div v-show="!showList" class="bento-grid">
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

    <div class="business-list-container">
        <div v-show="showList" class="business-list">
            <div class="business-item">
                <div class="business-item--title">
                    <h3>Name</h3>
                </div>
                <div class="business-item--title">
                    <h3>Email</h3>
                </div>
                <div class="business-item--title">
                    <h3>Document</h3>
                </div>
                <div class="business-item--title">
                    <h3>Actions</h3>
                </div>
            </div>
            <div v-for="business in businessList" :key="business.id" class="business-item">
                <div class="business-subitem">
                    <h3>{{ business.name }}</h3>
                </div>
                <div class="business-subitem">
                    <p>{{ business.email }}</p>
                </div>
                <div class="business-subitem">
                    <p>{{ business.document }}</p>
                </div>
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
import { onMounted, ref, watch } from 'vue'
import { axiosGetRequest } from '@/helpers/helpers'
// import UserDatesView from './userDatesView.vue'
export default {
    name: 'dashboardView',
    components: {
        headerComponent
        // UserDatesView
    },
    setup() {
        const businessList = ref('')
        const filter = ref('')
        const showList = ref()

        onMounted(async () => {
            showList.value = localStorage.getItem('listView') ?? false
            businessList.value = await axiosGetRequest('/getBusinessList', {})
        })
        watch(showList, (value) => {
            localStorage.setItem('listView', value)
        })
        return {
            RouterLink,
            businessList,
            filter,
            showList
        }
    },
    methods: {
        async search() {
            this.businessList = await axiosGetRequest('/getBusinessList', { filter: this.filter })
        }
    }
}
</script>

<style scoped>
.search-container {
    display: flex;
    width: 95vw;
    justify-content: end;
}

.search-input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: var(--dark-web) 1px solid;
    background-color: white;
    background-image: url('@/assets/search.svg');
    background-position: 10px 8px;
    background-repeat: no-repeat;
    padding-left: 40px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-left: 30px;
    user-select: none;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: var(--second-complementary);
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.bento-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
    justify-content: center;
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
    background-color: rgb(203, 68, 70);
}

.business-list {
    width: 80vw;
    padding: 20px;
}

.business-list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
}

.business-item {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr 1fr;
}
.business-item--title {
    display: flex;
    justify-content: center;
    font-weight: bolder;
}
.business-subitem {
    display: flex;
    justify-content: center;
}
</style>
