<template>
    <section>
        <div class="form-group">
            <input v-model="userName" type="text" placeholder="Username" />
        </div>
        <div class="form-group">
            <input v-model="password" type="password" placeholder="Password" />
        </div>
        <div class="form-group-left">
            <input v-model="remember" type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
        </div>
        <a class="forgotPassword" href="#">Forgot Password</a>
        <div class="form-group">
            <button @click="loginUsuario" class="buttonLogin">Login</button>
        </div>
    </section>
</template>

<script>
import { axiosPostRequest } from '@/helpers/helpers'
import { ref } from 'vue'
export default {
    name: 'loginComponent',
    setup() {
        const userName = ref('')
        const password = ref('')
        const remember = ref(false)
        return {
            userName,
            password,
            remember
        }
    },
    methods: {
        async loginUsuario() {
            let data = {
                document: this.userName,
                password: this.password,
                rememberMe: this.remember
            }
            try {
                const response = await axiosPostRequest('/userLogin', data, {})
                const token = response.token

                console.log(token)
                localStorage.setItem('token', `Bearer ${token}`)
            } catch {
                console.log('DATOS INCORRECTOS')
            }
        }
    }
}
</script>

<style scoped>
.form-group {
    display: flex;
    justify-content: center;
    width: 384px;
    margin-bottom: 14px;
}
.form-group-left {
    display: flex;
    width: 384px;
    margin-bottom: 28px;
}
.form-group input[type='text'],
.form-group input[type='password'] {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--second-complementary);
    border-radius: 10px;
    padding-left: 15px;
}
.forgotPassword {
    font-size: 17px;
    color: var(--second-complementary);
}

.buttonLogin {
    margin-top: 35px;
    width: 100%;
    height: 40px;
    background-color: var(--second-complementary);
    color: var(--light-web);
    border: none;
    border-radius: 10px;
}

.buttonLogin:hover {
    border: solid 1px #000;
}

@media screen and (max-width: 768px) {
    .form-group {
        width: 300px;
    }
}

@media screen and (max-width: 426px) {
    .form-group {
        width: 200px;
    }
}
</style>
