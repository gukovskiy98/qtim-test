<template>
    <main :class="$style.errorPage">
        <h1 :class="$style.title">Error</h1>
        <div :class="$style.description">
            <span>Redirect to&nbsp;</span>
            <nuxt-link to="/">main page</nuxt-link>
        </div>
    </main>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
    .errorPage {
        display: flex;
        height: 100dvh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin-bottom: 2rem;
        font-size: 4rem;
    }

    .description {
        //
    }
</style>
