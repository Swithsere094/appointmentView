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
        </div>
        <!-- <button @click="()=>{this.$router.go()}">Go to Dashboard</button> -->
    </main>
</template>

<script>
import { ref } from 'vue'
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
    transition: background-color 0.2s;
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
.hidden {
    display: none;
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
