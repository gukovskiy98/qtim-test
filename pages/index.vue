<template>
    <div :class="$style.MainPage">Hello world</div>
</template>

<script setup lang="ts">
console.log(this);
</script>

<style module lang="scss">
    .MainPage {
        margin-left: .2rem;
        color: $black;
    }
</style>
