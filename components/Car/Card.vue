<template>
    <div v-if="car" class="card mb-2">
        <img :src="favored ? heartFilled : heartOutlined" @click.prevent="handleFav(car?.id)" class="favorite">
        <div class="row g-0" @click.prevent="navigateTo(`/car/${car?.name}-${car?.id}`)">
            <div class="col-md-4 ">
                <img :src="car.url" class="img-floud card-img rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h1 class="fs-2 text-primary">{{ car.name }}</h1>
                    <p class="m-0">
                        {{ car.description }}
                    </p>
                </div>
                <p class=" text-center mb-1 p-0 fs-3"><span class="text-warning fs-3">$</span>{{ car.price }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import heartFilled from "@/assets/img/heartFilled.png"
import heartOutlined from "@/assets/img/heartOutline.png"

const props = defineProps({ "car": Object, "favored": Boolean })
const emit = defineEmits(["favored"])

const handleFav = (id: Number) => {
    emit("favored", id)
}
</script>

<style  scoped>
.card {
    cursor: pointer;
}

.card-img {
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
}

.favorite {
    height: 2em;
    width: 2em;
    position: absolute;
    right: 1em;
    top: 1em;
}
</style>