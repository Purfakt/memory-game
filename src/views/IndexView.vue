<script setup>
    import LayoutCentered from '@/components/layout/LayoutCentered.vue'
    import Board from '@/components/BoardComponent.vue'
    import Card from '@/components/CardComponent.vue'
    import { reactive } from 'vue'

    const cardsStates = reactive([
        {
            glyph: 'X',
            color: 'red',
            revealed: false,
        },
        {
            glyph: 'Y',
            color: 'blue',
            revealed: false,
        },
        {
            glyph: '6',
            color: 'green',
            revealed: false,
        },
        {
            glyph: 'Y',
            color: 'blue',
            revealed: false,
        },
        {
            glyph: '|',
            revealed: false,
        },
        {
            glyph: 'X',
            color: 'red',
            revealed: false,
        },
        {
            glyph: '|',
            revealed: false,
        },
        {
            glyph: '6',
            color: 'green',
            revealed: false,
        },
    ])
</script>

<template>
    <LayoutCentered style="background-color: #264653">
        <Board :cols="4">
            <Card
                v-for="(cardState, i) in cardsStates"
                :key="i"
                v-model="cardState.revealed"
                :color="cardState.color"
                :glyph="cardState.glyph"
            >
                {{ cardState.glyph }}
            </Card>
        </Board>
    </LayoutCentered>
</template>
