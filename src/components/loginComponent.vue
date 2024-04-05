<template>
    <section>
        <form action="">
            <div class="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <a href="#">Forgot Password</a>
            <div class="form-group">
                <button>Login</button>
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

<style scoped></style>
