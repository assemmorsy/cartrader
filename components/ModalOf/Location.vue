<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">
                <h1 class="card-title fs-5">Change Search Location</h1>
                <button type="button" class="btn-close" @click.prevent="closeModal" aria-label="Close"></button>
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="handleApply" id="locationModal">
                <input type="text" class="form-control" v-model="city" placeholder="City">
            </form>
            <p class="text-danger text-center m-1">{{ validationError }}</p>
        </div>
        <div class="card-footer">
            <button type="submit" form="locationModal" class="btn btn-primary mx-1">Apply</button>
            <button type="button" class="btn btn-secondary mx-1" @click.prevent="closeModal">Close</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModal"

const modalStore = useModalStore()

const closeModal = () => {
    modalStore.closeModal()
}

const city = ref("")
const validationError = ref<string | null>(null)
const route = useRoute()
const handleApply = () => {
    city.value = city.value.trimStart().trimEnd()
    if (city.value === "") {
        validationError.value = "Location Can't be empty"
        return
    }
    if (!isNaN(parseInt(city.value))) {
        validationError.value = "Location Can't be Numbers"
        return
    }
    closeModal()
    let navigateToPath = `/city/${city.value.toLocaleLowerCase()}/car`
    if (route.params.make) navigateToPath += `/${route.params.make}?`
    else navigateToPath += `?`
    if (route.query.minPrice) navigateToPath += `minPrice=${route.query.minPrice}`
    if (route.query.minPrice) navigateToPath += `&maxPrice=${route.query.maxPrice}`
    navigateTo(navigateToPath)
}
</script>

<style scoped>
.modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}
</style>