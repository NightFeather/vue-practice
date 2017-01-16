<template>
  <div :class="computedClass">
    <div class="upvote" v-on:click="upvote(card)">&#708;</div>
    <div class="count">{{card.count}}</div>
    <div class="downvote" v-on:click="downvote(card)">&#709;</div>
  </div>
</template>

<script>
  export default {
    name: 'card-vote',
    props: ['card'],
    computed: {
      computedClass: function () {
        var classList = []
        classList.push('vote')
        if (this.card.state && this.card.state !== '') {
          classList.push(this.card.state + 'd')
        }
        return classList.join(' ')
      }
    },
    methods: {
      clearvote: function (card) {
        switch (card.state) {
          case 'upvote':
            card.count -= 1
            break
          case 'downvote':
            card.count += 1
            break
        }
        card.state = ''
      },
      upvote: function (card) {
        var prevState = card.state
        this.clearvote(card)
        if (prevState !== 'upvote') {
          card.state = 'upvote'
          card.count += 1
        }
      },
      downvote: function (card) {
        var prevState = card.state
        this.clearvote(card)
        if (prevState !== 'downvote') {
          card.state = 'downvote'
          card.count -= 1
        }
      }
    }
  }
</script>

<style lang="scss">
  .vote {
    * {
      display: block;
      height: 1.5em;
      width: 2em;
      text-align: center;
    }

    .upvote, .downvote {
      font-weight: 800;
      cursor: pointer;

      &:hover { color: red; }
    }

    .count { cursor: default }

    &.upvoted .upvote,
    &.downvoted .downvote {
      color: red;
    }
  }
</style>
