<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">

                <h1 class="card-title fs-5">Change Price Filter</h1>
                <button type="button" class="btn-close" @click.prevent="closeModal" aria-label="Close"></button>
            </div>
        </div>
        <div class="card-body">
            <form id="priceForm" @submit.prevent="handleSave">
                <label for="minPrice">Min Price</label>
                <input type="number" min="0" class="form-control" id="minPrice" v-model="minPrice">
                <label for="minPrice">Max Price</label>
                <input type="number" min="0" class="form-control" id="maxPrice" v-model="maxPrice">
            </form>
            <p class="text-danger fs-6 p-0 m-1 text-center" v-if="validationError">{{ validationError }}</p>
        </div>
        <div class="card-footer">
            <button type="submit" form="priceForm" class="btn btn-primary mx-2">Filter</button>
            <button type="button" class="btn btn-secondary mx-2" @click.prevent="closeModal">Close</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModal"
const maxPrice = ref(0)
const minPrice = ref(0)
const route = useRoute()
const modalStore = useModalStore()
const validationError = ref<string | null>(null)
const closeModal = () => {
    modalStore.closeModal()
}
const handleSave = () => {
    if (minPrice.value > maxPrice.value) {
        validationError.value = "min price must be smaller than or equal max price"
        return;
    }
    closeModal()
    let navigateToPath = `/city/${route.params.city}/car`
    if (route.params.make) navigateToPath += `/${route.params.make}?`
    else navigateToPath += `?`
    if (minPrice.value) navigateToPath += `minPrice=${minPrice.value}`
    if (minPrice.value) navigateToPath += `&maxPrice=${maxPrice.value}`
    navigateTo(navigateToPath)

}
</script>

<style scoped></style>