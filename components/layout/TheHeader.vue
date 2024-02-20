<template>
    <header :class="$style.header">
        <div :class="$style.wrapper">
            <NuxtIcon name="logo" :class="$style.logo" />
        </div>
    </header>
</template>

<script lang="ts">
export default defineComponent({
    name: 'TheHeader',
        
    
    setup() {
        //

        return {};
    },
});
</script>

<style module lang="scss">
    .header {
        position: relative;
        width: 100%;
        height: 12rem;
    }

    .wrapper {
        position: relative;
        display: flex;
        width: 144rem;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        margin: 0 auto;
    }

    .logo {
        margin-right: auto;

        svg {
            position: relative;
            width: 8.4rem;
            height: 2.5rem;
            margin-bottom: 0;
        }
    }
</style>
