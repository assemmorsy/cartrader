<template>
    <ClientOnly>
        <CarCards :cars="cars" v-if="cars && cars.length > 0" />
        <div v-else>
            <h2 class="text-center mt-5 display-4 text-danger">:( sorry <br />Can't Find Any Car</h2>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()
const city: string = typeof (route.params.city) === "string" ? route.params.city : route.params.city[0]
const cars = await useFetchCars(city, {
    make: route.params.make,
    maxPrice: route.params.maxPrice,
    minPrice: route.params.minPrice,
})
</script>

<style scoped></style>