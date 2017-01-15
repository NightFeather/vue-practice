<template>
  <div class="detail">
    <div class="title">
      {{card.title ? card.title : "No Title" }}
      <a class="refer" target="_blank" v-if="card.url" v-bind:href="card.url">({{ card.url }})</a>
      <span class="refer" v-else>(self.{{ $parent.currentBoard }})</span>
    </div>
    <div class="author">
      posted by <a :href="authorLink">{{ card.author }}</a>
    </div>
    <div class="actions">
      <ul>
        <li><a href="">XXX</a></li>
        <li><a href="">XXX</a></li>
        <li><a href="">XXX</a></li>
        <li><a href="">XXX</a></li>
        <li><a href="">XXX</a></li>
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
      }
    }
  }
</script>

<style lang="scss">
  .detail {
    & > * {
      display: block;
      min-width: 100px;
      font-size: 15px;
    }
    .title {
      height: 1.5em;
      font-size: 18px;

      .refer {
        font-size: 15px;
        color: #aaa;
      }
    }
    .author {
      color: #777;
      height: 1.5em;
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