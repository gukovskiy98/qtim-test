<template>
    <header :class="$style.header">
        <div :class="['container', $style.wrapper]">
            <NuxtIcon name="logo" :class="$style.logo" />

            <ul :class="$style.menuList">
                <li
                    v-for="item in menuList"
                    :key="item.link"
                    :class="$style.menuItem"
                >
                    <NuxtLink :to="item.link">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>

            <VButton
                icon-only
                color="white"
                :class="$style.changeLang"
            >
                <NuxtIcon
                    name="uk"
                    filled
                    :class="$style.langIcon"
                />
            </VButton>

            <VButton :class="$style.btn" @click="handleWorkBtn">Let's work</VButton>
        </div>
    </header>
</template>

<script setup lang="ts">
// components
import VButton from '../ui/VButton.vue';

type menuItem = {
    link: string,
    label: string,
};

defineOptions({
    name: 'TheHeader',
});

const menuList: menuItem[] = [
    {
        link: '/works',
        label: 'Works',
    },
    {
        link: '/about',
        label: 'About',
    },
];

const handleWorkBtn = (event: MouseEvent) => {
    console.log(event);
};
</script>

<style module lang="scss">
    .header {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 12rem;
    }

    .wrapper {
        position: relative;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
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

    .menuList {
        display: flex;
        align-items: center;
    }

    .menuItem {
        display: flex;
        align-items: center;
        font-size: 2rem;
        line-height: 1;
        transition: opacity .3s ease;

        @include hover {
            opacity: .7;
        }

        &:active {
            opacity: .5;
        }

        + .menuItem {
            margin-left: 5.8rem;
        }
    }

    .changeLang {
        margin-left: 9rem;
    }

    .langIcon svg {
        margin-bottom: 0;
    }

    .btn {
        margin-left: 1.6rem;
    }
</style>
