<template>
  <div class="detail">
    <div class="title">
      {{card.title}}
      <a class="refer" target="_blank" v-bind:href="referLink">
        ({{ card.url ? card.url : "self." + $parent.currentBoard }})
      </a>
    </div>
    <div class="author">
      posted by <a :href="authorLink">{{ card.author }}</a>
    </div>
    <div class="actions">
      <ul>
        <li><a href="">XXX</a></li>
        <li><a href="">YYY</a></li>
        <li><a href="">ZZZ</a></li>
        <li><a href="">AAA</a></li>
        <li><a href="">BBB</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card-detail',
    props: ['card'],
    computed: {
      authorLink: function () {
        return '/u/' + this.card.author
      },
      referLink: function () {
        if (this.card.type === 'url') {
          return this.card.url
        } else {
          return '/r/' + this.$parent.currentBoard
        }
      }
    }
  }
</script>

<style lang="scss">
  .detail {

    min-width: 100px;
    vertical-align: top;

    & > * {
      display: block;
      min-width: 100px;
      font-size: 12px;
    }
    .title {
      height: 1.2em;
      font-size: 20px;

      .refer {
        font-size: 12px;
        color: #aaa;
      }
    }
    .author {
      color: #777;
      height: 2.5em;
    }

    .actions {
      height: 1em;
  
      li {
        display: inline-block;
        list-style: none;
        margin-right: 3px;
      }

    }
  }

</style>