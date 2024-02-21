import { defineStore } from 'pinia';

export const useContactsState = defineStore('contacts', {
    state: () => ({
        phone: '+79202780068',
        email: 'qtim@agency.com',

        addresses: [
            {
                addressFirstLine: 'Russia',
                addressSecondLine: '139 Ruben Station Lake Drew, NM 52678',
                link: 'https://maps.yandex.ru',
            },
            {
                addressFirstLine: 'Russia',
                addressSecondLine: '139 Ruben Station Lake Drew, NM 52678',
                link: 'https://maps.yandex.ru',
            },
        ],

        socials: [
            {
                label: 'Facebook',
                link: 'https://facebook.com',
            },
            {
                label: 'Instagram',
                link: 'https://instagram.com',
            },
            {
                label: 'Telegram',
                link: 'https://telegram.org',
            },
            {
                label: 'Behance',
                link: 'https://behance.net',
            },
            {
                label: 'LinkedIn',
                link: 'https://linkedin.com',
            },
            {
                label: 'Privacy Policy',
                link: '/policy',
            },
        ],
    }),
});
