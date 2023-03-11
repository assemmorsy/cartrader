<template>
    <div class="w-100 d-flex justify-content-center align-items-center mt-3" @keypress.enter="handleSearch">
        <input class="form-control d-inline-block w-50 rounded-0  fs-6" v-model="city" placeholder=" Type City Name ..."
            type="email">
        <button type="submit" @click.prevent="handleSearch"
            class="d-inline-block btn btn-primary rounded-0 fs-6 px-5 ">Search</button>
    </div>
</template>

<script setup lang="ts">
const city = ref("")
const handleSearch = () => {
    if (city.value !== "")
        navigateTo(`city/${city.value.trimStart().trimEnd()}/car`)
}
</script>

<style scoped>
input {
    border-radius: 30px 0px 0px 30px !important;
}

button {
    border-radius: 0px 30px 30px 0px !important;

}
</style>