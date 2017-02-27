<template>
  <div class="thumbnail" v-bind:class="thumbnailType">
    <img v-show="thumbnailType == 'image'" v-bind:src="imageSrc(card)" alt="">
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
      thumbnailType: function () {
        var url = this.card.url
        if (url === undefined || url === '') {
//        '/static/images/discussion.png'
          return 'discussion'
        } else if (['jpg', 'jpeg', 'png', 'gif'].some(function (v) { return url.endsWith(v) })) {
          return 'image'
        } else {
//        '/static/images/document.png'
          return 'document'
        }
      }
    }
  }
</script>

<style lang="scss">
  
  .thumbnail{
    font-size: 65px;
    min-width: 75px;
    text-align: center;

    &.document::after {
      font-family: FontAwesome;
      content: '\f075';
      min-width: 75px;
      color: black;
    }
    &.discussion::after {
      font-family: FontAwesome;
      content: '\f15b';
      min-width: 75px;
      color: black;
    }

    img {
      height: 75px;
      display: block;
      margin: auto;
      vertical-align: middle;
    }
  }

</style>