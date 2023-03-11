<template>
    <div class="mt-3 w-75 mx-auto">
        <h2 class="text-center">SignUp</h2>
        <form @submit.prevent="handleSingup">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input v-model="user.email" required type="email" class="form-control" id="email"
                    placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="user.password" required minlength="6" type="password" class="form-control" id="password"
                    placeholder="*********">
            </div>
            <button type="submit" class="btn btn-primary">Singup</button>
        </form>
        <NuxtLink to="/login">Have Account , login from here.</NuxtLink>

    </div>
</template>

<script setup lang="ts">
const user = ref({
    email: "",
    password: ""
})
const handleSingup = async () => {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const userSignUpRes = await supabase.auth.signUp({
        email: user.value.email,
        password: user.value.password
    })
    if (!userSignUpRes.error) {
        router.push({ path: '/' })
    }
}

</script>

<style scoped></style>