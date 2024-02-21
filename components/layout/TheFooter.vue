<template>
    <footer :class="$style.footer">
        <div :class="['container', $style.wrapper]">
            <span :class="$style.subtitle">Is there a project?</span>
            <div :class="$style.linksWrapper">
                <div :class="$style.left">
                    <NuxtLink to="/works" :class="$style.workLink">
                        Let's work<br>together
                    </NuxtLink>
                </div>
                <div :class="$style.right">
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
    .footer {
        position: relative;
        height: calc(100vh - $header-h);
        background-color: $lavender;
    }

    .wrapper {
        display: flex;
        height: 100%;
        flex-direction: column;
        padding: 14rem 11.2rem 0;
    }

    .subtitle {
        margin-bottom: 5.6rem;
        font-size: 1.6rem;
        line-height: 1;
    }

    .linksWrapper {
        display: flex;
        justify-content: space-between;
    }

    .left {
        //
    }

    .workLink {
        font-size: 11.2rem;
        line-height: 1;
        text-decoration: underline;
    }

    .right {
        width: 15.2rem;
    }
</style>
