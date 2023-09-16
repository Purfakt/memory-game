<script setup>

    defineProps({
        glyph: { type: String, default: null },
        color: { type: String, default: 'black' },
        revealed: { type: Boolean, default: false },
    })

</script>

<template>
    <span
        :class="{
            'Glyph': true,
            'Glyph--revealed': revealed,
            'Glyph--hidden': !revealed,
        }"
        :style="{'color': color}"
    >{{ glyph }}</span>
</template>

<style lang="scss">
.Glyph {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  transition: opacity 0.5s cubic-bezier(1,0,0,1);
  user-select: none;

  &--revealed {
    opacity: 100%;
  }

  &--hidden {
    opacity: 0%;
  }
}
</style>