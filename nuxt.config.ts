import stylelintFormatter from 'stylelint-formatter-pretty';

export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        'nuxt-icons',
    ],

    eslint: {
        lintOnStart: false,
    },

    stylelint: {
        lintOnStart: false,
        formatter: stylelintFormatter,
    },

    css: ['~/assets/scss/bundle.scss'],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "~/assets/scss/shared/_mixins.scss";' +
                        '@import "~/assets/scss/shared/_variables.scss";',
                },
            },
        },
    },
});
