<template>
    <header :class="[$style.header, {[$style._hidden]: !headerStore.isHeaderVisible}]">
        <div :class="['container', $style.wrapper]">
            <NuxtLink :class="$style.logoLink" to="/">
                <NuxtIcon name="logo" :class="$style.logo" />
            </NuxtLink>

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
// utils
import { throttle } from '~/assets/ts/utils/common-utils';
// pinia
import { useHeaderStore } from '~/stores/header';
// types
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

// обработка скрытия хедера при скролле

let lastScroll = 0;
// максимальный скролл при котором хедер не будет скрываться в любом случае (кейс - когда страница прокручена чуть-чуть)
const MAX_UNHANDLED_SCROLL_TOP = 200;
const MAX_UNHANDLED_SCROLL_BOTTOM = 50;

const headerStore = useHeaderStore();

const scrollHandler = () => {
    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll < MAX_UNHANDLED_SCROLL_TOP || document.documentElement.scrollHeight - document.documentElement.offsetHeight - currentScroll < MAX_UNHANDLED_SCROLL_BOTTOM) {
        headerStore.setHeaderVisibility(true);
    } else {
        headerStore.setHeaderVisibility(currentScroll <= lastScroll);
    }

    lastScroll = currentScroll;
};

const [throttledScrollHandler] = throttle(scrollHandler, 100);

onMounted(() => {
    scrollHandler();
    document.addEventListener('scroll', throttledScrollHandler);
});

onBeforeUnmount(() => {
    document.removeEventListener('scroll', throttledScrollHandler);
});

</script>

<style module lang="scss">
    .header {
        position: fixed;
        z-index: 1;
        width: 100%;
        height: $header-h;
        padding: 0 4rem;
        background-color: $white;
        box-shadow: 0 4px 20px 0 rgba(0 0 0 / 25%);
        transition: transform $default-slow-transition;

        &._hidden {
            transform: translateY(calc(-100% - 20px));
        }
    }

    .wrapper {
        position: relative;
        display: flex;
        height: 100%;
        align-items: center;
    }

    .logoLink {
        margin-right: auto;
    }

    .logo {
        //

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
