<template>
    <div>
        <div class="card shadow-lg mx-auto p-2 ">
            <div class="row text-center text-capitalize">
                <h4 class="col-6 fs-6 ">Location</h4>
                <button class="text-primary fs-6 p-0 m-0 col-5 btn btn-outline-light"
                    @click="modalStore.openModal('location')">
                    {{ route.params.city }}
                </button>
            </div>
            <hr class="my-1">
            <div class="row text-center text-capitalize">
                <h4 class="col-6 fs-6 ">Make</h4>
                <button class="text-primary fs-6 p-0 m-0 col-5 btn btn-outline-light"
                    @click="modalStore.openModal('make')">{{ route.params.make ? route.params.make : "Any"
                    }}</button>
            </div>
            <hr class="my-1">
            <div class="row text-center text-capitalize">
                <h4 class="col-6 fs-6 ">Price</h4>
                <button class="text-primary fs-6 p-0 m-0 col-5 btn btn-outline-light"
                    @click="modalStore.openModal('price')">{{ priceValueText }}</button>
            </div>
        </div>

        <Teleport to="body">
            <GlobalModal v-if="modalComp">
                <component :is="modalComp" />
            </GlobalModal>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { useModalStore } from "@/stores/useModal"
import ModalOfLocation from "@/components/ModalOf/Location.vue"
import ModalOfMake from "@/components/ModalOf/Make.vue"
import ModalOfPrice from "@/components/ModalOf/Price.vue"

const route = useRoute()
const priceValueText = computed(() => {
    if (route.query.minPrice && route.query.maxPrice) {
        return `$${route.query.minPrice} - $${route.query.maxPrice} `
    }
    else if (!route.query.minPrice && route.query.maxPrice) {
        return ` < $${route.query.maxPrice} `
    }
    else if (route.query.minPrice && !route.query.maxPrice) {
        return ` >  $${route.query.minPrice} `
    } else if (!route.query.minPrice && !route.query.maxPrice) {
        return "Any"
    }
})
const modalStore = useModalStore()

const modalComp = computed(() => {
    switch (modalStore.openedModal.value) {
        case "location":
            return ModalOfLocation;
        case "make":
            return ModalOfMake;
        case "price":
            return ModalOfPrice;
        case null:
        default:
            return null;
    }
})


</script>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>