<template>
    <div v-if="car" class="mx-auto mt-4 w-50">
        <div>
            <CarDetailsHero :car="car" />
        </div>
        <CarDetailsAttributes :features="car.features" />
        <CarDetailsDescription :description="car.description" />
        <CarDetailsContact />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
useHead({
    title: `${route.params.name}`
})
const { cars } = useCars()

const car = computed(() => {
    let routeId: string = typeof (route.params.id) === "string" ? route.params.id : route.params.id[0]
    return cars.find((car) => { return car.id === parseInt(routeId) })
})

if (!car.value) {
    throw createError({
        statusCode: 404, message: `Car with id of ${route.params.id} not found`
    })
}
</script>

<style scoped></style>