<script setup>
    import { ref, watch } from 'vue'
    import HoverMagnify from '@/components/HoverMagnify.vue'
    import GlyphComponent from '@/components/GlyphComponent.vue'

    const props = defineProps({
        glyph: { type: String, default: null },
        color: { type: String, default: 'black' },
        modelValue: { type: Boolean, default: false },
    })

    defineEmits(['update:modelValue'])

    const flipping = ref(false)

    function flip() 
    {
        flipping.value = true
        setTimeout(() => (flipping.value = false), 500)
    }

    watch(() => props.modelValue, flip)
</script>

<template>
    <HoverMagnify :active="!modelValue">
        <div
            :class="{
                'Card': true,
                'Card--revealed': modelValue,
                'Card--hidden': !modelValue,
                'Card--flipping': flipping,
            }"
            @click="$emit('update:modelValue', !modelValue)"
        >
            <GlyphComponent
                :glyph="glyph"
                :color="color"
                :revealed="modelValue"
            />
        </div>
    </HoverMagnify>
</template>

<style lang="scss">
.Card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

  &--flipping {
    animation-name: flip;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
  }

  &--revealed {
    background-color: #fbeadc;
  }

  &--hidden {
    background-color: #f4a261;
  }
}

@keyframes flip {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(0, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
