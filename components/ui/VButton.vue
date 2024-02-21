<template>
    <component
        :is="tag"
        :class="['v-button', $style.VButton, classList]"
        :disabled="disabled"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <div
            v-if="$slots.default"
            :class="$style.label"
        >
            <slot></slot>
        </div>
    </component>
</template>

<script setup lang="ts">
type Sizes = 'medium'

type Colors = 'black' | 'white';

defineOptions({
    name: 'VButton',
});

const props = withDefaults(defineProps<{
    tag?: string,
    size?: Sizes,
    color?: Colors,
    disabled?: boolean,
    iconOnly?: boolean,
}>(), {
    tag: 'button',
    size: 'medium',
    color: 'black',
    disabled: false,
    iconOnly: false,
});

const emit = defineEmits<{
    click: [event: MouseEvent],
    mouseenter: [event: MouseEvent],
    mouseleave: [event: MouseEvent],
}>();

const $style = useCssModule();

const classList = computed(() => ({
    [$style[`_${props.color}`]]: props.color,
    [$style[`_${props.size}`]]: props.size,
    [$style._disabled]: props.disabled,
    [$style._iconOnly]: props.iconOnly,
}));

const onClick = ($event: MouseEvent) => {
    emit('click', $event);
};

const onMouseEnter = ($event: MouseEvent) => {
    emit('mouseenter', $event);
};

const onMouseLeave = ($event: MouseEvent) => {
    emit('mouseleave', $event);
};
</script>

<style lang="scss" module>
    .VButton {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        border-radius: 9999px;
        cursor: pointer;
        outline: none;
        transition: color $default-transition, opacity $default-transition, background-color $default-transition, border-color $default-transition;
        user-select: none;

        &._disabled {
            pointer-events: none;
        }

        /* Sizes */
        &._medium {
            height: 5.2rem;

            .label {
                padding: 0 3.2rem;

                svg {
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }

            &._iconOnly {
                width: 5.2rem;

                .label {
                    padding: 0;
                }
            }
        }

        /* Colors */
        &._black {
            border-color: $black;
            background-color: $black;

            .label {
                color: $white;
            }

            @include hover {
                border-color: $dark-grey;
                background-color: $dark-grey;
            }

            &:active {
                border-color: $grey;
                background-color: $grey;
            }

            &._disabled {
                border-color: $grey;
                background-color: $grey;

                .label {
                    color: $dark-grey;
                }
            }
        }

        &._white {
            border-color: rgba($black, .1);
            background-color: $white;

            .label {
                color: $black;
            }

            @include hover {
                background-color: $light-grey;
            }

            &._active {
                //
            }

            &._disabled {
                border-color: $grey;
                background-color: $grey;

                .label {
                    color: $black;
                }
            }
        }
    }

    .label {
        display: inline-flex;
        align-items: center;
        transition: color $default-transition;
        white-space: nowrap;
    }
</style>
