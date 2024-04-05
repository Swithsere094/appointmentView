<template>
    <section>
        <form action="">
            <div class="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <a class="forgotPassword" href="#">Forgot Password</a>
            <div class="form-group">
                <button class="buttonLogin">Login</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'loginComponent',
    setup() {
        return {}
    }
}
</script>

<style scoped>
.form-group {
    display: flex;
    justify-content: center;
    width: 20vw;
    margin-bottom: 1.5vw;
}
.form-group input {
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
</style>
