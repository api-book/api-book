<template>
    <button class="u-btn u-btn-default">
        <slot name="icon"></slot>
        <span>{{ text }}</span>
    </button>
</template>

<script lang="ts">
export default {
    name: "Button",
    props: {
        text: {
            default: "Button"
        }
    }
};
</script>

