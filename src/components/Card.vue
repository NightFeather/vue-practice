<template>
  <li class="card">
    <card-vote v-bind:card="card"></card-vote>
    <div class="thumbnail"><img v-bind:src="imageSrc(card)" alt=""></div>
    <card-detail v-bind:card="card"></card-detail>
  </li>
</template>

<script>
  import Vote from './Card/Vote'
  import Detail from './Card/Detail'

  export default {
    name: 'card',
    props: ['currentBoard', 'card', 'index'],
    components: {
      'card-vote': Vote,
      'card-detail': Detail
    },
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
      computedClass: function () {
        var classList = []
        classList.push('card')
        if (this.card.state && this.card.state !== '') {
          classList.push(this.card.state + 'd')
        }
        return classList.join(' ')
      }
    }
  }
</script>

<style lang="scss">
.card {
  display: block;
  width: 100%;
  height: 5em;
  box-shadow: 2px 2px 5px black;
  padding: 2px;
  margin-bottom: 1em;

  font-size: 20px;
  line-height: 25px;

  &:last-child { margin-bottom: inherit; }

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;       
  }
  
  &:hover { box-shadow: 3px 3px 10px black; }
  
  & > * {

    display: inline-block;
    vertical-align: middle;

    &:first-child {
      display: inline-block;
      margin-left: 1em;
    }
  }

  .thumbnail, .detail { min-width: 100px; }

  .thumbnail{
    img {
      display: block;
      height: 100px;
      margin: auto;
      vertical-align: middle;
    }
  }

  a { text-decoration: none; }
}
</style>