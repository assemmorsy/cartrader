<template>
    <div>
        <template v-for="car in cars" :key="car.id">
            <CarCard :car="car" @favored="handleFav" :favored="car.id in favorites" />
        </template>
    </div>
</template>

<script setup>
const props = defineProps(["cars"])
const favorites = useLocalStorage("favorites", {})
const handleFav = (id) => {
    if (id in favorites.value) {
        delete favorites.value[id]
    } else {
        favorites.value = {
            ...favorites.value, [id]: true
        }
    }
}
</script>

<style lang="scss" scoped></style>