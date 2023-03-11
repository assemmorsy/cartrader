<template>
    <div v-if="error" class="d-flex justify-content-center flex-column h-100 align-items-center">
        <h2 class="text-danger"> {{ error.statusCode }}</h2>
        <h2>{{ error.message }}</h2>
        <button @click.prevent="handleBack" class="btn btn-primary">Go back</button>
    </div>
</template>

<script setup lang="ts">
const error = useError()
const handleBack = () => {
    clearError({
        redirect: "/"
    })
}
</script>

<style scoped></style>