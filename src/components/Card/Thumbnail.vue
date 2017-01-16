<template>
  <div class="thumbnail">
    <img v-bind:src="imageSrc(card)" alt="">
  </div>
</template>

<script>
  export default {
    name: 'card-thumb',
    props: ['card'],
    methods: {
      imageSrc: function (card) {
        var url = card.url
        if (url === undefined || url === '') {
          return '/static/images/discussion.png'
        } else if (['jpg', 'jpeg', 'png', 'gif'].some(function (v) { return url.endsWith(v) })) {
          return url
        } else {
          return '/static/images/document.png'
        }
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss">
  
  .thumbnail{

    min-width: 75px;

    img {
      height: 75px;
      display: block;
      margin: auto;
      vertical-align: middle;
    }
  }

</style>