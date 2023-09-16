<template>
    <div class="LayoutCentered">
        <slot />
    </div>
</template>

<style lang="scss">
.LayoutCentered {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>