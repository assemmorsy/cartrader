<template>
    <div class="mt-5" v-if="car">
        <img :src="car.url" class="w-100" alt="" />
        <h1 class="mt-5 fs-2">{{ car.name }}</h1>
        <div class="text-primary d-flex fs-4 mt-3 border p-2 justify-content-between">
            <div class="d-flex">
                <p class="me-2 mb-0 pb-0">{{ car.seats }} seats</p>
                <p class="me-2 mb-0 pb-0">|</p>
                <p class="me-2 mb-0 pb-0">{{ car.miles }} miles</p>
            </div>
            <div>
                <p class="fw-bold fs-3 mb-0 pb-0">${{ car.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    car: Object
})
</script>

<style scoped></style>