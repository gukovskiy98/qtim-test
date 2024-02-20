<template>
    <div :class="$style.pageWrapper">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/layout/TheHeader.vue';
import TheFooter from '~/components/layout/TheFooter.vue';
</script>

<style module lang="scss">
    .pageWrapper {
        min-height: 100dvh;
    }
</style>
