<template>
    <section>
        <div class="form-group">
            <select v-model="selectedDoctype">
                <option value="">Document Type</option>
                <option v-for="doctype in doctypes" :key="doctype.id" :value="doctype.id">
                    {{ doctype.description }}
                </option>
            </select>
            <small class="error">{{ errors.docType ? errors.docType[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedDocument" type="text" placeholder="Document" />
            <small class="error">{{ errors.document ? errors.document[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedName" type="text" placeholder="Name" />
            <small class="error">{{ errors.name ? errors.name[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedLastName" type="text" placeholder="Lastname" />
            <small class="error">{{ errors.lastName ? errors.lastName[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedEmail" type="email" placeholder="Email Address" />
            <small class="error">{{ errors.email ? errors.email[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedPassword" type="password" placeholder="Password" />
            <small class="error">{{ errors.password ? errors.password[0] : '' }}</small>
        </div>
        <div class="form-group">
            <input v-model="selectedRepeatPassword" type="password" placeholder="Repeat Password" />
            <small class="error">{{ errors.password ? errors.password[0] : '' }}</small>
        </div>
        <div class="form-group">
            <button @click="registrarUsuario" class="buttonRegister">Register</button>
        </div>
    </section>
</template>

<script>
import { sweetMessage } from '@/helpers/alertsService'
import { axiosGetRequest, axiosPostRequest } from '@/helpers/helpers'
import router from '@/router'
import { onMounted, ref } from 'vue'
export default {
    name: 'registerComponent',
    setup() {
        const doctypes = ref([])
        const selectedDoctype = ref('')
        const selectedDocument = ref('')
        const selectedName = ref('')
        const selectedLastName = ref('')
        const selectedEmail = ref('')
        const selectedPassword = ref('')
        const selectedRepeatPassword = ref('')
        const errors = ref({})
        onMounted(async () => {
            doctypes.value = await axiosGetRequest('/getIdTypes', {})
        })
        return {
            doctypes,
            selectedDoctype,
            selectedDocument,
            selectedName,
            selectedLastName,
            selectedEmail,
            selectedPassword,
            selectedRepeatPassword,
            errors
        }
    },
    methods: {
        async registrarUsuario() {
            const data = {
                docType: this.selectedDoctype,
                document: this.selectedDocument,
                name: this.selectedName,
                lastName: this.selectedLastName,
                email: this.selectedEmail,
                password: this.selectedPassword,
                password_confirmation: this.selectedRepeatPassword
            }

            try {
                await axiosPostRequest('/userRegister', data, {})
                await sweetMessage("Usuario creado correctamente")
                router.go()
            } catch (e) {
                this.errors = e.response.data.errors
            }
        }
    }
}
</script>

<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 384px;
    margin-bottom: 28px;
}
.form-group input,
.form-group select {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid var(--second-complementary);
    border-radius: 10px;
    padding-left: 15px;
}
.forgotPassword {
    font-size: 17px;
    color: var(--second-complementary);
}

.buttonRegister {
    margin-top: 35px;
    width: 100%;
    height: 40px;
    background-color: var(--second-complementary);
    color: var(--light-web);
    border: none;
    border-radius: 10px;
}

.buttonRegister:hover {
    border: solid 1px #000;
}

.error {
    color: var(--first-complementary);
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
