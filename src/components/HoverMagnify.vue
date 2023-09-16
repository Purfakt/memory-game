<script setup>
    defineProps({
        active: { type: Boolean, default: true },
    })
</script>

<template>
    <div
        :class="{
            'HoverMagnify': active
        }"
    >
        <slot />
    </div>
</template>

<style lang="scss">
.HoverMagnify {
	transition: transform 0.1s;

	&:hover {
        transform: scale(1.05);
    }
}
</style>