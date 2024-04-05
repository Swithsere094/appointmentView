<template>
    <main>
        <div class="form-container">
            <h1>{{ loginVisivility ? 'Login' : 'Register' }} Form</h1>
            <div class="btns">
                <div
                    :class="loginVisivility ? 'active' : ''"
                    class="btn btn-login"
                    @click="switchForm('login')"
                >
                    Login
                </div>
                <div
                    :class="loginVisivility ? '' : 'active'"
                    class="btn btn-register"
                    @click="switchForm('register')"
                >
                    Signup
                </div>
            </div>
            <div :class="loginVisivility ? '' : 'hidden'" id="login">
                <loginComponent />
            </div>
            <div :class="loginVisivility ? 'hidden' : ''" id="register">
                <registerComponent />
            </div>
            <button @click="goToDashboard">Go to Dashboard</button>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'
import loginComponent from '@/components/loginComponent.vue'
import registerComponent from '@/components/registerComponent.vue'
export default {
    components: {
        loginComponent,
        registerComponent
    },
    name: 'loginView',
    setup() {
        const loginVisivility = ref(1)
        return {
            loginVisivility
        }
    },
    methods: {
        goToDashboard() {
            router.push('/dashboard')
        },
        switchForm(form) {
            if (form == 'login') {
                this.loginVisivility = 1
            }
            if (form == 'register') {
                this.loginVisivility = 0
            }
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
    background-color: var(--principal-web);
}
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 60vh;
    background-color: var(--light-web);
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px var(--dark-web);
}
.btns {
    display: flex;
}
.btn:hover {
    background-color: lightgreen;
    cursor: pointer;
    user-select: none;
}
.active {
    background-color: red;
}
.hidden {
    display: none;
}
</style>
