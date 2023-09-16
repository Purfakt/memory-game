<script setup>
    defineProps({
        cols: { type: Number, default: 6 },
    })
</script>

<template>
    <div
        class="Board"
        :style="{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }"
    >
        <slot />
    </div>
</template>

<style lang="scss">
.Board {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  background-color: #2a9d8f;  
  border-radius: 15px;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}
</style>
