<template>
    <main>
        <div class="form-container">
            <h1>{{ loginVisivility }} Form</h1>
            <div class="btns">
                <div
                    :class="loginVisivility == 'Login' ? 'active' : ''"
                    class="btn btn-login"
                    @click="switchForm()"
                >
                    Login
                </div>
                <div
                    :class="loginVisivility == 'Register' ? 'active' : ''"
                    class="btn btn-register"
                    @click="switchForm()"
                >
                    Signup
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <component
                    :is="loginVisivility == 'Register' ? 'registerComponent' : 'loginComponent'"
                ></component>
            </transition>
        </div>
    </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import loginComponent from '@/components/loginComponent.vue'
import registerComponent from '@/components/registerComponent.vue'
import router from '@/router'
export default {
    components: {
        loginComponent,
        registerComponent
    },
    name: 'loginView',
    setup() {
        const loginVisivility = ref('Login')
        onMounted(() => {
            const token = localStorage.getItem('token')
            if (token) {
                router.push('/dashboard')
            }
        })
        return {
            loginVisivility
        }
    },
    methods: {
        switchForm() {
            const changeTo = {
                Login: 'Register',
                Register: 'Login'
            }

            this.loginVisivility = changeTo[this.loginVisivility]
        }
    }
}
</script>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--principal-web);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
        sans-serifs;
}
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 576px;
    min-height: 410px;
    max-height: 550px;
    background-color: var(--light-web);
    border-radius: 5px;
    box-shadow: 10px 10px 30px 0.1px #818181;
    padding-top: 42px;
    overflow: auto;
}
.form-container h1 {
    font-size: 50px;
    font-weight: 600;
}
.btns {
    display: flex;
    margin: 20px 0;
}
.btn {
    display: flex;
    height: 50px;
    width: 200px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    transition:
        background-color 0.2s,
        color 0.2s;
}
.btn:hover {
    background-color: var(--first-complementary);
    cursor: pointer;
    user-select: none;
    color: var(--light-web);
}
.active {
    background-color: var(--second-complementary);
    color: var(--light-web);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media screen and (max-width: 768px) {
    .form-container {
        width: 400px;
    }
    .form-container h1 {
        font-size: 40px;
    }
    .btn {
        height: 50px;
        width: 100px;
    }
}

@media screen and (max-width: 426px) {
    .form-container {
        width: 320px;
    }
}
</style>
