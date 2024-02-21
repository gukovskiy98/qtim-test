import { defineStore } from 'pinia';

export const contacts = defineStore('contacts', {
    state: () => ({
        contacts: [
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
