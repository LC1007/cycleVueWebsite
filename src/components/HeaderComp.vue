<template>
    <div class="intro d-flex flex-column justify-content-center align-items-center">
        <h1 class="display-1 text-white">Bike Shop</h1>
        <p class="text-white">Welcome to the best shop in town</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .intro{
        background:  linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/16445140/pexels-photo-16445140/free-photo-of-hand-holding-bicycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center no-repeat;
        object-fit: cover;
        min-height: 100dvh;
        background-size: cover;
    }

    p{
        font-size: clamp(1rem, -1.5rem + 8vw, 2rem);
    }
</style>