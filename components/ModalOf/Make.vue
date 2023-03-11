<template>
    <div class="card">
        <div class="card-header ">
            <div class="d-flex justify-content-between">
                <h1 class="card-title fs-5">Change Make Filter</h1>
                <button type="button" class="btn-close" @click.prevent="closeModal" aria-label="Close"></button>
            </div>
        </div>
        <div class="card-body">
            <div class="row text-center justify-content-center">
                <p class="d-inline-block mx-2 clickable col-3 p-0 m-0 px-1"
                    :class="route.params.make === make ? 'text-primary' : ''" v-for="make in makes"
                    @click.prevent="handleMake(make)" :key="make">{{ make }}</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModal"
const { makes } = useCars()
const route = useRoute()
const modalStore = useModalStore()

const closeModal = () => {
    modalStore.closeModal()
}
const handleMake = (make: string) => {
    closeModal()
    let navigateToPath = `/city/${route.params.city}/car/${make}?`
    if (route.query.minPrice) navigateToPath += `minPrice=${route.query.minPrice}`
    if (route.query.minPrice) navigateToPath += `&maxPrice=${route.query.maxPrice}`
    navigateTo(navigateToPath)
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
}

.clickable:hover {
    background-color: hsl(167, 85%, 38%);
    color: #fff;
}
</style>