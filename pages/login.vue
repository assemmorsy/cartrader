<template>
    <div class="mt-3 w-75 mx-auto">
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input required v-model="user.email" type="email" class="form-control" id="email"
                    placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input required minlength="6" v-model="user.password" type="password" class="form-control" id="password"
                    placeholder="*********">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <NuxtLink to="/signup">Not regestered yet! , signup from here.</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const user = ref({
    email: "",
    password: ""
})
const router = useRouter()
const handleLogin = async () => {
    console.log(user.value.email);
    console.log(user.value.password);
    const supabase = useSupabaseClient()
    const userFetch = await supabase.auth.signInWithPassword({
        password: user.value.password,
        email: user.value.email
    })
    if (!userFetch.error) {
        router.push({ path: '/' })
    }
}

</script>

<style scoped></style>