<template>
    <section>
        <form action="">
            <div class="form-group">
                <input type="text" placeholder="Name" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Lastname" />
            </div>
            <div class="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <input type="password" placeholder="Repeat Password" />
            </div>
            <div class="form-group">
                <button>Register</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'registerComponent',
    setup() {
        return {}
    }
}
</script>

<style scoped></style>
