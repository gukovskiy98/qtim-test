import { defineStore } from 'pinia';

export const menuList = defineStore('menu', {
    state: () => ({
        menu: [
            {
                link: '/works',
                label: 'Works',
            },
            {
                link: '/about',
                label: 'About',
            },
        ],
    }),
});
