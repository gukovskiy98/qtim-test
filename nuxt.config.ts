import stylelintFormatterPretty from 'stylelint-formatter-pretty';

export default defineNuxtConfig({
    devtools: {
        enabled: true,
    },

    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@pinia/nuxt',
        'nuxt-icons',
    ],

    eslint: {
        lintOnStart: false,
    },

    stylelint: {
        lintOnStart: false,
        formatter: stylelintFormatterPretty,
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
