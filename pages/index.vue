<template>
    <div :class="$style.MainPage">Hello world</div>
</template>

<script setup lang="ts">
console.log(this);
</script>

<style module lang="scss">
    .MainPage {
        height: calc(100vh - $header-h);
        background-color: $white;
    }
</style>
