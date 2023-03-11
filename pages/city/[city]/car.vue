<template>
    <div class="row  m-3">
        <NuxtErrorBoundary>
            <CarSideBar class=" col-lg-3 mb-2" />
            <NuxtPage class=" col-lg-9" />
            <template #error="{ error }">
                <div class="d-flex flex-column  mx-auto  text-center">
                    <h1>sorry</h1>
                    {{ error }}
                    <button class="btn btn-primary" @click="() => {
                        error.value = null
                    }">Go back</button>
                </div>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
    title: `${route.params.make ? route.params.make : 'Cars'} in ${route.params.city}`
})

// if (route.query.minPrice || route.query.maxPrice) {
//     let maxPrice = route.query.maxPrice && typeof (route.query.maxPrice) === "string" ?
//         parseInt(route.query.maxPrice) : null
//     let minPrice = route.query.minPrice && typeof (route.query.minPrice) === "string" ?
//         parseInt(route.query.minPrice) : null
//     if (minPrice && maxPrice && minPrice > maxPrice) {
//         throw createError({
//             statusCode: 404,
//             message: "max price must be lower than min price"
//         })
//     }
//     if (minPrice && isNaN(minPrice))
// }
</script>

<style scoped></style>