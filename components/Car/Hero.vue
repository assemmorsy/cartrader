<template>
    <div class="d-flex flex-column justify-content-center align-items-center content">
        <h3 class="display-3 text-light"> Find your drive</h3>
        <CarSearchBar />
    </div>
    <div class="car-background">
        <div class="black-opacity">
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content {
    height: 90vh;
    width: 100%;
    position: absolute;

}

.car-background {
    background-image: url(https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg);
    height: 90vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
    position: relative;
    background-position: 50% 50%;
}

.black-opacity {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: black;
    opacity: 0.7;
}
</style>