<template>
    <header>
        <div class="wrapper">
            <nav>
                <div class="nav-router">
                    <RouterLink to="">My Appointments</RouterLink>
                </div>
                <div class="user-actions">
                    <button @click="logOut" style="width: 200px">LogOut</button>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { axiosPostRequest } from '@/helpers/helpers'
import router from '@/router'
import { showSweetLoading, hideSweetLoading } from '@/helpers/alertsService'
export default {
    name: 'headerComponent',
    setup() {
        return {}
    },
    methods: {
        async logOut() {
            showSweetLoading('Logging out')
            await axiosPostRequest('/logout', {}, {})
            setTimeout(() => {
                hideSweetLoading()
                localStorage.removeItem('token')
                router.go()
            }, 1500)
        }
    }
}
</script>

<style scoped>
header {
    line-height: 1.5;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
    font-size: 15px;
    margin-top: 2rem;
}
</style>
