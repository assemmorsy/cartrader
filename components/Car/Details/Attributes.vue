<template>
    <div class=" mt-5 border pb-1">
        <div class="d-flex fs-3 mt-2" v-for="feature in features " :key="feature">
            <p class="rounded text-lime-800 me-3">✔</p>
            <p>{{ feature }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    features: Array<string>,
})
</script>

<style scoped></style>