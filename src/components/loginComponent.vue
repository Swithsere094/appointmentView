<template>
    <section>
        <div class="form-group">
            <input v-model="userName" type="text" placeholder="Username" />
        </div>
        <div class="form-group">
            <input v-model="password" :type="toggle ? 'text' : 'password'" placeholder="Password" />
            <img class="togle-password" @click="togglePassword" :src="togledPasswords[toggle]" />
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
import router from '@/router'
import { ref } from 'vue'
export default {
    name: 'loginComponent',
    setup() {
        const togledPasswords = {
            0: '/src/assets/eye.svg',
            1: '/src/assets/eye-slash.svg'
        }
        const userName = ref('')
        const password = ref('')
        const remember = ref(false)
        const toggle = ref(0)
        return {
            userName,
            password,
            remember,
            toggle,
            togledPasswords
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
                router.push('/dashboard')
            } catch {
                console.log('DATOS INCORRECTOS')
            }
        },
        togglePassword() {
            this.toggle = Math.abs(this.toggle - 1)
        }
    }
}
</script>

<style scoped>
.form-group {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 384px;
    margin-bottom: 14px;
}
.form-group-left {
    display: flex;
    width: 384px;
    margin-bottom: 28px;
    align-items: center;
    user-select: none;
}
.form-group input {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--second-complementary);
    border-radius: 10px;
    padding-left: 15px;
}

.form-group-left input {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background-color: var(--light-web);
    border-radius: 5px;
    border: 2px solid #888;
    /* appearance: none; */
    cursor: pointer;
}

.form-group-left input:checked {
    accent-color: var(--second-complementary);
}

.togle-password {
    position: absolute;
    margin-left: 330px;
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
    .form-group,
    .form-group-left {
        width: 300px;
    }

    .togle-password {
        margin-left: 250px;
    }
}

@media screen and (max-width: 426px) {
    .form-group,
    .form-group-left {
        width: 200px;
    }

    .togle-password {
        margin-left: 160px;
    }
}
</style>
