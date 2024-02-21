import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
    state: () => ({
        isHeaderVisible: true,
    }),

    actions: {
        setHeaderVisibility(state: boolean) {
            this.isHeaderVisible = state;
        },
    },
});
