<template>
    <nav class="navbar bg-light shadow-sm">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">Cartrader</NuxtLink>
            <div v-if="user">
                <span class="btn btn-primary user-wrapper me-2"> {{ user.email }}</span>
                <button class="btn btn-outline-secondary" @click.prevent="handleLogout">
                    logout
                </button>
            </div>
            <div v-else>
                <NuxtLink class="btn btn-primary" to="/login">Login</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = await useSupabaseUser()
const router = useRouter()

const handleLogout = async () => {
    const logoutRes = await supabase.auth.signOut()
    if (!logoutRes.error) {
        router.push({ path: "/" })
    }
    else {
        console.log(logoutRes.error);
    }
}
</script>

<style scoped>
.navbar-brand {
    font-family: monospace;
    /* font-size: 1.6rem; */
}

.navbar {
    height: 10vh;
}

.user-wrapper {
    cursor: default;
}
</style>