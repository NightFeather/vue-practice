<template>
  <ul>
    <card v-for="(card,index) in cards" v-bind:card="card" v-bind:currentBoard="currentBoard"/>
  </ul>
</template>

<script>
  import Card from './Card'

  export default {
    name: 'card-list',
    props: ['cards', 'currentBoard'],
    components: {
      Card
    },
    methods: {
      deleteCard: function (index) {
        this.cards.splice(index, 1)
      }
    }
  }
</script>
