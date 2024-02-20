<template>
    <component
        :is="tag"
        :class="['v-button', $style.VButton, classList]"
        :disabled="disabled"
        v-bind="$attrs"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <div
            v-if="$slots.default"
            :class="['v-button__label', $style.label]"
        >
            <slot></slot>
        </div>
    </component>
</template>

<script lang="ts">
import type { PropType } from 'vue';

enum Sizes {
    XS = 'xs',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    CUSTOM = 'custom'
}

export default {
    name: 'VButton',

    inheritAttrs: false,

    props: {
        /**
         * Определяет тег компонента
         */
        tag: {
            type: String,
            default: 'button',
        },

        /**
         * Определяет классы, которые будут модифицировать размер
         */
        size: {
            type: String as PropType<Sizes>,
            default: 'medium',
        },

        /**
         * Определяет классы, которые будут модифицировать цвет
         */
        color: {
            type: String,
            default: 'primary',
            validator: (value: string) => [
                'primary',
                'secondary',
                'tertiary',
                'white',
            ].includes(value),
        },

        /**
         * Это свойство отключает взаимодействие
         */
        disabled: Boolean,

        /**
         * если внутри только иконка
         */
        iconOnly: Boolean,

        /**
         * Вид кнопки с текстом и иконками по бокам
         */
        textIcon: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        classList() {
            return [{
                [this.$style[`_${this.color}`]]: this.color,
                [this.$style[`_${this.size}`]]: this.size,
                [this.$style._disabled]: this.disabled,
                [this.$style._iconOnly]: this.iconOnly,
                [this.$style._textIcon]: this.textIcon,
            }];
        },
    },

    methods: {
        /**
         * Эмитит событие клика в родительский компонент
         * @param {Event} event mouse event
         * @public
         */
        onClick($event) {
            /**
             * Cобытие клика в родительский компонент
             * @event click
             * @param {Event} event mouse event
             */
            this.$emit('click', $event);
        },

        /**
         * Эмитит cобытие при наведении на элемент
         * @param {Event} event mouse event
         * @public
         */
        onMouseEnter($event) {
            /**
             * Cобытие при наведении на элемент
             * @event mouseenter
             * @param {Event} event mouse event
             */
            this.$emit('mouseenter', $event);
        },

        /**
         * Эмитит событие, когда наведение на элемент прекращено
         * @param {Event} event mouse event
         * @public
         */
        onMouseLeave($event) {
            /**
             * Cобытие, когда наведение на элемент прекращено
             * @event mouseleave
             * @param {Event} event mouse event
             */
            this.$emit('mouseleave', $event);
        },
    },
};
</script>

<style lang="scss" module>
    .VButton {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        cursor: pointer;
        outline: none;
        transition: color $default-transition, opacity $default-transition, background-color $default-transition, border-color $default-transition;
        user-select: none;

        /* Modificators */
        &._disabled {
            pointer-events: none;
        }

        /* Sizes */
        &._xs {
            height: 3.2rem;

            .label {
                @include text(l2-b);

                padding: 0 1.6rem;

                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }

            &._iconOnly {
                width: 3.2rem;

                .label {
                    padding: 0;
                }
            }
        }

        &._small {
            height: 4rem;

            .label {
                @include text(l2-b);

                padding: 0 2.4rem;

                svg {
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }

            &._iconOnly {
                width: 4rem;

                .label {
                    padding: 0;
                }
            }

            &._textIcon {
                .label {
                    padding: 0 1.2rem;
                }

                .iconWrapper {
                    width: 4rem;
                    height: 4rem;
                }

                .icon {
                    width: 1.6rem;
                    height: 1.6rem;
                }

                @include hover {
                    .iconWrapper {
                        background-color: $primary-100;
                    }
                }
            }
        }

        &._medium {
            height: 4.8rem;

            .label {
                @include text(l2-b);

                padding: 0 3.2rem;

                svg {
                    width: 2rem;
                    height: 2rem;
                }
            }

            &._iconOnly {
                width: 4.8rem;

                .label {
                    padding: 0;
                }
            }
        }

        &._large {
            height: 5.6rem;

            .label {
                @include text(l2-b);

                padding: 0 4rem;

                svg {
                    width: 2rem;
                    height: 2rem;
                }
            }

            &._iconOnly {
                .label {
                    padding: 0 1.8rem;
                }
            }
        }

        /* Colors */
        &._primary {
            border-color: $primary-500-main;
            background-color: $primary-500-main;

            .label {
                color: $base-0;
            }

            @include hover {
                border-color: $primary-400;
                background-color: $primary-400;
            }

            &._disabled {
                border-color: $primary-400;
                background-color: $primary-400;

                .label {
                    color: $primary-100;
                }
            }
        }

        &._secondary {
            border-color: $base-100;
            background-color: $base-100;

            .label {
                color: $primary-500-main;
            }

            @include hover {
                border-color: $primary-100;
                background-color: $primary-100;
            }

            &._active {
                //
            }

            &._disabled {
                border-color: $base-100;
                background-color: $base-100;

                .label {
                    color: $primary-300;
                }
            }

            &._textIcon {
                .label {
                    color: $base-500;
                }

                .iconWrapper {
                    background-color: $base-100;
                }

                .icon {
                    color: $primary-500-main;
                }

                @include hover {
                    .iconWrapper {
                        background-color: $primary-100;
                    }
                }
            }
        }

        &._tertiary {
            border-color: $primary-500-main;
            background-color: $base-0;

            .label {
                color: $primary-500-main;
            }

            @include hover {
                background-color: $primary-50;
            }

            &._active {
                //
            }

            &._disabled {
                border-color: $base-200-line;

                .label {
                    color: $base-300;
                }
            }
        }

        &._white {
            border: none;
            background-color: $base-0;

            .label {
                color: $primary-500-main;
            }

            @include hover {
                background-color: $primary-500-main;

                .label {
                    color: $base-0;
                }
            }

            &._disabled {
                .label {
                    color: $base-300;
                }
            }
        }

        &._textIcon {
            border: none;
            background-color: transparent;

            .iconWrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color $default-transition;
            }

            @include hover {
                background-color: transparent;
            }
        }
    }

    .label {
        display: inline-flex;
        align-items: center;
        text-transform: uppercase;
        transition: color $default-transition;
        white-space: nowrap;
    }

    .iconWrapper {
        display: none;
    }
</style>
