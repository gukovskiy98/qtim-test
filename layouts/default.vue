<template>
    <div class="page-wrapper">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue';
import TheFooter from '~/components/layout/TheFooter.vue';
</script>

<style lang="scss">
    .page-wrapper {
        min-height: 100dvh;
    }
</style>
